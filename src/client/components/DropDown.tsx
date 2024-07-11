import {BsThreeDots} from "react-icons/bs";
import {FC, ReactNode,} from "react";
import Tag from "./Tag.tsx";
import iso from '../../assets/images/iso-icon.png';
import itil from '../../assets/images/itil.png';

interface DropDownProps {
    visible: boolean;
    className?: string,
}

interface DropDownListProps {
    className: string;
    tag?: ReactNode;
    icon?: ReactNode;
    label: string;
    delay: string;
}

const DropDown: FC<DropDownProps> = ({visible, className, }) => {
    return (
        <>
            <div
                className={`${className} ${visible ? 'max-h-[180px] opacity-100' : 'max-h-0 opacity-0 invisible overflow-hidden transform -translate-y-2'}`}>
                <DropDownList  icon={<BsThreeDots color={'#3F40D5'}/>} label={'All'} delay="0ms"
                              className={'duration-300 p-4 transition-all ease-in-out cursor-pointer hover:bg-purple-50 w-full h-[60px] bg-white rounded-tl-2xl rounded-tr-2xl border-b border-slate-100'}/>
                <DropDownList
                    tag={<Tag titleClassName={'font-inter uppercase font-bold text-[12px] text-slate-900'}
                              className={'rounded-full flex gap-1.5 w-14  h-7 items-center border-[#4D86C0]'}
                              title={"iso"}
                              img={iso}/>} delay="100ms"
                    className={'duration-300 py-4 transition-all ease-in-out cursor-pointer hover:bg-purple-50 w-full h-[60px] bg-white border-b border-slate-100'}/>
                <DropDownList
                    tag={<Tag titleClassName={'font-inter uppercase font-bold text-[12px] text-slate-900'}
                              className={'rounded-full flex gap-1.5 w-14  h-7 items-center border-[#4D86C0]'}
                              title={'itil'}
                              img={itil}/>} delay="200ms"
                    className={'duration-300 py-4 transition-all ease-in-out cursor-pointer hover:bg-purple-50 w-full h-[58px] bg-white rounded-bl-2xl rounded-br-2xl border-slate-100'}/>
            </div>
        </>
    );
};

const DropDownList = ({className, tag, label, icon, delay, }: Partial<DropDownListProps>) => {
    return (
        <div  className={className} style={{transitionDelay: delay}}>
            <div className="flex gap-2 items-center">
                {icon && <span>{icon}</span>}
                <span className={'font-outfit font-base text-[#3F40D5]'}>
                    {label}
                </span>
                {tag && <span>{tag}</span>}
            </div>
        </div>
    );
}

export default DropDown;
