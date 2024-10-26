import './globals.css';
import { ThemeProvider } from './providers/ThemeProvider';
import DashboardNavbar from '@/components/Navbar/DashboardNavbar';

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <DashboardNavbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

export const fetchCache = 'default-cache';