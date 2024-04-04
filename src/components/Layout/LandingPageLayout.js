import Image from "next/image";
import React, { useState } from "react";

export default function LandingPage({ children }) {
  const [selectedOption, setSelectedOption] = useState("option1");

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <>
      <div>
        <Image src={"/assets/LandingPage/hero1.svg"} alt="Wahana viandra" width={1440} height={502} layout="responsive" />s
        <div className="w-[861px] h-[304px] mx-auto bg-white rounded-xl shadow-md overflow-hidden p-8 drop-shadow-lg flex flex-col">
          <div className="flex flex-row justify-between">
            <button className=" flex flex-row  rounded-full outline-[#FFC947] outline outline-offset-2 outline-2 w-[145px] hover:bg-[#FFC947] focus:ring-2 focus:outline-none focus:ring-[#F7E2B0] active:bg-[#DBA533] ">
              <Image src={"/assets/LandingPage/ship.svg"} alt="Wahana viandra" width={16} height={16} className="ml-[20px] my-[10px]" />
              <h2 className="font-roboto font-semibold text-[14px] ml-[10px] mr-[20px] my-[10px]">Ship Ticket</h2>
            </button>
            <div className="flex flex-row font-roboto font-normal text-[10.67px] my-auto text-center">
              <div className="mr-[17px]">
                <input type="radio" id="option1" name="options" value="option1" checked={selectedOption === "option1"} onChange={handleOptionChange} className="mr-2" />
                <label htmlFor="option1">One-way</label>
              </div>
              <div>
                <input type="radio" id="option2" name="options" value="option2" checked={selectedOption === "option2"} onChange={handleOptionChange} className="mr-2" />
                <label htmlFor="option2">Round-trip</label>
              </div>
            </div>
          </div>

          <div className="basis-1 flex"></div>
        </div>
      </div>

      {/* Special Promo section */}
      <div className="grid grid-rows-2 grid-flow-col justify-items-center mt-[113px]">
        <div className="row-span-2 bg-[#FFF6E1] rounded-[15px] w-[422px] h-[243px] flex">
          <Image src={"/assets/LandingPage/promo1.svg"} alt="Wahana viandra" width={204} height={243} className="" />
          <div className="font-roboto  mx-[10px]">
            <h1 className="font-semibold text-[24px] my-[24px]">Special Promo</h1>
            <p className="font-normal text-[12px]">Lorem Ipsum is Simple Dummy text of the printing and typesetting</p>
            <button className="w-[122px] h-[37px] bg-[#FFC947] font-semibold text-[18px] text-center rounded-[48px] mt-[74px] hover:bg-[#DBA533] focus:ring-4  focus:ring-[#F7E2B0] active:bg-[#DBA533]">
              <h1 className="my-auto">Book Now</h1>
            </button>
          </div>
        </div>
        <div className=" bg-[#FFE2DF] rounded-[15px] w-[203.95px] h-[111px] flex">
          <Image src={"/assets/LandingPage/promo1.svg"} alt="Wahana viandra" width={94} height={111} className="" />
          <div className="font-roboto  mx-[10px]">
            <h1 className="font-semibold text-[12px] my-[12px]">Special Promo</h1>
            <p className="font-normal text-[10px]">Lorem Ipsum is Simple Dummy </p>
            <button className="w-[62.65px] h-[19.22px] bg-[#FFC947] font-semibold text-[9.24px] text-center rounded-[48px] mt-[15px] hover:bg-[#DBA533] focus:ring-2  focus:ring-[#F7E2B0] active:bg-[#DBA533]">
              <h1 className="my-auto">Book Now</h1>
            </button>
          </div>
        </div>
        <div className=" bg-[#D6FFE1] rounded-[15px] w-[203.95px] h-[111px] flex">
          <Image src={"/assets/LandingPage/promo1.svg"} alt="Wahana viandra" width={94} height={111} className="" />
          <div className="font-roboto  mx-[10px]">
            <h1 className="font-semibold text-[12px] my-[12px]">Special Promo</h1>
            <p className="font-normal text-[10px]">Lorem Ipsum is Simple Dummy </p>
            <button className="w-[62.65px] h-[19.22px] bg-[#FFC947] font-semibold text-[9.24px] text-center rounded-[48px] mt-[15px] hover:bg-[#DBA533] focus:ring-2  focus:ring-[#F7E2B0] active:bg-[#DBA533]">
              <h1 className="my-auto">Book Now</h1>
            </button>
          </div>
        </div>
        <div className="row-span-2 bg-[#EEFCFF] rounded-[15px] w-[422px] h-[243px] flex">
          <Image src={"/assets/LandingPage/promo1.svg"} alt="Wahana viandra" width={204} height={243} className="" />
          <div className="font-roboto mx-[10px]">
            <h1 className="font-semibold text-[24px] my-[24px]">Special Promo</h1>
            <p className="font-normal text-[12px]">Lorem Ipsum is Simple Dummy text of the printing and typesetting</p>
            <button className="w-[122px] h-[37px] bg-[#FFC947] font-semibold text-[18px] text-center rounded-[48px] mt-[74px] hover:bg-[#DBA533] focus:ring-4  focus:ring-[#F7E2B0] active:bg-[#DBA533]">
              <h1 className="my-auto">Book Now</h1>
            </button>
          </div>
        </div>
      </div>

      {/*  Hot Deals Sections */}

      <div className="w-full  relative overflow-hidden h-[1246.11px] mt-[17px] shadow-2xl shadow-black">
        <div className="absolute inset-y-[150px] left-0 w-full bg-[#008AA1] h-[1100.11px]  transform -skew-y-6 origin-top-left opacity-[14%]"></div>
        <div className="flex  mt-[183px] ml-[80px] ">
          <Image src={"/assets/LandingPage/fire.svg"} alt="Wahana viandra" width={41} height={41} className="ml-[17px] " />
          <h1 className="ml-[17px] font-roboto font-semibold text-[32px]">Hot Deals</h1>
        </div>
        <div className="flex  mt-[18px] justify-center">
          <button className=" bg-[url('/assets/LandingPage/deals1.svg')] w-[255px] h-[327px] font-roboto mx-[10px] text-white text-center rounded-[12.47px] ">
            <div className="mt-[254.42px] mx-auto">
              <h1 className="font-bold text-[26.61px] mb-[2px]">50% Discount</h1>
              <p className="font-bold text-[13.3px]">Ticket to Gili Trawangan</p>
            </div>
          </button>
          <div className="bg-[url('/assets/LandingPage/deals2.svg')] w-[255px] h-[327px] font-roboto mx-[10px] text-white text-center rounded-[12.47px]">
            <div className="mt-[254.42px] mx-auto">
              <h1 className="font-bold text-[26.61px] mb-[2px]">Special Price</h1>
              <p className="font-bold text-[13.3px]">Galungan Kuningan Day</p>
            </div>
          </div>
          <div className="bg-[url('/assets/LandingPage/deals3.svg')] w-[255px] h-[327px] font-roboto mx-[10px] text-white text-center rounded-[12.47px]">
            <div className="mt-[254.42px] mx-auto">
              <h1 className="font-bold text-[26.61px] mb-[2px]">40% Off</h1>
              <p className="font-bold text-[13.3px]">Gili Tour</p>
            </div>
          </div>
          <div className="bg-[url('/assets/LandingPage/deals4.svg')] w-[255px] h-[327px] font-roboto mx-[10px] text-white text-center rounded-[12.47px]">
            <div className="mt-[254.42px] mx-auto">
              <h1 className="font-bold text-[26.61px] mb-[2px]">Family Packed</h1>
              <p className="font-bold text-[13.3px]">Special price</p>
            </div>
          </div>
        </div>
        <div className="w-[1080px] h-[369px] bg-[#FFF6E1] rounded-[15px] ">
          <h1></h1>
        </div>
      </div>
    </>
  );
}
