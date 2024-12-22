'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"

let deferredPrompt: any;

export function PWAInstallPrompt() {
  const [showInstallPrompt, setShowInstallPrompt] = useState(true);

  useEffect(() => {
    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault();
      deferredPrompt = e;
      setShowInstallPrompt(true);
    });
  }, []);

  const handleInstallClick = () => {
    setShowInstallPrompt(false);
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then((choiceResult: { outcome: string }) => {
      if (choiceResult.outcome === 'accepted') {
        console.log('User accepted the install prompt');
      } else {
        console.log('User dismissed the install prompt');
      }
      deferredPrompt = null;
    });
  };

  if (!showInstallPrompt) {
    return null;
  }

  return (
    <div className="fixed bottom-4 left-4 z-50 bg-white p-4 rounded-lg shadow-lg">
      <p className="mb-2">Install GHAR TAK for easy access!</p>
      <Button onClick={handleInstallClick}>Install</Button>
    </div>
  );
}