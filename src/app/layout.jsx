import { Outfit } from "next/font/google";
import "./globals.css";

import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

import { ThemeProvider } from "@/components/Header/ThemeProvider";
import ProductProvider from "@/contexts/ProductContext";
import CartProvider from "@/contexts/CartContext";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "Eccomerce App",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={outfit.className}>
        <ThemeProvider attribute="class" defaultTheme='light'>
          <CartProvider>
            <ProductProvider>
              <Header />
              {children}
              <Footer />
            </ProductProvider>
          </CartProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
