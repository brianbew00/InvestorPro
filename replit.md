# HEI Strategies Investor Website

## Overview

This repository contains a full-stack web application for HEI Strategies, a private firm offering accredited investors access to home equity investments. The application is built with a modern tech stack featuring React/TypeScript on the frontend, Express.js backend, and PostgreSQL database with Drizzle ORM.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

The application follows a monorepo structure with a clear separation between client-side and server-side code:

- **Frontend**: React with TypeScript, using Vite as the build tool
- **Backend**: Express.js server with TypeScript
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **UI Framework**: Shadcn/ui components with Tailwind CSS for styling
- **Form Management**: React Hook Form with Zod validation
- **State Management**: TanStack Query for server state management

## Key Components

### Frontend Architecture
- **Pages**: Multi-page application with dedicated pages for home, about, offerings, how-it-works, resources, data-room, investor-types, calendar, and compliance
- **Components**: Reusable UI components built with Radix UI primitives and styled with Tailwind CSS
- **Forms**: Two main forms - LeadCaptureForm and DataRoomForm for investor engagement
- **Navigation**: Consistent navigation component across all pages
- **Routing**: Client-side routing using Wouter library

### Backend Architecture
- **API Routes**: RESTful endpoints for lead capture and data room access requests
- **Storage Layer**: Abstracted storage interface with in-memory implementation (ready for database integration)
- **Middleware**: Express middleware for request logging and error handling
- **Development Setup**: Vite integration for hot module replacement in development

### Database Schema
- **Users**: Basic user management structure
- **Lead Captures**: Form submissions from potential investors
- **Data Room Requests**: Gated access requests with accreditation verification

## Data Flow

1. **User Interaction**: Users navigate through marketing pages and submit forms
2. **Form Submission**: Lead capture and data room forms validate data using Zod schemas
3. **API Processing**: Express routes handle form submissions and store data
4. **Response Handling**: Success/error feedback provided through toast notifications
5. **Data Storage**: Currently uses in-memory storage, designed for easy PostgreSQL integration

## External Dependencies

### UI and Styling
- **Radix UI**: Accessible component primitives
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Icon library
- **Class Variance Authority**: Type-safe variant handling

### Development and Build
- **Vite**: Frontend build tool and development server
- **TypeScript**: Type safety across the application
- **ESBuild**: Fast bundling for production builds

### Database and Validation
- **Drizzle ORM**: Type-safe database queries and migrations
- **Zod**: Runtime type validation and schema definition
- **Neon Database**: PostgreSQL hosting (configured but not yet connected)

### Form and State Management
- **React Hook Form**: Performant form handling
- **TanStack Query**: Server state management and caching

## Deployment Strategy

The application is configured for deployment with the following approach:

1. **Build Process**: 
   - Frontend builds to `dist/public` using Vite
   - Backend builds to `dist` using ESBuild
   - Single command builds both frontend and backend

2. **Production Setup**:
   - Express serves static files from the build directory
   - Environment-based configuration for database connections
   - Proper error handling and logging

3. **Database Management**:
   - Drizzle migrations in `migrations` directory
   - Schema definitions in `shared/schema.ts`
   - Database push command for schema synchronization

4. **Environment Configuration**:
   - Development mode uses in-memory storage
   - Production ready for PostgreSQL via DATABASE_URL
   - Replit-specific configurations included

The application is designed with a clear upgrade path from the current in-memory storage to a full PostgreSQL implementation, with all the necessary infrastructure already in place.