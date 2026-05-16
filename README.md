# beat&beam

Многостраничный сайт для технического продакшна полного цикла.

## Локальный запуск

Через Docker:

```powershell
docker compose up -d --build
```

Сайт откроется на `http://localhost:3000`.

Без Docker:

```powershell
npm.cmd install
npm.cmd run dev
```

PowerShell на этой машине блокирует `npm.ps1`, поэтому команды лучше запускать через `npm.cmd`.

## Страницы

- `/` — главная
- `/services` — услуги и оборудование
- `/team` — команда
- `/projects` — проекты
- `/contacts` — форма заявки и Telegram CTA
