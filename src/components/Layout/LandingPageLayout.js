import Image from "next/image";
import React, { useState } from "react";
import Slide from "./slide";
import Payment from "../Card/Payment";
import { Label } from "@mui/icons-material";

export default function LandingPage({ children }) {
  const [selectedOption, setSelectedOption] = useState("option1");
  const [departurePort, setDeparturePort] = useState("Padangbai");
  const [destinationPort, setDestinationPort] = useState("Gili Trawangan");
  const [departureAdd, setDepartureAdd] = useState("Padangbai Port, Karangasem, bali");
  const [destinationAdd, setDestinationAdd] = useState("Gili Trawangan Port, Gili Island, Lombok");

  const data = [
    { id: "Padangbai", value: "Padangbai Port, Karangasem, bali" },
    { id: "Gili Trawamgan", value: "Gili Trawangan Port, Gili Island, Lombok" },
    { id: "Tanjung Priok", value: "Tanjung Priok Port,  Nort Jakarta, Jakarta" },
  ];

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleDepartureChange = (e) => {
    setDeparturePort(e.target.value);
    const results = data.filter((item) => item.value.toLowerCase().includes(e.target.value.toLowerCase()));
    setDeparturePort(results);
  };

  const handleDestinationChange = (e) => {
    setDestinationPort(e.target.value);
    const results = data.filter((item) => item.value.toLowerCase().includes(e.target.value.toLowerCase()));
    setDestinationPort(results);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Data pemesanan:", { departurePort, destinationPort, setSelectedOption });
  };
  return (
    <>
      <div className="pt-[382px] bg-no-repeat bg-[url(/assets/LandingPage/hero1.svg)] w-full h-[686px] ">
        {/* <Image src={"/assets/LandingPage/hero1.svg"} alt="Wahana viandra" width={1440} height={502} layout="responsive" /> */}
        <div className="w-[861px] h-[304px] mx-auto bg-white rounded-xl shadow-md overflow-hidden p-8 drop-shadow-lg flex flex-col ">
          <div className="flex flex-row justify-between">
            <button className=" flex flex-row  rounded-[31px] outline-[#FFC947] outline outline-offset-2 outline-2 w-[145px] hover:bg-[#FFC947] focus:ring-2 focus:outline-none focus:ring-[#F7E2B0] active:bg-[#DBA533] ">
              <Image src={"/assets/LandingPage/ship.svg"} alt="Ship" width={16} height={16} className="ml-[20px] my-[10px]" />
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
          <div className="flex justify-center mt-[23px]">
            <div className="flex gap-[23px]">
              <form className="bg-[#E5FBFF] bg-no-repeat w-[224px] h-[75px] rounded-[8px] flex justify-center items-center">
                <div className="w-[150px]  h-[80px]">
                  <label className="font-roboto font-normal text-[10px]">FROM</label>
                  <h1 className="font-roboto font-semibold text-[14px] w-[150px]">{departurePort}</h1>
                  <h2 className="font-roboto font-normal text-[10px]">{departureAdd}</h2>
                  {/* <select id="departure" value={departurePort} onChange={handleDepartureChange} className="font-roboto font-semibold text-[14px] w-[150px] appearance-none bg-[#E5FBFF]">
                    <option value="">Departure Port</option>
                    <option value="Padangbai">Padangbai</option>
                    <option value="Gili Trawanagan">Gili Trawanagan</option>
                    <option value="Tanjung Priok">Tanjung Priok</option>
                  </select>
                  <div className="font-roboto font-normal text-[10px]">
                    {data.map((data) => (
                      <p key={data.id}>{data.value}</p>
                    ))}
                  </div> */}
                </div>
                <Image src={"/assets/LandingPage/ship.svg"} alt="Ship" width={32} height={32} className="ml-[20px] my-[10px]" />
              </form>
              <div className="bg-[#E5FBFF] w-[224px] h-[75px] rounded-[8px] flex justify-center items-center">
                <div className="relatif w-[150px] h-[80px] ">
                  <label className="font-roboto font-normal text-[10px]">FROM</label>
                  <h1 className="font-roboto font-semibold text-[14px] w-[150px]">{destinationPort}</h1>
                  <h2 className="font-roboto font-normal text-[10px]">{destinationAdd}</h2>
                  <div className="w-[50px] h-[50px]"></div>
                  {/* <select id="destination" value={destinationPort} onChange={setDestinationPort} className="font-roboto font-semibold text-[14px] w-[150px] appearance-none bg-[#E5FBFF]">
                    <option value="">Destination Port</option>
                    <option value="Padangbai">Padangbai</option>
                    <option value="Gili Trawanagan">Gili Trawanagan</option>
                    <option value="Tanjung Priok">Tanjung Priok</option>
                  </select>
                  <div className="font-roboto font-normal text-[10px]">
                    {data.map((data) => (
                      <p key={data.id}>{data.value}</p>
                    ))}
                  </div> */}
                </div>
                <Image src={"/assets/LandingPage/ship.svg"} alt="Ship" width={32} height={32} className="ml-[20px] my-[10px]" />
              </div>
            </div>
            <div className="flex mx-[10px]">
              <div className="w-[95px] h-[75px] bg-[#E5FBFF] border-r-[1px]"></div>
              <div className="w-[95px] h-[75px]  bg-[#E5FBFF] border-l-[1px]"></div>
            </div>
            <div className="w-[95px] h-[75px] bg-[#E5FBFF] ml-[10px]"></div>
          </div>
        </div>
      </div>

      {/* Special Promo section */}
      <div className="grid grid-rows-2 grid-flow-col justify-center items-center mt-[113px]">
        <div className="row-span-2 bg-[#FFF6E1] mx-2 rounded-[15px] w-[422px] h-[243px] flex">
          <Image src={"/assets/LandingPage/promo1.svg"} alt="promo1" width={204} height={243} className="" />
          <div className="font-roboto  mx-[10px]">
            <h1 className="font-semibold text-[24px] my-[24px]">Special Promo</h1>
            <p className="font-normal text-[12px]">Lorem Ipsum is Simple Dummy text of the printing and typesetting</p>
            <button className="w-[122px] h-[37px] bg-[#FFC947] font-semibold text-[18px] text-center rounded-[48px] mt-[74px] hover:bg-[#DBA533] focus:ring-4  focus:ring-[#F7E2B0] active:bg-[#DBA533]">
              <h1 className="my-auto">Book Now</h1>
            </button>
          </div>
        </div>
        <div className=" bg-[#FFE2DF] rounded-[15px] mx-2 w-[203.95px] h-[111px] flex">
          <Image src={"/assets/LandingPage/promo1.svg"} alt="promo2" width={94} height={111} className="" />
          <div className="font-roboto  mx-[10px]">
            <h1 className="font-semibold text-[12px] my-[12px]">Special Promo</h1>
            <p className="font-normal text-[10px]">Lorem Ipsum is Simple Dummy </p>
            <button className="w-[62.65px] h-[19.22px] bg-[#FFC947] font-semibold text-[9.24px] text-center rounded-[48px] mt-[15px] hover:bg-[#DBA533] focus:ring-2  focus:ring-[#F7E2B0] active:bg-[#DBA533]">
              <h1 className="my-auto">Book Now</h1>
            </button>
          </div>
        </div>
        <div className=" bg-[#D6FFE1] rounded-[15px] mx-2 w-[203.95px] h-[111px] flex">
          <Image src={"/assets/LandingPage/promo1.svg"} alt="promo3" width={94} height={111} className="" />
          <div className="font-roboto  mx-[10px]">
            <h1 className="font-semibold text-[12px] my-[12px]">Special Promo</h1>
            <p className="font-normal text-[10px]">Lorem Ipsum is Simple Dummy </p>
            <button className="w-[62.65px] h-[19.22px] bg-[#FFC947] font-semibold text-[9.24px] text-center rounded-[48px] mt-[15px] hover:bg-[#DBA533] focus:ring-2  focus:ring-[#F7E2B0] active:bg-[#DBA533]">
              <h1 className="my-auto">Book Now</h1>
            </button>
          </div>
        </div>
        <div className="row-span-2 bg-[#EEFCFF] mx-2 rounded-[15px] w-[422px] h-[243px] flex">
          <Image src={"/assets/LandingPage/promo1.svg"} alt="promo4" width={204} height={243} className="" />
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

      <div className="w-full  relative overflow-hidden h-[1246.11px] mt-[17px] ">
        <div className="absolute inset-y-[150px] left-0 w-full bg-[#008AA1] h-[1100.11px]  transform -skew-y-6 origin-top-left opacity-[14%] -z-10"></div>
        <div className=" flex  mt-[183px] ml-[150px] ">
          <Image src={"/assets/LandingPage/fire.svg"} alt="fire" width={41} height={41} className="ml-[17px] " />
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
        <div className="relative mx-auto w-[1080px] h-[369px] bg-[#FFF6E1] rounded-[15px]  mt-[247px]">
          <Image src={"/assets/LandingPage/about.svg"} alt="About Us" width={580} height={329} className="absolute -top-[71px] -left-[104px]" />
          <div className="ml-[520px] flex w-[447px]">
            <div className=" flex flex-col items-start">
              <div className="mt-[52px] w-[447px]">
                <h1 className="font-roboto font-bold text-[#3E3E3E] text-[28px]">Why Choose Wahana Virendra?</h1>
              </div>
              <div className="my-[10px] w-[447px]">
                <p className="font-roboto font-normal text-[#000000] text-[14px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit egestas nunc, urna consequat tortor iaculis nulla netus.</p>
              </div>
              <div className="font-roboto font-normal text-[#000000] text-[13px] justify-start">
                <ul c>
                  <li className="my-[5px]">✔️ Best price range</li>
                  <li className="my-[5px]">✔️ Experienced for more than 10 years</li>
                  <li className="my-[5px]">✔️ A variety of accommodations to choose from</li>
                </ul>
              </div>
              <button className="w-[114px] h-[41px] bg-[#008AA1] font-semibold text-white text-[18px] text-center rounded-[26px] mt-[10px] hover:bg-[#5AE2E0] focus:ring-4  focus:ring-[#5AE2E0] active:bg-[#006B8A]">
                <h1 className="my-auto">Book Now</h1>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Feedback */}

      <Slide />

      {/* Payment Metode */}

      <Payment />
    </>
  );
}
