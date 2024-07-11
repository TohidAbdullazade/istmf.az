// // import { Button, Form, Input, Space } from "antd";
// // import DropDown from "./DropDown.tsx";
// // import Tag from "./Tag.tsx";
// // import iso from "../../assets/images/iso-icon.png";
// // import { SVG } from "./Svg.tsx";
// // import { ChangeEvent, FC, useState } from "react";
// // import { Query, useQueryContext } from "../../context/QueryContext.tsx";
// // import { getAllTranslations } from "../../adminpanel/services/translates/translate_service.ts";

// // const SearchInput: FC = () => {
// //   const { arrowDown, magnify } = SVG;
// //   const [visible, setVisible] = useState<boolean>(false);
// //   const { query, setQuery } = useQueryContext();
// //   const [input, setInput] = useState<string>(query.searchTerm || "");

// //   const toggleDropDown = () => {
// //     setVisible(!visible);
// //   };

// //   const handleQueryChange = (e: ChangeEvent<HTMLInputElement>) => {
// //     setInput(e.target.value);
// //   };

// //   const handleSearch = () => {
// //     setQuery((prev: Query) => ({ ...prev, searchTerm: input }));
// //     getAllTranslations(
// //       query.pageNumber,
// //       query.pageSize,
// //       query.name,
// //       query.orderBy,
// //       input
// //     )
// //       .then((response) => {
// //         console.log("Search results:", response);

// //       })
// //       .catch((error) => {
// //         console.error("Search error:", error);
// //       });
// //   };

// //   return (
// //     <div className="relative">
// //       <Form
// //         onFinish={handleSearch}
// //         className="search-input mt-[30px] flex gap-4"
// //       >
// //         <Space.Compact>
// //           <div
// //             className={
// //               "border-r w-[156px] h-[63px] border bg-white flex items-center rounded-tl-[16px] rounded-bl-[16px]"
// //             }
// //           >
// //             <div className="selection py-[18px] px-6">
// //               <span>
// //                 <Tag
// //                   titleClassName={
// //                     "font-inter uppercase font-semibold text-[12px]"
// //                   }
// //                   className={
// //                     "rounded-full flex gap-1.5 w-14  h-7 items-center border-[#4D86C0]"
// //                   }
// //                   img={iso}
// //                   title={"iso"}
// //                 />
// //               </span>
// //             </div>
// //             <div className="arrow">
// //               <span onClick={toggleDropDown} className="cursor-pointer">
// //                 {arrowDown}
// //               </span>
// //             </div>
// //           </div>
// //           <div className={"relative flex gap-5"}>
// //             <span>
// //               <Input
// //                 value={input}
// //                 onChange={handleQueryChange}
// //                 placeholder={"Search for a word "}
// //                 className={
// //                   "w-[640px] border-[#EEEEEE] font-inter text-[18px] flex gap-5 bg-white h-[63px] rounded-tr-[16px] rounded-br-[16px]"
// //                 }
// //                 style={{
// //                   paddingLeft: "50px",
// //                 }}
// //               />
// //             </span>
// //             <span
// //               className={
// //                 "absolute left-4 top-1/2 transform -translate-y-1/2 z-10"
// //               }
// //             >
// //               {magnify}
// //             </span>
// //           </div>
// //         </Space.Compact>
// //         <Button
// //           htmlType="submit"
// //           className="w-[136px] h-[63px] duration-700 transition-all ease-in-out font-inter text-base bg-[#3F40D5] text-white rounded-[10px]"
// //         >
// //           Search
// //         </Button>
// //       </Form>
// //       <DropDown
// //         className={
// //           "transition-all duration-500 ease-in-out drop-down absolute top-[calc(100%+8px)] left-0 w-[158px] border border-[#B9BBEC] rounded-2xl my-2 z-10 bg-white"
// //         }
// //         visible={visible}
// //       />
// //     </div>
// //   );
// // };

// // export default SearchInput;

// import { Button, Form, Input, Space } from "antd";
// import DropDown from "./DropDown.tsx";
// import Tag from "./Tag.tsx";
// import iso from "../../assets/images/iso-icon.png";
// import { SVG } from "./Svg.tsx";
// import { ChangeEvent, FC, useState } from "react";
// import { Query, useQueryContext } from "../../context/QueryContext.tsx";
// import { getAllTranslations } from "../../adminpanel/services/translates/translate_service.ts";

// const SearchInput: FC = () => {
//   const { arrowDown, magnify } = SVG;
//   const [visible, setVisible] = useState<boolean>(false);
//   const { query, setQuery } = useQueryContext();
//   const [input, setInput] = useState<string>(query.searchTerm || "");

//   const toggleDropDown = () => {
//     setVisible(!visible);
//   };

//   const handleQueryChange = (e: ChangeEvent<HTMLInputElement>) => {
//     setInput(e.target.value);
//   };

//   const handleSearch = () => {
//     setQuery((prev: Query) => ({ ...prev, searchTerm: input }));
//     getAllTranslations(
//       query.pageNumber,
//       query.pageSize,
//       query.name,
//       query.orderBy,
//       input
//     )
//       .then((response) => {
//         console.log("Search results:", response);
//         setInput(""); // Clear the input field
//       })
//       .catch((error) => {
//         console.error("Search error:", error);
//       });
//   };

