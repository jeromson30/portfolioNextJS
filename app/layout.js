import {Raleway} from "next/font/google";
import BackgroundApp from "../components/BackgroundApp"
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
    <html lang="fr">
      <body className={` ${raleway.className} antialiased`}>
        {children}
        <BackgroundApp/>
      </body>
    </html>
  );
}
