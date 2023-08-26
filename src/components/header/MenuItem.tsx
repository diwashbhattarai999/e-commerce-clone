"use client";

interface MenuItemProps {
  label: string;
  border_right?: boolean;
  Icon?: React.ElementType;
  IconRight?: React.ElementType;
  onClick?: () => void;
}

const MenuItem: React.FC<MenuItemProps> = ({
  label,
  border_right,
  Icon,
  IconRight,
  onClick,
}) => {
  return (
    <div className="pb-2">
      <div
        className="
          px-2         
          after:block after:content-[''] after:border-b-[3px] 
          after:h-2 after:border-b-primary-color after:scale-x-0 
          after:transition after:duration-500 hover:after:scale-x-100
          after:origin-[0%_50%]
          hover:text-primary-color
          cursor-pointer
      "
        onClick={onClick}
      >
        <div
          className={`
            flex gap-1 items-center
            ${border_right && "pr-2 border-r border-r-current"}
          `}
        >
          {Icon && <Icon size="14px" />}
          {label}
          {IconRight && <IconRight size="14px" />}
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