//   return (
//     <div className="relative">
//       <Form
//         onFinish={handleSearch}
//         className="search-input mt-[30px] flex gap-4"
//       >
//         <Space.Compact>
//           <div
//             className={
//               "border-r w-[156px] h-[63px] border bg-white flex items-center rounded-tl-[16px] rounded-bl-[16px]"
//             }
//           >
//             <div className="selection py-[18px] px-6">
//               <span>
//                 <Tag
//                   titleClassName={
//                     "font-inter uppercase font-semibold text-[12px]"
//                   }
//                   className={
//                     "rounded-full flex gap-1.5 w-14  h-7 items-center border-[#4D86C0]"
//                   }
//                   img={iso}
//                   title={"iso"}
//                 />
//               </span>
//             </div>
//             <div className="arrow">
//               <span onClick={toggleDropDown} className="cursor-pointer">
//                 {arrowDown}
//               </span>
//             </div>
//           </div>
//           <div className={"relative flex gap-5"}>
//             <span>
//               <Input
//                 value={input}
//                 onChange={handleQueryChange}
//                 placeholder={"Search for a word "}
//                 className={
//                   "w-[640px] border-[#EEEEEE] font-inter text-[18px] flex gap-5 bg-white h-[63px] rounded-tr-[16px] rounded-br-[16px]"
//                 }
//                 style={{
//                   paddingLeft: "50px",
//                 }}
//               />
//             </span>
//             <span
//               className={
//                 "absolute left-4 top-1/2 transform -translate-y-1/2 z-10"
//               }
//             >
//               {magnify}
//             </span>
//           </div>
//         </Space.Compact>
//         <Button
//           htmlType="submit"
//           className="w-[136px] h-[63px] duration-700 transition-all ease-in-out font-inter text-base bg-[#3F40D5] text-white rounded-[10px]"
//         >
//           Search
//         </Button>
//       </Form>
//       <DropDown
//         className={
//           "transition-all duration-500 ease-in-out drop-down absolute top-[calc(100%+8px)] left-0 w-[158px] border border-[#B9BBEC] rounded-2xl my-2 z-10 bg-white"
//         }
//         visible={visible}
//       />
//     </div>
//   );
// };

// export default SearchInput;

import { Button, Form, Input, Space } from "antd";
import DropDown from "./DropDown.tsx";
import Tag from "./Tag.tsx";
import iso from "../../assets/images/iso-icon.png";
import { SVG } from "./Svg.tsx";
import { ChangeEvent, FC, useState } from "react";
import { Query, useQueryContext } from "../../context/QueryContext.tsx";
import { getAllTranslations } from "../../adminpanel/services/translates/translate_service.ts";

const SearchInput: FC = () => {
  const { arrowDown, magnify } = SVG;
  const [visible, setVisible] = useState<boolean>(false);
  const { query, setQuery } = useQueryContext();
  const [input, setInput] = useState<string>(query.searchTerm || "");

  const toggleDropDown = () => {
    setVisible(!visible);
  };

  const handleQueryChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSearch = () => {
    setQuery((prev: Query) => ({
      ...prev,
      searchTerm: input,
      tagName: null,
      orderBy: null,
    }));
    getAllTranslations(query.pageNumber, query.pageSize, null, null, input)
      .then((response) => {
        console.log("Search results:", response);
        setInput(""); // Clear the input field
      })
      .catch((error) => {
        console.error("Search error:", error);
      });
  };

  return (
    <div className="relative">
      <Form
        onFinish={handleSearch}
        className="search-input mt-[30px] flex gap-4"
      >
        <Space.Compact>
          <div
            className={
              "border-r w-[156px] h-[63px] border bg-white flex items-center rounded-tl-[16px] rounded-bl-[16px]"
            }
          >
            <div className="selection py-[18px] px-6">
              <span>
                <Tag
                  titleClassName={
                    "font-inter uppercase font-semibold text-[12px]"
                  }
                  className={
                    "rounded-full flex gap-1.5 w-14  h-7 items-center border-[#4D86C0]"
                  }
                  img={iso}
                  title={"iso"}
                />
              </span>
            </div>
            <div className="arrow">
              <span onClick={toggleDropDown} className="cursor-pointer">
                {arrowDown}
              </span>
            </div>
          </div>
          <div className={"relative flex gap-5"}>
            <span>
              <Input
                value={input}
                onChange={handleQueryChange}
                placeholder={"Search for a word "}
                className={
                  "w-[640px] border-[#EEEEEE] font-inter text-[18px] flex gap-5 bg-white h-[63px] rounded-tr-[16px] rounded-br-[16px]"
                }
                style={{
                  paddingLeft: "50px",
                }}
              />
            </span>
            <span
              className={
                "absolute left-4 top-1/2 transform -translate-y-1/2 z-10"
              }
            >
              {magnify}
            </span>
          </div>
        </Space.Compact>
        <Button
          htmlType="submit"
          className="w-[136px] h-[63px] duration-700 transition-all ease-in-out font-inter text-base bg-[#3F40D5] text-white rounded-[10px]"
        >
          Search
        </Button>
      </Form>
      <DropDown
        className={
          "transition-all duration-500 ease-in-out drop-down absolute top-[calc(100%+8px)] left-0 w-[158px] border border-[#B9BBEC] rounded-2xl my-2 z-10 bg-white"
        }
        visible={visible}
      />
    </div>
  );
};

export default SearchInput;
