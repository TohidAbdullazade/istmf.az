import { Button, Form, Input, Select } from "antd";
import { RuleObject } from "antd/es/form";
import { TranslationInterfacePayload } from "../../interface/translate/TranslateInterface";
import TextArea from "antd/es/input/TextArea";
import { ChangeEvent, useEffect, useState } from "react";
import { GET_ALL_TAGS_FOR_TRANSLATION } from "../../services/tags/tag_services";
import { useNavigate, useParams } from "react-router-dom";
import { AxiosError } from "axios";
import {
  getTranlationById,
  updateTranlate,
} from "../../services/translates/translate_service";
import { toast } from "react-toastify";

const { Option } = Select;

interface UpdateTagType {
  id: number;
  name: string;
}

const UpdateTranslate = () => {
  const [tags, setTags] = useState<UpdateTagType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();
  const [form] = Form.useForm();

  const [values, setValues] = useState<TranslationInterfacePayload>({
    translateDto: {
      englishWord: "",
      russianWord: "",
      azDescription: "",
      ruDescription: "",
      source: "",
    },
    tagIds: [],
  });

  const { id } = useParams();
  const newId = Number(id);

  useEffect(() => {
    if (id !== undefined) {
      getTranlationById(newId)
        .then((res: TranslationInterfacePayload) => {
          setValues(res);
          form.setFieldsValue({
            ...res.translateDto,
            tags: res.tagIds,
          });
          toast.success(` Tərcümə uğurlu şəkildə yeniləndi!`, {
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
    }
  }, [id, newId, form]);

  useEffect(() => {
    setLoading(true);
    GET_ALL_TAGS_FOR_TRANSLATION()
      .then((res: UpdateTagType[]) => {
        setTags(res);
        form.setFieldsValue({ tags: values.tagIds });
      })
      .catch((err: AxiosError) => {
        console.log(err.message);
      })
      .finally(() => setLoading(false));
  }, []);

  const handleSelectChange = (value: number[]) => {
    setValues({ ...values, tagIds: value });
    form.setFieldsValue({ tags: value });
  };

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

  const updateTranslation = (formValues: any) => {
    const updatedValue: TranslationInterfacePayload = {
      translateDto: {
        englishWord: formValues.englishWord,
        russianWord: formValues.russianWord,
        azDescription: formValues.azDescription,
        ruDescription: formValues.ruDescription,
        source: formValues.source,
      },
      tagIds: values.tagIds,
    };

    updateTranlate(updatedValue, newId)
      .then((res) => {
        console.log(res);
        navigate("/admin/translation"); 
      })
      .catch((err) => {
        console.log(err);
      });
  };

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
    form.setFieldsValue({
      ...form.getFieldsValue(),
      [name]: value,
    });
  };

  return (
    <div className="w-full flex justify-center">
      <div className="inner-container w-[1200px] h-[464px] flex justify-center rounded-[10px] bg-slate-50 relative">
        <div className="child-container rounded-3xl px-[39px] w-[1011px] h-[100vh] bg-white border">
          <h2 className="my-1 text-center font-inter py-5 text-xl text-gray-400">
            Tərcüməni Yenilə
          </h2>
          <Form
            form={form}
            name="updateTranslateForm"
            onFinish={updateTranslation}
            initialValues={{
              ...values.translateDto,
              tags: values.tagIds,
            }}
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
                  onChange={handleChange}
                  name="englishWord"
                  placeholder="Ingilis sözünü daxil edin..."
                  className="w-[450px]"
                  value={values.translateDto.englishWord}
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
                  onChange={handleChange}
                  name="russianWord"
                  placeholder="Rus sözünü daxil edin..."
                  className="w-[450px]"
                  value={values.translateDto.russianWord}
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
                  onChange={handleChange}
                  name="source"
                  placeholder="Mənbəni daxil edin..."
                  className="w-[57.7vw]"
                  value={values.translateDto.source}
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
                  onChange={handleChange}
                  name="azDescription"
                  placeholder="Azərbaycan dili açıqlamasını daxil edin..."
                  className="w-[932px] flex h-[184px] px-[14px] py-3 font-inter"
                  value={values.translateDto.azDescription}
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
                  onChange={handleChange}
                  name="ruDescription"
                  placeholder="Rus dili açıqlamasını daxil edin..."
                  autoSize={{ minRows: 6, maxRows: 6 }}
                  className="w-[932px] flex h-[184px] px-[14px] py-3 font-inter"
                  value={values.translateDto.ruDescription}
                />
              </Form.Item>
            </div>
            <div className="flex flex-col">
              <Form.Item
                labelCol={{ span: 24 }}
                label="Tərcümə etiketləri"
                name="tags"
                rules={[{ required: true, message: "Etiketlər tələb olunur!" }]}
                hasFeedback
              >
                <Select
                  mode="multiple"
                  placeholder="Etiketləri seçin"
                  onChange={handleSelectChange}
                  className="w-[932px]"
                  loading={loading}
                >
                  {tags.map((tag) => (
                    <Option key={tag.id} value={tag.id}>
                      {tag.name}
                    </Option>
                  ))}
                </Select>
              </Form.Item>
            </div>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="w-[136px] mt-8 h-12 bg-[#3F40D5] absolute -top-[50%] group duration-700 ease-in-out transition-all"
              >
                <p className="font-inter text-white  duration-700 group-hover:text-black">
                  Göndər
                </p>
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default UpdateTranslate;
