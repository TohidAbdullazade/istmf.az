import Avatar from "antd/es/avatar/avatar";
import {FaUserTie} from "react-icons/fa";
import {Link} from "react-router-dom";
import {SVG} from "./Svg.tsx";

const Footer = () => {
    const {instagram, facebook} = SVG
    return (
        <footer className="w-full h-[324px] bg-[#3F40D5] flex justify-center items-center flex-col gap-[52px]  ">
            <div className="top w-[1214px] mt-[52px] h-[148px] ">
                <div className="inner-content flex items-center justify-between ">
                    <div className="info w-[257px]  h-24">
                        <div className="logo-side">
                            <Avatar className={'cursor-pointer'} size={"large"} icon={<FaUserTie/>}/>
                            <p className={'font-inter text-sm mt-[28px] text-white'}>Discover the exclusive benefits
                                that propel your brand forward.</p>
                        </div>
                    </div>
                    <div className="navigation w-[530px] h-[148px] flex  gap-[81px] ">
                        <div className="column-1 w-[83px] flex flex-col gap-7">
                            <div className="top">
                                <h3 className={'text-lg font-inter text-white'}>Pages</h3>
                            </div>
                            <div className="links ">
                                <ul className={'flex flex-col gap-2.5 font-inter text-sm text-white'}>
                                    <li><Link className={'duration-300 transition-all ease-in-out hover:text-red-400'}
                                              to="/about">About</Link></li>
                                    <li><Link className={'duration-300 transition-all ease-in-out hover:text-red-400'}
                                              to="/dictionary">Dictionary</Link></li>
                                    <li><Link className={'duration-300 transition-all ease-in-out hover:text-red-400'}
                                              to="/blog">Blogs</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="column-2 w-[203px] flex flex-col gap-7">
                            <div className="top ">
                                <h3 className={'text-lg font-inter text-white'}>Contact Us</h3>
                            </div>
                            <div className="cursor-default ">
                                <ul className={'flex flex-col gap-2.5 font-inter text-sm text-white'}>
                                    <li><p
                                        className={'duration-300 transition-all ease-in-out hover:text-red-400'}>info@ismf.com</p>
                                    </li>
                                    <li><p
                                        className={'duration-300 transition-all ease-in-out hover:text-red-400'}>+994 99
                                        777 44 33</p>
                                    </li>
                                    <li><p
                                        className={'duration-300 transition-all ease-in-out hover:text-red-400'}>124
                                        Avenue, Baku, Azerbaijan, 1005</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="column-3 w-[82px]">
                            <div className="top">
                                <h3 className={'text-lg font-inter text-white'}>Follow Us</h3>
                            </div>
                            <div className="social-icons flex gap-2.5 items-center">
                                <div className="mt-4 duration-300 transition-all ease-in-out hover:scale-110 cursor-pointer">
                                    {facebook}
                                </div>
                                <div className="mt-4 duration-300 transition-all ease-in-out hover:scale-110 cursor-pointer">
                                    {instagram}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bottom-side flex justify-center h-10 w-full border-t  border-t-[#5C5DDA]">
                <p className={'font-inter text-xs text-white font-[500] mt-5 '}>
                    © 2024 Ismf.az, All Rights Reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;