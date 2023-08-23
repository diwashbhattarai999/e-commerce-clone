export interface SubMenuItem {
  name: string;
  link: string;
}

export interface MenuItem {
  id: number;
  name: string;
  link: string;
  subMenu: SubMenuItem[];
}

export interface CategoryItem {
  id: number;
  name: string;
  link: string;
  menu: MenuItem[];
}

const categoryData: CategoryItem[] = [
  {
    id: 1,
    name: "Daily Needs",
    link: "",
    menu: [
      {
        id: 1,
        name: "Food Essentials",
        link: "",
        subMenu: [
          {
            name: "Rice & Rice Products",
            link: "",
          },
          {
            name: "Cooking Oils & Vinegar",
            link: "",
          },
          {
            name: "Flour Products",
            link: "",
          },
          {
            name: "Beans & Lentils Products",
            link: "",
          },
          {
            name: "Hot Beverages",
            link: "",
          },
          {
            name: "Biscuit & Cookies",
            link: "",
          },
        ],
      },
      {
        id: 2,
        name: "SD Liquors",
        link: "",
        subMenu: [
          {
            name: "Rum",
            link: "",
          },
          {
            name: "Blended Whisky",
            link: "",
          },
          {
            name: "Vodka",
            link: "",
          },
          {
            name: "Beer",
            link: "",
          },
          {
            name: "Wine",
            link: "",
          },
        ],
      },
      {
        id: 3,
        name: "Hair Care",
        link: "",
        subMenu: [
          {
            name: "Hair Oil & Serum",
            link: "",
          },
          {
            name: "Hair Colour & Mehendi",
            link: "",
          },
          {
            name: "Shampoo & Conditioner",
            link: "",
          },
        ],
      },
      {
        id: 4,
        name: "Home Care",
        link: "",
        subMenu: [
          {
            name: "Household Cleaners",
            link: "",
          },
          {
            name: "Laundry Soap & Detergent",
            link: "",
          },
          {
            name: "Dishwashing Essentials",
            link: "",
          },
          {
            name: "Room Freshner",
            link: "",
          },
        ],
      },
      {
        id: 5,
        name: "Personal Care",
        link: "",
        subMenu: [
          {
            name: "Bath Products",
            link: "",
          },
          {
            name: "Shaving & Grooming",
            link: "",
          },
        ],
      },
      {
        id: 6,
        name: "Pet Care",
        link: "",
        subMenu: [
          {
            name: "Pet Grooming",
            link: "",
          },
          {
            name: "Pet Food",
            link: "",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    name: "Electronics",
    link: "",
    menu: [
      {
        id: 1,
        name: "Mobile Phones & Tablets",
        link: "",
        subMenu: [
          {
            name: "Rice & Rice Products",
            link: "",
          },
          {
            name: "Cooking Oils & Vinegar",
            link: "",
          },
          {
            name: "Flour Products",
            link: "",
          },
          {
            name: "Beans & Lentils Products",
            link: "",
          },
          {
            name: "Hot Beverages",
            link: "",
          },
          {
            name: "Biscuit & Cookies",
            link: "",
          },
        ],
      },
      {
        id: 2,
        name: "Large Home Appliances",
        link: "",
        subMenu: [
          {
            name: "Rum",
            link: "",
          },
          {
            name: "Blended Whisky",
            link: "",
          },
          {
            name: "Vodka",
            link: "",
          },
          {
            name: "Beer",
            link: "",
          },
          {
            name: "Wine",
            link: "",
          },
        ],
      },
      {
        id: 3,
        name: "Televisions",
        link: "",
        subMenu: [
          {
            name: "Hair Oil & Serum",
            link: "",
          },
          {
            name: "Hair Colour & Mehendi",
            link: "",
          },
          {
            name: "Shampoo & Conditioner",
            link: "",
          },
        ],
      },
      {
        id: 4,
        name: "Small Home Appliances",
        link: "",
        subMenu: [
          {
            name: "Household Cleaners",
            link: "",
          },
          {
            name: "Laundry Soap & Detergent",
            link: "",
          },
          {
            name: "Dishwashing Essentials",
            link: "",
          },
          {
            name: "Room Freshner",
            link: "",
          },
        ],
      },
      {
        id: 5,
        name: "Audio Accessories",
        link: "",
        subMenu: [
          {
            name: "Bath Products",
            link: "",
          },
          {
            name: "Shaving & Grooming",
            link: "",
          },
        ],
      },
    ],
  },
  {
    id: 3,
    name: "Books",
    link: "",
    menu: [
      {
        id: 1,
        name: "Academics",
        link: "",
        subMenu: [
          {
            name: "Rice & Rice Products",
            link: "",
          },
          {
            name: "Cooking Oils & Vinegar",
            link: "",
          },
          {
            name: "Flour Products",
            link: "",
          },
          {
            name: "Beans & Lentils Products",
            link: "",
          },
          {
            name: "Hot Beverages",
            link: "",
          },
          {
            name: "Biscuit & Cookies",
            link: "",
          },
        ],
      },
      {
        id: 2,
        name: "Genre",
        link: "",
        subMenu: [
          {
            name: "Rum",
            link: "",
          },
          {
            name: "Blended Whisky",
            link: "",
          },
          {
            name: "Vodka",
            link: "",
          },
          {
            name: "Beer",
            link: "",
          },
          {
            name: "Wine",
            link: "",
          },
        ],
      },
    ],
  },
  {
    id: 4,
    name: "Myntra Brands",
    link: "",
    menu: [
      {
        id: 1,
        name: "Myntra Men",
        link: "",
        subMenu: [
          {
            name: "Rice & Rice Products",
            link: "",
          },
          {
            name: "Cooking Oils & Vinegar",
            link: "",
          },
          {
            name: "Flour Products",
            link: "",
          },
          {
            name: "Beans & Lentils Products",
            link: "",
          },
          {
            name: "Hot Beverages",
            link: "",
          },
          {
            name: "Biscuit & Cookies",
            link: "",
          },
        ],
      },
      {
        id: 2,
        name: "Myntra Women",
        link: "",
        subMenu: [
          {
            name: "Rum",
            link: "",
          },
          {
            name: "Blended Whisky",
            link: "",
          },
          {
            name: "Vodka",
            link: "",
          },
          {
            name: "Beer",
            link: "",
          },
          {
            name: "Wine",
            link: "",
          },
        ],
      },
    ],
  },
];

export default categoryData;
