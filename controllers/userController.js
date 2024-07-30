const User = require('../models/User');
const bcrypt = require('bcryptjs');

exports.register = async (req, res) => {
  const { username, password } = req.body;
  
  try {
    let user = await User.findOne ({ username });
    if (user) {
      return res.status(400).json({ message: 'Usuário já existe' });
    }
    user = new User ({ username, password });

    const salt = await brcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);

    await user.save();
    res.status(201).json({ message: 'Usuário criado com sucesso' });
  } catch (error) {
    res.status(500).json({ message: 'Erro no servidor' });
  }
};

exports.login = async (req, res) => {
  const { username, password } = req.body;

  try {
    let user = await User.findOne({ username });
    if (!user) {
      return res.status(400).json({ message: 'Usuário não encontrado' });
    }

    res.status(200).json({ message: 'Login bem-sucedido' });
  } catch (error) {
      res.status(500).json({ message: 'Erro no servidor' });
  }
};