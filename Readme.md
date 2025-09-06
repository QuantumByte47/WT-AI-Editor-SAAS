# 🚀 WT AI Editor – Advanced AI-Powered Content Platform

WT AI Editor is a comprehensive SaaS platform that leverages cutting-edge artificial intelligence to help users create, enhance, and optimize content. Built for content creators, designers, writers, and professionals who need powerful AI tools for their daily workflow.

## ✨ Core Features

- ✍️ **AI Article Writer** – Generate high-quality, engaging articles on any topic with advanced AI
- 📰 **Blog Title Generator** – Create compelling, click-worthy blog titles that drive engagement
- 🎨 **AI Image Generation** – Generate stunning visuals from text descriptions using Gemini AI
- 🖼️ **Smart Background Removal** – Remove image backgrounds with precision AI technology
- ✂️ **Intelligent Object Removal** – Seamlessly remove unwanted objects from photos
- 📄 **Resume Reviewer** – Get AI-powered feedback to optimize your resume for better results

---

## 🛠️ Technology Stack

| **Layer** | **Technologies** |
|-----------|------------------|
| **Frontend** | React 19, Vite, Tailwind CSS, Modern UI Components |
| **Backend** | Express.js v5, Node.js, RESTful APIs |
| **AI Integration** | Google Gemini API, Advanced Natural Language Processing |
| **Database** | Neon PostgreSQL (Serverless) |
| **Authentication** | Clerk (JWT, OAuth, Multi-provider) |
| **Image Processing** | Cloudinary, ClipDrop API, Multer |
| **Deployment** | Optimized for Vercel, Render, AWS |

---

## 📁 Project Architecture

```
wt-ai-editor/
├── client/                    # Frontend Application
│   ├── public/               # Static assets
│   ├── src/
│   │   ├── components/       # Reusable UI components
│   │   ├── pages/           # Application pages
│   │   ├── assets/          # Images, icons, fonts
│   │   ├── utils/           # Helper functions
│   │   └── main.jsx         # Application entry point
│   ├── package.json         # Frontend dependencies
│   └── vite.config.js       # Vite configuration
│
├── server/                   # Backend Application
│   ├── config/              # Configuration files
│   │   ├── db.js           # Database connection
│   │   ├── cloudinary.js   # Image storage config
│   │   └── multer.js       # File upload config
│   ├── controllers/         # Business logic handlers
│   │   ├── ai.controller.js # AI operations
│   │   └── user.controller.js # User management
│   ├── middlewares/         # Custom middleware
│   │   └── auth.js         # Authentication middleware
│   ├── routes/              # API route definitions
│   │   ├── ai.route.js     # AI endpoints
│   │   └── user.route.js   # User endpoints
│   ├── .env                 # Environment variables
│   ├── package.json         # Backend dependencies
│   └── server.js           # Server entry point
│
└── README.md               # Project documentation
```

---

## ⚙️ Environment Configuration

### Frontend Environment (`client/.env`)

```bash
# Clerk Authentication
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key_here

# API Configuration
VITE_BASE_URL=http://localhost:3000
```

### Backend Environment (`server/.env`)

```bash
# Database Configuration
DATABASE_URL=your_neon_postgresql_connection_string

# Authentication (Clerk)
CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key

# AI Services
GEMINI_API_KEY=your_google_gemini_api_key
CLIPDROP_API_KEY=your_clipdrop_api_key

# Image Storage (Cloudinary)
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret

# Server Configuration
PORT=3000
```

> **⚠️ Security Notice:** Never commit `.env` files to version control. Add `.env` to your `.gitignore` file.

---

## 🚀 Development Environment Setup

### Prerequisites

- **Node.js** v18 or higher
- **npm** or **yarn** package manager
- **Git** for version control

### Step 1: Clone & Navigate

```bash
git clone https://github.com/your-username/wt-ai-editor.git
cd wt-ai-editor
```

### Step 2: Install Dependencies

**Frontend Dependencies:**
```bash
cd client
npm install
```

**Backend Dependencies:**
```bash
cd ../server
npm install
```

### Step 3: Environment Setup

1. **Create Environment Files:**
   - Copy `.env.example` to `.env` in both `client/` and `server/` directories
   - Fill in your API keys and configuration values

2. **Required API Keys:**
   - **Clerk Account**: [clerk.com](https://clerk.com) - For authentication
   - **Google Gemini API**: [ai.google.dev](https://ai.google.dev) - For AI text generation
   - **Neon Database**: [neon.tech](https://neon.tech) - For PostgreSQL database
   - **Cloudinary**: [cloudinary.com](https://cloudinary.com) - For image storage
   - **ClipDrop API**: [clipdrop.co](https://clipdrop.co) - For image processing

### Step 4: Database Setup

1. **Create Neon Database:**
   - Sign up at [neon.tech](https://neon.tech)
   - Create a new project
   - Copy the connection string to `DATABASE_URL`

2. **Initialize Database Schema:**
   ```sql
   CREATE TABLE creations (
     id SERIAL PRIMARY KEY,
     user_id VARCHAR(255) NOT NULL,
     prompt TEXT NOT NULL,
     content TEXT NOT NULL,
     type VARCHAR(50) NOT NULL,
     likes TEXT[] DEFAULT '{}',
     publish BOOLEAN DEFAULT FALSE,
     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
   );
   ```

### Step 5: Launch Development Servers

**Start Backend Server:**
```bash
cd server
npm run dev
```
*Backend will run on `http://localhost:3000`*

**Start Frontend Server:**
```bash
cd client
npm run dev
```
*Frontend will run on `http://localhost:5173`*

### Step 6: Verify Setup

- Navigate to `http://localhost:5173`
- Test user authentication
- Try generating an AI article
- Verify all features are working correctly

---

## 🔧 Available Scripts

### Frontend (`client/`)
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

### Backend (`server/`)
```bash
npm run dev          # Start development server with nodemon
npm start            # Start production server
```

---

## 📊 API Endpoints

### AI Operations
- `POST /api/v1/ai/generate-article` - Generate AI articles
- `POST /api/v1/ai/generate-blog-title` - Create blog titles
- `POST /api/v1/ai/generate-image` - Generate AI images
- `POST /api/v1/ai/remove-background` - Remove image backgrounds
- `POST /api/v1/ai/remove-object` - Remove objects from images
- `POST /api/v1/ai/review-resume` - Analyze and review resumes

### User Management
- `GET /api/v1/user/creations` - Get user's creations
- `GET /api/v1/user/community` - Get published creations
- `POST /api/v1/user/like` - Like/unlike creations

---

## 🔐 Authentication & Security

- **Multi-provider Authentication** via Clerk (Google, GitHub, Email)
- **JWT Token-based** API authentication
- **Rate Limiting** for API endpoints
- **Input Validation** and sanitization
- **Environment Variable** security
- **CORS Configuration** for cross-origin requests

---

## 🤝 Support & Contributing

For issues, feature requests, or contributions, please open an issue or submit a pull request.

**Built with modern technologies and AI innovation.**