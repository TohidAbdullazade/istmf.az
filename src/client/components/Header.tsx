// import { NavLink, useNavigate } from "react-router-dom";
// import { Button } from "antd";
// import "../../index.css";
// import Avatar from "antd/es/avatar/avatar";
// import { FaUserTie } from "react-icons/fa";
// import { FC } from "react";
// import { MdOutlineForwardToInbox } from "react-icons/md";

// const Header: FC = () => {
//   const navigate = useNavigate();
//   const navlinks = [
//     {
//       label: "Haqqımızda (tezliklə)",
//       path: "/about",
//     },
//     {
//       label: "Kitabxana",
//       path: "/dictionary",
//     },
//     {
//       label: "Bloq (tezliklə)",
//       path: "/blog",
//     },
//   ];

//   const highlightText = (text: string) => {
//     const regex = /\(.*?\)/g;
//     return text.split(regex).reduce((acc, part, index, array) => {
//       acc.push(<span key={`${text}-${index}`}>{part}</span>);
//       if (index < array.length - 1) {
//         const match = text.match(regex);
//         if (match) {
//           acc.push(
//             <span key={`${text}-highlight-${index}`} className="text-red-500">
//               {match[index]}
//             </span>
//           );
//         }
//       }
//       return acc;
//     }, [] as JSX.Element[]);
//   };

//   return (
//     <header className="w-full sticky top-0 z-[100] h-[5.5rem] bg-white px-4 flex justify-between items-center border-b">
//       <div className="logo" onClick={() => navigate("/")}>
//         <Avatar
//           className={"cursor-pointer"}
//           size={"large"}
//           icon={<FaUserTie />}
//         />
//       </div>
//       <nav className="w-full justify-center flex items-center gap-[46px]">
//         {navlinks.map((item) => (
//           <NavLink key={item.path} to={item.path} className="text-gray-400">
//             {highlightText(item.label)}
//           </NavLink>
//         ))}
//       </nav>
//       <div className="contact-side">
//         <NavLink to={"/contact"}>
//           <Button
//             className={
//               "w-full flex items-center  h-12 rounded-[10px] bg-[#3F40D5] text-white duration-700"
//             }
//             type="default"
//             htmlType="submit"
//           >
//             <span>
//               <MdOutlineForwardToInbox size={24} />
//             </span>
//           </Button>
//         </NavLink>
//       </div>
//     </header>
//   );
// };

// export default Header;

import { NavLink, useNavigate } from "react-router-dom";
import { Button } from "antd";
import Avatar from "antd/es/avatar/avatar";
import { FaUserTie } from "react-icons/fa";
import { FC } from "react";
import { MdOutlineForwardToInbox } from "react-icons/md";

const Header: FC = () => {
  const navigate = useNavigate();
  const navlinks = [
    {
      label: "Haqqımızda (tezliklə)",
      path: "/about",
    },
    {
      label: "Kitabxana",
      path: "/dictionary",
    },
    {
      label: "Bloq (tezliklə)",
      path: "/blog",
    },
  ];

  const highlightText = (text: string) => {
    const regex = /\(.*?\)/g;
    return text.split(regex).reduce((acc, part, index, array) => {
      acc.push(<span key={`${text}-${index}`}>{part}</span>);
      if (index < array.length - 1) {
        const match = text.match(regex);
        if (match) {
          acc.push(
            <span key={`${text}-highlight-${index}`} className="text-red-500">
              {match[index]}
            </span>
          );
        }
      }
      return acc;
    }, [] as JSX.Element[]);
  };

  return (
    <header className="w-full sticky top-0 z-[100] h-[5.5rem] bg-white px-4 flex justify-between items-center border-b">
      <div className="logo cursor-pointer" onClick={() => navigate("/")}>
        <Avatar size={"large"} icon={<FaUserTie />} />
      </div>
      <nav className="hidden md:flex w-full justify-center items-center gap-[46px]">
        {navlinks.map((item) => (
          <NavLink key={item.path} to={item.path} className="text-gray-400">
            {highlightText(item.label)}
          </NavLink>
        ))}
      </nav>
      <div className="contact-side">
        <NavLink to={"/contact"}>
          <Button
            className={
              "w-full flex items-center  h-12 rounded-[10px] bg-[#3F40D5] text-white duration-700"
            }
            type="default"
            htmlType="submit"
          >
            <span>
              <MdOutlineForwardToInbox size={24} />
            </span>
          </Button>
        </NavLink>
      </div>
    </header>
  );
};

export default Header;

