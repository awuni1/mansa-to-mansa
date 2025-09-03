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
  icons: {
    icon: [

      // { url: "/faviconupdate.ico" },
      // { url: "/mansaa-favicon.png", sizes: "16x16", type: "image/png" },
      // { url: "/mansaa-favicon.png", sizes: "32x32", type: "image/png" },
    ],
    // apple: [
    //   { url: "/apple-touch-icon.png", sizes: "180x180" },
    // ],
    // other: [
    //   { rel: "mask-icon", url: "/safari-pinned-tab.svg" },
    // ],
  },
  // manifest: "/site.webmanifest",
  // other: {
  //   "msapplication-config": "/browserconfig.xml",
  // },
};

// ✅ Move themeColor here
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
