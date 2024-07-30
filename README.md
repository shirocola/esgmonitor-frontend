# EcoMonitor Frontend

## Overview
This is the frontend application for the EcoMonitor project, built with Next.js and Flutter. It provides a user-friendly interface for environmental monitoring, carbon footprint tracking, and compliance reporting.

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Project Structure](#project-structure)
- [Setup and Installation](#setup-and-installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Features
- Real-time environmental data visualization
- Carbon footprint data entry and display
- User authentication and management
- Responsive design for desktop and mobile access

## Technology Stack
- **Frontend:** Next.js
- **Mobile:** Flutter
- **State Management:** React Hooks
- **Styling:** CSS Modules

## Project Structure

```markdown
ecomonitor-frontend/
├── public/
│   ├── next.svg
│   ├── vercel.svg
│   ├── background.jpg
├── src/
│   ├── app/
│   │   ├── services/
│   │   │   ├── apiClient.ts
│   │   │   ├── displayCarbon.tsx
│   │   │   ├── addCarbonFootprint.tsx
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── page.module.css
│   │   ├── page.tsx
│   ├── pages/
│   │   ├── api/
│   │   │   ├── hello.ts
│   ├── components/
│   ├── styles/
├── .env
├── .eslintrc.json
├── .gitignore
├── next.config.mjs
├── package.json
├── README.md

### Installation
1. install dependencies:
   ```bash
   npm install

2. Set up environment variables:
   ```bash
   NEXT_PUBLIC_API_URL=http://localhost:5000

3. Start the application:
   ```bash
   npm run dev

4. Run tests:
   ```bash
   npm run test

## Usage
Access the frontend at [http://localhost:3000](http://localhost:3000)
Ensure the backend service is running at [http://localhost:5000](http://localhost:5000)

## Contributing
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License
Distributed under the MIT License. See `LICENSE` for more information.

