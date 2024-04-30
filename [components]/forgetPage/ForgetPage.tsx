"use client";
import React, { useState } from "react";
import Button from "../button/Button";
import Input from "../input/Input";
import emailjs from "emailjs-com";
export default function Forget() {
  const [email, setEmail] = useState("");

  const handleSendEmailToOwner = async () => {
    try {
      const serviceId = "service_73t1h8u";
      const templateId = "template_t8isvts";
      const userId = "AQw6MFs3D-QUwayQy";

      const templateParams = {
        from_name: "URL SHORTNER",
        to_name: "URL shorter",
        message: `http://localhost:3000/forgetRoute/${email}`,
        userEmail: email,
        userName: "URL Shortner ",
        reply_to: "dellrugged5414@gmail.com",
      };

      emailjs.init(userId);

      await emailjs.send(serviceId, templateId, templateParams);
      console.log("email send successful");
    } catch (error) {
      console.log("Error sending email:", error);
    }
  };

  return (
    <div className="flex flex-col">
      <Input
        type="email"
        placeholder="   Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <div>
        {/* <p className="text-white">{`http://localhost:3000/forgetRoute/${email}`}</p> */}
        <Button  name="Forget" />
      </div>
    </div>
  );
}
