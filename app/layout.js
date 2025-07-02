import { Poppins } from 'next/font/google';
import "./globals.css";



export const metadata = {
  title: "MiDiT",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
