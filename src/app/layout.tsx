import { type Metadata, type Viewport } from "next";
import { Geist_Mono } from "next/font/google";
import { poppins } from "../ui/fonts";
import "../styles/globals.css";
import { ThemeProvider } from "./providers/ThemeProvider";
import { ThemeToggle } from "@/components/DarkModeToggle";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mansa-to-Mansa",
  description: "Building the Future, One Mansa at a Time",
  manifest: '/manifest.json',
  themeColor: '#ffffff',
  icons: {
    icon: [
       
      // { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      // { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/web-app-manifest-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/web-app-manifest-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
  // manifest: "/site.webmanifest",
  // other: {
  //   "msapplication-config": "/browserconfig.xml",
  // },
  openGraph: {
    title: 'Mansa-to-Mansa',
    description: 'Connecting opportunities across communities.',
    url: 'https://www.mansa-to-mansa.org',
    siteName: 'Mansa-to-Mansa',
    images: [
      {
        url: 'https://www.mansa-to-mansa.org/web-app-manifest-512x512whatsapp.png',
        width: 512,
        height: 512,
        alt: 'Mansa-to-Mansa Logo',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mansa-to-Mansa',
    description: 'Connecting opportunities across communities.',
    images: ['https://www.mansa-to-mansa.org/android-chrome-512x512.png'],
  },
};


export const viewport: Viewport = {
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${poppins.className} ${geistMono.variable} antialiased bg-[#F4F6FB] dark:bg-[#0D1116] text-black dark:text-white`}
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <ThemeToggle />
        </ThemeProvider>
      </body>
    </html>
  );
}
