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
        div.classList.add("card");
        div.innerHTML=`

        <img class="card-img" src=${product.image} alt=""/>
        <h4>${product.title}</h4>
        <h3>Price:${product.price}</h3>
        <p>${product.description.slice(0,50)}</p>
        <button onclick="singleproduct('${product.id}')">Details</button>
        <button  onclick="handleaddtocard('${product.title}','${product.price}')">Add to card</button>

        `;
        productcontainer.appendChild(div);

        
    });

}
 let convertcount=0;
const handleaddtocard=(name,price)=>{ 
      
   const container=document.getElementById("cart-main-container")
   const div=document.createElement("cart-info")
   div.classList.add("child")
   div.innerHTML=`

   <p>${name}</p>
   <h3 class="price" >${price}</h3> 

   `;
   
   container.appendChild(div);
     convertcount+=1;
    const cartcount=document.getElementById("count").innerText=convertcount;
    convertcount=parseInt(cartcount);
   
   upadtetotal();

};

const upadtetotal=()=>{

    const totalprice=document.getElementsByClassName("price");
    let ans=0;
    for(const e of totalprice){
        ans=ans+parseFloat(e.innerText);
    }
    document.getElementById("total").innerText=ans.toFixed(2);
 

}


const singleproduct=(id)=>{
    fetch(`https://fakestoreapi.com/products/${id}`)
  .then(response => response.json())
  .then(data => console.log(data));
}

// forEach konokishu return kora na just print single element or another work

allproduct();