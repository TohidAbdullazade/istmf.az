import Tag from "./Tag.tsx";
import { FC, useState } from "react";
import { SVG } from "./Svg.tsx";
import FilterDropDown from "./FilterDropDown.tsx";
import SortingDropDown from "./SortingDropDown.tsx";

const SortingLabels: FC = () => {
  const { arrowDown, filter } = SVG;
  const [show, setShow] = useState<boolean>(false);
  const [visible, setVisible] = useState<boolean>(false);
  const [selectedTag, setSelectedTag] = useState<string>("");

  const handleSelectTag = (tag: string) => {
    setSelectedTag(tag);
    console.log(selectedTag)
  };

  return (
    <>
      <div className={"mt-[27px] cursor-pointer flex gap-4 "}>
        <div className="filter-label" onClick={() => setShow(!show)}>
          <Tag
            titleClassName={"font-inter text-base text-slate-900 relative"}
            className={
              "w-[218px] h-[48px] rounded-xl bg-[#FAFAFA] py-3 px-[14px] flex justify-between items-center"
            }
            title={"Filter by category"}
            icon={filter}
          />
        </div>
        <div className="sorting-label" onClick={() => setVisible(!visible)}>
          <Tag
            titleClassName={"font-inter text-base text-slate-900 "}
            className={
              "w-[218px] h-[48px] rounded-xl bg-[#FAFAFA] py-3 px-[14px] flex justify-between items-center"
            }
            title={"Sorting by popular"}
            icon={arrowDown}
          />
        </div>
      </div>

      <div className="relative">
        <FilterDropDown
          className={`${
            show
              ? "max-h-[250px]   overflow-y-auto max-w-[218px] opacity-100 visible translate-y-0 transition-all duration-500 ease-in-out absolute w-full border border-[#B9BBEC] rounded-2xl my-2 z-[999] bg-white"
              : "max-h-0 max-w-[218px] opacity-0 invisible -translate-y-4 transition-all duration-500 ease-in-out absolute w-full border rounded-2xl my-2 z-10 bg-white"
          }`}
          onSelectTag={handleSelectTag}
        />
      </div>

      <div className="relative">
        <SortingDropDown
          className={`${
            visible
              ? "max-h-[500px] max-w-[218px] opacity-100 visible translate-y-0 transition-all duration-500 ease-in-out absolute w-full border border-[#B9BBEC] rounded-2xl my-2 z-[500] bg-white left-[20.5%]"
              : "max-h-0 max-w-[218px] opacity-0 invisible -translate-y-4 transition-all duration-500 left-[20.5%] ease-in-out absolute w-full border rounded-2xl my-2 z-[500] bg-white"
          }`}
        />
      </div>
    </>
  );
};

export default SortingLabels;
