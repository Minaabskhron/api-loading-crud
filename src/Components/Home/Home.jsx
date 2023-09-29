import { useFormik } from "formik";
import { useEffect, useState } from "react";


export default function Home() {

let [productsContainer, setProductsContainer] = useState([])
  
if (localStorage.getItem("productsContainer")!=null && productsContainer.length==0)
{
  productsContainer = JSON.parse(localStorage.getItem("productsContainer"))
}

useEffect(()=>{
  if (productsContainer.length!=0)
  {
    localStorage.setItem("productsContainer",JSON.stringify(productsContainer))  
  }
  
},[productsContainer])

  let productObj = {
    productName: "",
    productPrice: "",
    productCategory: "",
    productDesc: ""
  }
  
  const formikObj= useFormik( {
    initialValues:productObj,

    onSubmit: function (values){
      setProductsContainer([...productsContainer,values])
      localStorage.setItem("productsContainer",JSON.stringify(productsContainer))
      formikObj.resetForm();
    },

    validate:function(values)
    {
      const errors = {}
      const productNameRegex = /^[A-Z]{1}[a-z]{2,9}$/;
      const productPriceRegex = /^[1-9]{1}[0-9]{0,4}$/;
      const productcategoryRegex = /^[A-Z]{1}[a-z]{2,10}$/

      if (! values.productName.match(productNameRegex))
      {
        errors.productName = "Product name must be from 3 to 10 charachters and small characters with first letter capital";
      }

      if (! productPriceRegex.test(values.productPrice))
      {
        errors.productPrice = "Price must be from 1 to 99999"
      }

      if (! values.productCategory.match(productcategoryRegex))
      {
        errors.productCategory = "Category must be from 3 to 10 charachters and small characters with first letter capital "
      }


      return errors;
    }


  } )




  return <>
      <section className="container">
        <form onSubmit={formikObj.handleSubmit}>
          
            <label htmlFor="productName">Product name: </label>
            <input onBlur={formikObj.handleBlur} onChange={formikObj.handleChange} value={formikObj.values.productName} className="form-control mb-3" type="text" name="" id="productName" />
            {formikObj.errors.productName && formikObj.touched.productName?<div className="alert alert-danger">{formikObj.errors.productName} </div>: ""}
          
            <label htmlFor="productPrice">Product price:</label>
            <input onBlur={formikObj.handleBlur} onChange={formikObj.handleChange} value={ formikObj.values.productPrice} className="form-control mb-3" type="number" name="" id="productPrice" />
            {formikObj.errors.productPrice && formikObj.touched.productPrice?<div className="alert alert-danger">{formikObj.errors.productPrice} </div>: ""}
          
            <label htmlFor="productCategory">Product category:</label>
            <input onBlur={formikObj.handleBlur} onChange={formikObj.handleChange} value={formikObj.values.productCategory} className="form-control mb-3" type="text" name="" id="productCategory" />
            {formikObj.errors.productCategory && formikObj.touched.productCategory?<div className="alert alert-danger">{formikObj.errors.productCategory} </div>: ""}

            <label htmlFor="productDesc">Product description:</label>
            <input onChange={formikObj.handleChange} value={formikObj.values.productDesc} className="form-control mb-3" type="text" name="" id="productDesc" />

            <button type="submit" disabled={formikObj.isValid==false || formikObj.dirty==false} className="btn btn-outline-primary mt-3">add product</button>

        </form>

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
                  {productsContainer.map((product,index)=> <tr key={index}>
                    <td>{product.productName}</td>
                    <td>{product.productPrice}</td>
                    <td>{product.productCategory}</td>
                    <td>{product.productDesc}</td>
                    <td>
                    <button className="btn btn-danger">Update</button>
                    </td>
                    <td>
                    <button onClick={function(){
                      const index = productsContainer.indexOf(product);
                      productsContainer.splice(index,1);
                      setProductsContainer(productsContainer);
                      localStorage.setItem("productsContainer",JSON.stringify(productsContainer))
                      console.log(productsContainer);
                    }} className="btn btn-primary">Delete</button>
                    </td>
                  </tr>)}
                </tbody>
            </table>
        </div>
      </section>
    </>
  ;
  
}
