"use client"
import { Syne } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import { AuthProvider } from "@/context/AuthContext";
import { usePathname } from 'next/navigation';
import AdminLayout from "@/components/admin/AdminLayout";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

const syne = Syne({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const isDashboardPath = pathname.startsWith('/dashboard');
  const isAdminPath = pathname.startsWith('/admin');

  const layout = isAdminPath ? <AdminLayout>{children}</AdminLayout> : children;

  return (
    <html lang="en">
      <AuthProvider>
        <ThemeProvider>
          <body className={`font-[poppins] ${isDashboardPath || isAdminPath ? 'px-0' : 'px-2 lg:px-[8rem]'}`}>
            {(!isDashboardPath && !isAdminPath) && (
              <>
                <Navbar />
                {layout}
                <Footer />
              </>
            )}
            {(isDashboardPath || isAdminPath) && children}
          </body>
        </ThemeProvider>
      </AuthProvider>
    </html>
  );
}
