var test = "Hello Word";
console.log(test);
console.log(typeof test);

var num = "12.5"
var num1 = 12;
var ans = num + num1;

console.log(ans);

var convernum = parseFloat(num)
var ans1 = convernum + num1;
console.log(ans1);

// if else if and else is simple as c++


// object:{} bracket thaklai bujte obe ata akta object
var person={
    name:"raju ahmed",
    age:23,
    roll:12,
    father:{
        name:"Mahe-Alom",
        age:48,

    }
}
console.log(person.name,person.age,person.roll,person.father.name,person.father.age);


//array:
var arr=[5,"raju",10,{name:"raju"},[1,4,6]];
console.log(arr.length);
console.log(arr[0]);
arr.push(6);
arr.pop();

//push front
arr.unshift("raju");
//pop front
arr.shift();
//loop
for(var i=0;i<arr.length;i++){
    console.log(arr[i]);
}


//function  ()
function add(n1,n2){
    var result=n1+n2;
    console.log(result);
}

add(30,70);



// const -variable it nost change or reassignable
//var - variable it is chage able reasignable
// let -- not chage able but reassignable

// Dynamic operator ` ` we can add astring 

const name= "bangladesh";
const allname=` my country is ${name}`;
console.log(allname);

//spreade operator ...
const arrr= [1,23,4,5,6,7,8];
console.log(Math.max(...arrr));

// array and object disstraing

const array=[10,"raju","male"];

const [age,nam,gender]=array;
console.log(nam,age,gender);

//class
const fun={
    name1:"raju",
    age:10,

};
const {name1}=fun;
console.log(name1);


//

const product=[
    {name:"rr",price:10},
    {name:"arrar",price:100},
     {name:"rr",price:10},
    {name:"arrar",price:100},
     {name:"rr",price:10},
    {name:"arrar",price:100}
];

for(let i=0;i<product.length;i++){
    const element=product[i];
    if(element.name=="raju"){
        console.log(element);
    }
    else{
        console.log("not avaloable");
    }
}

//shortcut
// find just for one sigle product return one
const res=product.find(pd=>pd.name=="Raju");
console.log(res);

// filter for multiple eelement find return multiple
const result=product.filter(pd=>pd.name=="rr");
console.log(result);


// foreach and map
const sum=product.map(pd=>pd.name);
console.log(sum);



const sum1=product.forEach(pd=>{
    console.log(pd.price);
});




alert();
