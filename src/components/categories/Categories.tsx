import Category from "./Category";
import categoryData from "./CategoryList";

const Categories = () => {



  return (
    <div
      className="
        absolute -left-4 right-0 bottom-0 top-full 
        mt-[1px] h-[75vh] max-h[800px] max-w-[25%]
        bg-white shadow-md
    "
    >
      <nav>
        <ul
          className="
          flex items-center flex-col 
          text-primary-color 
          pl-8 pt-8 desktop:pl-12 
          "
        >
          {categoryData.map(({ id, name, link, menu }) => (
            <Category 
              key={id} 
              title={name} 
              link={link} 
              menu={menu} 
            />
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Categories;
