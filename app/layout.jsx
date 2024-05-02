import { Syne } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import Navbar from "@/components/navbar/Navbar";
import { AuthProvider } from "@/context/AuthContext";

const syne = Syne({ subsets: ["latin"] });

export const metadata = {
  title: "Glorius University Ng",
  description: "University Motto Here",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={syne.className}>
        <AuthProvider>
          <ThemeProvider>
            <Navbar />
            {children}
          </ThemeProvider>
        </AuthProvider>
        </body>
    </html>
  );
}