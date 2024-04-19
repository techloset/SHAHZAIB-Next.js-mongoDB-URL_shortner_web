import Image from "next/image";
import bgimg from "../../../public/accets/images/Register.svg";
import img1 from "../../../public/accets/images/Linkly.svg";
import kink from "../../../public/accets/images/link.svg";
import bell from "../../../public/accets/images/chevron-down.svg";
import arro from "../../../public/accets/images/arrow-right.svg";
import Link from "next/link";
import { getServerSession } from "next-auth";
import { authOptions } from "../../../libs/AuthOptions";
import Button from "../../../[components]/Button";

export default async function Add() {
  const session = await getServerSession(authOptions)
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
          </div>
        </div>
      </div>
      <div className="w-100% h-[686px] flex  flex-col items-center mt-32">
        <div className="flex flex-col">
          <div className="flex flex-row relative">
            <span className="h-[25px] w-[25] absolute ml-10 mt-16">
              <Image src={kink} alt="Link" className="" />
            </span>
            <input
              type="text"
              placeholder="                  Enter the link to shorten here"
              className="w-[1100px] h-[76px] rounded-[48px] border-[4px] border-gray-400 bg-slate-800 mt-10 text-white  text-[30px] px-5"
            />
          </div>
          <div className="flex flex-row relative">
            <span className="h-[25px] w-[25] absolute ml-10 mt-16 ">
              <Image src={kink} alt="Link" />
            </span>
            <input
              type="text"
              placeholder="                Enter custom slug"
              className="w-[1100px] h-[76px] rounded-[48px] border-[4px] border-gray-400 bg-slate-800 mt-10 text-white  text-[30px] px-5"
            />
            <button className="w-[268px] h-[68px] rounded-[100px]  border-[1px] bg-blue-700 text-white ml-[827px] mt-11 absolute cursor-pointer">
              Auto Generate
            </button>
          </div>

          
          <Button
            name="Shorten Now!"
          />
        </div>
      </div>
    </div>
  );
}
