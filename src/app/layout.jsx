import "./globals.css";
import { ThemeProvider } from "./providers/theme-provider";
import DashboardNavbar from "@/components/Navbar/DashboardNavbar";

export const metadata = {
  title: "Masraf",
  description: "Generated by create next app",
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
          {/* dark Bg */}
          <div className="absolute dark:inline-block hidden top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(60,60,120,0.5),rgba(20,20,40,0.2))]"></div>

          {/* light bg */}
          <div className="absolute dark:hidden inline-block top-0 z-[-2] h-screen w-screen bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(200,200,255,0.5),rgba(100,100,150,0.2))]"></div>
          <DashboardNavbar />
          <main className="flex flex-col items-center justify-center min-h-[90vh]">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}

export const fetchCache = "default-cache";
