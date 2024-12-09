"use client";
import EIResponsive from "@/sections/global/EIResponsive";
import ItemProjectMake from "@/sections/global/ItemProjectMake";
import { useRef, useState } from "react";

const Page = () => {
  const [inputValue, setInputValue] = useState("");
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const handleInputChange = (e: any) => {
    setInputValue(e.target.value);
  };

  const sendDataToIframe = () => {
    iframeRef.current?.contentWindow?.postMessage(
      inputValue,
      "https://my-cv-test-opal.vercel.app/iframe"
    );
  };

  return (
    <div className="w-full flex h-screen">
      <div className="flex-1 flex flex-col">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter text to send to iframe"
          className="border border-solid border-black"
        />
        <button onClick={sendDataToIframe}>Send to Iframe</button>
      </div>
      <div className="flex-1 h-full flex justify-center bg-black">
        <iframe
          height={600}
          ref={iframeRef}
          src="https://my-cv-test-opal.vercel.app/iframe"
        ></iframe>
      </div>
      {/* <ItemProjectMake />
      <EIResponsive /> */}
    </div>
  );
};

export default Page;
