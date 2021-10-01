import { useEffect, useState } from 'react';
import Card from '../AdminTools/Card';
import classes from '../AdminTools/Container.module.css';
import imagen from '../AdminTools/imagen.jpg'
function Container() {
    let dummy=[{title:'prueba',image:imagen},{title:'prueba',image:imagen},{title:'prueba',image:imagen}]
    const [products,setProducts]=useState(dummy)
    
     useEffect(() => {
        fetch('http://localhost:3000/api/products')
        .then(res=>res.json())
        .then(data=>{
            setProducts(data.data.products)
        })
        .catch(err=>console.log(err))
    }, []) 
    const deleteHandler=(id)=>{
        fetch(`http://localhost:3000/products/${id}`, {
            method: 'DELETE',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            }
          })
          .then(res=>res.json)
          .then(data=>setProducts(products.filter((el)=>el.idproduct!=id)))
          .catch(err=>console.log(err))
    }
    let arrayProducts=products.map((book,id)=>(
        <Card image={book.image} title={book.name} key={id} idval={book.idproduct} clicked={()=>deleteHandler(book.idproduct)}/>
    ))
    return (
      <>
      <h1 style={{color:"#fff"}}>Add a product</h1>
      <div className={classes.addcontainer}><a href={`http://localhost:3000/products/create`} target="_blank"><i className="fas fa-plus"></i></a></div>
      <div className={classes.maincontainer}>

          {arrayProducts}
      </div>
      </>
    );
  
}
  export default Container;