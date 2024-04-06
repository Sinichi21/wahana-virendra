import Image from "next/image";
import React, { useState } from "react";

export default function Payment({ children }) {
  return (
    <>
      <div className="font-roboto mt-[114.6px] w-full h-[375px] bg-[url(/assets/Payment/Ellipse.svg)] text-center">
        <h1 className="font-medium text-[16px] text-[#3E3E3E] pt-[39px]">Payment Metode</h1>
        <p className="font-normal text-[16px] text-[#3E3E3E] mt-[14px]">Payment is getting easier with many options</p>
        <div className="grid grid-cols-6 grid-flow-row justify-around justify-items-center items-center mt-[37px] gap-y-[22px] w-[800px] mx-auto">
          <Image src={"/assets/Payment/qris.svg"} width={102} height={37} alt="QRIS" />
          <Image src={"/assets/Payment/mandiri.svg"} width={120} height={35} alt="Mandiri" />
          <Image src={"/assets/Payment/bni.svg"} width={109} height={35} alt="BNI" />
          <Image src={"/assets/Payment/bri.svg"} width={148} height={35} alt="BRI" />
          <Image src={"/assets/Payment/bca.svg"} width={112} height={35} alt="BCA" />
          <Image src={"/assets/Payment/bpd.svg"} width={34} height={34} alt="BPD" />
          <Image src={"/assets/Payment/alfamart.svg"} width={106} height={34} alt="Alfamart" />
          <Image src={"/assets/Payment/indomaret.svg"} width={102} height={35} alt="Indomaret" />
          <Image src={"/assets/Payment/shopee.svg"} width={97} height={40} alt="Shopee Pay" />
          <Image src={"/assets/Payment/ovo.svg"} width={99} height={32} alt="OVO" />
          <Image src={"/assets/Payment/Dana.svg"} width={139} height={40} alt="DANA" />
          <Image src={"/assets/Payment/gopay.svg"} width={105} height={38} alt="GoPay" />
        </div>
      </div>
    </>
  );
}
