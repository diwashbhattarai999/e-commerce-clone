"use client";

interface SectionProps {
  title: string;
  active: boolean;
  Icon?: React.ElementType;
  onClick: () => void;
}

const Sections: React.FC<SectionProps> = ({ title, active, Icon, onClick }) => {
  return (
    <div
      className={`
        font-semibold text-lg 
        py-5 w-full
        border-x-[1px] border-[#ffffff4d] 
        ${active ? "bg-transparent" : "bg-primary-color"}
        ${active ? "text-primary-color" : "text-white"}
        flex items-center justify-center gap-2
        cursor-pointer
      `}
      onClick={onClick}
    >
      {Icon && <Icon />}
      <span>{title}</span>
    </div>
  );
};

export default Sections;
