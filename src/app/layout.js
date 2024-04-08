import "../styles/main.scss";

import { Navbar } from "@/components/Navbar/Navbar";

import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  style: ["normal"],
});

export const metadata = {
  title: "Epoxyd Desing",
  description: "Odkryj piękno żywicy z ozdobami Epoxyd Desing",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
