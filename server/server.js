
// import express from 'express';
// import cors from 'cors';
// import dotenv from 'dotenv';
// import fetch from 'node-fetch';

// dotenv.config(); 

// const app = express();
// const PORT = process.env.PORT || 3001;

// const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
// const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;
// // console.log('TOKEN:', TELEGRAM_BOT_TOKEN);
// // console.log('CHAT_ID:', TELEGRAM_CHAT_ID);

// app.use(cors());
// app.use(express.json());


// app.post('/send-message', async (req, res) => {
//   const { name, phone, message } = req.body;

//   const text = `📩 Новая заявка с лендинга:\n👤 Имя: ${name}\n📱 Телефон: ${phone}\n💬 Комментарий: ${message || 'Без комментария'}`;

//   try {
//     const response = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({
//         chat_id: TELEGRAM_CHAT_ID,
//         text,
//       }),
//     });

//     const result = await response.json();
//     console.log('📨 Telegram response:', result);

//     if (!result.ok) {
//       throw new Error(result.description || 'Ошибка Telegram API');
//     }

//     res.status(200).json({ success: true, message: 'Message sent' });
//   } catch (error) {
//     console.error('❌ Ошибка:', error.message);
//     res.status(500).json({ success: false, error: 'Ошибка Telegram API' });
//   }
// });


// app.listen(PORT, () => {
//   console.log(`Server started on port ${PORT}`);
// });


import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import fetch from 'node-fetch';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const app = express();
app.set('trust proxy', 1);
const PORT = process.env.PORT || 8080;
const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

const __dirname = path.dirname(fileURLToPath(import.meta.url));

app.use(helmet());
app.use(cors({ origin: 'https://navigationbulgary.com' }));
app.use(express.json());

const limiter = rateLimit({
  windowMs: 60 * 1000,
  max: 10,
  message: 'Слишком много запросов. Попробуйте позже.',
});
app.use('/send-message', limiter);


app.post('/send-message', async (req, res) => {
  const { name, phone, message } = req.body;

  if (
    !name || typeof name !== 'string' || name.length > 100 ||
    !phone || typeof phone !== 'string' || phone.length > 20
  ) {
    return res.status(400).json({ success: false, error: 'Некорректные данные формы' });
  }

  const text = `📩 Новая заявка:\n👤 Имя: ${name}\n📱 Телефон: ${phone}\n💬 Комментарий: ${message || 'Без комментария'}`;

  try {
    const response = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: TELEGRAM_CHAT_ID, text }),
    });

    const result = await response.json();
    if (!result.ok) throw new Error(result.description || 'Ошибка Telegram API');

    res.status(200).json({ success: true, message: 'Message sent' });
  } catch (error) {
    console.error('Ошибка при отправке:', error.message);
    res.status(500).json({ success: false, error: 'Ошибка Telegram API' });
  }
});

app.use((req, res, next) => {
  res.setHeader(
    'Content-Security-Policy',
    "default-src 'self'; img-src 'self' data: https://api.qrserver.com;"
  );
  next();
});

app.use(express.static(path.join(__dirname, '../client/dist')));
app.get(/(.*)/, (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'));
});


app.listen(PORT, () => {
  console.log(`✅ Сервер запущен на порту ${PORT}`);
});
