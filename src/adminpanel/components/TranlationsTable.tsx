import { SVG } from "../../client/components/Svg.tsx";
import { useEffect, useState } from "react";
import { getTableDatas } from "../../client/services/table/Table_services.ts";
import { useQueryContext } from "../../context/QueryContext.tsx";
import { TranslationDto } from "../interface/translate/TranslateInterface.ts";
import TranslationTableTags from "./TranslationTableTags.tsx";
import { Button, Modal, Space } from "antd";
import {
  deleteTranslate,
  getSingleTranslation,
} from "../services/translates/translate_service.ts";
import { AxiosError } from "axios";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const TranslationsTable = () => {
  const { query, setQuery } = useQueryContext();

  const { leftArrow, rightArrow } = SVG;
  const [tableData, setTableData] = useState<TranslationDto[]>([]);
  const [tagIds, setTagIds] = useState<number[]>([]);
  const [tagName] = useState<string>("");
  const [totalCount, setTotalCount] = useState<number>(1);

  const [pageNumber, setPageNumber] = useState<number>(query.pageNumber || 1);
  const [pageSize, setPageSize] = useState<number>(query.pageSize || 10);
  const [selectedPageSize, setSelectedPageSize] = useState<number>(
    query.pageSize || 10
  );
  const [orderBy] = useState<string>("");

  useEffect(() => {
    loadTableData(query.pageNumber, query.pageSize, query.name!, query.orderBy!);
  }, [query]);

  const loadTableData = (
    pageNumber: number,
    pageSize: number,
    tagName: string,
    orderBy: string
  ) => {
    getTableDatas(pageNumber, pageSize, tagName, orderBy)
      .then(({ data, headers }) => {
        console.log(data);
        setTableData(data);
        setTotalCount(headers.TotalCount);
        const tagsIdArray = data.map(
          (item: { tagId: number; translateId: number }) => item.tagId
        );
        setTagIds(tagsIdArray);
        console.log(tagIds);
        
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const setTableDatas = () => {
    getTableDatas(pageNumber, pageSize, tagName, orderBy)
      .then(({ data, headers }) => {
        setTableData(data);
        setTotalCount(headers.TotalCount);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getTableDatas(pageNumber, pageSize);
  }, []);

 

  const handlePageSizeChange = (size: number) => {
    setPageSize(size);
    setSelectedPageSize(size);
    setQuery({ ...query, pageSize: size, pageNumber: 1 }); // Reset to first page on size change
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

  const handleDelete = (id: number) => {
    Modal.confirm({
      title: "Bu Məlumatı silməyinizdən əminsiniz?",
      onOk: () => {
        deleteTranslate(id)
          .then(() => {
            toast.success("Məlumat uğurla silindi!", {
              position: "top-center",
              autoClose: 1500,
              draggable: true,
              pauseOnHover: false,
              closeOnClick: true,
            });
            setTableDatas();
          })
          .catch((err: AxiosError) => {
            console.log(err.message);
          });
      },
      onCancel: () => {
        toast.info("Silinmə əməliyyatından imtina edildi!", {
          position: "top-center",
          autoClose: 1500,
          draggable: true,
          pauseOnHover: false,
          closeOnClick: true,
        });
        return;
      },
    });
  };

  const handleUpdate = (id: number) => {
    getSingleTranslation(id)
      .then((res) => {
        console.log(res);
      })
      .catch((err: AxiosError) => {
        console.log(err.message);
      });
  };

  return (
    <>
     <div className="flex  justify-center">
     <TranslationTableTags />
     </div>

     <div className="flex my-5 justify-center">
     <div className="w-[1200px]  flex flex-col max-h-[600px] overflow-y-auto mt-4 h-full rounded-2xl">
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
            <div
              className="left-arrow cursor-pointer"
              onClick={goToPreviousPage}
            >
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
          {tableData?.map((item: TranslationDto, index: number) => (
            <div
              key={item.id}
              className={`columns p-4 items-center font-inter text-sm text-gray-600 flex ${
                index % 2 === 0 ? "bg-[#FBFBFB]" : ""
              }`}
            >
              {/* <div className="cell-1 w-[97px] h-full">
            <Tag
              title={tagNames[index] || ""}
              titleClassName={"font-inter text-xs uppercase font-bold"}
              className={
                "rounded-full flex gap-1.5 w-14 h-7 items-center border-[#4D86C0]"
              }
            />
          </div> */}
              <div className="cell-2 w-[168px] text-center font-inter text-base pl-5 h-full">
                {item.englishWord}
              </div>
              <div className="cell-3 w-[166px] text-center font-inter text-base h-full">
                {item.source}
              </div>
              <div className="cell-4 w-[241px] text-center font-inter text-base h-full">
                {item.russianWord}
              </div>
              <div className="cell-5 w-[334px] text-center font-inter text-base h-full">
                {item.azDescription}
              </div>
              <div className="cell-6 w-[193px] text-center font-inter text-base h-full">
                <p className={"px-2 py-2.5"}>{item.source}</p>
              </div>
              <div className="cell-7 w-[193px] text-center font-inter text-base h-full">
                <Space>
                  <Link to={`/admin/translation/update/${item.id}`}>
                    <Button onClick={() => handleUpdate(item.id!)}>Edit</Button>
                  </Link>
                  <Button onClick={() => handleDelete(item.id!)}>Delete</Button>
                </Space>
              </div>
            </div>
          ))}
        </div>
      </div>
     </div>
    </>
  );
};

export default TranslationsTable;
