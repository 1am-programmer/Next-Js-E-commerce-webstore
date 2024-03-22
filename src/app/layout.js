import Header from "@/components/Header";
import "./globals.css";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Danny",
  keywords: "",
  icons: {
    icon: "/vercel.svg",
    //Icon is for the main icon of the webapp
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
