import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Lucky Skies",
  description:
    "Lucky Skies featuring Stagecoach - When You Know It's Christmas. Experienced performing musicians from the London/Surrey area bringing classic pop to life.",
  keywords:
    "Lucky Skies, Stagecoach Performing Arts, Contemporary Classic Pop, When You Know It's Christmas, Christmas music",
  openGraph: {
    title: "Lucky Skies - Contemporary Classic Pop",
    description:
      "Lucky Skies featuring Stagecoach - When You Know It's Christmas",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
