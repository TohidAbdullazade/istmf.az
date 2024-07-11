import { SetStateAction } from "react";

interface PageProps {
  totalCount: number;
  postPerPage: number;
  setCurrentPage: React.Dispatch<SetStateAction<number>>;
}

const CustomPagenation = ({
  totalCount,
  postPerPage,
  setCurrentPage,
}: PageProps) => {
  const pages = [];
  for (let i = 1; i <= Math.ceil(totalCount / postPerPage); i++) {
    pages.push(i);
  }
  return (
    <div className="w-full h-[65px] bg-white p-2 duration-300 cursor-pointer">
      <div className="w-[40px] flex justify-center items-center h-[40px] border transition-all ease-in-out rounded-md hover:border-blue-300 ">
        {pages.map((page) => (
          <span onClick={() => setCurrentPage(page)} key={page}>
            {page}
          </span>
        ))}
      </div>
    </div>
  );
};

export default CustomPagenation;
