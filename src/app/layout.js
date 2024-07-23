import { Navbar } from "@/components/Navbar/Navbar";
import { Footer } from "@/components/Footer/Footer";
import { Poppins } from "next/font/google";

import "../styles/main.scss";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  subsets: ["latin"],
  style: ["normal"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "Epoxyd Desing",
  description: "Odkryj piękno żywicy z ozdobami Epoxyd Desing",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
