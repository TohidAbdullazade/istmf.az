import { BsThreeDots } from "react-icons/bs";
import { FC, ReactNode, useEffect } from "react";
import { Query, useQueryContext } from "../../context/QueryContext";

interface SortingDropDownProps {
  className?: string;
}

interface SortingDropDownListProps {
  className: string;
  icon?: ReactNode;
  label?: string;
  all?: string;
  onClick: (event: React.MouseEvent<HTMLDivElement>) => void;
}

const SortingDropDown: FC<SortingDropDownProps> = ({ className }) => {
  const { query, setQuery } = useQueryContext();

  useEffect(() => {}, [query]);

  const onClickFn = (value: string) => {
    setQuery((prev: Query) => ({
      ...prev,
      orderBy: value,
    }));
  };

  return (
    <div className={className}>
      <SortingDropDownList
        onClick={() => onClickFn("")}
        icon={<BsThreeDots color={"#3F40D5"} />}
        all={"All"}
        className={
          "duration-300 p-4 transition-all ease-in-out cursor-pointer hover:bg-purple-50 w-full h-[60px] bg-white rounded-tl-2xl rounded-tr-2xl border-b border-slate-100"
        }
      />

      <SortingDropDownList
        onClick={() => onClickFn("englishWord asc")}
        label={"A-Z"}
        className={
          "duration-300 p-4 transition-all ease-in-out cursor-pointer hover:bg-purple-50 w-full h-[60px] bg-white  border-b border-slate-100"
        }
      />

      <SortingDropDownList
        onClick={() => onClickFn("englishWord desc")}
        label={"Z-A"}
        className={
          "duration-300 p-4 transition-all ease-in-out cursor-pointer rounded-bl-2xl rounded-br-2xl hover:bg-purple-50 w-full h-[60px] bg-white  border-b   border-slate-100"
        }
      />

      {/* <SortingDropDownList
       onClick={onClickFn}
        label={"Date by descending"}
        className={
          "duration-300 p-4 transition-all ease-in-out cursor-pointer hover:bg-purple-50 w-full h-[60px] bg-white  border-b   border-slate-100"
        }
      />
      <SortingDropDownList
       onClick={onClickFn}
        label={"Date by ascending"}
        className={
          "duration-300 p-4 transition-all ease-in-out cursor-pointer hover:bg-purple-50 w-full h-[60px] bg-white  border-b rounded-bl-3xl rounded-br-3xl  border-slate-100"
        }
      /> */}
    </div>
  );
};

const SortingDropDownList: FC<SortingDropDownListProps> = ({
  className,
  icon,
  label,
  all,
  onClick,
}) => {
  return (
    <div onClick={onClick} className={className}>
      <div className="flex gap-2 items-center">
        <span>{icon}</span>

        <span
          className={`${
            label ? " text-black font-inter" : "text-[#4540D6] font-inter"
          }`}
        >
          {label} {all}
        </span>
      </div>
    </div>
  );
};

export default SortingDropDown;