"use client";

import useStore from "@/app/(store)/store";
import { useEffect, useState } from "react";

const IndexFrame = () => {
  const [receivedData, setReceivedData] = useState("");
  const { valuesForm, setValuesForm } = useStore((state) => state);

  useEffect(() => {
    const handleReceiveMessage = (event: any) => {
      // Check the source of the message (for security)
      if (event.origin === "https://my-cv-test-opal.vercel.app") {
        const data = event.data;

        // Check if data is an object, and convert it to a string if necessary
        setReceivedData(typeof data === "object" ? JSON.stringify(data) : data);
      }
    };

    // Listen for message events from iframe
    window.addEventListener("message", handleReceiveMessage);

    // Cleanup
    return () => {
      window.removeEventListener("message", handleReceiveMessage);
    };
  }, []);

  return (
    <div className="flex items-center justify-center bg-white text-black">
      <h1>Search Page</h1>
      <p>Received data from parent page: {receivedData}</p>
      <div>{JSON.stringify(valuesForm)}</div>
    </div>
  );
};

export default IndexFrame;
