import React from 'react'
import {API} from '../../backend';

const ImageHelper = ({product}) =>{
    const ImageUrl = product ? `${API}/player/photo/${product._id}` : `https://img2.exportersindia.com/product_images/bc-full/2019/7/6510916/mens-half-sleeve-round-neck-t-shirt-1564385444-5020149.jpeg`
    return (
        <div >
                <img
                  src={ImageUrl}
                  alt="photo"
                  style={{ maxHeight: "100%", maxWidth: "100%" }}
                  className="mb-3 rounded"
                />
        </div>
    )
}

export default ImageHelper;