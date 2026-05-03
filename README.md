# Multimarket

Full-stack marketplace application built with Laravel + React.

## Tech Stack
- **Backend:** Laravel 11 (PHP 8.3)
- **Frontend:** React 18 + Vite
- **Database:** MySQL
- **Hosting:** PieHost.in
- **Domain:** Multimarket.in

## Local Setup

```bash
# Install dependencies
composer install
npm install

# Set up environment
cp .env.example .env
php artisan key:generate

# Create database and update .env with credentials
php artisan migrate

# Start development server
npm run dev
php artisan serve
```

## Deployment

Push to `main` branch - GitHub Actions will auto-deploy to PieHost.

## Project Structure
```
├── app/              # Laravel application code
├── resources/js/     # React frontend
├── routes/           # API and web routes
├── database/         # Migrations and seeders
└── .github/workflows/ # CI/CD deployment
```
