import Image from "next/image";
import bgimg from "../../../public/accets/images/Register.svg";
import img1 from "../../../public/accets/images/Linkly.svg";
import img2 from "../../../public/accets/images/Property 1=Default.svg";
import sigin from "../../../public/accets/images/sign-in.svg";
import group from "../../../public/accets/images/Group 12.svg";
import Qcircle from "../../../public/accets/images/question-circle.svg";
import kink from "../../../public/accets/images/link.svg";
import Link from "next/link";

export default function Add() {
  return (
    <div
      className="bg-cover bg-center h-screen w-100%"
      style={{
        backgroundImage: `url(${bgimg.src})`,
      }}
    >
      <div className="pt-12">
        <div>
          <div className="flex justify-between">
            <Image src={img1} alt="Linkly" className="flex ml-12" />
            <div className="mr-12 flex">
              <div className="flex w-[150px] h-[60px] bg-slate-600 rounded-3xl mr-4">
                <div className="text-white ml-8 mt-5 h-[18px] w-[43px]  ">
                  <p> Login</p>
                </div>
                <Image
                  src={sigin}
                  alt="signin-btn"
                  className="w-[20px] h-[28px] mt-4 ml-4"
                />
              </div>
              <div className="h-[60px] w-[178px] rounded-full bg-blue-700 ">
                <p className="text-white flex justify-center mt-4">
                  Register Now
                </p>
              </div>
            </div>
          </div>
          <div className="w-100%  flex  flex-col items-center mt-32">
            <Image src={img2} alt="123" className="w-[566px] h-[81px]  " />
            <p className="h-[47px] w-[634px] text-white text-center ">
              Linkly is an efficient and easy-to-use URL shortening service that
              streamlines your online experience.
            </p>
          </div>
          <div className="flex justify-center mt-10">
            <div className="flex flex-row relative">
              <span className="h-[25px] w-[25] absolute ml-10 mt-8 ">
                <Image src={kink} alt="Link" />
              </span>
              <input
                type="text"
                placeholder="                Enter the link here"
                className="w-[660px] h-[76px] rounded-[48px] border-[4px] border-gray-400 bg-slate-800 "
              />
              <button className="w-[178px] h-[60px] rounded-[100px]  border-[1px] bg-blue-700 text-white ml-[480px] mt-2 absolute">
                Shorten Now!
              </button>
            </div>
          </div>
          <div className="flex mt-8 justify-center  ">
            <Image src={group} alt="" className="" />
            <p className="text-white mt-1">Auto Paste to Clipboard </p>
          </div>
          <p className="text-white flex justify-center mt-5 ">
            You can create <span className="text-red-700 ml-1 mr-1"> 05 </span>{" "}
            more links. Register Now to enjoy Unlimited usage
            <Image src={Qcircle} alt="" className="ml-3 " />
          </p>
        </div>
      </div>
      <div className="flex justify-self-end   justify-center mt-40">
        <div className="w-[230  px] h-[10px] text-white flex ">
          <Link href={"/register"} className="text-blue-700 underline">
            Register Now
          </Link>
          to enjoy Ulimited History
        </div>
      </div>
    </div>
  );
}
