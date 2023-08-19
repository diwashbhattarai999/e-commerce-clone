import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import { Providers } from "@/Redux/provider";
import SignIn from "@/components/register/SignIn";
import SignUp from "@/components/register/SignUp";

export const metadata: Metadata = {
  title: "Sastodeal Clone",
  description:
    "Online shopping in Nepal | Buy online in Nepal | Online store nepal | Online clothing store in Nepal | Sastodeal",
};

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={poppins.className}>
      <body className="bg-base-background-color">
        <Providers>
          <div className="flex flex-col min-h-screen">
            <div className="flex-1">
              <SignIn />
              <SignUp />
              <Header />
              <div className="mt-[7.3rem] mobile:mt-[7.8rem] tablet:mt-32 laptop:mt-44">
                {children}
              </div>
            </div>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
