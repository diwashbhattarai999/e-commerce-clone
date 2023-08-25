import { GiHamburgerMenu } from "react-icons/gi";

export interface List {
  id: number;
  name: string;
  link: string;
}

const initialSections = [
  {
    id: 1,
    title: "Menu",
    active: true,
    Icon: GiHamburgerMenu,
  },
  {
    id: 2,
    title: "Account",
    active: false,
  },
  {
    id: 3,
    title: "Settings",
    active: false,
  },
];

const AccountList: List[] = [
  {
    id: 1,
    name: "Advertise On Sastodeal",
    link: "",
  },
  {
    id: 2,
    name: "Sell On Sastodeal",
    link: "",
  },
  {
    id: 3,
    name: "Raise A Ticket",
    link: "",
  },
  {
    id: 4,
    name: "Order Tracking",
    link: "",
  },
  {
    id: 5,
    name: "Sign In",
    link: "",
  },
  {
    id: 6,
    name: "Sign Up",
    link: "",
  },
];

const SettingsList: List[] = [
  {
    id: 1,
    name: "English(NP)",
    link: "",
  },
];

export { AccountList, SettingsList };
export default initialSections;
