import { useContext, useEffect, useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { getAllTagsForSite } from "../services/tag/Tag_services.ts";
import Tag from "./Tag.tsx";
import { QueryContext, Query } from "../../context/QueryContext.tsx";

interface SortingDropDownProps {
  className?: string;
  icon?: React.ReactNode;
  label?: string;
  tag?: React.ReactNode;
  delay?: string;
  all?: string;
  onClickFn?: () => void;
}

interface FilterDropDownProps {
  className?: string;
  onSelectTag: (tag: string) => void;
}

const FilterDropDown = ({ className }: FilterDropDownProps) => {
  const { query, setQuery } = useContext(QueryContext)!;
  const [tags, setTags] = useState([]);

  useEffect(() => {
    getAllTagsForSite().then((res) => {
      setTags(res.data);
    });
  }, []);

  const handleTagClick = (tagName: string) => {
    setQuery((prevQuery: Query) => ({
      ...prevQuery,
      name: tagName,
      orderBy: null,
      searchTerm: null,
    }));
    console.log(query);
  };

  const resetTag = () => {
    setQuery((prevQuery: Query) => ({
      ...prevQuery,
      name: null,
      orderBy: null,
      searchTerm: null,
    }));
  };

  return (
    <div className={className}>
      <FilterDropDownList
        icon={<BsThreeDots color={"#3F40D5"} />}
        all={"All"}
        delay="0ms"
        className={
          "duration-300 p-4 transition-all ease-in-out cursor-pointer hover:bg-purple-50 w-full h-[60px] bg-white rounded-tl-2xl rounded-tr-2xl border-b border-slate-100"
        }
        onClickFn={resetTag} 
      />
      {tags?.map((tag: any) => (
        <FilterDropDownList
          key={tag.id}
          label={"Framework"} 
          tag={
            <Tag
              onClick={() => handleTagClick(tag.name)}
              titleClassName={
                "font-inter uppercase font-bold text-[12px] text-slate-900"
              }
              className={
                "rounded-full flex gap-1.5 w-full justify-center h-7 items-center border-[#4D86C0]"
              }
              title={tag.name}
            />
          }
          delay="200ms"
          className={
            "duration-300 py-4 transition-all ease-in-out cursor-pointer hover:bg-purple-50 w-full h-[58px] bg-white border-b border-slate-100"
          }
          onClickFn={() => handleTagClick(tag.name)} // Handle click on individual tags
        />
      ))}
    </div>
  );
};

const FilterDropDownList = ({
  className,
  icon,
  label,
  tag,
  delay,
  all,
  onClickFn,
}: SortingDropDownProps) => {
  return (
    <div onClick={onClickFn} className={className} style={{ transitionDelay: delay }}>
      <div className="flex gap-2 px-4 items-center">
        <div className={"flex gap-5"}>{tag ? <span>{tag}</span> : icon}</div>
        <span className={label ? "text-black font-inter" : "text-[#3F40D5] font-inter"}>
          {label ? label : all}
        </span>
      </div>
    </div>
  );
};

export default FilterDropDown;
