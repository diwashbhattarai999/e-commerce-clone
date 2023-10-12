import "./globals.css";
import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";

import { ReduxProvider } from "@/store/provider";
import SProvider from "@/components/reusable/SProvider";

import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import LoginModal from "@/components/modal/LoginModal";
import RegisterModal from "@/components/modal/RegisterModal";

import { getServerSession } from "next-auth/next";
import { options } from "./api/auth/[...nextauth]/options";
import { getProviders } from "next-auth/react";
import ForgotModal from "@/components/modal/ForgotModal";

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

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(options);
  const providers = await getProviders();
  const providerArray = providers ? Object.values(providers) : [];

  return (
    <html lang="en" className={dM_Sans.className}>
      <body className="bg-base-background-color">
        <SProvider session={session}>
          <ReduxProvider>
            <div className="page-wrapper flex flex-col min-h-screen ">
              <div className="flex-1">
                <LoginModal providers={providerArray} />
                <RegisterModal />
                <ForgotModal />
                <Header />
                <div className="mt-[7.6rem] tablet:mt-[8.5rem] laptop:mt-[11.4rem]">
                  {children}
                </div>
              </div>
              <Footer />
            </div>
          </ReduxProvider>
        </SProvider>
      </body>
    </html>
  );
}
