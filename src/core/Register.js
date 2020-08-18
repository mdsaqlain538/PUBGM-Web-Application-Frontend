import { createPlayer } from '../core/helper/coreapicalls';
import React, { useState, useEffect } from "react";
import Base from "../core/Base";
import { Link } from "react-router-dom";
import { getCategories, createProduct } from "../admin/helper/adminapicall";
import { isAuthenticated } from "../auth/helper/index";

const Register = () => {
  // https://pubg-mobile-tournament.herokuapp.com/api
  const { user, token } = isAuthenticated();

  const [values, setValues] = useState({
    name1: "",
    name2: "",
    name3: "",
    name4: "",
    Transaction:"",
    number:"",
    photo: "",
    categories: [],
    category: "",
    loading: false,
    error: "",
    createdProduct: "",
    getaRedirect: false,
    formData: ""
  });

  const {
    name1,
    name2,
    name3,
    name4,
    Transaction,
    number,
    categories,
    category,
    loading,
    error,
    createdProduct,
    getaRedirect,
    formData
  } = values;

  const preload = () => {
    getCategories().then(data => {
      //console.log(data);
      if (data.error) {
        setValues({ ...values, error: data.error });
      } else {
        setValues({ ...values, categories: data, formData: new FormData() });
      }
    });
  };

  useEffect(() => {
    preload();
  }, []);

  const onSubmit = event => {
    event.preventDefault();
    setValues({ ...values, error: "", loading: true });
    createPlayer(user._id, token, formData).then(data => {
      if (data.error) {
        setValues({ ...values, error: data.error });
      } else {
        setValues({
          ...values,
          name1: "",
          name2: "",
          name3: "",
          name4: "",
          Transaction: "",
          number: "",
          photo: "",
          loading: false,
          createdProduct: data.name1
        });
      }
    });
  };

  const handleChange = name => event => {
    const value = name === "photo" ? event.target.files[0] : event.target.value;
    formData.set(name, value);
    setValues({ ...values, [name]: value });
  };

  const successMessage = () => (
    <div
      className="alert alert-success mt-3"
      style={{ display: createdProduct ? "" : "none" }}
    >
      <h4>Thanks {createdProduct} Your Slot Confirmed successfully. Further Instructions, Room Id and Pass will be Shared Through What'sApp.</h4>
    </div>
  );


  const createProductForm = () => (
    <form>
      <br></br> <br></br>
      <span>Fill The Form (In Game Names).</span>
      <br></br> <br></br>
      <p>Pay The Amount To +91-8309915316 Gpay/Paytm</p>
      
      <div className="form-group">
        <input
          onChange={handleChange("name1")}
          name="name1"
          className="form-control"
          placeholder="Team-Leader Name"
          value={name1}
        />
      </div>
      <div className="form-group">
        <input
          onChange={handleChange("name2")}
          name="name2"
          className="form-control"
          placeholder="Player Name - 2"
          value={name2}
        />
      </div>
      <div className="form-group">
        <input
          onChange={handleChange("name3")}
          name="name3"
          className="form-control"
          placeholder="Player Name - 3"
          value={name3}
        />
      </div>
      <div className="form-group">
        <input
          onChange={handleChange("name4")}
          name="name4"
          className="form-control"
          placeholder="Player Name - 4"
          value={name4}
        />
      </div>
      <div className="form-group">
        <input
          onChange={handleChange("Transaction")}
          name="photo"
          className="form-control"
          placeholder="Transaction ID"
          value={Transaction}
        />
      </div>
      <div className="form-group">
        <input
          onChange={handleChange("number")}
          className="form-control"
          placeholder="What'sApp Number"
          value={number}
        />
      </div>
      <div className="form-group">
        <select
          onChange={handleChange("category")}
          className="form-control"
          placeholder="Category"
        >
          <option>Select</option>
          {categories &&
            categories.map((cate, index) => (
              <option key={index} value={cate._id}>
                {cate.name}
              </option>
            ))}
        </select>
      </div>

      <div className="form-group">
        <label className="btn btn-block btn-dark">
          <input
            onChange={handleChange("photo")}
            type="file"
            name="photo"
            accept="image"
            placeholder="choose a file"
          />
        </label>
      </div>

      <button
        type="submit"
        onClick={onSubmit}
        className="btn btn-outline-success mb-3"
      >
        Submit
      </button>
    </form>
  );

  return (
    <Base
      title="REGISTRATION"
      description="Fill The Details To Book Your Own Slot."
      className="container bg-info p-4"
    >
      <Link to="/register" className="btn btn-md btn-dark mb-3">
        REGISTER FORM
      </Link>
      <div className="row bg-dark text-white rounded">
        <div className="col-md-8 offset-md-2">
          {successMessage()}
          {createProductForm()}
        </div>
      </div>
    </Base>
  );
};

export default Register;
