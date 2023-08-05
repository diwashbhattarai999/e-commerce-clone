import { HiMiniChevronRight } from "react-icons/hi2";

interface CategoryProps {
  title: string;
}

const Category: React.FC<CategoryProps> = ({ title }) => {
  return (
    <div className="
        w-full border-t-2 
        hover:bg-primary-color hover:text-white
        cursor-pointer
    ">
      <div className="flex items-center justify-between gap-6  px-4 py-2">
        <h5 className="font-semibold text-base">{title}</h5>
        <HiMiniChevronRight size="18px" />
      </div>
    </div>
  );
};

export default Category;
