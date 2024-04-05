import Image from "next/image";
export default function NavigationBar({ children }) {
  return (
    <>
      <nav className="flex h-[80px] w-full backdrop-blur-sm fixed justify-center items-center z-20">
        <div className="container w-[1300px] mx-[70px] flex justify-between items-center">
          <div className="text-white font-bold">
            Wahana{" "}
            <span>
              <br></br>
            </span>{" "}
            Viandra
          </div>
          <ul className="flex space-x-4 items-center font-roboto mx-[24px]">
            <li>
              <a href="#" className="text-white font-medium text-[18px] hover:text-[#FFC947] active:text-[#FFC947] focus:text-[#FFC947]">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-white font-medium text-[18px] hover:text-[#FFC947] active:text-[#FFC947] focus:text-[#FFC947]">
                Gallery
              </a>
            </li>
            <li>
              <a href="#" className="text-white font-medium text-[18px] hover:text-[#FFC947] active:text-[#FFC947] focus:text-[#FFC947]">
                Booking Check
              </a>
            </li>
            <li>
              <a href="#" className="text-white font-medium text-[18px] hover:text-[#FFC947] active:text-[#FFC947] focus:text-[#FFC947]">
                About Us
              </a>
            </li>
            <li>
              <button className="group flex flex-row items-center rounded-[26px] outline-white outline outline-offset-2 outline-1 w-[119px] h-[41px] hover:bg-[#008AA1] focus:ring-2 focus:outline-none focus:ring-[#5AE2E0] active:[#008AA1] ">
                <Image src={"/assets/LandingPage/user.svg"} alt="user" width={16} height={16} className="ml-[15px] mr-[14px] group-hover:fill-white group-active:fill-white" />
                <h2 className="font-roboto font-medium text-[18px] mr-[20px] my-[10px] text-white group-hover:text-white group-active:text-white ">Login</h2>
              </button>
            </li>
            <li>
              <button className="group flex flex-row items-center rounded-[26px] outline-white bg-white outline outline-offset-2 outline-1 w-[119px] h-[41px] hover:bg-[#008AA1] focus:ring-2 focus:outline-none focus:ring-[#5AE2E0] active:bg-[#008AA1] ">
                <h2 className="font-roboto font-medium text-[18px] mr-[20px] my-[10px] text-[#008AA1] group-hover:text-white group-active:text-white mx-auto">Register</h2>
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
