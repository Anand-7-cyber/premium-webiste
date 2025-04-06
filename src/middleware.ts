import { clerkMiddleware } from '@clerk/nextjs/server';

export default clerkMiddleware();

export const config = {
  matcher: [
    // Next.js के आंतरिक रूट्स और स्थिर फ़ाइलों को छोड़ें
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpg|jpeg|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // API रूट्स के लिए हमेशा Middleware चलाएं
    '/(api|trpc)(.*)',
  ],
};
