let newarr=[]
if((localStorage.getItem("res")!=null) )
           
  {
        newarr=JSON.parse(localStorage.getItem("res"));
  }
  let total=0;
  let indexs
  let itemval;
  let showcart=newarr.map((item,index)=>{
   console.log(item.price)
   indexs=index
   itemval=item
 let price=item.price.replace("$","")
 let pricenum=+price
  total=total+pricenum
    return `<div>
   
    <img class="card" src="${item.src}"/>
    <button onclick="removeitems(${indexs})">me</button>
    
    </div>`
  
  
   })
   
   document.getElementById('show').innerHTML= showcart
   document.getElementById('price').innerHTML= "$"+total
   document.getElementById('length').innerHTML= "You have"+" "+newarr.length+" "+"items" 

   function removeitems(indexs){
    alert('hit')
     console.log(indexs)
    
   let indelem=newarr[indexs]
   console.log(indelem.price)
   let price=indelem.price.replace("$","")
let pricenumba=+price
    total=total-pricenumba
    console.log(total)
    document.getElementById('price').innerHTML= "$"+total
    newarr.splice(indexs,1)
   console.log(newarr)
   localStorage.setItem("res",JSON.stringify(newarr));

   showcart=newarr.map((item,index)=>{
         console.log(itemval)
    console.log(index)
    indexs=index
   
     return `<div>
     
     <img class="card" src="${item.src}"/>
     <button onclick="removeitems(${indexs})">Remove</button>
     
     </div>`
   
   
    })
   
   document.getElementById('show').innerHTML= showcart
   document.getElementById('length').innerHTML= "You have"+" "+newarr.length+" "+"items" 
   }
  