import express from "express";
import cors from "cors";
import OpenAI from "openai";
import "dotenv/config";

const app = express();

const AI = new OpenAI({
  apiKey: process.env.GEMINI_API_KEY,
  baseURL: "https://generativelanguage.googleapis.com/v1beta/openai/",
});

app.use(cors());
app.use(express.json());

// Logging middleware
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
  console.log("Body:", req.body);
  next();
});

app.get("/", (req, res) => {
  res.json({ message: "Test server is working!" });
});

app.post("/api/v1/ai/generate-article", async (req, res) => {
  try {
    console.log("Generate article endpoint hit!");
    const { prompt, length } = req.body;
    
    console.log("Prompt:", prompt);
    console.log("Length:", length);
    console.log("API Key exists:", !!process.env.GEMINI_API_KEY);
    
    const response = await AI.chat.completions.create({
      model: "gemini-2.0-flash",
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
      temperature: 0.7,
      max_tokens: length,
    });
    
    const content = response.choices[0].message.content;
    console.log("Generated content length:", content.length);
    
    res.json({ success: true, content });
  } catch (error) {
    console.error("Article generation error:", error.message);
    res.status(500).json({ success: false, message: error.message });
  }
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Test server is running on port:${PORT}`);
});