
let result;
let arr=[{src:"../../female/blouse1.jpg",id:0,price:"$10"}, {src:"../../female/blouse2.jpg",id:1,price:"$15"},{src:"../../female/blouse3.jpg",id:2,price:"$20"},
{src:"../../female/blouse4.jpg",id:3,price:"$20"},{src:"../../female/blouse5.jpg",id:4,price:"$20"}]


//let indexitem;
let iditem;

let arrmap=arr.map((item,index)=>{
  
  console.log(item)
  
  iditem=item.id
  val=item.src

  if((localStorage.getItem("itemclick")!=null) )
           
  {
        localStorage.setItem("itemclick",JSON.stringify(arr));
        
        
     }
    else{
         localStorage.setItem("itemclick",JSON.stringify(arr ));
         
         
    }


 
  
  return `
  
  <div class="container">
  <div class="item">
  
  <diV id="imgDiv"><img class="card" src="${item.src}"/></div>
  <div>${item.price}</div>
  
  <a href="../../Pages/Description/description.html" onclick="clicks(${index},${iditem})"><button >More info</button></a>
<button onclick="additems(${index})" >Add to ShoppingCart</button>

  </div>
  </div>`
 
 
   
  
})

//for skirt
let arrskirt=[{src:"../../female/skirt1.jpg",id:011,price:"$10"}, {src:"../../female/skirt2.jpg",id:11,price:"$15"},{src:"../../female/skirt3.jpg",id:21,price:"$20"},
{src:"../../female/skirt4.jpg",id:31,price:"$20"},{src:"../../female/skirt5.jpg",id:41,price:"$20"},{src:"../../female/skirt6.jpg",id:51,price:"$20"},
]
let skirt=arrskirt.map((item,index)=>{
  
  console.log(item)
  
  iditem=item.id
  val=item.src

  if((localStorage.getItem("itemclick")!=null) )
           
  {
        localStorage.setItem("itemclick",JSON.stringify(arrskirt));
        
        
     }
    else{
         localStorage.setItem("itemclick",JSON.stringify(arrskirt ));
         
         
    }


 
  
  return `
  
  <div class="container">
  <div class="item">
  
  <diV id="imgDiv"><img class="card" src="${item.src}"/></div>
  <div>${item.price}</div>
  
  <a href="../../Pages/Description/description.html" onclick="clicks(${index},${iditem})"><button >More info</button></a>
<button onclick="additems(${index})" >Add to ShoppingCart</button>

  </div>
  </div>`
 
 
   
  
})
document.getElementById("skirt").innerHTML=skirt
//skirt above
//Gown below
let arrgown=[{src:"../../female/gown1.jpg",id:0111,price:"$10"}, {src:"../../female/gown2.png",id:1111,price:"$15"},{src:"../../female/gown3.jpg",id:2111,price:"$20"},
{src:"../../female/gown5.jpg",id:3111,price:"$20"}]

let Gown=arrgown.map((item,index)=>{
  
  console.log(item)
  
  iditem=item.id
  val=item.src

  if((localStorage.getItem("itemclick")!=null) )
           
  {
        localStorage.setItem("itemclick",JSON.stringify(arrgown));
        
        
     }
    else{
         localStorage.setItem("itemclick",JSON.stringify(arrgown ));
         
         
    }


 
  
  return `
  
  <div class="container">
  <div class="item">
  
  <diV id="imgDiv"><img class="card" src="${item.src}"/></div>
  <div>${item.price}</div>
  
  <a href="../../Pages/Description/description.html" onclick="clicks(${index},${iditem})"><button >More info</button></a>
<button onclick="additems(${index})" >Add to ShoppingCart</button>

  </div>
  </div>`
 
 
   
  
})
document.getElementById("gown").innerHTML=Gown
//Gown above
//Trousers below
let arrtrousers=[{src:"../../female/ftrousers1.jpg",id:01111,price:"$10"}, {src:"../../female/ftrousers2.jpg",id:11111,price:"$15"},{src:"../../female/ftrousers3.jpg",id:21111,price:"$20"},
{src:"../../female/fjean1.jpg",id:31111,price:"$20"},{src:"../../female/fjean2.jpg",id:41111,price:"$20"},
{src:"../../female/fjean3.jpg",id:51111,price:"$20"}]

