const Message = require('../models/Message');

exports.sendMessage = async (req, res) => {
  const { userId, content } = req.body;

  try {
    const message = new Message ({ user: userId, content });
    await message.save();
    res.status(201).json({ message: 'Mensagem enviada com sucesso' });
  } catch (error) {
    res.status(500).json({ message: 'Erro no servidor' });
  }
};

exports.getMessages = async (req, res) => {
  try {
    const messages = await Message.find().populate('user', 'username').sort({ createdAt: -1 });
  } catch (error) {
    res.status(500).json({ message: 'Erro no servidor' });
  }
};