import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { CartProvider } from "../context/CartContext";
import { Toaster } from "react-hot-toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Regal Old Money - Timeless Fashion & Style",
    template: "%s | Regal Old Money"
  },
  description: "Discover timeless elegance and sophistication in every piece. Premium clothing, accessories, and footwear with classic old money aesthetic. Quality craftsmanship meets refined style.",
  keywords: "luxury fashion, old money style, premium clothing, designer wear, classic fashion, timeless elegance, sophisticated style",
  authors: [{ name: "Regal Old Money Team" }],
  creator: "Samad Aman",
  publisher: "Regal Old Money",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://regaloldmoney.com'),
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://regaloldmoney.com',
    title: 'Regal Old Money - Timeless Fashion & Style',
    description: 'Discover timeless elegance and sophistication in every piece. Premium clothing, accessories, and footwear with classic old money aesthetic.',
    siteName: 'Regal Old Money',
    images: [
      {
        url: '/regalLogoWhite.jpg',
        width: 1200,
        height: 630,
        alt: 'Regal Old Money Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Regal Old Money - Timeless Fashion & Style',
    description: 'Discover timeless elegance and sophistication in every piece. Premium clothing, accessories, and footwear with classic old money aesthetic.',
    images: ['/regalLogoWhite.jpg'],
    creator: '@regal_oldmoney',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/regalLogoWhite.jpg" />
        <link rel="icon" type="image/png" sizes="32x32" href="/regalLogoWhite.jpg" />
        <link rel="icon" type="image/png" sizes="16x16" href="/regalLogoWhite.jpg" />
        <meta name="theme-color" content="#2C2416" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <CartProvider>
          {children}
          <Toaster
            position="top-right"
            toastOptions={{
              duration: 3000,
              style: {
                background: '#2C2416',
                color: '#fff',
              },
            }}
          />
        </CartProvider>
      </body>
    </html>
  );
}
