const allproduct=()=>{
    fetch('https://fakestoreapi.com/products')
  .then(response => response.json())
  .then(data =>{
  displayproduct(data)
  });
}



const displayproduct=(products)=>{
    const productcontainer=document.getElementById("product-container");

    products.forEach(product => {
        const div=document.createElement("div");
        div.innerHTML=`

        <img src="" alt=""/>
        <h4></h4>
        <p></p>
        <button>Details</button>
        <button>Add to card</button>

        `;
        productcontainer.appendChild(div);

        
    });

}

// forEach konokishu return kora na just print single element or another work

allproduct();