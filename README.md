# Gilsanium Sales Analytics Dashboard

A full-stack sales analytics dashboard built with ReactJS (TypeScript) frontend and Django backend.

## 🏗️ Project Structure

```
Gilsanium-Sales-Analytics-Dashboard/
├── frontend/          # ReactJS + TypeScript application
├── backend/           # Django REST API
├── docs/              # Documentation and design files
└── README.md          # This file
```

## 🚀 Features

- **Responsive Dashboard**: Modern, responsive UI built with ReactJS and TypeScript
- **Real-time Analytics**: Interactive charts and visualizations
- **Advanced Filtering**: Multi-criteria filtering for data analysis
- **RESTful API**: Django-based backend with comprehensive API endpoints
- **Database Integration**: PostgreSQL database with sample data
- **Component Architecture**: Clean, modular, reusable components

## 🛠️ Tech Stack

### Frontend

- **ReactJS** with **TypeScript**
- **TailwindCSS** for styling
- **Chart.js** or **Recharts** for data visualization
- **Axios** for API communication
- **React Router** for navigation

### Backend

- **Django** with **Django REST Framework**
- **PostgreSQL** database
- **Django CORS Headers** for cross-origin requests
- **Django Filters** for advanced filtering

### Development Tools

- **Vite** for fast development and building
- **ESLint** and **Prettier** for code quality
- **Pre-commit hooks** for code consistency

## 📋 Prerequisites

- Node.js (v18 or higher)
- Python (v3.9 or higher)
- PostgreSQL
- Git

## 🚀 Quick Start

### 1. Clone the repository

```bash
git clone <repository-url>
cd Gilsanium-Sales-Analytics-Dashboard
```

### 2. Set up the Backend

```bash
cd backend
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
python manage.py migrate
python manage.py createsuperuser
python manage.py loaddata sample_data.json
python manage.py runserver
```

### 3. Set up the Frontend

```bash
cd frontend
npm install
npm run dev
```

### 4. Access the Application

- Frontend: http://localhost:5173
- Backend API: http://localhost:8000
- Django Admin: http://localhost:8000/admin

## 📊 API Endpoints

- `GET /api/sales/` - Get sales data with filtering
- `GET /api/analytics/` - Get analytics summaries
- `GET /api/products/` - Get product information
- `GET /api/customers/` - Get customer data

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.
