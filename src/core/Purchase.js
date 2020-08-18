import React, { useState, useEffect } from "react";
import "../styles.css";
import { API } from "../backend";
import Base from "./Base";
import Card from "./Card";
import { getPlayers } from "./helper/coreapicalls";
import PaymentHelper from "./helper/PaymentHelper";
import ImageHelper from "./helper/ImageHelper";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);

  const loadAllProduct = () => {
    getPlayers().then(data => {
      if (data.error) {
        setError(data.error);
      } else {
        setProducts(data);
      }
    });
  };

  useEffect(() => {
    loadAllProduct();
  }, []);


  return (
    <Base title="PURCHASE-LIST" description="">
      <div className="row text-center">
        <div className="row">
        {products.map((product, index) => {
            return (
              <div key={index} className="col-md-4 col-sm-12">
                  <p>{product.name1}</p>
                  <p>{product.number}</p>
                <p>{product.Transaction}</p> 
                <p>{product.createdAt}</p>
              </div>
            );
          })}
        </div>
      </div>
    </Base>
  );
}