let Trousers=arrtrousers.map((item,index)=>{
  
  console.log(item)
  
  iditem=item.id
  val=item.src

  if((localStorage.getItem("itemclick")!=null) )
           
  {
        localStorage.setItem("itemclick",JSON.stringify(arrtrousers));
        
        
     }
    else{
         localStorage.setItem("itemclick",JSON.stringify(arrtrousers ));
         
         
    }


 
  
  return `
  
  <div class="container">
  <div class="item">
  
  <diV id="imgDiv"><img class="card" src="${item.src}"/></div>
  <div>${item.price}</div>
  
  <a href="../../Pages/Description/description.html" onclick="clicks(${index},${iditem})"><button >More info</button></a>
<button onclick="additems(${index})" >Add to ShoppingCart</button>

  </div>
  </div>`
 
 
   
  
})
document.getElementById("trousers").innerHTML=Trousers
//Trousers above


let itemsval=[];
let addeditem
let newval;
let filteritem=[]
let oldvalfilter
let len;

if((localStorage.getItem("res")==null) ){
 filteritem=[]
}
else{filteritem=JSON.parse(localStorage.getItem("res"));}
len=filteritem.length
document.getElementById("cart").innerHTML="ShoppingCart"+ len

let ansan
function additems(index){
itemsval.push(val)
console.log(index)
addeditem= JSON.parse(localStorage.getItem("itemclick"));
console.log(addeditem)
 newval=addeditem.filter((item,indexnew)=>{
 
    console.log(item)
    return index==indexnew
      
})
console.log(newval)
let rNewval=newval.map((item,index)=>{
 
   ansan=item

  //return ansan
  //return item
})
console.log(ansan)
//filteritem.push(newval)
document.getElementById("cart").innerHTML="ShoppingCart"+ filteritem.length
//let resval=[]
//if((localStorage.getItem("res")!=[]) ){
  //filteritem=JSON.parse(localStorage.getItem("res"));
//}
           
        if((localStorage.getItem("res")!=null) ){
          oldvalfilter= JSON.parse(localStorage.getItem("res"));
          filteritem=oldvalfilter
          filteritem.push(ansan)
          document.getElementById("cart").innerHTML="ShoppingCart"+ filteritem.length
        //let mergefilter=oldvalfilter.concat(filteritem)
        //filteritem=mergefilter
         console.log(filteritem)
         len= filteritem.length
            localStorage.setItem("res",JSON.stringify(filteritem));
               
               
            }
           else{
            filteritem.push(newval)
              localStorage.setItem("filteritem",JSON.stringify(filteritem));
              document.getElementById("cart").innerHTML="ShoppingCart"+ filteritem.length
                
           }
               
               
           console.log(filteritem)



}
function clicks(index,iditem){
 
 
 
  console.log(iditem)
  let indexitem=iditem
alert('hyt ')
if((localStorage.getItem("itemind")!=null) )
           
         {
               localStorage.setItem("itemind",JSON.stringify(indexitem));
               
               
            }
           else{
                localStorage.setItem("itemind",JSON.stringify(indexitem));
                
                
           }
          }
//console.log(result)


document.getElementById('third').innerHTML=arrmap
console.log(arrmap)
let ans
let resC
let oldval;
 
function cart(){
  alert("kjp")
  
   resC=filteritem.map((item,index)=>{
  let ansA=item.map((itemin,indexin)=>{
     ans=itemin
    })
    return ans
  })
console.log(resC)
if((localStorage.getItem("res")!=null) )
           
         {
          oldval= JSON.parse(localStorage.getItem("res"));
          let merge=oldval.concat(resC)
          resC=merge
               localStorage.setItem("res",JSON.stringify(resC));
               
               
            }
           else{
                localStorage.setItem("res",JSON.stringify(resC));
                
                
           }

         


 

}




  



//response.forEach(element => {
    //usersInfo +=`<div class="user-body">
    //<div class="card"> 
    //<p id= "upperPart"></p>
       ////             <p>${element.name}</p>
        //            <p>${element.phone}</p>
          //          <p>${element.website}</p>
           //         <p>${element.username}</p>
            //        <p>${element.email}</p>
             //       <p>${element.address.street}</p>
                    
    //</div>
    //</div>`
    //document.getElementById("display-details").innerHTML=usersInfo;
    
//});