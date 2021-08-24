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
  return (
    <div>
      <form>
        <img src={values.imageSrc}></img>
        <div class="form-group">
          <label for="exampleFormControlFile1">Example file input</label>
          <input
            type="file"
            accept="image/*"
            onChange={showPreview}
            class="form-control-file"
            id="exampleFormControlFile1"
          ></input>
        </div>
      </form>
      {product.map((prod) => (
        <h1 key={prod.id}>
          {prod.name} {prod.category}
        </h1>
      ))}
    </div>
  );
}

export default Product;
