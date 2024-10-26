// components/ThemeToggle.jsx
'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Ensure the component is only rendered on the client-side
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      className="p-2 rounded-md bg-border hover:bg-highlight text-foreground transition duration-200"
      aria-label="Toggle Theme"
    >
      {theme === 'light' ? '🌞' : '🌙'}
    </button>
  );
}
