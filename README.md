# Book Store — Online Bookstore

**Book Store** is a full-stack web application that provides a convenient and modern platform for browsing, searching, and purchasing books online. The project aims to deliver a user-friendly experience with a clean design, structured architecture, and scalability in mind.

---

## Features

Users can:
- Browse the book catalog by genre, author, popularity, and rating
- Search books by title, author, or ISBN
- Add books to the shopping cart
- Proceed to checkout and place orders
- Leave reviews and rate books
- View detailed book pages with descriptions, reviews, and recommendations

---

## Technologies Used

### Frontend
- **React** + **TypeScript**
- **Vite** 
- **material-ui** 

### Backend
- **NestJS** (Node.js framework with TypeScript support)

### Database
- **PostgreSQL** – relational database for storing books, users, orders, and reviews

### Development Environment
- **Node.js**
- **npm** 

---

## Team

This project is developed by a team of students as part of an educational course:

- **Вінницький Г. (Vynnytskyi H.)**
- **Чунаков А. (Chunakov A.)**
- **Єресько І. (Yeresko I.)**


### Prerequisites
- Node.js (v18 or higher)
- MongoDb
- npm or pnpm

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/3POSENJOYER/book-store-new.git
   cd book-store-new
   ```

2. Install dependencies for both frontend and backend
   ```bash
   # Frontend
   cd frontend
   npm install

   # Backend
   cd ../backend
   npm install
   ```

3. Set up environment variables  
   Create `.env` files in both `frontend` and `backend` directories (see `.env.example`)

4. Run PostgreSQL and create the database

5. Start the development servers
   ```bash
   # Backend
   cd backend
   npm run start:dev

   # Frontend (in another terminal)
   cd frontend
   npm run dev
   ```
---
