🏢 Smart Society AI Assistant

An AI-powered helpdesk for high-rise residential societies that helps residents quickly get answers about maintenance, complaints, visitor rules, and society notices using natural language.
Built using Tambo AI, Next.js, and Tailwind CSS

🚀 Problem Statement
Residents in high-rise societies often:
Don’t know whom to contact for maintenance or complaints
Get confused about visitor rules and society guidelines
Depend on WhatsApp groups or office hours for simple queries
This leads to delays, confusion, and repeated questions.

💡 Solution
Smart Society AI Assistant acts like a society office helpdesk, available 24/7.
Residents can:
Ask about maintenance procedures
Learn complaint filing steps
Understand visitor and security rules
Get guidance on society notices & policies
The assistant responds in short, clear, human-like replies, not generic AI language.

✨ Key Features
🧠 AI-powered chat using TamboProvider
🏢 Society-specific system prompt (office-style responses)
🧩 Registered AI tools & components (Tambo requirement compliant)
💬 Prebuilt chat UI with message history
🎨 Clean, minimal UI
🔐 Secure environment

🛠 Tech Stack
Next.js (App Router)
Tambo AI
React
Tailwind CSS
TypeScript

🧩 Tambo Integration
This project explicitly:
Registers tools and components in src/lib/tambo.ts
Uses <TamboProvider> with:
components
tools
systemPrompt
Does NOT rely on prompt-only AI

📂 Project Structure (Important Files)
src/
├── app/
│   ├── page.tsx          # Main chat UI
│   ├── layout.tsx        # Global layout
│
├── components/
│   └── tambo/
│       └── message-thread-full.tsx  # Chat interface
│
├── lib/
│   └── tambo.ts          # Tool & component registration
│
├── services/
│   └── population-stats.ts  # Example tool logic
│
└── styles/
    └── globals.css

 git clone https://github.com/dhrumitcodes/smart-society-ai-assistant.git
cd smart-society-ai-assistant

-Install dependecnies
npm install

-Setup Environment
cp example.env.local .env.local
NEXT_PUBLIC_TAMBO_API_KEY=your_api_key_here

-Run project
npm run dev
Open: http://localhost:3000

🌍 Deployment
Deployed using Vercel.
Steps:
Push to GitHub
Import repo into Vercel
Add environment variable
Deploy

🔮 Future Scope
Resident login
Admin dashboard
Complaint tracking
Real society database integration






