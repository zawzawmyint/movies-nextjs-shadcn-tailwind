import "./globals.css";
import { Inter as FontSans, Roboto_Mono } from "next/font/google";
import { cn } from "@/lib/utils";
import Navbar from "@/components/global/navbar/Navbar";
import { ThemeProvider } from "@/theme/Theme";
import NextjsLoading from "@/components/global/loading/NextjsLoading";
import Footer from "@/components/global/footer/Footer";

const fontSans = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <NextjsLoading />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
