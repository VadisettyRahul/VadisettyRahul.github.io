import "./globals.css";
import { Kodchasan, Open_Sans } from "next/font/google";
import localFont from "next/font/local";
import ActiveSectionContextProvider from "@/context/active-section-context";
import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "@/context/theme-context";
import Sidebar from "@/components/sideBar";
import Footer from "@/components/footer";
import ScrollToTopButton from "@/components/scrollToTopButton";

// const openSans = Open_Sans({ subsets: ["latin"], display: "swap" });

const myFont = localFont({
  src: [
    { path: "../app/fonts/segoeuithis.ttf", weight: "400" },
    // { path: "../app/fonts/segoeuithibd.ttf", weight: "600" },
  ],
});

export const metadata = {
  title: "Rahul Vadisetty | Personal Portfolio",
  description: "Rahul is a full-stack developer with 8 years of experience.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={myFont.className}>
      <body>
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <div className="text-white overflow-hidden">
              <Sidebar />
              <main className="h-full bg-white dark:bg-[#121212]">
                {children}
                <Footer />
              </main>
              <ThemeSwitch />
              <ScrollToTopButton />
            </div>
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
