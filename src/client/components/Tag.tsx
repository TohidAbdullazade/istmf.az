import {Tag as AntdTag} from "antd";
import {FC, ReactNode} from "react";

interface TagType {
    img?: string;
    title?: string;
    icon?: ReactNode;
    className?: string;
    titleClassName?: string;
    onClick?: () => void
}

const Tag: FC<TagType> = ({img, title, icon, className, titleClassName, onClick}) => {
    return (
        <AntdTag onClick={onClick} className={className}>
      <span className={titleClassName}>
        {title}
      </span>
            <span className={'flex gap-2'}>
       {img ? <img className={'rounded-full w-[15px] h-[15px]'} src={img}/> : icon}
      </span>
        </AntdTag>
    );
};

export default Tag;
