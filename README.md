# AI Prompt Optimization Agent

An AI-powered tool that improves and evaluates prompts using large language models (LLMs).
Built with a Bring Your Own API Key (BYOK) architecture to eliminate backend API costs.

## Features

- Automatically optimize user prompts
- Generate multiple versions (concise & detailed)
- Score prompts (clarity, specificity, effectiveness)
- Select best version with reasoning
- BYOK support (users provide their own OpenAI API key)
- Real-time results via simple web UI

## Tech Stack

- Frontend: HTML, CSS, JavaScript
- Backend: Node.js (Express)
- AI Model: OpenAI API (gpt-4o-mini)

## Architecture

User Input -> Frontend -> Backend (Agent) -> OpenAI API -> Response

- No API key stored on server
- Each request uses user's own API key

## Setup

1. Clone the repository

git clone https://github.com/Randal019/prompt-optimize-agent.git
cd prompt-optimize-agent

2. Install dependencies

npm install

3. Run backend server

node server.js

Or with PM2:

pm2 start server.js --name prompt-agent

4. Open frontend

Open index.html in your browser

## Usage

1. Enter your OpenAI API key
2. Enter a prompt
3. Click Optimize
4. View optimized versions, scores, and best result

## Security Notes

- API keys are not stored
- Keys are used per request (BYOK model)
- For production:
  - Use HTTPS
  - Add secure key handling

## Future Improvements

- Prompt history
- Multi-model support (GPT / Claude)
- Prompt analysis (detect vague inputs)
- Improved UI/UX
- Copy-to-clipboard feature

## Author

Randal Jiang

## Purpose

This project demonstrates:

- LLM integration in real applications
- Prompt optimization workflows
- Cost-efficient system design (BYOK)
- Full-stack development (frontend + backend + AI)

Built as a functional AI system, not just a demo.
