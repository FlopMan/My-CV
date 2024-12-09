import React from "react";

type Props = {
    content: string;
    color: string;
};

const CategoryType = ({ content, color }: Props) => {
    return (
        <span
            style={{ color, backgroundColor: color + "10" }}
            className={`text-[0.97222rem] md:text-[1.111rem] py-[0.42rem] md:py-[0.49rem] px-[0.83rem] md:px-[0.97rem] rounded-full h-[2.29167rem]`}
        >
            {content}
        </span>
    );
};

export default CategoryType;
