import { RuleObject } from "antd/es/form";
import { SVG } from "../components/Svg.tsx";
import Footer from "../components/Footer.tsx";
import { Button, Form, Input, message } from "antd";
import { ChangeEvent, useState, KeyboardEvent } from "react";
import { makeNewNotification } from "../../adminpanel/services/notification/notification_services.ts";
import { NotificationInterface } from "../../adminpanel/interface/notification/NotificationInterface.ts";
import { AxiosError } from "axios";
import { toast, ToastContainer } from "react-toastify";

type FormTypes = {
  name: string;
  surname: string;
  email: string;
  phoneNumber: string;
  content: string;
};

const Contact = () => {
  const { TextArea } = Input;
  const [errorShown, setErrorShown] = useState<boolean>(false);
  const [input, setInput] = useState<FormTypes>({
    name: "",
    surname: "",
    email: "",
    phoneNumber: "",
    content: "",
  });

  const [form] = Form.useForm();

  // Handle input changes and update state
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setInput((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));
  };

  // Post the datas to the API
  const onFinish = (values: NotificationInterface) => {
    const now = new Date();
    now.setHours(now.getHours() + 4);
    const data = {
      ...values,
      insertDate: now.toISOString(),
    };
    makeNewNotification(data)
      .then((res: NotificationInterface) => {
        console.log(res);
        form.resetFields();
        toast.success(` Müraciət uğurlu şəkildə əlavə olundu!`, {
          position: "top-center",
          autoClose: 2000,
          draggable: true,
          pauseOnHover: false,
        });
      })
      .catch((err: AxiosError) => {
        console.log(err.message);
        toast.error(` Müraciıti  göndərən zaman xəta baş verdi!`, {
          position: "top-center",
          autoClose: 2000,
          draggable: true,
          pauseOnHover: false,
        });
      });
  };

  // Show an error Message if a input is empty
  const handleFailedData = () => {
    message.error("All fields must be filled", 2);
    return;
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

  return (
    <>
      <ToastContainer />
      <div className="w-full flex justify-center mb-[400px]">
        <div className="inner-container w-[1200px] h-[464px] flex justify-center rounded-[10px] my-[52px] bg-slate-50 relative">
          <div className="content text-center">
            <div className="title mt-11">
              <h2 className={"font-inter text-[56px] text-black"}>
                Get in Touch
              </h2>
              <p className={"font-inter text-base text-black"}>
                We will try to answer your requests during two work hours
              </p>
            </div>
            <div className="contact-side mt-[17px] flex gap-8 ml-10">
              <div className="left flex gap-2.5">
                <span>{SVG.email}</span>
                <span className={"font-inter text-base text-black"}>
                  info@ismf.com
                </span>
              </div>
              <div className="right flex gap-2.5">
                <span>{SVG.phone}</span>
                <span className={"font-inter text-base text-black"}>
                  +994 99 777 44 33
                </span>
              </div>
            </div>
          </div>
          <div className="child-container absolute top-[232px] rounded-3xl py-[58px] px-[39px] w-[1011px] h-[640px] bg-white border ">
            <Form
              form={form}
              name="contact"
              onFinish={onFinish}
              onFinishFailed={handleFailedData}
            >
              <div className={"flex"}>
                <Form.Item
                  labelCol={{ span: 24 }}
                  label="FirstName"
                  name="name"
                  rules={[
                    { required: true, message: "Please enter your first name" },
                    { whitespace: true },
                    {
                      min: 3,
                      message: "First name must be at least 3 characters long",
                    },
                    noWhitespaceStart(),
                  ]}
                  hasFeedback
                >
                  <Input
                    value={input.name}
                    onChange={handleChange}
                    name="name"
                    placeholder="Enter your first name please..."
                    className="w-[450px]"
                  />
                </Form.Item>
                <Form.Item
                  labelCol={{ span: 24 }}
                  label="Lastname"
                  name="surname"
                  rules={[
                    { required: true, message: "Please enter your lastname" },
                    { whitespace: true },
                    {
                      min: 3,
                      message: "Last name must be at least 3 characters long",
                    },
                    noWhitespaceStart(),
                  ]}
                  hasFeedback
                >
                  <Input
                    value={input.surname}
                    onChange={handleChange}
                    name="surname"
                    placeholder="Enter your last name please..."
                    className="w-[450px]"
                  />
                </Form.Item>
              </div>
              <div className={"flex"}>
                <Form.Item
                  labelCol={{ span: 24 }}
                  label="Email"
                  name="email"
                  rules={[
                    {
                      required: true,
                      message: "Please enter a valid email address",
                    },
                    {
                      type: "email",
                      message:
                        "You did not enter the correct email in the email field",
                    },
                    noWhitespaceStart(),
                  ]}
                  hasFeedback
                >
                  <Input
                    value={input.email}
                    onChange={handleChange}
                    name="email"
                    placeholder="Enter your email please..."
                    className="w-[450px]"
                  />
                </Form.Item>
                <Form.Item
                  labelCol={{ span: 24 }}
                  label="Phone"
                  name="phoneNumber"
                  rules={[
                    {
                      required: true,
                      message: "Please enter your phone number",
                    },
                    { whitespace: true },
                    {
                      min: 3,
                      message:
                        "Phone number must be at least 3 characters long",
                    },
                    noWhitespaceStart(),
                  ]}
                  hasFeedback
                >
                  <Input
                    value={input.phoneNumber}
                    onChange={handleChange}
                    name="phoneNumber"
                    placeholder="Enter your phone number please..."
                    className="w-[450px]"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    onKeyPress={(event: KeyboardEvent<HTMLInputElement>) => {
                      if (!/[0-9]/.test(event.key)) {
                        if (!errorShown) {
                          message.error("Nömrə formatı yalnışdır!", 2);
                          setErrorShown(true);
                        }
                        event.preventDefault();
                      }
                    }}
                    onBlur={() => setErrorShown(false)}
                  />
                </Form.Item>
              </div>
              <div className={"flex"}>
                <Form.Item
                  labelCol={{ span: 24 }}
                  label="Message"
                  name="content"
                  rules={[
                    { required: true, message: "Please enter your message" },
                    { whitespace: true },
                    noWhitespaceStart(),
                  ]}
                  hasFeedback
                >
                  <TextArea
                    value={input.content}
                    onChange={handleChange}
                    name="content"
                    placeholder="Hello there, I would like to talk about how to..."
                    autoSize={{ minRows: 6, maxRows: 6 }}
                    className="w-[932px] flex h-[184px] px-[14px] py-3 font-inter"
                  />
                </Form.Item>
              </div>
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="w-[136px] mt-8 h-12 bg-[#3F40D5] absolute -top-[50%] group duration-700 ease-in-out transition-all"
                >
                  <p className="font-inter text-white  duration-700 group-hover:text-black">
                    Send Message
                  </p>
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
