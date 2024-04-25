import Image from "next/image";
import bgimg from "../../../public/accets/images/Register.svg";
import img1 from "../../../public/accets/images/Linkly.svg";
import kink from "../../../public/accets/images/link.svg";
import bell from "../../../public/accets/images/chevron-down.svg";
import arro from "../../../public/accets/images/arrow-right.svg";
import group from "../../../public/accets/images/Group 12.svg";
import A from "../../../public/accets/images/icons8-clock.svg";
import B from "../../../public/accets/images/chart-simple.svg";
import filImg from "../../../public/accets/images/filter.svg";
import C from "../../../public/accets/images/cog.svg";
import { getServerSession } from "next-auth";
import { authOptions } from "../../../libs/AuthOptions";
import MainPage from "../../../[components]/MainPage";

export default async function Add() {
  const session = await getServerSession(authOptions);

  return (
    <div
      className="bg-cover bg-center h-100% w-100%"
      style={{
        backgroundImage: `url(${bgimg.src})`,
      }}
    >
      <div className="h-44 bg-blue-950">
        <div className="flex pt-8 justify-around ">
          <Image src={img1} alt="Linkly" className="flex ml-12" />
          <div className="flex flex-row relative">
            <span className="h-[25px] w-[25] absolute ml-10 mt-8 ">
              <Image src={kink} alt="Link" />
            </span>
            <input
              type="text"
              placeholder="                Enter custom slug"
              className="w-[1100px] h-[76px] rounded-[48px] border-[4px] border-gray-400 bg-slate-800 text-white  text-[30px] px-5"
            />
            <button className="w-[268px] h-[68px] rounded-[100px]  border-[1px] bg-blue-700 text-white ml-[827px] mt-1 absolute cursor-pointer">
              Shorten Now!
            </button>
          </div>
          <div className="flex w-[150px] h-[60px] bg-slate-600 rounded-3xl">
            <div className="text-white ml-5 mt-2">
              <p> Welcome</p>
              <p>{session?.user?.name}</p>
            </div>
            <Image
              src={bell}
              alt="chevron-down"
              className="w-[20px] h-[28px] mt-4 ml-4"
            />
          </div>
          <div className="h-[60px] w-[60px] rounded-full bg-blue-700 ">
            <Image
              src={arro}
              alt="bell"
              className="w-[25px] h-[25px] ml-5 mt-4"
            />
          </div>
        </div>
        <div className="flex mt-5 justify-center  ">
          <Image src={group} alt="" className="" />
          <p className="text-white mt-1">Auto Paste to Clipboard </p>
        </div>
      </div>

      <div className="flex h-[70px] bg-slate-900 justify-center">
        <div className="flex">
          <div className="flex">
            <div className="flex mr-16">
              <Image src={A} alt="" className="" />
              <p className="text-white font-bold mt-6 ml-2">History</p>
            </div>
            <div className="flex mr-16">
              <Image src={B} alt="" className="" />
              <p className="text-white font-bold mt-6 ml-2">Statistics</p>
            </div>
            <div className="flex mr-16">
              <Image src={C} alt="" className="" />
              <p className="text-white font-bold mt-6 ml-2">Settings</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-10">
        <div className="w-[1421px] h-[44px]  flex justify-between">
          <div className="text-white">History</div>
          <div className="flex w-[114px] h-[44px] border rounded-full bg-slate-400 justify-center items-center ">
            <Image
              src={filImg}
              alt="filter"
              className="w-[15px] h-[28px] mr-2 "
            />
            <div className="text-white">Filter</div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-5">
      <MainPage/>
      </div>
    </div>
  );
}
