const Message = require('../models/Message');
const User = require('../models/User');

exports.sendMessage = async (req, res) => {
  const { userId, content } = req.body;

  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'Usuário não encontrado' });
    }

    const message = new Message({ user: userId, content });
    await message.save();

    res.status(201).json(message);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao enviar mensagem' });
  }
};

exports.getMessages = async (req, res) => {
  try {
    const messages = await Message.find().populate('user', 'username');
    res.status(200).json(messages);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar mensagens' });
  }
};
