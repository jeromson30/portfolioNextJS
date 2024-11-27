import {Raleway} from "next/font/google";
import "./globals.css";

const raleway = Raleway({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: "Bienvenue sur Jeromson :: Portfolio",
  description: "Jerôme CORSO développeur web",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${raleway.variable} ${raleway.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
