# Ascode Solutions

## Overview

This is a corporate website for Ascode Solutions, a technology services company that provides web development, mobile applications, desktop software, database management, UI/UX design, and SEO optimization services. The application is built as a full-stack React/Express application with a modern tech stack including TypeScript, Tailwind CSS, shadcn/ui components, and PostgreSQL with Drizzle ORM.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript using Vite as the build tool
- **Routing**: Wouter for client-side routing (lightweight alternative to React Router)
- **UI Components**: shadcn/ui component library built on Radix UI primitives
- **Styling**: Tailwind CSS with CSS variables for theming and a dark color scheme
- **State Management**: TanStack Query (React Query) for server state management
- **Form Handling**: React Hook Form with Zod validation resolvers
- **Notifications**: Custom toast system using Radix UI Toast primitives

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Development**: tsx for development server with hot reload
- **Production Build**: esbuild for server bundling, Vite for client build
- **Middleware**: Custom logging middleware for API request tracking

### Database Layer
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Database**: PostgreSQL (configured for Neon serverless)
- **Schema**: Centralized schema definition in `/shared/schema.ts`
- **Migrations**: Drizzle Kit for schema migrations
- **Storage Abstraction**: Interface-based storage layer with in-memory implementation for development

### API Design
- **Architecture**: RESTful API with Express routes
- **Endpoints**: 
  - `/api/contact` - Contact form submissions
  - `/api/career` - Career application submissions
- **Error Handling**: Centralized error handling middleware
- **Logging**: Request/response logging with timing and JSON response capture

### Project Structure
- **Monorepo Layout**: Client and server code in separate directories with shared schema
- **Client**: React application in `/client` directory
- **Server**: Express API in `/server` directory  
- **Shared**: Common TypeScript types and schemas in `/shared` directory
- **Path Aliases**: TypeScript path mapping for clean imports (@, @shared, @assets)

### Development Environment
- **Hot Reload**: Vite HMR for frontend, tsx watch mode for backend
- **TypeScript**: Strict mode enabled with incremental compilation
- **Code Quality**: ESM modules throughout, consistent file naming
- **Replit Integration**: Cartographer plugin for development environment integration

### Theming and Design
- **Color System**: CSS custom properties with dark theme focus
- **Typography**: Inter font family for modern, clean appearance
- **Component Variants**: Class Variance Authority for component styling
- **Responsive Design**: Mobile-first approach with Tailwind responsive utilities
- **Visual Effects**: Glass morphism effects and gradient styling for modern UI

## External Dependencies

### Core Framework Dependencies
- **React Ecosystem**: React 18, React DOM, React Hook Form, TanStack Query
- **Build Tools**: Vite, esbuild, tsx, TypeScript
- **Backend**: Express.js, Node.js built-in modules

### Database and Validation
- **Database**: Neon PostgreSQL serverless, Drizzle ORM, Drizzle Kit
- **Validation**: Zod schema validation, Drizzle-Zod integration
- **Session Storage**: connect-pg-simple for PostgreSQL session store

### UI and Styling
- **Component Library**: Radix UI primitives (30+ components)
- **Styling**: Tailwind CSS, PostCSS, Autoprefixer
- **Icons**: Lucide React icon library
- **Utilities**: clsx, tailwind-merge, class-variance-authority

### Development and Utilities
- **Date Handling**: date-fns for date manipulation
- **Routing**: Wouter for lightweight client-side routing
- **Carousel**: Embla Carousel React for image/content carousels
- **Command Interface**: cmdk for command palette functionality
- **Replit Tools**: Vite plugins for Replit development environment