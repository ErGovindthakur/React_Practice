import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { VscSend } from "react-icons/vsc";
import { GEMINI_URL } from "./constant";

const Ai = ({ handleAiContainer }) => {
  const [aiChatQuestion, setAiChatQuestion] = useState("");
  const [aiChatAns, setAiChatAns] = useState("");

let payload = {
  contents: [
    {
      parts: [
        {
          text: aiChatQuestion,
        },
      ],
    },
  ],
};

let askQuestion = async () => {
  try {
    const res = await fetch(GEMINI_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const data = await res.json();
    console.log("Gemini Response:", data.candidates[0].content.parts[0].text);

    setAiChatAns(data.candidates[0].content.parts[0].text);

    setAiChatQuestion("")
  } catch (err) {
    console.error("Error calling Gemini API:", err);
  }
};


  return (
    <div className="w-[290px] h-[450px] bg-gray-50 rounded-md shadow-md px-3 py-2 absolute bottom-3 right-5 overflow-y-scroll overflow-x-hidden">
      <div className="flex gap-18">
        <button className="text-gray-600 hover:text-red-500 transition">
          <IoMdClose size={24} onClick={handleAiContainer} />
        </button>
        <p className="text-lg font-bold text-blue-600">Ask For Help...</p>
      </div>
      <div className="w-[270px] h-[410px]">
        <div className="px-3 py-2 mb-3">
          {aiChatAns}
        </div>
        <div className="w-[241px] h-[45px] bg-gray-200 rounded-full mx-auto fixed bottom-23 mr-5 border border-black flex justify-between px-2">
          <input
            type="text"
            value={aiChatQuestion}
            onChange={(e) => setAiChatQuestion(e.target.value)}
            placeholder="Ask me anything.."
            className="px-2 outline-none"
          />
          <button onClick={askQuestion}>
            <VscSend size={23} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Ai;
