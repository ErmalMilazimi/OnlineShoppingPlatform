import axios from "axios";

export const seedItems = () => {
  const data = [
    {
      Name: "Brown Heels",
      ImagePath: "23f3d64ba9254eedad1f0a1cfd600395.jpg",
      Description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sit amet tempor urna, venenatis commodo nulla. Sed tellus elit, volutpat ac lorem vitae, volutpat vehicula eros. Nulla facilisi. Ut id felis laoreet, commodo ex vitae, scelerisque ipsum. Morbi tincidunt sollicitudin magna, eget commodo justo aliquet pulvinar. Curabitur nunc lacus, scelerisque nec tellus non, convallis tristique tellus. Aliquam sit amet risus purus. Vestibulum sit amet odio ac est tempor luctus.",
      Category: "Shoes",
      Brand: "ZARA",
      Price: 98,
      Rating: 5,
    },
    {
      Name: "Velvet Skating Style",
      ImagePath: "49593752NC_999_f.webp",
      Description:
        "Sed tellus elit, volutpat ac lorem vitae, volutpat vehicula eros. Nulla facilisi. Ut id felis laoreet, commodo ex vitae, scelerisque ipsum. Morbi tincidunt sollicitudin magna, eget commodo justo aliquet pulvinar. Curabitur nunc lacus, scelerisque nec tellus non, convallis tristique tellus. Aliquam sit amet risus purus. Vestibulum sit amet odio ac est tempor luctus.",
      Category: "Dress",
      Brand: "Alaila",
      Price: 2200,
      Rating: 5,
    },
    {
      Name: "Kate's Closet",
      ImagePath: "749510774_orig.jpg",
      Description:
        "Sed olutpat vehicula eros. Nulla facilisi. Ut id felis laoreet, commodo ex vitae, scelerisque ipsum. Morbi tincidunt sollicitudin magna, eget commodo justo aliquet pulvinar. Curabitur nunc lacus, scelerisque nec tellus non, convallis tristique tellus. Aliquam sit amet risus purus. Vestibulum sit amet odio ac est tempor luctus.",
      Category: "Dress",
      Brand: "Kate's Closet",
      Price: 139,
      Rating: 4,
    },
    {
      Name: "Nike Shoes",
      ImagePath: "nike3.webp",
      Description:
        "Tellus elit, volutpat ac lorem vitae, volutpat vehicula eros. Nulla facilisi. Ut id felis laoreet, commodo ex vitae, scelerisque ipsum. Morbi tincidunt sollicitudin magna, eget commodo justo aliquet pulvinar. Curabitur nunc lacus, scelerisque nec tellus non, convallis tristique tellus. Aliquam sit amet risus purus. Vestibulum sit amet odio ac est tempor luctus.",
      Category: "Shoes",
      Brand: "Nike",
      Price: 129,
      Rating: 4,
    },
    {
      Name: "Dior Bag",
      ImagePath: "1627465591_M0446CTZQ_M928_E03_ZH.webp",
      Description:
        "Tellus elit, volutpat ac lorem vitae, volutpat vehicula eros. Nulla facilisi. Ut id felis laoreet, commodo ex vitae, scelerisque ipsum. Morbi tincidunt sollicitudin magna, eget commodo justo aliquet pulvinar. Curabitur nunc lacus, scelerisque nec tellus non, convallis tristique tellus. Aliquam sit amet risus purus. Vestibulum sit amet odio ac est tempor luctus.",
      Category: "Bag",
      Brand: "Dior",
      Price: 3400,
      Rating: 5,
    },
    {
      Name: "Black Watch",
      ImagePath: "hand-watch-500x500.jpg",
      Description:
        "Tellus elit, volutpat ac lorem vitae, volutpat vehicula eros. Nulla facilisi. Ut id felis laoreet, commodo ex vitae, scelerisque ipsum. Morbi tincidunt sollicitudin magna, eget commodo justo aliquet pulvinar. Curabitur nunc lacus, scelerisque nec tellus non, convallis tristique tellus. Aliquam sit amet risus purus. Vestibulum sit amet odio ac est tempor luctus.",
      Category: "Watch",
      Brand: "BlackWatch",
      Price: 400,
      Rating: 4,
    },
    {
      Name: "Nike Shirt",
      ImagePath: "nikeshirt1.webp",
      Description:
        "Tellus elit, volutpat ac lorem vitae, volutpat vehicula eros. Nulla facilisi. Ut id felis laoreet, commodo ex vitae, scelerisque ipsum. Morbi tincidunt sollicitudin magna, eget commodo justo aliquet pulvinar. Curabitur nunc lacus, scelerisque nec tellus non, convallis tristique tellus. Aliquam sit amet risus purus. Vestibulum sit amet odio ac est tempor luctus.",
      Category: "T-Shirt",
      Brand: "Nike",
      Price: 79,
      Rating: 4,
    },
    {
      Name: "Dress with Flowers",
      ImagePath: "33f9c7bddb174f3a99906460b3985fd3.jpg",
      Description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sit amet tempor urna, venenatis commodo nulla. Sed tellus elit, volutpat ac lorem vitae, volutpat vehicula eros. Nulla facilisi. Ut id felis laoreet, commodo ex vitae, scelerisque ipsum. Morbi tincidunt sollicitudin magna, eget commodo justo aliquet pulvinar. Curabitur nunc lacus, scelerisque nec tellus non, convallis tristique tellus. Aliquam sit amet risus purus. Vestibulum sit amet odio ac est tempor luctus.",
      Category: "Dress",
      Brand: "H&M",
      Price: 567,
      Rating: 2,
    },
    {
      Name: "Champion Sweatshirt",
      ImagePath: "champion-reverse-weave-maxi-sweatshirt-beige-112257-ms043-1.jpg",
      Description:
        "Urna, venenatis commodo nulla. Sed tellus elit, volutpat ac lorem vitae, volutpat vehicula eros. Nulla facilisi. Ut id felis laoreet, commodo ex vitae, scelerisque ipsum. Morbi tincidunt sollicitudin magna, eget commodo justo aliquet pulvinar. Curabitur nunc lacus, scelerisque nec tellus non, convallis tristique tellus. Aliquam sit amet risus purus. Vestibulum sit amet odio ac est tempor luctus.",
      Category: "Sweatshirt",
      Brand: "Champion",
      Price: 50,
      Rating: 5,
    },
    {
      Name: "Sweatshirt",
      ImagePath: "41cd2SWWxbS._UX522_.jpg",
      Description:
        "Urna, venenatis commodo nulla. Sed tellus elit, volutpat ac lorem vitae, volutpat vehicula eros. Nulla facilisi. Ut id felis laoreet, commodo ex vitae, scelerisque ipsum. Morbi tincidunt sollicitudin magna, eget commodo justo aliquet pulvinar. Curabitur nunc lacus, scelerisque nec tellus non, convallis tristique tellus. Aliquam sit amet risus purus. Vestibulum sit amet odio ac est tempor luctus.",
      Category: "Sweatshirt",
      Brand: "Champion",
      Price: 50,
      Rating: 2,
    },
    {
      Name: "Leather Bag",
      ImagePath: "6FC21813-B87A-46FB-96F6-2FD0ED09D454.jpg",
      Description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sit amet tempor urna, venenatis commodo nulla. Sed tellus elit, volutpat ac lorem vitae, volutpat vehicula eros. Nulla facilisi. Ut id felis laoreet, commodo ex vitae, scelerisque ipsum. Morbi tincidunt sollicitudin magna, eget commodo justo aliquet pulvinar. Curabitur nunc lacus, scelerisque nec tellus non, convallis tristique tellus. Aliquam sit amet risus purus. Vestibulum sit amet odio ac est tempor luctus.",
      Category: "Bag",
      Brand: "Burberry",
      Price: 330,
      Rating: 4,
    },
    {
      Name: "Armani Watch",
      ImagePath: "w400.jpg",
      Description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sit amet tempor urna, venenatis commodo nulla. Sed tellus elit, volutpat ac lorem vitae, volutpat vehicula eros. Nulla facilisi. Ut id felis laoreet, commodo ex vitae, scelerisque ipsum. Morbi tincidunt sollicitudin magna, eget commodo justo aliquet pulvinar. Curabitur nunc lacus, scelerisque nec tellus non, convallis tristique tellus. Aliquam sit amet risus purus. Vestibulum sit amet odio ac est tempor luctus.",
      Category: "Watch",
      Brand: "Armani",
      Price: 500,
      Rating: 5,
    },
    {
      Name: "PrettyLittleThing Dress",
      ImagePath: "46ads46sad46.webp",
      Description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sit amet tempor urna, venenatis commodo nulla. Sed tellus elit, volutpat ac lorem vitae, volutpat vehicula eros. Nulla facilisi. Ut id felis laoreet, commodo ex vitae, scelerisque ipsum. Morbi tincidunt sollicitudin magna, eget commodo justo aliquet pulvinar. Curabitur nunc lacus, scelerisque nec tellus non, convallis tristique tellus. Aliquam sit amet risus purus. Vestibulum sit amet odio ac est tempor luctus.",
      Category: "Dress",
      Brand: "PrettyLittleThing",
      Price: 600,
      Rating: 5,
    },
    {
      Name: "Watch",
      ImagePath: "71N08w-5JzL.jpg",
      Description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sit amet tempor urna, venenatis commodo nulla. Sed tellus elit, volutpat ac lorem vitae, volutpat vehicula eros. Nulla facilisi. Ut id felis laoreet, commodo ex vitae, scelerisque ipsum. Morbi tincidunt sollicitudin magna, eget commodo justo aliquet pulvinar. Curabitur nunc lacus, scelerisque nec tellus non, convallis tristique tellus. Aliquam sit amet risus purus. Vestibulum sit amet odio ac est tempor luctus.",
      Category: "Watch",
      Brand: "PrettyLittleThing",
      Price: 500,
      Rating: 4,
    },
    {
      Name: "SweatShirt",
      ImagePath: "2020productmockups_1.png",
      Description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sit amet tempor urna, venenatis commodo nulla. Sed tellus elit, volutpat ac lorem vitae, volutpat vehicula eros. Nulla facilisi. Ut id felis laoreet, commodo ex vitae, scelerisque ipsum. Morbi tincidunt sollicitudin magna, eget commodo justo aliquet pulvinar. Curabitur nunc lacus, scelerisque nec tellus non, convallis tristique tellus. Aliquam sit amet risus purus. Vestibulum sit amet odio ac est tempor luctus.",
      Category: "Sweatshirt",
      Brand: "phenomenal",
      Price: 50,
      Rating: 5,
    },
    {
      Name: "Apple Watch",
      ImagePath: "GUEST_e716e2cb-4911-4c88-b203-12d486015ced.jfif",
      Description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sit amet tempor urna, venenatis commodo nulla. Sed tellus elit, volutpat ac lorem vitae, volutpat vehicula eros. Nulla facilisi. Ut id felis laoreet, commodo ex vitae, scelerisque ipsum. Morbi tincidunt sollicitudin magna, eget commodo justo aliquet pulvinar. Curabitur nunc lacus, scelerisque nec tellus non, convallis tristique tellus. Aliquam sit amet risus purus. Vestibulum sit amet odio ac est tempor luctus.",
      Category: "Watch",
      Brand: "Apple",
      Price: 250,
      Rating: 5,
    },
    {
      Name: "Nike Shirt",
      ImagePath: "nikeshirt2.webp",
      Description:
        "Tellus elit, volutpat ac lorem vitae, volutpat vehicula eros. Nulla facilisi. Ut id felis laoreet, commodo ex vitae, scelerisque ipsum. Morbi tincidunt sollicitudin magna, eget commodo justo aliquet pulvinar. Curabitur nunc lacus, scelerisque nec tellus non, convallis tristique tellus. Aliquam sit amet risus purus. Vestibulum sit amet odio ac est tempor luctus.",
      Category: "T-Shirt",
      Brand: "Nike",
      Price: 50,
      Rating: 3,
    },
    {
      Name: "Nike Shoes",
      ImagePath: "product2.webp",
      Description:
        "Tellus elit, volutpat ac lorem vitae, volutpat vehicula eros. Nulla facilisi. Ut id felis laoreet, commodo ex vitae, scelerisque ipsum. Morbi tincidunt sollicitudin magna, eget commodo justo aliquet pulvinar. Curabitur nunc lacus, scelerisque nec tellus non, convallis tristique tellus. Aliquam sit amet risus purus. Vestibulum sit amet odio ac est tempor luctus.",
      Category: "Shoes",
      Brand: "Nike",
      Price: 160,
      Rating: 5,
    },
    {
      Name: "Green T-Shirt",
      ImagePath: "1cd0284554014d23af73818d71244e07.png",
      Description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sit amet tempor urna, venenatis commodo nulla. Sed tellus elit, volutpat ac lorem vitae, volutpat vehicula eros. Nulla facilisi. Ut id felis laoreet, commodo ex vitae, scelerisque ipsum. Morbi tincidunt sollicitudin magna, eget commodo justo aliquet pulvinar. Curabitur nunc lacus, scelerisque nec tellus non, convallis tristique tellus. Aliquam sit amet risus purus. Vestibulum sit amet odio ac est tempor luctus.",
      Category: "T-Shirt",
      Brand: "Abercrombie & Fitch",
      Price: 56.6,
      Rating: 3,
    },
    {
      Name: "Dior Sweatshirt",
      ImagePath: "1604511903_113J698A0531_C989_E01_GHC.webp",
      Description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sit amet tempor urna, venenatis commodo nulla. Sed tellus elit, volutpat ac lorem vitae, volutpat vehicula eros. Nulla facilisi. Ut id felis laoreet, commodo ex vitae, scelerisque ipsum. Morbi tincidunt sollicitudin magna, eget commodo justo aliquet pulvinar. Curabitur nunc lacus, scelerisque nec tellus non, convallis tristique tellus. Aliquam sit amet risus purus. Vestibulum sit amet odio ac est tempor luctus.",
      Category: "Sweatshirt",
      Brand: "Dior",
      Price: 120,
      Rating: 5,
    },
    {
      Name: "Adidas Shoes",
      ImagePath: "adidas2.webp",
      Description:
        "Tellus elit, volutpat ac lorem vitae, volutpat vehicula eros. Nulla facilisi. Ut id felis laoreet, commodo ex vitae, scelerisque ipsum. Morbi tincidunt sollicitudin magna, eget commodo justo aliquet pulvinar. Curabitur nunc lacus, scelerisque nec tellus non, convallis tristique tellus. Aliquam sit amet risus purus. Vestibulum sit amet odio ac est tempor luctus.",
      Category: "Shoes",
      Brand: "Adidas",
      Price: 99,
      Rating: 5,
    },
    {
      Name: "One Plus",
      ImagePath: "1-m00-21-ed-rb8lb2bk1uuajj_daai4dpxzbes482.png",
      Description:
        "Tellus elit, volutpat ac lorem vitae, volutpat vehicula eros. Nulla facilisi. Ut id felis laoreet, commodo ex vitae, scelerisque ipsum. Morbi tincidunt sollicitudin magna, eget commodo justo aliquet pulvinar. Curabitur nunc lacus, scelerisque nec tellus non, convallis tristique tellus. Aliquam sit amet risus purus. Vestibulum sit amet odio ac est tempor luctus.",
      Category: "Watch",
      Brand: "One Plus",
      Price: 239,
      Rating: 4,
    },
    {
      Name: "Jacket",
      ImagePath: "bl-caf-fl-02.jpeg",
      Description:
        "Tellus elit, volutpat ac lorem vitae, volutpat vehicula eros. Nulla facilisi. Ut id felis laoreet, commodo ex vitae, scelerisque ipsum. Morbi tincidunt sollicitudin magna, eget commodo justo aliquet pulvinar. Curabitur nunc lacus, scelerisque nec tellus non, convallis tristique tellus. Aliquam sit amet risus purus. Vestibulum sit amet odio ac est tempor luctus.",
      Category: "Jacket",
      Brand: "Jacket",
      Price: 49,
      Rating: 4,
    },
    {
      Name: "Adidas Shoes",
      ImagePath: "adidas3.webp",
      Description:
        "Tellus elit, volutpat ac lorem vitae, volutpat vehicula eros. Nulla facilisi. Ut id felis laoreet, commodo ex vitae, scelerisque ipsum. Morbi tincidunt sollicitudin magna, eget commodo justo aliquet pulvinar. Curabitur nunc lacus, scelerisque nec tellus non, convallis tristique tellus. Aliquam sit amet risus purus. Vestibulum sit amet odio ac est tempor luctus.",
      Category: "Shoes",
      Brand: "Adidas",
      Price: 129,
      Rating: 3,
    },
    {
      Name: "Summer Dress",
      ImagePath: "4d6aaffe1bdc40a4a60db2a2073f49cc.jpg",
      Description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sit amet tempor urna, venenatis commodo nulla. Sed tellus elit, volutpat ac lorem vitae, volutpat vehicula eros. Nulla facilisi. Ut id felis laoreet, commodo ex vitae, scelerisque ipsum. Morbi tincidunt sollicitudin magna, eget commodo justo aliquet pulvinar. Curabitur nunc lacus, scelerisque nec tellus non, convallis tristique tellus. Aliquam sit amet risus purus. Vestibulum sit amet odio ac est tempor luctus.",
      Category: "Dress",
      Brand: "GAP",
      Price: 303,
      Rating: 4,
    },
    {
      Name: "Motorcycle Jacket",
      ImagePath: "Men-s-Real-Leather-Jacket-Men-Motorcycle-Removable-Hood-winter-coat-Men-Warm-Genuine-Leather-Jackets.webp",
      Description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sit amet tempor urna, venenatis commodo nulla. Sed tellus elit, volutpat ac lorem vitae, volutpat vehicula eros. Nulla facilisi. Ut id felis laoreet, commodo ex vitae, scelerisque ipsum. Morbi tincidunt sollicitudin magna, eget commodo justo aliquet pulvinar. Curabitur nunc lacus, scelerisque nec tellus non, convallis tristique tellus. Aliquam sit amet risus purus. Vestibulum sit amet odio ac est tempor luctus.",
      Category: "Jacket",
      Brand: "Flavor",
      Price: 300,
      Rating: 5,
    },
    {
      Name: "LTB Sweatshirt",
      ImagePath: "product3.webp",
      Description:
        "Tellus elit, volutpat ac lorem vitae, volutpat vehicula eros. Nulla facilisi. Ut id felis laoreet, commodo ex vitae, scelerisque ipsum. Morbi tincidunt sollicitudin magna, eget commodo justo aliquet pulvinar. Curabitur nunc lacus, scelerisque nec tellus non, convallis tristique tellus. Aliquam sit amet risus purus. Vestibulum sit amet odio ac est tempor luctus.",
      Category: "Sweatshirt",
      Brand: "LTB",
      Price: 139,
      Rating: 5,
    },
    {
      Name: "Dainese Jacket",
      ImagePath: "mike-2-leather-jacket.png",
      Description:
        "Tellus elit, volutpat ac lorem vitae, volutpat vehicula eros. Nulla facilisi. Ut id felis laoreet, commodo ex vitae, scelerisque ipsum. Morbi tincidunt sollicitudin magna, eget commodo justo aliquet pulvinar. Curabitur nunc lacus, scelerisque nec tellus non, convallis tristique tellus. Aliquam sit amet risus purus. Vestibulum sit amet odio ac est tempor luctus.",
      Category: "Jacket",
      Brand: "Dainese",
      Price: 69,
      Rating: 5,
    },
    {
      Name: "Lewis Shirt",
      ImagePath: "product5.webp",
      Description:
        "Tellus elit, volutpat ac lorem vitae, volutpat vehicula eros. Nulla facilisi. Ut id felis laoreet, commodo ex vitae, scelerisque ipsum. Morbi tincidunt sollicitudin magna, eget commodo justo aliquet pulvinar. Curabitur nunc lacus, scelerisque nec tellus non, convallis tristique tellus. Aliquam sit amet risus purus. Vestibulum sit amet odio ac est tempor luctus.",
      Category: "T-Shirt",
      Brand: "Lewis",
      Price: 49,
      Rating: 2,
    },
    {
      Name: "Bag Gibson",
      ImagePath: "5700a8ea1a984b57941adee1b2c0abe2.png",
      Description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sit amet tempor urna, venenatis commodo nulla. Sed tellus elit, volutpat ac lorem vitae, volutpat vehicula eros. Nulla facilisi. Ut id felis laoreet, commodo ex vitae, scelerisque ipsum. Morbi tincidunt sollicitudin magna, eget commodo justo aliquet pulvinar. Curabitur nunc lacus, scelerisque nec tellus non, convallis tristique tellus. Aliquam sit amet risus purus. Vestibulum sit amet odio ac est tempor luctus.",
      Category: "Bag",
      Brand: "Gibson",
      Price: 203,
      Rating: 2,
    },
    {
      Name: "Leather Jacket",
      ImagePath: "5880071c03f8492eb532af283c0c56a3.png",
      Description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sit amet tempor urna, venenatis commodo nulla. Sed tellus elit, volutpat ac lorem vitae, volutpat vehicula eros. Nulla facilisi. Ut id felis laoreet, commodo ex vitae, scelerisque ipsum. Morbi tincidunt sollicitudin magna, eget commodo justo aliquet pulvinar. Curabitur nunc lacus, scelerisque nec tellus non, convallis tristique tellus. Aliquam sit amet risus purus. Vestibulum sit amet odio ac est tempor luctus.",
      Category: "Jacket",
      Brand: "Christian Dior",
      Price: 621.5,
      Rating: 2,
    },
    {
      Name: "Adidas Shoes",
      ImagePath: "adidas4.webp",
      Description:
        "Tellus elit, volutpat ac lorem vitae, volutpat vehicula eros. Nulla facilisi. Ut id felis laoreet, commodo ex vitae, scelerisque ipsum. Morbi tincidunt sollicitudin magna, eget commodo justo aliquet pulvinar. Curabitur nunc lacus, scelerisque nec tellus non, convallis tristique tellus. Aliquam sit amet risus purus. Vestibulum sit amet odio ac est tempor luctus.",
      Category: "Shoes",
      Brand: "Adidas",
      Price: 89,
      Rating: 2,
    },
    {
      Name: "Adidas Shirt",
      ImagePath: "adidasshirt1.webp",
      Description:
        "Tellus elit, volutpat ac lorem vitae, volutpat vehicula eros. Nulla facilisi. Ut id felis laoreet, commodo ex vitae, scelerisque ipsum. Morbi tincidunt sollicitudin magna, eget commodo justo aliquet pulvinar. Curabitur nunc lacus, scelerisque nec tellus non, convallis tristique tellus. Aliquam sit amet risus purus. Vestibulum sit amet odio ac est tempor luctus.",
      Category: "T-Shirt",
      Brand: "Adidas",
      Price: 49,
      Rating: 4,
    },
    {
      Name: "Bag 32DS",
      ImagePath: "6ac9f7b6c13948609bdaba4a24a03d23.gif",
      Description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sit amet tempor urna, venenatis commodo nulla. Sed tellus elit, volutpat ac lorem vitae, volutpat vehicula eros. Nulla facilisi. Ut id felis laoreet, commodo ex vitae, scelerisque ipsum. Morbi tincidunt sollicitudin magna, eget commodo justo aliquet pulvinar. Curabitur nunc lacus, scelerisque nec tellus non, convallis tristique tellus. Aliquam sit amet risus purus. Vestibulum sit amet odio ac est tempor luctus.",
      Category: "Bag",
      Brand: "Timberland",
      Price: 323,
      Rating: 2,
    },
    {
      Name: "Watch",
      ImagePath: "dc74d0be0a8c4691aa56f2b95a7a4f17.png",
      Description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sit amet tempor urna, venenatis commodo nulla. Sed tellus elit, volutpat ac lorem vitae, volutpat vehicula eros. Nulla facilisi. Ut id felis laoreet, commodo ex vitae, scelerisque ipsum. Morbi tincidunt sollicitudin magna, eget commodo justo aliquet pulvinar. Curabitur nunc lacus, scelerisque nec tellus non, convallis tristique tellus. Aliquam sit amet risus purus. Vestibulum sit amet odio ac est tempor luctus.",
      Category: "Watch",
      Brand: "watch",
      Price: 203,
      Rating: 1,
    },
    {
      Name: "Adidas Shirt",
      ImagePath: "adidasshirt2.webp",
      Description:
        "Tellus elit, volutpat ac lorem vitae, volutpat vehicula eros. Nulla facilisi. Ut id felis laoreet, commodo ex vitae, scelerisque ipsum. Morbi tincidunt sollicitudin magna, eget commodo justo aliquet pulvinar. Curabitur nunc lacus, scelerisque nec tellus non, convallis tristique tellus. Aliquam sit amet risus purus. Vestibulum sit amet odio ac est tempor luctus.",
      Category: "T-Shirt",
      Brand: "Adidas",
      Price: 59,
      Rating: 1,
    },
    {
      Name: "Adidas Shirt",
      ImagePath: "adidasshirt3.webp",
      Description:
        "Tellus elit, volutpat ac lorem vitae, volutpat vehicula eros. Nulla facilisi. Ut id felis laoreet, commodo ex vitae, scelerisque ipsum. Morbi tincidunt sollicitudin magna, eget commodo justo aliquet pulvinar. Curabitur nunc lacus, scelerisque nec tellus non, convallis tristique tellus. Aliquam sit amet risus purus. Vestibulum sit amet odio ac est tempor luctus.",
      Category: "T-Shirt",
      Brand: "Adidas",
      Price: 69,
      Rating: 4,
    },
    {
      Name: "Bag Nike",
      ImagePath: "dfe431bfd5d74691bb971e8a9603d99c.png",
      Description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sit amet tempor urna, venenatis commodo nulla. Sed tellus elit, volutpat ac lorem vitae, volutpat vehicula eros. Nulla facilisi. Ut id felis laoreet, commodo ex vitae, scelerisque ipsum. Morbi tincidunt sollicitudin magna, eget commodo justo aliquet pulvinar. Curabitur nunc lacus, scelerisque nec tellus non, convallis tristique tellus. Aliquam sit amet risus purus. Vestibulum sit amet odio ac est tempor luctus.",
      Category: "Bag",
      Brand: "Nike",
      Price: 51,
      Rating: 3,
    },
    {
      Name: "Adidas Shoes",
      ImagePath: "9ef2c1044ee741469f3d598cf76cf9df.png",
      Description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sit amet tempor urna, venenatis commodo nulla. Sed tellus elit, volutpat ac lorem vitae, volutpat vehicula eros. Nulla facilisi. Ut id felis laoreet, commodo ex vitae, scelerisque ipsum. Morbi tincidunt sollicitudin magna, eget commodo justo aliquet pulvinar. Curabitur nunc lacus, scelerisque nec tellus non, convallis tristique tellus. Aliquam sit amet risus purus. Vestibulum sit amet odio ac est tempor luctus.",
      Category: "Shoes",
      Brand: "Nike",
      Price: 51,
      Rating: 3,
    },
    {
      Name: "Palm Angles",
      ImagePath: "product4.webp",
      Description:
        "Tellus elit, volutpat ac lorem vitae, volutpat vehicula eros. Nulla facilisi. Ut id felis laoreet, commodo ex vitae, scelerisque ipsum. Morbi tincidunt sollicitudin magna, eget commodo justo aliquet pulvinar. Curabitur nunc lacus, scelerisque nec tellus non, convallis tristique tellus. Aliquam sit amet risus purus. Vestibulum sit amet odio ac est tempor luctus.",
      Category: "T-Shirt",
      Brand: "Palm Angels",
      Price: 59,
      Rating: 4,
    },
    {
      Name: "Nike Shoes",
      ImagePath: "nike1.webp",
      Description:
        "Tellus elit, volutpat ac lorem vitae, volutpat vehicula eros. Nulla facilisi. Ut id felis laoreet, commodo ex vitae, scelerisque ipsum. Morbi tincidunt sollicitudin magna, eget commodo justo aliquet pulvinar. Curabitur nunc lacus, scelerisque nec tellus non, convallis tristique tellus. Aliquam sit amet risus purus. Vestibulum sit amet odio ac est tempor luctus.",
      Category: "Shoes",
      Brand: "Nike",
      Price: 139,
      Rating: 5,
    },
    {
      Name: "LTB Shirt",
      ImagePath: "ba8f69ff5854464888da544429e081c7.jpg",
      Description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sit amet tempor urna, venenatis commodo nulla. Sed tellus elit, volutpat ac lorem vitae, volutpat vehicula eros. Nulla facilisi. Ut id felis laoreet, commodo ex vitae, scelerisque ipsum. Morbi tincidunt sollicitudin magna, eget commodo justo aliquet pulvinar. Curabitur nunc lacus, scelerisque nec tellus non, convallis tristique tellus. Aliquam sit amet risus purus. Vestibulum sit amet odio ac est tempor luctus.",
      Category: "T-Shirt",
      Brand: "LTB",
      Price: 51,
      Rating: 3,
    },
    {
      Name: "Palm Dress",
      ImagePath: "1f4510b18a9b4dd3a8acfe5e6df78e6f.jpg",
      Description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sit amet tempor urna, venenatis commodo nulla. Sed tellus elit, volutpat ac lorem vitae, volutpat vehicula eros. Nulla facilisi. Ut id felis laoreet, commodo ex vitae, scelerisque ipsum. Morbi tincidunt sollicitudin magna, eget commodo justo aliquet pulvinar. Curabitur nunc lacus, scelerisque nec tellus non, convallis tristique tellus. Aliquam sit amet risus purus. Vestibulum sit amet odio ac est tempor luctus.",
      Category: "Dress",
      Brand: "Palm Angels",
      Price: 51,
      Rating: 3,
    },
    {
      Name: "Adidas Shoes",
      ImagePath: "adidas1.webp",
      Description:
        "Tellus elit, volutpat ac lorem vitae, volutpat vehicula eros. Nulla facilisi. Ut id felis laoreet, commodo ex vitae, scelerisque ipsum. Morbi tincidunt sollicitudin magna, eget commodo justo aliquet pulvinar. Curabitur nunc lacus, scelerisque nec tellus non, convallis tristique tellus. Aliquam sit amet risus purus. Vestibulum sit amet odio ac est tempor luctus.",
      Category: "Shoes",
      Brand: "Adidas",
      Price: 151,
      Rating: 4,
    },
    {
      Name: "Nike Shirt",
      ImagePath: "nikeshirt3.webp",
      Description:
        "Tellus elit, volutpat ac lorem vitae, volutpat vehicula eros. Nulla facilisi. Ut id felis laoreet, commodo ex vitae, scelerisque ipsum. Morbi tincidunt sollicitudin magna, eget commodo justo aliquet pulvinar. Curabitur nunc lacus, scelerisque nec tellus non, convallis tristique tellus. Aliquam sit amet risus purus. Vestibulum sit amet odio ac est tempor luctus.",
      Category: "T-Shirt",
      Brand: "Nike",
      Price: 139,
      Rating: 5,
    },
    {
      Name: "Nike Shoes",
      ImagePath: "product1.webp",
      Description:
        "Tellus elit, volutpat ac lorem vitae, volutpat vehicula eros. Nulla facilisi. Ut id felis laoreet, commodo ex vitae, scelerisque ipsum. Morbi tincidunt sollicitudin magna, eget commodo justo aliquet pulvinar. Curabitur nunc lacus, scelerisque nec tellus non, convallis tristique tellus. Aliquam sit amet risus purus. Vestibulum sit amet odio ac est tempor luctus.",
      Category: "Shoes",
      Brand: "Nike",
      Price: 139,
      Rating: 5,
    },
    {
      Name: "Nike Shoes",
      ImagePath: "nike2.webp",
      Description:
        "Tellus elit, volutpat ac lorem vitae, volutpat vehicula eros. Nulla facilisi. Ut id felis laoreet, commodo ex vitae, scelerisque ipsum. Morbi tincidunt sollicitudin magna, eget commodo justo aliquet pulvinar. Curabitur nunc lacus, scelerisque nec tellus non, convallis tristique tellus. Aliquam sit amet risus purus. Vestibulum sit amet odio ac est tempor luctus.",
      Category: "Shoes",
      Brand: "Nike",
      Price: 99,
      Rating: 5,
    },
  ];

  let formData;

  data.map(async (data) => {
    formData = new FormData();
    for (var key in data) {
      formData.append(key, data[key]);
    }
    await axios.post("/products", formData);
  });
};
