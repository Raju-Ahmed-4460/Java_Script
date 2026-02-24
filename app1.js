// get element

//get element by class

//const target=document.getElementsByClassName("d1");
//console.log(target);// ata atka array provide kora


//get element by id
//const target1=document.getElementById("d1");
//console.log(target1)// ata single value unique

// get element by tag name

//const target2=document.getElementsByTagName(h1);
//console.log(taget2);//atao akta element of array provide kora


// Dom loop if else

// const allbox=document.getElementsByClassName("box");
// for(let i=0;i<allbox.length;i++){
//     const element=allbox[i];
//     console.log(element);
    
//     if(element.innerText=="box5"){
//         element.style.backgroundColor="red";
//     }
//     else{
//         element.style.backgroundColor="green"
//     }
// }


// document.getElementById("handleadd").addEventListener("click",(event)=>{
//     const val=document.getElementById("searchbox").value ;

//     const comment=document.getElementById("comment-container");

//     const p=document.createElement("p");
//      p.classList.add("child");

//      p.innerText=val;
        
//      comment.append(p);
    
//        const allcomment=document.getElementsByClassName("child");
        

//      document.getElementById("searchbox").value="";

//      for(const element of allcomment){
//         element.addEventListener("click",(e)=>{
//             e.target.parentNode.removeChild(element);
//         })
//      }


// })

document.getElementById("handleadd").addEventListener("click",(event)=>{
    const val=document.getElementById("searchbox").value ;

    const comment=document.getElementById("comment-container");

    const p=document.createElement("p");

    p.classList.add("child");

    p.innerText=val;

    comment.append(p);

    const allcomment=document.getElementsByClassName("child");

    document.getElementById("searchbox").value ="";

    for(const element of allcomment){

        element.addEventListener("click",(e)=>{

             e.target.parentNode.removeChild(element);
             
        })
    }

    
});

// const handlesearch=(event)=>{
//     console.log("Hello Raju");
// }


// api use :

fetch("https://jsonplaceholder.typicode.com/users")
.then(res=>res.json())
.then(data=>{
    display(data);
})
.catch(err=>{
    console.log(err);
})

const display=(userdata)=>{

    const container=document.getElementById("user-data-container");


    userdata.forEach(user=>{
        const div=document.createElement("div");
        div.classList.add("user");
        div.innerHTML=`
        <h1> title</h1>
        <p>details<p/>
        <button>btn</button>
        
        `
        container.appendChild(div)

    })

}
