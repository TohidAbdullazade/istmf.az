import { Input } from "antd";
import { ReactNode } from "react";

const TranslationTableTags = () => {
  const inputs: ReactNode[] = [
   
    <Input
      readOnly
      placeholder={"In English"}
      className={"w-[150px] rounded-xl h-[43px]"}
    />,
    <Input
      readOnly
      placeholder={"In Azerbaijan"}
      className={"w-[150px] rounded-xl h-[43px]"}
    />,
    <Input
      readOnly
      placeholder={"Description (in English)"}
      className={"w-[228px] rounded-xl h-[43px]"}
    />,
    <Input
      readOnly
      placeholder={"Description (in Azerbaijan)"}
      className={"w-[316px] rounded-xl h-[43px]"}
    />,
    <Input
      readOnly
      placeholder={"Source"}
      className={"w-[173px] rounded-xl h-[43px]"}
    />,
  ];

  return (
    <div className="w-[1200px] h-12 mt-8 flex justify-center items-center gap-4">
      {inputs.map((input, index) => (
        <div key={index} className="inputs-container">
          {input}
        </div>
      ))}
    </div>
  );
};

export default TranslationTableTags;
