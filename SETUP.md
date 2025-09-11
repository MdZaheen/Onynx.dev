# 🔧 ONYNX.DEV - Setup Instructions

This document provides step-by-step instructions to set up the Onynx.dev project after all fixes have been applied.

## 📋 Prerequisites

- Node.js 18+ and npm
- Git
- A Gmail account (for contact form functionality)

## 🚀 Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Environment Configuration

1. Copy the environment template:
```bash
cp .env.example .env.local
```

2. Edit `.env.local` and configure the following variables:

#### Email Configuration (Required for contact form)
```env
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-gmail-app-password
CONTACT_EMAIL=contact@onynx.dev
```

**To get Gmail App Password:**
1. Enable 2FA on your Gmail account
2. Go to Google Account Settings → Security → App Passwords
3. Generate an app password and use it in `EMAIL_PASS`

#### Database Configuration (Optional)
```env
MONGODB_URI=mongodb://localhost:27017/onynx
```

### 3. Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Production Build

```bash
npm run build
npm run start
```

## 🔧 Key Features Fixed

### ✅ Critical Issues Resolved
- ❌ Removed mistaken git command file
- ✅ Fixed package.json dependencies
- ✅ Updated TypeScript configuration
- ✅ Implemented functional contact form with nodemailer

### ✅ Performance Optimizations
- ✅ Optimized font loading
- ✅ Memoized smooth scrolling component
- ✅ Added will-change properties for animations
- ✅ Reduced motion support

### ✅ Code Quality Improvements
- ✅ Added error boundaries
- ✅ Added loading components
- ✅ Improved TypeScript types
- ✅ Cleaned up dead code

### ✅ Configuration Enhancements
- ✅ Environment variables template
- ✅ Fixed CSS variable conflicts
- ✅ Proper email service integration

## 📁 Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── api/               # API routes
│   ├── About/             # About page
│   ├── Contact/           # Contact page
│   └── layout.tsx         # Root layout with error boundaries
├── components/            # Reusable components
│   ├── ErrorBoundary.tsx  # Error handling
│   ├── Loading.tsx        # Loading states
│   └── team/              # Team components
├── lib/                   # Utilities
├── models/                # Database models
└── styles/                # CSS modules and global styles
```

## 🚨 Important Notes

1. **Email Configuration**: The contact form requires proper Gmail setup to function
2. **Environment Variables**: Never commit `.env.local` to version control
3. **Performance**: Animations respect user's reduced motion preferences
4. **Error Handling**: Error boundaries catch and display user-friendly errors

## 🔍 Testing

### Contact Form
1. Configure email variables in `.env.local`
2. Fill out the contact form on the website
3. Check your email for the submission

### Error Boundaries
1. Force an error in any component
2. Verify the error boundary displays properly
3. Check console for error details (development mode)

### Responsive Design
1. Test on different screen sizes
2. Verify smooth scrolling works on desktop
3. Confirm mobile optimizations are applied

## 📞 Support

If you encounter any issues:

1. Check the console for error messages
2. Verify environment variables are set correctly
3. Ensure all dependencies are installed
4. Check that ports 3000 is available

## 🎉 You're All Set!

The Onynx.dev project is now properly configured with all issues fixed. The codebase is production-ready with proper error handling, optimized performance, and clean code structure.
