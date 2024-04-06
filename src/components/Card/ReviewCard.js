import Image from "next/image";
import StarRateIcon from "@mui/icons-material/StarRate";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import StarOutlineIcon from "@mui/icons-material/StarOutline";

export default function Card({ image, name, rating, review }) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating - fullStars >= 0.5;
  return (
    <>
      <div className="w-[346.21px] h-[242.87px] rounded-[3.37px] border-[0.84px] flex flex-col justify-center items-center">
        <div className="flex w-[305.74px] h-[50.58px] justify-between ">
          <Image className="" src={image} alt={name} width={50.58} height={50.58} />
          <div className="flex">
            {Array.from({ length: fullStars }).map((_, index) => (
              <StarRateIcon key={index} className="text-yellow-400" />
            ))}
            {hasHalfStar && <StarHalfIcon className="text-yellow-400" />}
            {Array.from({ length: 5 - fullStars - (hasHalfStar ? 1 : 0) }).map((_, index) => (
              <StarOutlineIcon key={fullStars + index} className="text-yellow-400" />
            ))}
          </div>
        </div>
        <div className="w-[305.74px] h-[109.59px] font-roboto">
          <h1 className="font-semibold text-[18.55px] text-[#3E3E3E]">{name}</h1>
          <p className="font-normal text-[13.49px] text-[#3E3E3E]">{review}</p>
        </div>
      </div>
    </>
  );
}
