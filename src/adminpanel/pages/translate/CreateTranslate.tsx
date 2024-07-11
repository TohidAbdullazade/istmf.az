import { Input, Form, Button, Select } from "antd";
import TextArea from "antd/es/input/TextArea";
import { ChangeEvent, useEffect, useState } from "react";
import { TagProps } from "../../interface/tags/TagInterface.ts";
import { GET_ALL_TAGS_FOR_TRANSLATION } from "../../services/tags/tag_services";
import { AxiosError } from "axios";
import { TranslationInterface } from "../../interface/translate/TranslateInterface.ts";
import { addNewTranslation } from "../../services/translates/translate_service";
import { useNavigate } from "react-router-dom";
import { RuleObject } from "antd/es/form/index";
import { toast } from "react-toastify";

const { Option } = Select;

const CreateTranslate = () => {
  const [tagName, setTagName] = useState<TagProps[]>([]);
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [values, setValues] = useState<TranslationInterface>({
    translateDto: {
      id: 0,
      englishWord: "",
      russianWord: "",
      azDescription: "",
      ruDescription: "",
      source: "",
    },
    tagIds: [],
  });

  // ===> Get all Tags from the Server <===
  const getTags = () => {
    GET_ALL_TAGS_FOR_TRANSLATION()
      .then((res: TagProps[]) => {
        setTagName(res);
      })
      .catch((err: AxiosError) => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    getTags();
  }, []);

  // ===> Handle Select Change <===
  const handleSelectChange = (value: number[]) => {
    setValues({ ...values, tagIds: value });
  };

  const handleTranslate = (value: TranslationInterface) => {
    addNewTranslation(value)
      .then(() => {
        navigate("/admin/translation");
        toast.success(` Tərcümə uğurlu şəkildə əlavə olundu!`, {
          position: "top-center",
          autoClose: 2000,
          draggable: true,
          pauseOnHover: false,
        });
      })
      .catch(() => {
        toast.error(` Tərcümə silinən zaman xəta baş verdi!`, {
          position: "top-center",
          autoClose: 2000,
          draggable: true,
          pauseOnHover: false,
        });
      });
  };

  // ===> Handle the Change Event <===
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      translateDto: {
        ...prevValues.translateDto,
        [name]: value,
      },
    }));
  };

  // Validator function to check for whitespace at the start of the input
  const noWhitespaceStart = () => ({
    validator(_: RuleObject, value: string) {
      if (value && value.trimStart().length !== value.length) {
        return Promise.reject(
          new Error("The field cannot start with a whitespace")
        );
      }
      return Promise.resolve();
    },
  });

  const handleUpdate = (values: TranslationInterface) => {
    handleTranslate(values);
  };

  return (
    <>
      <div className="w-full flex justify-center">
        <div className="inner-container w-[1200px] h-[464px] flex justify-center rounded-[10px]  relative">
          <div className="content text-center"></div>
          <div className="child-container rounded-3xl px-[39px] w-[1011px] h-[900px] bg-white border">
            <h2 className="my-1 text-center font-inter py-5 text-xl text-gray-400">
              Tərcüməni əlavə et
            </h2>
            <Form
              form={form}
              name="contact"
              onFinish={() => handleUpdate(values)}
            >
              <div className="flex">
                <Form.Item
                  labelCol={{ span: 24 }}
                  label="Ingilis sözü"
                  name="englishWord"
                  rules={[
                    { required: true, message: "Ingilis sözün tələb olunur!" },
                    { whitespace: true },
                    noWhitespaceStart(),
                  ]}
                  hasFeedback
                >
                  <Input
                    value={values.translateDto.englishWord}
                    onChange={handleChange}
                    name="englishWord"
                    placeholder="Ingilis sözünü daxil edin..."
                    className="w-[450px]"
                  />
                </Form.Item>
                <Form.Item
                  labelCol={{ span: 24 }}
                  label="Rus sözü"
                  name="russianWord"
                  rules={[
                    { required: true, message: "Rus sözün tələb olunur!" },
                    { whitespace: true },
                    noWhitespaceStart(),
                  ]}
                  hasFeedback
                >
                  <Input
                    value={values.translateDto.russianWord}
                    onChange={handleChange}
                    name="russianWord"
                    placeholder="Rus sözünü daxil edin..."
                    className="w-[450px]"
                  />
                </Form.Item>
              </div>
              <div className="flex">
                <Form.Item
                  labelCol={{ span: 24 }}
                  label="Mənbə"
                  name="source"
                  rules={[
                    { required: true, message: "Mənbə tələb olunur!" },
                    noWhitespaceStart(),
                  ]}
                  hasFeedback
                >
                  <Input
                    value={values.translateDto.source}
                    onChange={handleChange}
                    name="source"
                    placeholder="Mənbəni daxil edin..."
                    className="w-[57.7vw]"
                  />
                </Form.Item>
              </div>
              <div className="flex flex-col">
                <Form.Item
                  labelCol={{ span: 24 }}
                  label="Azərbaycan dili açıqlaması"
                  name="azDescription"
                  rules={[
                    {
                      required: true,
                      message: "Azərbaycan dili açıqlaması tələb olunur!",
                    },
                    { whitespace: true },
                    noWhitespaceStart(),
                  ]}
                  hasFeedback
                >
                  <TextArea
                    autoSize={{ minRows: 6, maxRows: 6 }}
                    value={values.translateDto.azDescription}
                    onChange={handleChange}
                    name="azDescription"
                    placeholder="Azərbaycan dili açıqlamasını daxil edin..."
                    className="w-[932px] flex h-[184px] px-[14px] py-3 font-inter"
                  />
                </Form.Item>
                <Form.Item
                  labelCol={{ span: 24 }}
                  label="Rus dili açıqlaması"
                  name="ruDescription"
                  rules={[
                    {
                      required: true,
                      message: "Rus dili açıqlaması tələb olunur!",
                    },
                    { whitespace: true },
                    noWhitespaceStart(),
                  ]}
                  hasFeedback
                >
                  <TextArea
                    value={values.translateDto.ruDescription}
                    onChange={handleChange}
                    name="ruDescription"
                    placeholder="Rus dili açıqlamasını daxil edin..."
                    autoSize={{ minRows: 6, maxRows: 6 }}
                    className="w-[932px] flex h-[184px] px-[14px] py-3 font-inter"
                  />
                </Form.Item>
              </div>
              <Form.Item
                labelCol={{ span: 24 }}
                label="Tərcümə etiketləri"
                name="tags"
                rules={[{ required: true, message: "Etiketlər tələb olunur!" }]}
                hasFeedback
              >
                <Select
                  mode="multiple"
                  allowClear
                  placeholder="Etiketləri seçin"
                  value={values.tagIds}
                  onChange={handleSelectChange}
                  className="w-[932px]"
                >
                  {tagName.map((tag) => (
                    <Option key={tag.id} value={tag.id}>
                      {tag.name}
                    </Option>
                  ))}
                </Select>
              </Form.Item>
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="w-[136px] mt-8 h-12 bg-[#3F40D5] absolute -top-[50%] group duration-700 ease-in-out transition-all"
                >
                  <p className="font-inter text-white duration-700 group-hover:text-black">
                    Göndər
                  </p>
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateTranslate;
