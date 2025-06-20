# Setlist Builder + Sync

A web application that helps musicians and bands create, manage, and synchronize their performance setlists across devices with collaborative editing, performance tracking, and export features.

![Setlist Builder Demo](docs/assets/images/banner.png)

## 🎵 Features

- **Setlist Management**
  - Create, edit, delete, and duplicate setlists
  - Drag-and-drop song reordering
  - Automatic setlist duration calculation
  - Filter and search functionality

- **Song Library**
  - Add custom songs with key, BPM, duration, and notes
  - Import songs from Spotify API
  - Tag songs by genre, mood, or energy level
  - Track play frequency and audience reception

- **Real-time Sync**
  - Cloud-based synchronization across devices
  - Offline mode with sync when reconnected
  - Conflict resolution for simultaneous edits
  - Change history and version control

- **Export and Sharing**
  - Export to PDF, text, and image formats
  - Generate printable setlist sheets
  - Share via email, text, or link
  - Export to Spotify playlists

- **Performance Mode**
  - Distraction-free live view during performances
  - Auto-scrolling based on song duration
  - Quick navigation between songs
  - Night mode for dark venues

## 🚀 Technology Stack

### Frontend
- React.js with TypeScript
- Redux Toolkit for state management
- Material-UI for responsive design
- Styled-components for styling
- Axios for HTTP requests

### Backend
- Node.js with Express.js
- RESTful API with OpenAPI documentation
- JWT-based authentication
- Prisma ORM for database access

### Database
- PostgreSQL
- Redis for caching and real-time features

### Infrastructure
- AWS (EC2 or Elastic Beanstalk)
- CI/CD with GitHub Actions
- Sentry for error tracking
- Google Analytics

## 📋 Prerequisites

- Node.js (v18.x or later)
- npm (v9.x or later) or Yarn (v1.22.x or later)
- PostgreSQL (v14.x or later)
- Redis (v6.x or later)
- Spotify Developer Account (for API integration)

## 🔧 Installation and Setup

### Clone the repository

```bash
git clone https://github.com/dxaginfo/setlist-builder-sync-app.git
cd setlist-builder-sync-app
```

### Install dependencies

```bash
# For the entire project (if using a monorepo approach)
npm install

# For frontend
cd frontend
npm install

# For backend
cd backend
npm install
```

### Environment Configuration

1. Create `.env` files for both frontend and backend based on the provided examples:

```bash
# Copy the example env files
cp frontend/.env.example frontend/.env
cp backend/.env.example backend/.env
```

2. Update the environment variables with your specific configuration:

- Database connection details
- Redis connection details
- Spotify API credentials
- JWT secret keys
- AWS credentials (for production)

### Database Setup

```bash
# Run migrations
cd backend
npx prisma migrate dev
```

### Starting the Development Servers

```bash
# Start the backend server
cd backend
npm run dev

# Start the frontend development server
cd frontend
npm start
```

- Frontend will be available at: http://localhost:3000
- Backend API will be available at: http://localhost:8000

## 📱 Mobile Responsiveness

The application is designed to be fully responsive and work on devices of all sizes:

- Desktop browsers
- Tablets
- Mobile phones

## 🔒 Security

- All API endpoints are secured with JWT authentication
- HTTPS is enforced in production
- Input validation and sanitization
- Rate limiting to prevent abuse
- Secure password hashing
- CORS properly configured

## 🔄 CI/CD Pipeline

The project uses GitHub Actions for continuous integration and deployment:

1. Code linting and formatting checks
2. Unit and integration tests
3. Build process
4. Deployment to staging/production environments

## 📄 API Documentation

API documentation is available at `/api/docs` when running the development server. It's generated using OpenAPI specifications.

## 🧪 Testing

```bash
# Run frontend tests
cd frontend
npm test

# Run backend tests
cd backend
npm test
```

## 🌐 Deployment

### Production Build

```bash
# Build the frontend
cd frontend
npm run build

# Prepare the backend for production
cd backend
npm run build
```

### Deployment Options

1. **Manual Deployment**
   - Upload the built frontend to a static file host (S3, Netlify, Vercel)
   - Deploy the backend to a Node.js hosting service (AWS, Heroku, DigitalOcean)

2. **Docker Deployment**
   - Build the Docker images: `docker-compose build`
   - Run the containers: `docker-compose up -d`

3. **CI/CD Pipeline**
   - Push to the main branch to trigger automatic deployment

## 📈 Roadmap

- Mobile applications for iOS and Android
- Offline-first approach with local-first data
- AI-powered setlist recommendations
- Integration with more music platforms
- Advanced analytics on setlist performance
- Collaborative editing with real-time cursors
- Integration with stage lighting systems

## 🤝 Contributing

Contributions are welcome! Please read our [Contributing Guidelines](CONTRIBUTING.md) for details.

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📧 Contact

For support or inquiries, please contact [dxag.info@gmail.com](mailto:dxag.info@gmail.com).

---

© 2025 Setlist Builder + Sync