import Image from "next/image";
import bgimg from "../../../public/accets/images/Register.svg";
import img1 from "../../../public/accets/images/Linkly.svg";
import bell from "../../../public/accets/images/chevron-down.svg";
import arro from "../../../public/accets/images/arrow-right.svg";
import { getServerSession } from "next-auth";
import { authOptions } from "../../../libs/AuthOptions";
import AddEdit from "../../../[components]/AddEdit";

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
        <AddEdit/>
      </div>
    </div>
  );
}
