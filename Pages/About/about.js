let arrdesc=[{name:".top", id:0}, {name:"blouse",id:1},{name:"jeans",id:2}]

let ind;
if((localStorage.getItem("itemind")!=null))
{
    ind= JSON.parse(localStorage.getItem("itemind"));
}
let ab
let descr=arrdesc.filter((itemd,indexd)=>{
    if( ind==itemd.id){
         ab=itemd.name
         
        
    }
     
})
function opendesrc(indexd){
    alert("p")
}

document.getElementById('description').innerHTML=ab
