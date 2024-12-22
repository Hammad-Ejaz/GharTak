'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"

// Define the BeforeInstallPromptEvent interface
interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

export function PWAInstallPrompt() {
  const [showInstallPrompt, setShowInstallPrompt] = useState(true); // Update 1: Initial state remains false
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);

  useEffect(() => {
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      if ('prompt' in e && 'userChoice' in e) {
        setDeferredPrompt(e as BeforeInstallPromptEvent);
        setShowInstallPrompt(true);
      }
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstallClick = async () => { // Update 2: Updated handleInstallClick function
    if (deferredPrompt) {
      setShowInstallPrompt(false);
      await deferredPrompt.prompt();
      const choiceResult = await deferredPrompt.userChoice;
      if (choiceResult.outcome === 'accepted') {
        console.log('User accepted the install prompt');
      } else {
        console.log('User dismissed the install prompt');
      }
      setDeferredPrompt(null);
    }
  };

  if (!showInstallPrompt || !deferredPrompt) { // Update 3: Modified conditional rendering
    return null;
  }

  return (
    <div className="fixed bottom-4 left-4 z-50 bg-white p-4 rounded-lg shadow-lg">
      <p className="mb-2">Install GHAR TAK for easy access!</p>
      <Button onClick={handleInstallClick}>Install</Button>
    </div>
  );
}

