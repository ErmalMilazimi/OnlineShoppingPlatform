import React, {useState , useEffect} from "react";
import {useHistory , useParams} from "react-router";
import Nav from "../nav/nav";
import Img from "../../assets/img/logoTxt.svg";
import axios from "axios";

const EditProductComponent = () => {
    const [value, setValue] = useState({
        name: '',
        imagePath: null,
        imageSrc: null,
        imageEdited: null,
        description: '',
        category:'',
        brand: '',
        price: 0,
        rating: 0,

    });
    const { id } = useParams();
    const history = useHistory();

    useEffect(async () =>{
        const { data } = await axios.get(`/products/${id}`);
        setValues(data);
    }, [])

    const { name, imagePath, imageSrc, imageEdited, description, category, brand, price, rating } = value;

    const onChange = (e) => {
        setValues(value => ({
          ...value, [e.target.name]: e.target.value
        }));
    }

    const showPreview = (e) => {
        if(e.target.files && e.target.files[0]){
            let imageFile = e.target.files[0];
            const reader = new FileReader();
            reader.onload = (x) => {
                setValues({
                    ...value,
                    imageEdited: imageFile,
                    imageSrc: x.target.result,
                });
            };
            reader.readAsDataURL(imageFile);
        } else {
            setValues({
                ...value,
                imageEdited: null,
                imageSrc: null,

            });
        }
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("Name",name);
        formData.append("ImagePath",imageEdited ? imageEdited : imagePath);
        formData.append("Descroption",description);
        formData.append("Category",category);
        formData.append("Brand"brand);
        formData.append("Price",price);
        formData.append("Rating",rating);

        await axios.put(`/products/${value.id}`);
        history.push(`/productItem${value.id}`);
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
              <input type="text" name="name" value={name} onChange={(e) => onChange(e)} />
              <label for="desc">Pershkruani produktin:</label>
              <input type="text" name="description" value={description} onChange={(e) => onChange(e)} />
              <label for="price">Shkruani qmimin e produktit:</label>
              <input type="text" name="price" value={price} onChange={(e) => onChange(e)} />
              <label for="category">Shkruani kategorin e produktit:</label>
              <input type="text" name="category" value={category} onChange={(e) => onChange(e)} />
              <label for="brand">Shkruani brendin e produktit:</label>
              <input type="text" name="brand" value={brand} onChange={(e) => onChange(e)} />
              <label for="rating">Shkruani rating e produktit:</label>
              <input type="text" name="rating" value={rating} onChange={(e) => onChange(e)} />
              <label for="imagePath">Ngarkoni fotografi te produktit:</label>
              <input type="file" accept="image/*" onChange={(e) => showPreview(e)} />
              {imageSrc ? <img src={imageSrc} height="300px" /> : <img src={`/Images/${imagePath}`} height="300px" />}
              <input type="submit" name="add" value="Save" />
            </form>
          </div>
        </div>
      );
    };
    export default EditProductComponent;