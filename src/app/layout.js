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
        className={"antialiased min-h-screen p-8 pt-4 pb-0 font-roboto-mono"}
      >
        <Navbar />
        {children}

      </body>
    </html>
  );
}
