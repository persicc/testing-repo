import Navbar from "@/components/navbar/Navbar";
import "./globals.css";
import Footer from "@/components/footer/Footer";
import ProtectedRoutes from "@/components/protectedRoutes/ProtectedRoutes";
import { SessionProvider } from "next-auth/react";
import { AuthProvider } from "@/context/AuthContext";

export const metadata = {
  title: "Blog App",
  description: "Create for the world!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SessionProvider>
          <AuthProvider>
            <ProtectedRoutes>
              <Navbar />
              {children}
              <Footer />
            </ProtectedRoutes>
          </AuthProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
