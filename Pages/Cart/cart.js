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
   
    <div class="listings">
    <div class="box-check" id="check">
       
       
    <img class="photo-check" src="${item.src}"/>
    
    <p>${item.price}</p>
    <div id="color">
   <select class="selection" name="color" id="dropdown">
       <option value="">Select color preference</option>
       <option value="Black">Black</option>
       <option value="Green">Green</option>
       <option value="Blue">Blue</option>
       
   </select></div>
   <div id="size">
   <select class="selection" name="size" id="dropdown">
       <option value="">Select appropriate size</option>
       <option value="XL">XL</option>
       <option value="L">L</option>
       
       
   </select></div>
   <button onclick="removeitems(${indexs})">Remove</button>
    
    </div>
    </div>
    </div>`
  
  
   })
   
   document.getElementById('show').innerHTML= showcart
   document.getElementById('price').innerHTML= "Total Price:$"+total
   document.getElementById('length').innerHTML= "You have"+" "+newarr.length+" "+"item(s)" 

   function removeitems(indexs){
    
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
     <div class="listings">
     <div class="box-check" id="check">
        
        
     <img class="photo-check" src="${item.src}"/>
     
     <p>${item.price}</p>
     <div id="color">
    <select class="selection" name="color" id="dropdown">
        <option value="">Select color preference</option>
        <option value="Black">Black</option>
        <option value="Green">Green</option>
        <option value="Blue">Blue</option>
        
    </select></div>
    <div id="size">
    <select class="selection" name="size" id="dropdown">
        <option value="">Select appropriate size</option>
        <option value="XL">XL</option>
        <option value="L">L</option>
        
        
    </select></div>
    <button onclick="removeitems(${indexs})">Remove</button>
     
     </div>
     </div>
     </div>`
    
   
    })
   
   document.getElementById('show').innerHTML= showcart
   document.getElementById('length').innerHTML= "You have"+" "+newarr.length+" "+"item(s)" 
   }
  