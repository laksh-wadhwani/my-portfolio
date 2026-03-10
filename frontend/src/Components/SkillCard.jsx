import React from "react";

const SkillCard = ({ icon: Icon, title }) => {
    return (
        <div className="group h-[13.125rem] bg-[#dac5a70d] border border-[#dac5a726] rounded-xl py-6 px-8 box-border flex flex-col justify-between transition-all duration-700 ease-in-out hover:scale-[1.02] hover:bg-[#dac5a7]">

            <Icon size={60} className="self-end stroke-1 text-[#dac5a7] group-hover:text-black transition-all duration-500" />
            <span className="font-serif text-[19px] tracking-wide capitalize group-hover:text-black transition-all duration-500">
                {title.split("\n").map((line, index) => (
                    <React.Fragment key={index}>
                        {line}
                        <br />
                    </React.Fragment>
                ))}
            </span>

        </div>
    );
};

export default SkillCard;