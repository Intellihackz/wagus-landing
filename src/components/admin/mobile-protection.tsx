"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminMobileProtection() {
  const router = useRouter();
  
  useEffect(() => {
    // Check if device is mobile (screen width less than 768px)
    const isMobile = window.innerWidth < 768;
    
    // Check if we're in an admin route
    const isAdminRoute = window.location.pathname.startsWith('/admin');
    
    if (isMobile && isAdminRoute) {
      // Redirect to home page
      router.replace('/');
    }
    
    // Also handle resizing
    const handleResize = () => {
      if (window.innerWidth < 768 && isAdminRoute) {
        router.replace('/');
      }
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [router]);
  
  return null; // This component doesn't render anything
}
