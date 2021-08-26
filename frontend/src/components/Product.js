import axios from "axios";
import { useEffect, useState } from "react";

const defaultImageSrc = "../img/shirt.jpg";

const initialField = {
  imageName: "",
  imageSrc: defaultImageSrc,
  imageFile: null,
};
function Product() {
  const [product, setProduct] = useState([]);
  const [values, setValues] = useState(initialField);

  const showPreview = (e) => {
    if (e.target.files && e.target.files[0]) {
      let imageFile = e.target.files[0];
      const reader = new FileReader();
      reader.onload = (x) => {
        setValues({
          ...values,
          imageFile,
          imageSrc: x.target.result,
        });
      };
      reader.readAsDataURL(imageFile);
    } else {
      setValues({
        ...values,
        imageFile: null,
        imageSrc: defaultImageSrc,
      });
    }
  };

  useEffect(async () => {
    const res = await axios.get("/products");
    console.log(res.data);
    setProduct(res.data);
  }, []);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    console.log('clicked')
    const formData = new FormData()
    formData.append('Name', 'ds')
    const res = await axios.post("/products", formData);
    console.log('sds', res.data)
  }
  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <img src={values.imageSrc}></img>
        <div class="form-group" >
          <label for="exampleFormControlFile1">Example file input</label>
          <input
            type="file"
            accept="image/*"
            onChange={showPreview}
            class="form-control-file"
            id="exampleFormControlFile1"
          ></input>
          
        </div>
        <button type="submit">sds</button>
      </form>
      
      
      {product.map((prod) => (
        <div class="card" style={{width: "18rem"}} key={prod.id}>
        Image: <img class="card-img-top" src={`/Images/${prod.imagePath}`}></img>
          <div class="card-body">
          <h1>Name: {prod.name}</h1>
          <p class="card-text">Description: {prod.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Product;
