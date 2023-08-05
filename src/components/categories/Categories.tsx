import Category from "./Category";
import SubCategory from "./SubCategory";

const category = [
  {
    id: 1,
    title: "Daily Needs",
  },
  {
    id: 2,
    title: "Electronics",
  },
  {
    id: 3,
    title: "Books",
  },
  {
    id: 4,
    title: "Myntra Brands",
  },
];

const Categories = () => {
  return (
    <div
      className="
    absolute 
    left-0 right-0 bottom-0 top-[9.6rem] 
    h-[60vh] w-[90vw] 
    mx-auto 
    bg-white
    "
    >
      <div className="h-full flex justify-between">
        <div
          className="
          flex items-center flex-col 
          text-primary-color 
          pt-8 pl-16 
          border-r-2 border-primary-color
          "
        >
          {category.map(({ id, title }) => (
            <Category key={id} title={title} />
          ))}
        </div>
        <div className="flex-1">
          <SubCategory title="Foods" />
        </div>
      </div>
    </div>
  );
};

export default Categories;
