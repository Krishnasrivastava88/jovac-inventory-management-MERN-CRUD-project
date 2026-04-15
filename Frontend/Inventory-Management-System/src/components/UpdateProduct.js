import React, { useEffect, useState } from 'react'
import { NavLink, useParams, useNavigate } from 'react-router-dom';

export default function InsertProduct() {
    const [productName, setProductName] = useState("");
    const [productPrice, setProductPrice] = useState();
    const [productBarcode, setProductBarcode] = useState();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const navigate = useNavigate("");

    const setName = (e) => {
        setProductName(e.target.value);
      };
    
      const setPrice = (e) => {
        setProductPrice(e.target.value);
      };
    
      const setBarcode = (e) => {
        const value = e.target.value.slice(0, 12);
        setProductBarcode(value);
    };

    const {id} = useParams("");

    useEffect(() => {
        const getProduct = async () => {
          try {
            const res = await fetch(`http://localhost:3001/products/${id}`, {
              method: "GET",
              headers: {
                "Content-Type": "application/json"
              }
            });
      
            const data = await res.json();
      
            if (res.status === 201) {
              console.log("Data Retrieved.");
              setProductName(data.ProductName);
              setProductPrice(data.ProductPrice);
              setProductBarcode(data.ProductBarcode);
            } else {
              console.log("Something went wrong. Please try again.");
            }
          } catch (err) {
            console.log(err);
          }
        };
      
        getProduct();
    }, [id]);

    const updateProduct = async (e) => {
        e.preventDefault();

        if (!productName || !productPrice || !productBarcode) {
            setError("*Please fill in all the required fields.");
            return;
        }

        setLoading(true);
        setError("");

        try {
            const response = await fetch(`http://localhost:3001/updateproduct/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ "ProductName": productName, "ProductPrice": productPrice, "ProductBarcode": productBarcode })
            });

            await response.json();

            if (response.status === 201) {
                alert("Data Updated");
                navigate('/products');
            }
            else {
                setError("Something went wrong. Please try again.");
            }
        } catch (err) {
            setError("An error occurred. Please try again later.");
            console.log(err);
        } finally {
            setLoading(false);
        }
    }
// ... (keep your imports and logic the same)

return (
    <div className='container mt-5'>
        <div className="row justify-content-center">
            <div className="col-lg-8 custom-card">
                <h1 className='mb-4 fw-bold text-dark'>Add New Product</h1>
                <hr />
                <form>
                    <div className="mb-4">
                        <label htmlFor="product_name" className="form-label fs-5 fw-semibold">Product Name</label>
                        <input type="text" onChange={setName} value={productName} className="form-control form-control-lg" id="product_name" placeholder="e.g. Wireless Mouse" required />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="product_price" className="form-label fs-5 fw-semibold">Product Price ($)</label>
                        <input type="number" onChange={setPrice} value={productPrice} className="form-control form-control-lg" id="product_price" placeholder="0.00" required />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="product_barcode" className="form-label fs-5 fw-semibold">Product Barcode</label>
                        <input type="number" onChange={setBarcode} value={productBarcode} className="form-control form-control-lg" id="product_barcode" placeholder="12-digit code" required />
                    </div>
                    
                    <div className='d-flex gap-3 mt-5'>
                        <NavLink to="/products" className='btn btn-light border fs-5 flex-grow-1'>Cancel</NavLink>
                        <button type="submit" onClick={updateProduct} className="btn btn-primary fs-4" disabled={loading}>                            {loading ? 'Processing...' : 'Add to Inventory'}
                        </button>
                    </div>
                </form>
                {error && <div className="alert alert-danger mt-4">{error}</div>}
            </div>
        </div>
    </div>
)
    
}
