import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import { GoogleGenerativeAI } from '@google/generative-ai';
import dotenv from 'dotenv';

dotenv.config({ path: '.env' }); 

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

console.log('Environment check:');
console.log('GEMINI_API exists:', !!process.env.GEMINI_API);  
console.log('EMAIL_USER exists:', !!process.env.EMAIL_USER);

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API);  

const resumeContext = `
You are an AI assistant for Aethan Ynnos Cruz Aranzanzo's portfolio website. Here is his professional information:

PERSONAL INFO:
- Name: Aethan Ynnos Cruz Aranzanzo
- Location: Manila, Philippines
- Phone: 09928203847
- Email: aranzanzo.aethan@gmail.com
- GitHub: https://github.com/AethanAranzanzo

PROFESSIONAL SUMMARY:
Magna Cum Laude graduate in Computer Engineering from Pamantasan ng Lungsod ng Maynila, with strong foundations in full-stack web development, software development, data analysis, and UI/UX design.

CORE COMPETENCIES:
- Full-Stack Web Development: React, JavaScript (ES6+), HTML5, CSS3, Node.js, Express.js, Next.js, TypeScript
- Databases: MongoDB, SQL, Prisma ORM
- Software Development: C++, Python, Java, JavaScript, TypeScript
- Design & Analysis: UI/UX Design, Data Analysis & Problem Solving
- Professional Skills: Communication & Leadership, Project Management & Team Collaboration
- Creative Skills: Graphic Design, Photography, Videography, Cinematography

EDUCATION:
Bachelor of Science in Computer Engineering (Magna Cum Laude)
Pamantasan ng Lungsod ng Maynila | Sept 2021 – Oct 2025

INTERNSHIP:
IT Intern at St. Joseph School of Gagalangin (January – March 2025)
- Maintained IT systems and provided troubleshooting support
- Collaborated with staff to enhance technology integration
- Supported documentation and technical reporting tasks

MINISTRY & CREATIVE WORK:
St. Joseph Church, Gagalangin (2012 - Present)
- Ministry of Altar Servers (2012-2020): Served as an altar server for 8 years
- Social Communications Ministry (2022-Present): Currently serving as IT Specialist Officer
- Roles & Responsibilities:
  * IT Specialist Officer: Maintaining equipment and ensuring proper operations
  * Live Operator: Managing live streaming and broadcasting of church events
  * Pubmat Designer: Creating promotional materials and graphics
  * Photographer & Videographer: Documenting church events and activities
  * Social Media Manager: Managing church Facebook and YouTube accounts with the team
- #iKMSJnaYan Podcast Director (October 2025 - Present): Monthly podcast creating engaging content for the community
- Social Media Links:
  * Facebook: https://www.facebook.com/SaintJosephGagalangin
  * YouTube: https://www.youtube.com/@SanJoseGagalangin
- Notable Video Productions:
  * Drone cinematography for church events
  * Priests' Greetings video production
  * "Ningas ng Pag-asa" Music Video
  * Monthly #iKMSJnaYan Podcast episodes

KEY PROJECTS:

1. BlogSpace – Full-Stack Blog Platform (Production-Ready)
   - Live at: https://blogspace-rho.vercel.app/
   - Tech Stack: Next.js 14, TypeScript, MongoDB, Prisma ORM, Tailwind CSS, Cloudinary, JWT
   - Features:
     * Secure authentication with email verification and JWT sessions
     * Rich text editor (TipTap) with image uploads via Cloudinary
     * Full CRUD for blog posts with visibility control (Public/Private/Draft)
     * Social features: likes, comments, and user profiles
     * Advanced search with real-time filtering by category and sorting
     * Responsive design with blue-to-purple gradient UI
     * Security: CSRF, XSS protection, input sanitization
     * Performance: Server-side pagination, MongoDB optimization

2. Dynamic Church Website & Information Hub (MERN Stack)
   - Full-stack website with RESTful API using Node.js and Express.js
   - Integrated Gemini-powered AI Chatbot for 24/7 assistance
   - MongoDB for dynamic content management
   - Responsive React front-end with social media feeds
   - Technologies: React, Node.js, Express.js, MongoDB, Gemini API

3. ARise: AR Glasses Training (Capstone/Thesis)
   - Designed for children with ADHD aged 7-15
   - AR-supported games for improving motor skills and cognitive engagement
   - Built with Unity3D, C#, AR Foundation, SPSS, Firebase
   - Interactive AR modules responding to body movement and object tracking
   - Data collection and statistical analysis for measuring user improvement

Answer questions about Aethan's background, skills, projects, ministry work, and experience. Be professional, friendly, and concise. If asked about contact information, provide his email and encourage using the contact form on the website. If asked about his church work, mention his roles at St. Joseph Church Gagalangin and provide the social media links.
`;

// Function to format the Gemini response
function formatResponse(text) {
  return text
    // Remove bold markdown (**text**)
    .replace(/\*\*(.+?)\*\*/g, '$1')
    // Remove italic markdown (*text*)
    .replace(/\*(.+?)\*/g, '$1')
    // Preserve line breaks
    .trim();
}

// Contact API endpoint
app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `Portfolio Contact: ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
      replyTo: email,
    };

    await transporter.sendMail(mailOptions);
    console.log('✅ Email sent successfully');
    return res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('❌ Error sending email:', error);
    return res.status(500).json({ message: 'Failed to send email', error: error.message });
  }
});

// Chat API endpoint - try multiple models with fallback
app.post('/api/chat', async (req, res) => {
  console.log('📩 Received chat request:', req.body);
  
  const { message } = req.body;

  if (!message) {
    console.log('❌ No message provided');
    return res.status(400).json({ message: 'Message is required' });
  }

  // Try models in order of preference (free tier friendly)
  const modelNames = [
    'gemini-flash-latest',
    'gemini-2.5-flash',
    'gemini-flash-lite-latest',
    'gemma-3-4b-it',
  ];

  for (const modelName of modelNames) {
    try {
      console.log(`🤖 Trying model: ${modelName}`);
      
      const model = genAI.getGenerativeModel({ model: modelName });
      
      const result = await model.generateContent(
        `${resumeContext}\n\nUser question: ${message}\n\nProvide a helpful response based on the context above. Use clear paragraphs and line breaks for readability.`
      );

      const response = result.response;
      const text = response.text();
      
      // Format the response before sending
      const formattedText = formatResponse(text);

      console.log(`✅ Success with ${modelName}`);
      return res.status(200).json({ response: formattedText });
      
    } catch (error) {
      console.log(`❌ ${modelName} failed: ${error.message}`);
      
      // If this is the last model, return error
      if (modelName === modelNames[modelNames.length - 1]) {
        console.error('❌ All models failed');
        return res.status(500).json({ 
          message: 'AI chatbot is temporarily unavailable. Please try again in a few minutes.',
          error: 'Quota exceeded or all models unavailable'
        });
      }
      
      // Otherwise, continue to next model
      continue;
    }
  }
});

app.listen(PORT, () => {
  console.log(`🚀 API server running on http://localhost:${PORT}`);
});