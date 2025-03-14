# Express Server with PUG & EJS

## Опис

Сервер на **Node.js + Express**, що використовує **PUG** і **EJS** для рендерингу сторінок.

### Структура:

/views # PUG та EJS шаблони
/public # CSS стилі
server.js # Головний серверний файл

#### Маршрути:

- `/` — Головна сторінка
- `/users` — Список користувачів (PUG)
- `/users/:userId` — Деталі користувача (PUG)
- `/articles` — Список статей (EJS)
- `/articles/:articleId` — Деталі статті (EJS)

## Запуск

не забудьте вставновити залежності:
Відкрийте Terminal
npm install express pug ejs
express – для створення сервера
pug – шаблонізатор для рендерингу сторінок /users
ejs – шаблонізатор для рендерингу сторінок /articles
а потім
npm install
npm start
