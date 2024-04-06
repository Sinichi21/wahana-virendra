"use client";
import Head from "next/head";
import BaseLayout from "@/components/Layout/Baselayout";
import LandingPage from "@/components/Layout/LandingPageLayout";

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
