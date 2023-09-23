import { useEffect } from "react";

export default function Home() {
    let productName;
    let productPrice;
    let productCategory;
    let productDesc; 

    useEffect(()=>{
        productName = document.querySelector('#productName');
        productPrice = document.querySelector('#productPrice');
        productCategory = document.querySelector('#productCategory');
        productDesc = document.querySelector('#productDesc');
    },[])

    function getValues() {
        const productNameValue = productName.value; 
        const productPriceValue = productPrice.value;
        const productCategoryValue = productCategory.value;
        const productDescValue = productDesc.value;
        resetValue();
        console.log(productNameValue);
    }
    function resetValue()
    {
        productName.value = "";
        productPrice.value = "";
        productCategory.value = "";
        productDesc.value = "";
    }


  return <>
      <section className="container">
        <div>
          <div className="pt-3">
            <label htmlFor="productName">Product name: </label>
            <input className="form-control" type="text" name="" id="productName" />
          </div>
          <div className="pt-3">
            <label htmlFor="productPrice">Product price:</label>
            <input className="form-control" type="text" name="" id="productPrice" />
          </div>
          <div className="pt-3">
            <label htmlFor="productCategory">Product category:</label>
            <input className="form-control" type="text" name="" id="productCategory" />
          </div>
          <div className="pt-3">
            <label htmlFor="productDesc">Product description:</label>
            <input className="form-control" type="text" name="" id="productDesc" />
          </div>
            <button onClick={getValues} className="btn btn-outline-primary mt-3">add product</button>

        </div>

        <div className="pt-5">
            <table className="table table-striped text-center">
                <thead>
                    <tr>
                        <th>Product name</th>
                        <th>Product price</th>
                        <th>product category</th>
                        <th>product description</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
    
                </thead>
                <tbody id="tbody">

                </tbody>
            </table>
        </div>
      </section>
    </>
  ;
  
}
