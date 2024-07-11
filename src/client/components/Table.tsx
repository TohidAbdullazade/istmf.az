import { SVG } from "./Svg.tsx";
import Tag from "./Tag.tsx";
import { useEffect, useState } from "react";
import { getTableDatas } from "../services/table/Table_services.ts";
import { useQueryContext } from "../../context/QueryContext.tsx";
import { TranslationUpdateDto } from "../../adminpanel/interface/translate/TranslateInterface.ts";

const Table = () => {
  const { query, setQuery } = useQueryContext();

  const { leftArrow, rightArrow } = SVG;
  const [tableData, setTableData] = useState<TranslationUpdateDto[]>([]);
  const [totalCount, setTotalCount] = useState<number>(1);
  const [pageNumber, setPageNumber] = useState<number>(query.pageNumber || 1);
  const [pageSize, setPageSize] = useState<number>(query.pageSize || 10);
  const [selectedPageSize, setSelectedPageSize] = useState<number>(
    query.pageSize || 10
  );

  useEffect(() => {
    loadTableData(
      query.pageNumber,
      query.pageSize,
      query.name!,
      query.orderBy!,
      query.searchTerm!
    );
  }, [query]);

  const loadTableData = (
    pageNumber: number,
    pageSize: number,
    tagName: string,
    orderBy: string,
    searchTerm: string
  ) => {
    getTableDatas(pageNumber, pageSize, tagName, orderBy, searchTerm)
      .then(
        ({ data, headers }: { data: TranslationUpdateDto[]; headers: any }) => {
          setTableData(data);
          setTotalCount(headers.TotalCount);
        }
      )
      .catch((err) => {
        console.error("Error loading table data:", err);
      });
  };

  const handlePageSizeChange = (size: number) => {
    setPageSize(size);
    setSelectedPageSize(size);
    setQuery({ ...query, pageSize: size, pageNumber: 1 });
  };

  const goToPreviousPage = () => {
    if (pageNumber > 1) {
      setPageNumber(pageNumber - 1);
      setQuery({ ...query, pageNumber: pageNumber - 1 });
    }
  };

  const goToNextPage = () => {
    if (pageNumber * pageSize < totalCount) {
      setPageNumber(pageNumber + 1);
      setQuery({ ...query, pageNumber: pageNumber + 1 });
    }
  };

  useEffect(() => {
    setQuery({ ...query, pageNumber, pageSize });
  }, [pageNumber, pageSize]);

  return (
    <div className="w-[1200px] flex flex-col max-h-[600px] overflow-y-auto mt-4 h-full rounded-2xl">
      <div className="pagenation-side w-full sticky top-0 z-20 flex justify-between items-center min-h-[60px] pl-6 pr-11 bg-slate-100 rounded-tl-2xl rounded-tr-2xl">
        <div className="page-size-side items-center flex gap-2 font-inter text-base">
          <div className="display">
            <span className={"text-gray-400"}>Display:</span>
          </div>

          {[10, 20, 50].map((size) => (
            <div
              key={size}
              className={`cursor-pointer ${
                selectedPageSize === size
                  ? "bg-slate-200 rounded-full"
                  : "bg-transparent"
              }`}
              onClick={() => handlePageSizeChange(size)}
            >
              <div
                className={`w-8 h-8 p-1.5 rounded-full flex justify-center items-center cursor-pointer`}
              >
                <span className={"text-[#3F40D5]"}>{size}</span>
              </div>
            </div>
          ))}
          <div className="see-all cursor-pointer">
            <span className={"text-[#3F40D5]"}>See All</span>
          </div>
        </div>
        <div className="pagination-btns flex gap-2 items-center">
          <div className="left-arrow cursor-pointer" onClick={goToPreviousPage}>
            <span>{leftArrow}</span>
          </div>
          <div className="current-page">
            <p className={"font-inter text-base text-[#3F40D5]"}>
              {`${pageNumber}-${Math.ceil(totalCount / pageSize)}`}
            </p>
          </div>
          <div className="right-arrow cursor-pointer" onClick={goToNextPage}>
            {rightArrow}
          </div>
        </div>
      </div>
      <div className="data-side flex flex-col">
        {tableData?.map((item: TranslationUpdateDto, index: number) => (
          <div
            key={item.id}
            className={`columns p-4 items-center font-inter text-sm text-gray-600 flex ${
              index % 2 === 0 ? "bg-[#FBFBFB]" : ""
            }`}
          >
            <div className="cell-1 w-[97px] h-full">
              <Tag
                title={item.tags[0]?.name}
                titleClassName={"font-inter   text-xs uppercase font-bold"}
                className={
                  "rounded-full flex gap-1.5 w-full  justify-center h-7 items-center border-[#4D86C0]"
                }
              />
            </div>
            <div className="cell-2 w-[168px] text-center font-inter text-base pl-5 h-full">
              {item.englishWord}
            </div>
            <div className="cell-3 w-[166px] text-center font-inter text-base h-full">
              {item.azDescription}
            </div>
            <div className="cell-4 w-[241px] text-center font-inter text-base h-full">
              {item.ruDescription}
            </div>
            <div className="cell-5 w-[334px] text-center font-inter text-base h-full">
              {item.azDescription}
            </div>
            <div className="cell-6 w-[193px] text-center font-inter text-base h-full">
              <p className={"px-2 py-2.5"}>{item.source}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Table;
