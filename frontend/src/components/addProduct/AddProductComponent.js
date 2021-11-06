import React, {useState} from "react";
import "./addProduct.scss";
import Nav from "../nav/nav";
import Img from "../../assets/img/logoTxt.svg";
import axios from "axios";
import { useHistory } from "react-router-dom";

export const AddProductComponent = () => {
  const [ value , setValues] = useState({
    name: '',
    imagePath : null,
    imageSrc:null,
    description: null,
    category: '',
    brand:'',
    price:0,
    rating:0,

  });
  const history = useHistory();
  const{ name , imagePath, imageSrc, description, category, brand, price, rating} = value;

  const onChange = (e) => {
    setValues({ ...value, [e.target.name]: e.target.value});
  }

  const showPreview = (e) => {
    if(e.target.files && e.target.files[0]){
      let imageFile = e.target.files[0];
      const reader = new FileReader();
      reader.onload = (x) => {
        setValues({
          ...value,
          imagePath: imageFile,
          imageSrc: x.target.result,
        });
      };
      reader.readAsDataURL(imageFile);
    } else{
      setValues({
        ...value,
        iamgeFile: null,
        imageSrc: null,

      });
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("Name",name);
    formData.append("ImagePath",imagePath);
    formData.append("Description",description);
    formData.append("Category",category);
    formData.append("Brand",brand);
    formData.append("Price",price);
    formData.append("Rating",rating);

    await axios.post("/products",formData);
    history.push('/dashboard');
  }
  return (
    <div className="main-container">
      <div className="blur-background"></div>
      <Nav />
      <div class="form-container">
        <div class="form-container-up">
          <img src={Img} alt="form img" />
        </div>
        <form onSubmit={handleFormSubmit} class="add-form">
        <label for="title">Shkruani emrin e produktit:</label>
          <input type="text" name="name" onChange={(e) => onChange(e)} />
          <label for="desc">Pershkruani produktin:</label>
          <input type="text" name="description" onChange={(e) => onChange(e)} />
          <label for="price">Shkruani qmimin e produktit:</label>
          <input type="text" name="price" onChange={(e) => onChange(e)} />
          <label for="category">Shkruani kategorin e produktit:</label>
          <input type="text" name="category" onChange={(e) => onChange(e)} />
          <label for="brand">Shkruani brendin e produktit:</label>
          <input type="text" name="brand" onChange={(e) => onChange(e)} />
          <label for="rating">Shkruani rating e produktit:</label>
          <input type="text" name="rating" onChange={(e) => onChange(e)} />
          <label for="imagePath">Ngarkoni fotografi te produktit:</label>
          <input type="file" accept="image/*" onChange={(e) => showPreview(e)} />
          {imageSrc && <img src={imageSrc} height="300px"/>}
          <input type="submit" name="add" value="ADD" />
        </form>
      </div>
    </div>
  );
};
