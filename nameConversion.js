let name = document.getElementById('text');
let caml = document.getElementById('camel-case');
let pascal = document.getElementById('pascal-case');
let snakeCase = document.getElementById('snake-case');
let screamSnake = document.getElementById('screaming-snake-case');
let kebab = document.getElementById('kebab-case');
let screamkebab = document.getElementById('screaming-kebab-case');
let btn =  document.querySelector("#convert-btn");

btn.addEventListener("click",changeCase);

 function changeCase() {
   let name1= name.value; 

   caml.innerText = camelcase(name1) ;
   pascal.innerText = pascalCase(name1);
   snakeCase.innerText = SnakeCase(name1);
   screamSnake.innerText =screamSnakeCase(name1);
   kebab.innerText = kebabCase(name1);
   screamkebab.innerText = screamKebabCase(name1);
}

function camelcase(str){

    let lowrcase = str.toLowerCase();
    console.log(lowrcase);

 

     return lowrcase.replace(/[^a-zA-Z0-9]+(.)/g, (m,chr)=> chr.toUpperCase())
    
    }

function pascalCase(str){

  
    return (str.replace(/\w\S*/g, (m)=> m.charAt(0).toUpperCase()+ m.substring(1).toLowerCase()));

}

function SnakeCase(str){
let snake =""
    
  let newarr = str.split(/\s|\W/g);
  console.log(newarr);

  newarr.forEach(element => {
   let temp = element+"_";

   snake+=temp;

  });

  return snake
}

  

function screamSnakeCase(str){

    let snake =""
    
    let newarr = str.split(/\s|\W/g);
    console.log(newarr);
  
    newarr.forEach(element => {
     let temp = element.toUpperCase()+"_";
  
     snake+=temp;
  
    });
  
    return snake
    
}

function kebabCase(str){

    let snake =""
    
    let newarr = str.split(/\s|\W/g);
    console.log(newarr);
  
    newarr.forEach(element => {
     let temp = element.toLowerCase()+"-";
  
     snake+=temp;
  
    });
  
    return snake

}

function screamKebabCase(str){


    let snake =""
    
    let newarr = str.split(/\s|\W/g);
    console.log(newarr);
  
    newarr.forEach(element => {
     let temp = element.toUpperCase()+"-";
  
     snake+=temp;
  
    });
  
    return snake

}