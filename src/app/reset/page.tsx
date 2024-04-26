import Image from "next/image";
import bgimg from "../../../public/accets/images/Register.svg";
import img1 from "../../../public/accets/images/Linkly.svg";
import img2 from "../../../public/accets/images/Property 1=Default.svg";
import Link from "next/link";
import Button from "../../../[components]/button/Button";
import Input from "../../../[components]/input/Input";

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
          <Input
            type="password"
            placeholder="   Current Password"
            // value={password}
            // onChange={(e) => setPassword(e.target.value)}
          />
          <Input
            type="password"
            placeholder="   New Password"
            // value={email}
            // onChange={(e) => setNewPassword(e.target.value)}
          />
          <Input
            type="password"
            placeholder="   Confirm New Passward"
            // value={email}
            // onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <Button name="Reset" />
        </div>
      </div>
    </div>
  );
}
