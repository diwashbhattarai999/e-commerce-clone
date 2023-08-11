interface Items {
  id: number;
  title: string;
}

interface InputProps {
  items: Items[];
}

const Input: React.FC<InputProps> = ({ items }) => {
  return (
    <>
      {items.map(({ id, title }) => (
        <div key={id}>
          <label>{title}</label>
        </div>
      ))}
    </>
  );
};

export default Input;
