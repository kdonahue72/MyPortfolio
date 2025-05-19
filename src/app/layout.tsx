'use client'

'use client'

import { useEffect } from 'react'
import './styles/globals.css'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    let rafId: number;
    const handleMouseMove = (e: MouseEvent) => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        document.body.style.setProperty('--cursorX', `${e.clientX}px`);
        document.body.style.setProperty('--cursorY', `${e.clientY}px`);
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <html lang="en" className="dark">
      <body>{children}</body>
    </html>
  )
}
