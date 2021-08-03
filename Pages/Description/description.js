let arrdesc=[{name:".top", id:0},{name:"skirt1", id:011}, 
{name:"blouse",id:1},{name:"skirt2",id:11},{name:"jeans",id:2},{name:"skirt3",id:21}]

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
