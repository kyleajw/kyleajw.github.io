import "./globals.css";
import Navbar from "@/_components/Navbar.jsx";
export const metadata = {
  title: "kyle-ajw",
  description: "personal portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={"antialiased min-h-screen font-mono p-10"}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
