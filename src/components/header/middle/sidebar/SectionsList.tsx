import categoryData from "@/components/categories/CategoryList";
import CategoryTitle from "@/components/categories/CategoryTitle";
import { AccountList, List, SettingsList } from "./SideBarList";
import { useDispatch } from "react-redux";
import { toggleFeature } from "@/Redux/slices/featureToggleSlice";

interface SectionsListProps {
  title: string;
}

const SectionsList: React.FC<SectionsListProps> = ({ title }) => {
  const dispatch = useDispatch();

  const handleClick = (category: List) => {
    dispatch(toggleFeature({ featureName: "sidebar" }));

    if (category.name === "Sign In") {
      dispatch(toggleFeature({ featureName: "signIn" }));
    } else if (category.name === "Sign Up") {
      dispatch(toggleFeature({ featureName: "signUp" }));
    }
  };

  const MenuContent = (
    <>
      {categoryData.map((category) => (
        <CategoryTitle
          key={category.id}
          category={category}
          uppercase
          arrowDown
        />
      ))}
    </>
  );

  const AccountContent = (
    <>
      {AccountList.map((category) => (
        <CategoryTitle
          key={category.id}
          category={category}
          uppercase
          onClick={() => handleClick(category)}
        />
      ))}
    </>
  );

  const SettingContent = (
    <>
      {SettingsList.map((category) => (
        <CategoryTitle
          key={category.id}
          category={category}
          uppercase
          arrowDown
        />
      ))}
    </>
  );

  return (
    <>
      {title === "Menu" && MenuContent}
      {title === "Account" && AccountContent}
      {title === "Settings" && SettingContent}
    </>
  );
};

export default SectionsList;
