"use client";
import Head from "next/head";
import BaseLayout from "@/components/Layout/Baselayout";
import LandingPage from "@/components/Layout/LandingPageLayout";
import NavigationBar from "@/components/Navbar/Navbar";

export default function Home() {
  return (
    <>
      <Head>
        <title> WAHANA VIRENDRA | Home </title>
      </Head>

      <BaseLayout>
        <LandingPage />
      </BaseLayout>
    </>
  );
}
