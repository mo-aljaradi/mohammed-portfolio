import localFont from "next/font/local";
import "./globals.css";

const ibmPlexSansArabic = localFont({
  src: [
    { path: "./fonts/IBMPlexSansArabic-Regular.ttf", weight: "400", style: "normal" },
    { path: "./fonts/IBMPlexSansArabic-Medium.ttf", weight: "500", style: "normal" },
    { path: "./fonts/IBMPlexSansArabic-SemiBold.ttf", weight: "600", style: "normal" },
    { path: "./fonts/IBMPlexSansArabic-Bold.ttf", weight: "700", style: "normal" },
  ],
  variable: "--font-geist-sans",
});

const ibmPlexMono = localFont({
  src: [
    { path: "./fonts/IBMPlexMono-Regular.ttf", weight: "400", style: "normal" },
    { path: "./fonts/IBMPlexMono-Medium.ttf", weight: "500", style: "normal" },
  ],
  variable: "--font-ibm-plex-mono",
});

export const metadata = {
  metadataBase: new URL("https://mohammed-portfolio.vercel.app"),
  title: {
    default: "محمد الجرادي | Software Engineer × AI Builder",
    template: "%s | محمد الجرادي",
  },
  description:
    "طالب علوم حاسوب وبناء تطبيقات ويب وديسكتوب، بستكشف أدوات وAI Agents وبشارك اللي بتعلمه بالمدونة.",
  keywords: ["محمد الجرادي", "Mohammed Al-Jaradi", "Software Engineer", "AI Builder", "مطور برمجيات"],
  authors: [{ name: "محمد الجرادي" }],
  openGraph: {
    title: "محمد الجرادي | Software Engineer × AI Builder",
    description:
      "طالب علوم حاسوب وبناء تطبيقات ويب وديسكتوب، بستكشف أدوات وAI Agents.",
    url: "https://mohammed-portfolio.vercel.app",
    siteName: "محمد الجرادي",
    locale: "ar_AR",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={`${ibmPlexSansArabic.variable} ${ibmPlexMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}