export interface SubMenuItem {
  id: number;
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
    link: "daily-needs",
    menu: [
      {
        id: 1,
        name: "Food Essentials",
        link: "food-essentials",
        subMenu: [
          {
            id: 1,
            name: "Rice & Rice Products",
            link: "",
          },
          {
            id: 2,
            name: "Cooking Oils & Vinegar",
            link: "",
          },
          {
            id: 3,
            name: "Flour Products",
            link: "",
          },
          {
            id: 4,
            name: "Beans & Lentils Products",
            link: "",
          },
          {
            id: 5,
            name: "Hot Beverages",
            link: "",
          },
          {
            id: 6,
            name: "Biscuit & Cookies",
            link: "",
          },
        ],
      },
      {
        id: 2,
        name: "SD Liquors",
        link: "sd-liquors",
        subMenu: [
          {
            id: 1,
            name: "Rum",
            link: "",
          },
          {
            id: 2,
            name: "Blended Whisky",
            link: "",
          },
          {
            id: 3,
            name: "Vodka",
            link: "",
          },
          {
            id: 4,
            name: "Beer",
            link: "",
          },
          {
            id: 5,
            name: "Wine",
            link: "",
          },
        ],
      },
      {
        id: 3,
        name: "Hair Care",
        link: "hair-care",
        subMenu: [
          {
            id: 1,
            name: "Hair Oil & Serum",
            link: "",
          },
          {
            id: 2,
            name: "Hair Colour & Mehendi",
            link: "",
          },
          {
            id: 3,
            name: "Shampoo & Conditioner",
            link: "",
          },
        ],
      },
      {
        id: 4,
        name: "Home Care",
        link: "home-care",
        subMenu: [
          {
            id: 1,
            name: "Household Cleaners",
            link: "",
          },
          {
            id: 2,
            name: "Laundry Soap & Detergent",
            link: "",
          },
          {
            id: 3,
            name: "Dishwashing Essentials",
            link: "",
          },
          {
            id: 4,
            name: "Room Freshner",
            link: "",
          },
        ],
      },
      {
        id: 5,
        name: "Personal Care",
        link: "personal-care",
        subMenu: [
          {
            id: 1,
            name: "Bath Products",
            link: "",
          },
          {
            id: 2,
            name: "Shaving & Grooming",
            link: "",
          },
        ],
      },
      {
        id: 6,
        name: "Pet Care",
        link: "pet-care",
        subMenu: [
          {
            id: 1,
            name: "Pet Grooming",
            link: "",
          },
          {
            id: 2,
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
    link: "electronics",
    menu: [
      {
        id: 1,
        name: "Mobile Phones & Tablets",
        link: "mobile-phones-and-tablets",
        subMenu: [
          {
            id: 1,
            name: "Rice & Rice Products",
            link: "",
          },
          {
            id: 2,
            name: "Cooking Oils & Vinegar",
            link: "",
          },
          {
            id: 3,
            name: "Flour Products",
            link: "",
          },
          {
            id: 4,
            name: "Beans & Lentils Products",
            link: "",
          },
          {
            id: 5,
            name: "Hot Beverages",
            link: "",
          },
          {
            id: 6,
            name: "Biscuit & Cookies",
            link: "",
          },
        ],
      },
      {
        id: 2,
        name: "Large Home Appliances",
        link: "large-home-appliances",
        subMenu: [
          {
            id: 1,
            name: "Rum",
            link: "",
          },
          {
            id: 2,
            name: "Blended Whisky",
            link: "",
          },
          {
            id: 3,
            name: "Vodka",
            link: "",
          },
          {
            id: 4,
            name: "Beer",
            link: "",
          },
          {
            id: 5,
            name: "Wine",
            link: "",
          },
        ],
      },
      {
        id: 3,
        name: "Televisions",
        link: "televisions",
        subMenu: [
          {
            id: 1,
            name: "Hair Oil & Serum",
            link: "",
          },
          {
            id: 2,
            name: "Hair Colour & Mehendi",
            link: "",
          },
          {
            id: 3,
            name: "Shampoo & Conditioner",
            link: "",
          },
        ],
      },
      {
        id: 4,
        name: "Small Home Appliances",
        link: "small-home-appliances",
        subMenu: [
          {
            id: 1,
            name: "Household Cleaners",
            link: "",
          },
          {
            id: 2,
            name: "Laundry Soap & Detergent",
            link: "",
          },
          {
            id: 3,
            name: "Dishwashing Essentials",
            link: "",
          },
          {
            id: 4,
            name: "Room Freshner",
            link: "",
          },
        ],
      },
      {
        id: 5,
        name: "Audio Accessories",
        link: "audio-accessories",
        subMenu: [
          {
            id: 1,
            name: "Bath Products",
            link: "",
          },
          {
            id: 2,
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
    link: "books",
    menu: [
      {
        id: 1,
        name: "Academics",
        link: "academics",
        subMenu: [
          {
            id: 1,
            name: "Rice & Rice Products",
            link: "",
          },
          {
            id: 2,
            name: "Cooking Oils & Vinegar",
            link: "",
          },
          {
            id: 3,
            name: "Flour Products",
            link: "",
          },
          {
            id: 4,
            name: "Beans & Lentils Products",
            link: "",
          },
          {
            id: 5,
            name: "Hot Beverages",
            link: "",
          },
          {
            id: 6,
            name: "Biscuit & Cookies",
            link: "",
          },
        ],
      },
      {
        id: 2,
        name: "Genre",
        link: "genre",
        subMenu: [
          {
            id: 1,
            name: "Rum",
            link: "",
          },
          {
            id: 2,
            name: "Blended Whisky",
            link: "",
          },
          {
            id: 3,
            name: "Vodka",
            link: "",
          },
          {
            id: 4,
            name: "Beer",
            link: "",
          },
          {
            id: 5,
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
    link: "myntra-brands",
    menu: [
      {
        id: 1,
        name: "Myntra Men",
        link: "myntra-men",
        subMenu: [
          {
            id: 1,
            name: "Rice & Rice Products",
            link: "rice-&-rice-products",
          },
          {
            id: 2,
            name: "Cooking Oils & Vinegar",
            link: "cooking-oils-&-vinegar",
          },
          {
            id: 3,
            name: "Flour Products",
            link: "flour-products",
          },
          {
            id: 4,
            name: "Beans & Lentils Products",
            link: "",
          },
          {
            id: 5,
            name: "Hot Beverages",
            link: "",
          },
          {
            id: 6,
            name: "Biscuit & Cookies",
            link: "",
          },
        ],
      },
      {
        id: 2,
        name: "Myntra Women",
        link: "myntra-women",
        subMenu: [
          {
            id: 1,
            name: "Rum",
            link: "",
          },
          {
            id: 2,
            name: "Blended Whisky",
            link: "",
          },
          {
            id: 3,
            name: "Vodka",
            link: "",
          },
          {
            id: 4,
            name: "Beer",
            link: "",
          },
          {
            id: 5,
            name: "Wine",
            link: "",
          },
        ],
      },
    ],
  },
];

export default categoryData;
