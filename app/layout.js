import "./globals.css";

export const metadata = {
  title: "Blog App",
  description: "Create for the world!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
