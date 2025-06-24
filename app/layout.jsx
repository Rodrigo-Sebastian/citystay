import "./globals.css";
import { Figtree } from "next/font/google";
import Footer from "./components/Footer/Footer";

const figtree = Figtree({
  variable: "--font-figtree",
  style: ['normal', 'italic'],
  subsets: ["latin"],
});

export const metadata = {
  title: "CityStay",
  description: "CityStay - Your Gateway to Urban Living",
  author:{name:"Rodrigo Sebastian"},
  icons:{
    icon:"/images/citystay-logo.png",
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={figtree.variable}>
        {children}    
        <Footer />
      </body>
    </html>
  );
}
