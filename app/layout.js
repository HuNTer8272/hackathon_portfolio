import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider  } from "next-themes";
import { Toaster } from "@/components/ui/toaster"


export const metadata = {
  title: "Nexora",
  description: "Nexora is a team of web and app developers dedicated to creating reliable and user-friendly digital solutions. We specialize in building responsive websites and mobile apps that meet the needs of businesses and individuals. Explore our portfolio to see how we bring ideas to life with thoughtful and efficient development.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  );
}
