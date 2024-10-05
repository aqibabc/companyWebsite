import Image, { StaticImageData } from "next/image";
import arrow from "../../assets/image/arrow.png";
import Link from "next/link";
type Card = {
  manimg: string | StaticImageData;
  img: string | StaticImageData;
  tittle: string;
  description: string;
  des: string;
  review: string;
};
export default function GreatSoftCard({
  manimg,
  img,
  tittle,
  description,
  des,
  review,
}: Card) {
  return (
    <>
      <div className="lg:flex items-center justify-around mb-8">
        <div className="w-[100%] mb-5 lg:m-0 lg:w-[40%]">
          <h3 className="text-[18px] md:text-[28px] font-semibold mb-[15px] md:mb-[30px]">
            {tittle}
          </h3>
          <p className="mb-[20px] font-normal">{description}</p>
          <p className="mb-[20px] font-normal">{des}</p>
          <p className="mb-[25px] ms-[15px] text-[#F76680] italic text-[16px] font-normal">
            "{review}"
          </p>
          <div className="flex items-center">
            <Image
              src={manimg}
              className="rounded-full w-[25px] h-[25px] ml-[10px]"
              alt="UniqueTech"
            />
            <Link href="/" className="text-[#171616] ms-[0.5rem]">
              <p className="text-[16px]">Jeewa Markram</p>
              <span className="text-[#718096] text-[13px]">CEO</span>
            </Link>
          </div>
        </div>
        <div className="w-[100%] lg:w-[40%]">
          <Image src={img} className="w-[100%] h-[100%]" alt="UniqueTech" />
        </div>
      </div>
    </>
  );
}
