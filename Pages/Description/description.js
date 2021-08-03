let arrdesc=[{name:".top", id:0},{name:"skirt1", id:011}, 
{name:"blouse",id:1},{name:"skirt2",id:11},{name:"jeans",id:2},{name:"skirt3",id:21},
{name:"Gown0",id:0111},{name:"Gown1",id:1111},{name:"Gown2",id:2111},{name:"Gown3",id:3111},
{name:"Trouser1",id:01111},{name:"Trouser2",id:11111},{name:"Trouser3",id:21111},
{name:"Trouser4",id:31111},{name:"Trouser5",id:41111},{name:"Trouser5",id:51111}]

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
