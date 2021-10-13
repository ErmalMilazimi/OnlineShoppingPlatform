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
      Category: "Bag",
      Brand: "Levi's",
      Price: 203,
      Rating: 1,
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
      Name: "LTB Shirt",
      ImagePath: "ba8f69ff5854464888da544429e081c7.jpg",
      Description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sit amet tempor urna, venenatis commodo nulla. Sed tellus elit, volutpat ac lorem vitae, volutpat vehicula eros. Nulla facilisi. Ut id felis laoreet, commodo ex vitae, scelerisque ipsum. Morbi tincidunt sollicitudin magna, eget commodo justo aliquet pulvinar. Curabitur nunc lacus, scelerisque nec tellus non, convallis tristique tellus. Aliquam sit amet risus purus. Vestibulum sit amet odio ac est tempor luctus.",
      Category: "Shirt",
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
