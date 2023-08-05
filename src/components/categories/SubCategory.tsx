interface subcategoryProps {
  title: string;
}

const SubCategory: React.FC<subcategoryProps> = ({ title }) => {
  return (
    <div className="p-5">
      <h5>{title}</h5>
    </div>
  );
};

export default SubCategory;
