// interface Items {
//   id: number;
//   title: string;
//   type: string;
// }

// interface InputProps {
//   items: Items[];
//   buttonText: string;
// }

// const Input: React.FC<InputProps> = ({ items, buttonText }) => {
//   return (
//     <div>
//       <label
//         className="
//               text-sm after:content-['*'] after:ml-1
//               after:text-[#e02b27] after:text-base
//             "
//       >
//         {/* {title} */}
//       </label>
//       <div>
//         <input
//           className="
//                 text-base
//                 border-[1px] border-[#686b6f]
//                 p-2 tablet:p-3
//                 w-full min-h-[43px] tablet:min-h-[58px]
//               "
//         />
//       </div>
//     </div>
//   );
// };

// export default Input;

import { BiDollar } from "react-icons/bi";

interface InputProps {
  id: number;
  label?: any;
  type?: any;
  disabled?: any;
  formatPrice?: any;
  register?: any;
  required?: any;
  errors?: any;
}

const Input: React.FC<InputProps> = ({
  id,
  label,
  type = "text",
  disabled,
  register,
  required,
  errors,
}) => {
  return (
    <div className="w-full mb-4">
      <label
        className={`
          text-sm after:content-['*'] after:ml-1
          after:text-[#e02b27] after:text-base
          ${errors && errors[id] ? "text-rose-500" : ""}
      `}
      >
        {label}
      </label>
      <input
        disabled={disabled}
        placeholder=""
        type={type}
        className={`
          text-base
          border-[1px] 
          p-2 tablet:p-3
          w-full min-h-[43px] tablet:min-h-[58px]
          bg-white
          ${errors && errors[id] ? "border-rose-500" : "border-[#686b6f]"}
          ${
            errors && errors[id]
              ? "focus:border-rose-500"
              : "focus:border-black"
          }
        `}
      />
    </div>
  );
};

export default Input;
