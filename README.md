# CardMitra - Smart Credit Card Comparison Platform

CardMitra is India's most intelligent credit card comparison platform that helps users find their perfect credit card using AI-powered recommendations and smart filtering.

## 📹VIDEO LINK

https://youtu.be/__xTcz-r4_c?si=TIuvx_MEy8Q1Pohq

## 🚀 Features

### Core Features
- **AI-Powered Search**: Ask in natural language like "Best cards for lounge access" and get intelligent recommendations
- **Comprehensive Database**: Compare credit cards from all major Indian banks with detailed features and benefits
- **Smart Filtering**: Filter by income, benefits, fees, and more to find cards that match your profile
- **Trusted Information**: Accurate, up-to-date information sourced directly from bank websites

### AI Features
- **AI Chat Assistant**: Get personalized credit card recommendations through natural language conversations
- **AI Card Summaries**: Each credit card includes an AI-generated summary highlighting key benefits
- **Smart Recommendations**: AI analyzes your requirements and suggests the most suitable cards

### Comparison Tools
- **Side-by-Side Comparison**: Compare up to 3 credit cards simultaneously
- **Detailed Feature Analysis**: Compare annual fees, cashback rates, benefits, eligibility criteria
- **Visual Comparison Modal**: Clean, organized comparison interface

### Educational Resources
- **Learning Center**: Comprehensive guides about credit cards, fees, security, and best practices
- **Category-based Articles**: Organized content covering basics, finance, security, and rewards
- **User Reviews**: Real user experiences and recommendations

## 🛠️ Technology Stack

- **Frontend**: React 19 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: Shadcn/UI
- **State Management**: Redux Toolkit
- **Data Fetching**: TanStack React Query
- **Routing**: React Router DOM
- **Icons**: Lucide React
- **Charts**: Recharts

## 🏗️ Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── ui/              # Shadcn/UI components
│   ├── AIChatSidebar.tsx
│   ├── CardSummary.tsx
│   ├── CreditCardCard.tsx
│   └── ...
├── pages/               # Page components
│   ├── Index.tsx        # Landing page
│   ├── Compare.tsx      # Comparison page
│   ├── Learn.tsx        # Educational content
│   └── Reviews.tsx      # User reviews
├── store/               # Redux store and slices
│   ├── slices/
│   └── store.ts
├── utils/               # Utility functions
│   └── aiService.ts     # AI integration service
└── main.tsx
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/ay690/Compare-Card.git
cd cardmitra
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 🔧 Configuration

### AI Features Setup

CardMitra supports AI-powered features through integration with external AI services:

1. **Using the UI (Recommended)**:
   - Navigate to the AI chat sidebar
   - Click the settings gear icon
   - Enter your API key (Groq or Gemini)
   - The AI features will be enabled automatically

2. **Supported AI Providers**:
   - **Groq**: Fast inference for chat responses
   - **Google Gemini**: Advanced AI capabilities

### Environment Variables

If you prefer to set API keys via environment variables:
```bash
VITE_GROQ_API_KEY=your_groq_api_key
VITE_GEMINI_API_KEY=your_gemini_api_key
```

## 📊 Key Components

### Credit Card Management
- **CreditCardCard**: Individual card display with AI summaries
- **CreditCardGrid**: Grid layout for card listings
- **ComparisonModal**: Side-by-side card comparison

### AI Integration
- **AIChatSidebar**: AI-powered chat interface for recommendations
- **CardSummary**: AI-generated card summaries
- **aiService**: Service layer for AI API integration

### Filtering & Search
- **FilterSidebar**: Advanced filtering options
- **Smart Search**: Natural language search capabilities

## 🎨 Styling

The project uses a custom banking-themed design system built on Tailwind CSS and animation making use of Framer motion.

