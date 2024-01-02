const ProductFilter = () => {
  const filters = [
    {
      title: "Category",
    },
    {
      title: "Price",
    },
    {
      title: "Seller",
    },
    {
      title: "Brand",
    },
  ];

  return (
    <div
      className="
      bg-white border border-[#e7e7e7] 
      w-full max-h-[1000px] 
      sticky top-20 p-5
    "
    >
      {filters.map((filter) => (
        <div className="mb-4 last-of-type:mb-0" key={filter.title}>
          {filter.title}
        </div>
      ))}
    </div>
  );
};

export default ProductFilter;
