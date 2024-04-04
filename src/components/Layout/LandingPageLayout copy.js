import Image from "next/image";
export default function LandingPage({ children }) {
  return (
    <>
      <div className="w-screen h-[502px] bg-[url('/assets/landingPage/hero.svg')] flex flex-col justify-center items-center rounded-b-md">
        {/* <Image className="static top-0" src={"/assets/LandingPage/hero.svg"} width={1440} height={502} /> */}
        <h1 className=" font-roboto font-bold text-[48px] text-white basis-[30px] indent-0">Welcome to</h1>
        <h1 className=" font-roboto font-black text-[96px] text-[#FFC947] basis-[80px]">Wahana Viendra</h1>
      </div>
    </>
  );
}
