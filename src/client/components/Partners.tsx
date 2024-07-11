import idda from "../../assets/images/iddaa.png";
import muk from "../../assets/images/muk.png";
import asi from "../../assets/images/asi.png";

const Partners = () => {
  const images = [
    {
      id: 1,
      image: idda,
    },
    {
      id: 2,
      image: asi,
    },
    {
      id: 3,
      image: muk,
    },
  ];

  return (
    <div className="max-w-[673px] h-[183px] w-full  my-[114px] text-center ">
      <h2
        className={
          "font-inter text-[32px] font-[400]  text-slate-900 leading-[38.4px]"
        }
      >
        Our valuable partners
      </h2>
      <p
        className={
          "mt-4 font-inter font-[400] text-[18px] leading text-slate-900 -[21.6px] "
        }
      >
        Facebook, VISA, MasterCard, UnionPay, JCB
      </p>
      <div className="images flex  items-center">
        {images?.map((item,i) => (
          <div className={"w-full flex justify-center"} key={item.id}>
            <img
              className={` ${
                i == 1 ? "w-[300px]    h-[200px]" : ""
              } w-[100px] h-[100px] duration-300 ease-in-out transition-all hover:scale-110 cursor-pointer`}
              src={item.image}
              alt="image.png"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Partners;
