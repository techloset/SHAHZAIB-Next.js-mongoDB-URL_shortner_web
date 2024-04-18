import Image from "next/image";
import bgimg from "../../../public/accets/images/Register.svg";
import img1 from "../../../public/accets/images/Linkly.svg";
import img2 from "../../../public/accets/images/Property 1=Default.svg";
import Link from "next/link";
import Button from "../../../[components]/Button";

export default function Reset() {
  return (
    <div
      className="bg-cover bg-center h-screen w-100%"
      style={{
        backgroundImage: `url(${bgimg.src})`,
      }}
    >
      <div className="pt-6 flex justify-center">
        <Image src={img1} alt="Linkly" />
      </div>
      <div className="w-100% h-[686px] flex  flex-col items-center mt-32">
        <Image src={img2} alt="123" className="w-[566px] h-[81px]  " />
        <p className="h-[47px] w-[634px] text-white text-center ">
          Linkly is an efficient and easy-to-use URL shortening service that
          streamlines your online experience.
        </p>
        <div className="flex flex-col">
          <input
            type="password"
            placeholder="   Current Password"
            className="w-[660px] h-[76px] rounded-[48px] border-[4px] border-gray-400 bg-slate-800 mt-10 text-white  text-[30px] px-5"
          />
          <input
            type="password"
            placeholder="   New Password"
            className="w-[660px] h-[76px] rounded-[48px] border-[4px] border-gray-400 bg-slate-800 mt-10 text-white  text-[30px] px-5"
          />
          <input
            type="password"
            placeholder="   Confirm New Passward"
            className="w-[660px] h-[76px] rounded-[48px] border-[4px] border-gray-400 bg-slate-800 mt-10 text-white  text-[30px] px-5"
          />
          {/* <button className="w-[268px] h-[48px] rounded-[48px]  border-[1px] bg-blue-700 text-white ml-[200px] mt-10 cursor-pointer">
            Change Passward
          </button> */}
          <Button name="Reset" />
        </div>
      </div>
    </div>
  );
}
