import { Package } from "lucide-react";
import React from "react";

const Footer = () => {
  return (<div className="w-full h-96 bg-blue-950 mt-64 flex flex-col pt-6 md:flex-row text-white">
      <div className=" w-1/3 py-6 flex  flex-col items-center ">
       <h2 className="text-4xl flex gap-1 items-center justify-center font-bold text-white">
          <Package size={36} strokeWidth={2} />
          archiveg
        </h2>
        <div className="flex flex-col gap-3 w-fit  justify-center pt-5">
         <p className=" font-bold">Quick Links</p>
         <p>Home</p>
         <p>Feed</p>
         <p>Settings</p>
        </div>
      </div>
      <div className=" w-1/3 py-6 items-center justify-center">
      
        <div className="flex flex-col gap-3 w-fit pt-5 ">
         <p className=" font-bold text-xl">Policies</p>

         <p>Terms of Service</p>
         <p>Privacy Policy</p>
         <p>Cookie Policy</p>
        </div>
      </div>
      <div className=" w-1/3 py-6 items-center justify-center">
      
      <div className="flex flex-col gap-3 w-fit  pt-5">
       <p className=" font-bold text-xl">Social Links</p>

       <p>Github</p>
       <p>LinkedIn</p>
      </div>
    </div>
  </div>)
};

export default Footer;
