import { Poppins } from 'next/font/google';
import "./globals.css";
import Hero from './Components/Hero/Hero';


const poppins = Poppins({
  weight: ['400', '600'],
  subsets: ['latin'],
  variable: '--font-poppins',
})


export const metadata = {
  title: "MiDiT",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Hero />
      <body className={`${poppins.variable} ${poppins.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
