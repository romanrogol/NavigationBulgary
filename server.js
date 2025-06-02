// import express from 'express';
// import cors from 'cors';
// import dotenv from 'dotenv';
// import fetch from 'node-fetch';

// dotenv.config();

// const app = express();
// const PORT = process.env.PORT || 3001;

// const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
// const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

// app.use(cors());
// app.use(express.json());

// app.post('/send-message', async (req, res) => {
//   const { name, phone, message } = req.body;

//   const text = `📩 Новая заявка с лендинга:\n👤 Имя: ${name}\n📱 Телефон: ${phone}\n💬 Комментарий: ${message || 'Без комментария'}`;

//   try {
//     console.log('TOKEN:', TELEGRAM_BOT_TOKEN);
// console.log('CHAT_ID:', TELEGRAM_CHAT_ID);

//     const telegramRes = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ chat_id: TELEGRAM_CHAT_ID, text }),
//     });

//     if (!telegramRes.ok) throw new Error('Telegram error');

//     res.status(200).json({ success: true, message: 'Message sent' });
//   } catch (error) {
//     res.status(500).json({ success: false, error: 'Failed to send message' });
//   }
// });

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
// import express from 'express';
// import cors from 'cors';
// import dotenv from 'dotenv';
// import fetch from 'node-fetch';

// dotenv.config();

// const app = express();
// const PORT = process.env.PORT || 3001;

// app.use(cors());
// app.use(express.json());

// const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
// const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

// app.post('/send-message', async (req, res) => {
//   const { name, phone, message } = req.body;

//   const text = `📩 Новая заявка:\nИмя: ${name}\nТелефон: ${phone}\nКомментарий: ${message || 'Без комментария'}`;

//   try {
//     const telegramRes = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ chat_id: TELEGRAM_CHAT_ID, text }),
//     });

//     const telegramData = await telegramRes.json();
//     console.log('Telegram response:', telegramData);

//     if (!telegramRes.ok) throw new Error('Ошибка Telegram API');

//     res.json({ success: true });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ success: false, error: error.message });
//   }
// });

// app.listen(PORT, () => {
//   console.log(`Сервер запущен на порту ${PORT}`);
// });
// server.js
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import fetch from 'node-fetch';

dotenv.config(); // Загружаем переменные из .env

const app = express();
const PORT = process.env.PORT || 3001;

const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;
console.log('TOKEN:', TELEGRAM_BOT_TOKEN);
console.log('CHAT_ID:', TELEGRAM_CHAT_ID);

app.use(cors());
app.use(express.json());

// Эндпоинт для получения заявки и отправки в Telegram
app.post('/send-message', async (req, res) => {
  const { name, phone, message } = req.body;

  const text = `📩 Новая заявка с лендинга:\n👤 Имя: ${name}\n📱 Телефон: ${phone}\n💬 Комментарий: ${message || 'Без комментария'}`;

  try {
    const response = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text,
      }),
    });

    const result = await response.json();
    console.log('📨 Telegram response:', result);

    if (!result.ok) {
      throw new Error(result.description || 'Ошибка Telegram API');
    }

    res.status(200).json({ success: true, message: 'Message sent' });
  } catch (error) {
    console.error('❌ Ошибка:', error.message);
    res.status(500).json({ success: false, error: 'Ошибка Telegram API' });
  }
});

// Запускаем сервер
app.listen(PORT, () => {
  console.log(`🚀 Сервер запущен на http://localhost:${PORT}`);
});
