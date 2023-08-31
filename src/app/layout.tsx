import "./globals.css";
import type { Metadata } from "next";
import { Poppins, DM_Sans, Inter } from "next/font/google";

import { ReduxProvider } from "@/Redux/provider";
import SProvider from "@/components/SProvider";

import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import LoginModal from "@/components/modal/LoginModal";
import RegisterModal from "@/components/modal/RegisterModal";

import { getServerSession } from "next-auth/next";
import { options } from "./api/auth/[...nextauth]/options";

export const metadata: Metadata = {
  title: "Sastodeal Clone",
  description:
    "Online shopping in Nepal | Buy online in Nepal | Online store nepal | Online clothing store in Nepal | Sastodeal",
};

const dM_Sans = DM_Sans({
  subsets: ["latin"],
  style: "normal",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});
const poppins = Poppins({
  subsets: ["latin"],
  style: "normal",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  style: "normal",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(options);

  return (
    <html lang="en" className={dM_Sans.className}>
      <body className="bg-base-background-color">
        <SProvider session={session}>
          <ReduxProvider>
            <div className="page-wrapper flex flex-col min-h-screen ">
              <div className="flex-1">
                <LoginModal />
                <RegisterModal />
                <Header />
                {children}
              </div>
              <Footer />
            </div>
          </ReduxProvider>
        </SProvider>
      </body>
    </html>
  );
}
