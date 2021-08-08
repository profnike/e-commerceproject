let arrdesc=[{color:"green,black,grey", id:0,size:"S,M,L",src:"../../female/blouse1.jpg"},{color:"green,black,grey", id:011,size:"S,M,L",src:"../../female/skirt1.jpg"}, 
{color:"green,black,grey",id:1,size:"S,M,L",src:"../../female/blouse2.jpg"},{color:"green,black,grey",id:11,size:"S,M,L",src:"../../female/skirt2.jpg"},{color:"green,black,grey",id:2,size:"S,M,L",src:"../../female/blouse3.jpg"},{color:"green,black,grey",id:21,size:"S,M,L",src:"../../female/skirt3.jpg"},
{color:"green,black,grey",id:3,size:"S,M,L",src:"../../female/blouse4.jpg"},{color:"green,black,grey",id:4,size:"S,M,L",src:"../../female/blouse5.jpg"},{color:"green,black,grey",id:5,size:"S,M,L"},
{color:"green,black,grey",id:31,size:"S,M,L",src:"../../female/skirt4.jpg"},{color:"green,black,grey",id:41,size:"S,M,L",src:"../../female/skirt5.jpg"},{color:"green,black,grey",id:51,size:"S,M,L",src:"../../female/skirt6.jpg"},
{color:"green,black,grey",id:0111,size:"S,M,L",src:"../../female/gown1.jpg"},{color:"green,black,grey",id:1111,size:"S,M,L",src:"../../female/gown2.png"},{color:"green,black,grey",id:2111,size:"S,M,L",src:"../../female/gown3.jpg"},{color:"green,black,grey",id:3111,size:"S,M,L",src:"../../female/gown5.jpg"},
{color:"green,black,grey",id:01111,size:"S,M,L",src:"../../female/ftrousers1.jpg"},{color:"green,black,grey",id:11111,size:"S,M,L",src:"../../female/ftrousers2.jpg"},{color:"green,black,grey",id:21111,size:"S,M,L",src:"../../female/ftrousers3.jpg"},
{color:"green,black,grey",id:31111,size:"S,M,L",src:"../../female/fjean1.jpg"},{color:"green,black,grey",id:41111,size:"S,M,L",src:"../../female/fjean2.jpg"},{color:"green,black,grey",id:51111,size:"S,M,L",src:"../../female/fjean3.jpg"}]

let ind;
if((localStorage.getItem("itemind")!=null))
{
    ind= JSON.parse(localStorage.getItem("itemind"));
}
let na
let co
let si
let sr
let descr=arrdesc.filter((itemd,indexd)=>{
    if( ind==itemd.id){
         na=itemd.name
         si=itemd.size
         co=itemd.color
         sr=itemd.src
         
        
    }
     
})
function opendesrc(indexd){
    alert("p")
}


document.getElementById('description').innerHTML=`<div class="descriptionbox">
      
      <div class='img-div'><img class='photo-descr' src=${sr} /></div>
      <div class="text">
      
         <div class="title">Color</div>
         ${co} 
          <div class="title">Description</div>
         <p> Quis anim laborum cupidatat enim ut minim voluptate tempor adipisicing officia 
         aute velit laborum magna. Culpa laboris duis culpa elit deserunt voluptate proident
          quis irure occaecat. Veniam duis in nisi proident amet aliquip 
          ullamco in. Elit culpa officia eu excepteur nulla dolore anim voluptate 
          dolore quis commodo quis. Dolor voluptate est irure aute aliqua ullamco tempor 
          laboris laboris tempor amet excepteur dolor. Sit ex do adipisicing laboris exercitation 
          Lorem adipisicing veniam velit velit. Non Lorem aliqua ut minim nostrud enim veniam ex 
          officia Lorem amet.</p>
           <div class="title">Sizes</div>
          ${si}<br/>
          </div>
          </div>`

         
