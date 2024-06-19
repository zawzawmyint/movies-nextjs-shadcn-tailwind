import Footer from "@/components/global/footer/Footer";
import NextjsLoading from "@/components/global/loading/NextjsLoading";
import Navbar from "@/components/global/navbar/Navbar";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/theme/Theme";
import { Roboto_Mono } from "next/font/google";
import StoreProvider from "./StoreProvider";
import "./globals.css";

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
        <StoreProvider>
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
        </StoreProvider>
      </body>
    </html>
  );
}
