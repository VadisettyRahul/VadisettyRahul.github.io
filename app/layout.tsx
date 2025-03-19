import "./globals.css";
// import localFont from "next/font/local";
import ActiveSectionContextProvider from "@/context/active-section-context";
import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "@/context/theme-context";
import Sidebar from "@/components/sideBar";
import Footer from "@/components/footer";
import ScrollToTopButton from "@/components/scrollToTopButton";

// const myFont = localFont({
//   src: [{ path: "../app/fonts/segoeuithis.ttf", weight: "400" }],
// });

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
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Mona+Sans:ital,wght@0,200..900;1,200..900&display=swap"
          rel="stylesheet"
        />
      </head>
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
