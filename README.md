
# FLOW STATE — React + Firebase (Демо)

## 📦 Как развернуть проект у себя

### 1. Установи зависимости
```bash
npm install
```

### 2. Запусти локально
```bash
npm start
```

### 3. Сборка и деплой через Firebase
```bash
npm run build
firebase login
firebase init
firebase deploy
```

## 📁 Структура
- `src/` — исходный код React-компонентов
- `public/` — публичные ресурсы
- `.env.example` — шаблон для переменных окружения

## 🔐 Настрой переменные окружения:
Создай `.env` файл в корне:
```
REACT_APP_FIREBASE_API_KEY=...
REACT_APP_FIREBASE_AUTH_DOMAIN=...
REACT_APP_FIREBASE_PROJECT_ID=...
REACT_APP_FIREBASE_STORAGE_BUCKET=...
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=...
REACT_APP_FIREBASE_APP_ID=...
```
Эти значения можно получить в [Firebase Console](https://console.firebase.google.com)

---

Создано для музыкального лейбла FLOW STATE
