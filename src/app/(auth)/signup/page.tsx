// import React from "react";
// import RegisterForm from "./components/RegisterForm";
// import Link from "next/link";

// export default function SignUp() {
//   return (
//     <div className="h-screen w-full flex items-center justify-center bg-gray-100">
//       <div className="p-10 bg-white rounded-lg shadow-lg w-full sm:w-3/4 lg:w-auto">
//         <h1 className="text-4x1 font-semibold text-center text-neutral-900">
//           Register
//         </h1>
//         <hr className="my-5" />
//         <RegisterForm />
//         <div className="text-sm text-center text-neutral-500 mt-5">
//           Have an accout?
//           <Link href={"/signin"} className="font-bold text-neutral-900">
//             Login
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }

import Image from "next/image";
import bgimg from "../../../../public/accets/images/Register.svg";
import img1 from "../../../../public/accets/images/Linkly.svg";
import img2 from "../../../../public/accets/images/Property 1=Default.svg";
import Link from "next/link";
import RegisterForm from "./components/RegisterForm";

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
        <RegisterForm />
      </div>

      <div className="flex justify-self-end   justify-center mt-40">
        <div className="w-[205px] h-[10px] text-white flex ">
          <Link href={"/signin"} className="text-blue-700 underline">
            Sign In
          </Link>{" "}
          if already registered
        </div>
      </div>
    </div>
  );
}
