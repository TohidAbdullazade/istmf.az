import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import { TranslationDto } from "../../interface/translate/TranslateInterface.ts";
import { getAllTranslations } from "../../services/translates/translate_service";
import { ToastContainer } from "react-toastify";
import { useQueryContext } from "../../../context/QueryContext.tsx";
import { useEffect, useState } from "react";
import { AxiosError } from "axios";
import TranslationsTable from "../../components/TranlationsTable.tsx";

const Translate = () => {
  const navigate = useNavigate();
  const { query } = useQueryContext();
  const [info, setData] = useState<TranslationDto[]>([]);
  const [total, setTotal] = useState<number>(0);

  useEffect(() => {
    getAllTranslations(query.pageNumber, query.pageSize)
      .then(({ headers, data }) => {
        setTotal(headers.TotalCount);
        setData(data);
        console.log(info)
        console.log(total)
      })
      .catch((err: AxiosError) => {
        console.log(err.message);
      });
  }, []);

  return (
    <div>
      <div className="flex justify-between px-10 my-5">
        <div className="title">
          <h2 className="font-inter text-xl text-gray-300">Tərcümələr</h2>
        </div>
        <div className="create-btn">
          <Button
            htmlType="submit"
            onClick={() => navigate("/admin/translation/create")}
            type="default"
          >
            Tərcümə əlavə et
          </Button>
        </div>
      </div>
      <TranslationsTable />
      <ToastContainer />
    </div>
  );
};

export default Translate;
