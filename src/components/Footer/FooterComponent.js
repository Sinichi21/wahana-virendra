import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";

export default function FooterComponent({ children }) {
  return (
    <>
      <div className="w-full ">
        <div className="h-[376px] w-full bg-[url(/assets/Footer/footer.svg)] flex font-roboto justify-evenly items-center">
          <div className="w-[422px] h-[127px]">
            <h1 className="font-bold text-[#FBBC05] mb-[8px] text-[24px]">Wahana Virendra</h1>
            <p className="font-normal text-[15px] text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit egestas nunc, urna consequat tortor iaculis nulla netus. Orci tincidunt mattis phasellus arcu ultrices in mi pulvinar. Odio placerat maecenas mi tincidunt diam.
            </p>
          </div>
          <div className="w-[140px] h-[127px] text-white">
            <h1 className="font-bold text-[20px] mb-[11px]">Menu</h1>
            <ul className="font-normal text-[16px]">
              <li>
                <a href="/">home</a>
              </li>
              <li>
                <a href="/Gallery">Gallery</a>
              </li>
              <li>
                <a href="BookingCheck">Booking Check</a>
              </li>
              <li>
                <a href="AboutUs">About Us</a>
              </li>
            </ul>
          </div>
          <div className="w-[140px] h-[127px]">
            <h1 className="font-bold text-white mb-[8px] text-[24px]">Support</h1>
            <p className="font-normal text-[16px] text-white">Syarat & Ketentuan</p>
          </div>
          <div className="w-[140px] h-[127px]">
            <h1 className="font-bold text-white mb-[8px] text-[24px]">Follow us at</h1>
            <div className="flex justify-around">
              <a href="https://www.instagram.com/ h-[25px]">
                <InstagramIcon className="text-white" />
              </a>
              <a href="https://www.facebook.com/">
                <FacebookIcon className="text-white h-[25px]" />
              </a>
              <a href="https://www.youtube.com/ h-[25px]">
                <YouTubeIcon className="text-white" />
              </a>
            </div>
          </div>
        </div>
        <div className="bg-[#07B5B8] w-full h-[74px] font-roboto font-normal text-white text-[20px] justify-center flex items-center">Design & Develop with ♡</div>
      </div>
    </>
  );
}
