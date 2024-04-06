import Image from "next/image";
import bgimg from "../../../public/accets/images/Register.svg";
import img1 from "../../../public/accets/images/Linkly.svg";
import img2 from "../../../public/accets/images/Property 1=Default.svg";
import Link from "next/link";

export default function Register() {
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
            type="email"
            placeholder="   Email"
            className="w-[660px] h-[76px] rounded-[48px] border-[4px] border-gray-400 bg-slate-800 mt-10 "
          />
          <input
            type="text"
            placeholder="   Name"
            className="w-[660px] h-[76px] rounded-[48px] border-[4px] border-gray-400 bg-slate-800 mt-10"
          />
          <input
            type="password"
            placeholder="   Passward"
            className="w-[660px] h-[76px] rounded-[48px] border-[4px] border-gray-400 bg-slate-800 mt-10"
          />
          <input
            type="password"
            placeholder="   Confirm Passward"
            className="w-[660px] h-[76px] rounded-[48px] border-[4px] border-gray-400 bg-slate-800 mt-10"
          />
          <button className="w-[268px] h-[48px] rounded-[48px]  border-[1px] bg-blue-700 text-white ml-[200px] mt-10">
            Register
          </button>
        </div>
      </div>

      <div className="flex justify-self-end   justify-center mt-40">
        <div className="w-[205px] h-[10px] text-white flex ">
          <Link href={"/login"} className="text-blue-700 underline">
            Sign In
          </Link>{" "}
          if already registered
        </div>
      </div>
    </div>
  );
}
