# 🚀 NovaCraft AI – All-in-One AI Tools Platform

NovaCraft AI is a powerful SaaS platform that offers a suite of AI tools to help users create, enhance, and optimize content.  
Whether you're a writer, designer, job-seeker, or developer — NovaCraft AI empowers you with cutting-edge AI features.

🔗 **Live App**: [https://nova-craft-ai.vercel.app](https://nova-craft-ai.vercel.app)

---

## ✨ Features

- ✍️ **AI Article Writer** – Generate engaging, high-quality articles on any topic
- 📰 **Blog Title Generator** – Find catchy blog titles with our AI-powered tool
- 🎨 **AI Image Generation** – Generate stunning images from prompts using Gemini
- 🖼️ **Background Removal** – Remove backgrounds from images effortlessly
- 🧽 **Object Removal** – Delete unwanted objects from photos with AI
- 📄 **Resume Reviewer** – Improve your resume with instant AI feedback

---

## 🛠️ Tech Stack

| Layer       | Tech Used                                |
| ----------- | ---------------------------------------- |
| Frontend    | React 19, Vite, Tailwind CSS, Clerk Auth |
| Backend     | Express.js (v5), OpenAI, Gemini API      |
| Database    | Neon (PostgreSQL, serverless)            |
| Image Tools | Cloudinary, ClipDrop API, Multer         |
| Auth        | Clerk (JWT, OAuth)                       |
| Hosting     | Vercel (frontend), Render (backend)      |

---

## 📁 Project Structure

```

nova-craft-ai/
├── client/                # Frontend (React + Vite)
│   ├── public/
│   └── src/
├── server/                # Backend (Express API, OpenAI, Cloudinary)
|   ├── config/
│   ├── controllers/
|   ├── middlewares/
│   ├── routes/
|   ├── .env
│   └── server.js
└── README.md

```

---

## ⚙️ Environment Variables

Create `.env` files in both frontend (`client`) and backend (`server`) directories with the following variables:

### 📦 Frontend (`client/.env`)

```env
VITE_CLERK_PUBLISHABLE_KEY=<your-clerk-publishable-key>

VITE_BASE_URL=http://localhost:3000
```

### 🧠 Backend (`server/.env`)

```env
DATABASE_URL=<your-neon-database-url>

CLERK_PUBLISHABLE_KEY=<your-clerk-publishable-key>
CLERK_SECRET_KEY=<your-clerk-secret-key>

GEMINI_API_KEY=<your-google-gemini-api-key>
CLIPDROP_API_KEY=<your-clipdrop-api-key>

CLOUDINARY_CLOUD_NAME=<your-cloudinary-cloud-name>
CLOUDINARY_API_KEY=<your-cloudinary-api-key>
CLOUDINARY_API_SECRET=<your-cloudinary-api-secret>
```

> ⚠️ **Never commit `.env` files or secrets to GitHub!**

---

## 🧪 Getting Started (Local Setup)

### 1. Clone the Repository

```bash
git clone https://github.com/Varunyadavgithub/NovaCraft-AI.git
cd nova-craft-ai
```

### 2. Install Dependencies

#### 📦 Frontend

```bash
cd client
npm install
```

#### 🧠 Backend

```bash
cd ../server
npm install
```

### 3. Set Up Environment Variables

Create `.env` files as shown above in both folders.

### 4. Run the App

#### ➤ Start Backend

```bash
cd server
npm run dev
```

#### ➤ Start Frontend

```bash
cd ../client
npm run dev
```

Visit `http://localhost:5173` to view the app.

---

## 🧑‍💻 Contribution Guide

We welcome contributions! Follow these steps:

### 🛠 Recommended Stack

- Node.js v18+
- PostgreSQL (Neon)
- Vite
- Clerk account (for authentication)
- Cloudinary & Gemini API keys

### 🪄 How to Contribute

1. **Fork** the repository
2. **Create a branch**

   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Make your changes**
4. **Commit** your changes

   ```bash
   git commit -m "✨ Added feature XYZ"
   ```

5. **Push** to your fork

   ```bash
   git push origin feature/your-feature-name
   ```

6. **Create a Pull Request** to the `main` branch

---

## 📸 Screenshots

| ![Screenshot 1]() | ![Screenshot 2]() |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| ![Screenshot 4]() | ![Screenshot 3]() |

---

## 📝 License

This project is licensed under the **MIT License**.

---

## 🙋‍♂️ Author

Made with ❤️ by [Varun Yadav](https://www.linkedin.com/in/thecyberdevvarun/)

- GitHub: [@varunyadavgithub](https://github.com/varunyadavgithub)
- Portfolio: [thecyberdevvarun.vercel.app](https://thecyberdevvarun.vercel.app/)

---

## ⭐️ Star This Project

```
If you found this helpful or inspiring, please give the repo a ⭐️ to support it!
```
