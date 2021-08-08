document.getElementById("signup").addEventListener("click",Signup)
let username= document.getElementById("name").value
document.getElementById("name").addEventListener("change",clear)
let email= document.getElementById("email").value
document.getElementById("email").addEventListener("change",clears)
let history=[] 
 

    const afterSignup = () => {
        document.querySelector(".complete").style.display="flex"
        //alert('Your account has been created successfuly.');
       //setTimeout(function(){history.push("/")},1000);
    }

    let aots=[]
   if( JSON.parse(localStorage.getItem('aots'))===null){
    aots=[]
    localStorage.setItem('aots', JSON.stringify(aots));
     
 }
   else{aots=JSON.parse(localStorage.getItem('aots'))}
   function clear(){
  document.querySelector(".box-alert").style.display="none"
   }
   function clears(){
    document.querySelector(".box-alert").style.display="none"
     }
     

function Signup  (e) {
    
    
       e.preventDefault()
       if((document.getElementById("name").value==="")||(document.getElementById("email").value==="")){
        
        document.querySelector(".box-alert").style.display="flex"
       
            

        
    }
       if((document.getElementById("name").value!="")&&(document.getElementById("email").value!="")){
           
           let same = aots.filter(el=> el.username === document.getElementById("name").value && el.email === document.getElementById("email").value );
           if (same.length===0) {
               aots.push({"username": document.getElementById("name").value, "email": document.getElementById("email").value})
               localStorage.setItem('aots', JSON.stringify(aots));
               document.querySelector(".box-create").style.display="flex"
            }
            else{document.querySelector(".box-exist").style.display="flex"}
          
       }
        //if(aots === null){
          //  aots = [];
       // }
        //if((username==="")||(email==="")){
           // document.querySelector(".box-alert").style.display="flex"
            
       // }
       // else{
           // document.querySelector(".box-alert").style.display="none"
           // alert('hi')}
        //if((username!="")&&(email!="")){
//alert('hio')
      //}
           // const same = aots.filter(el=> el.username === username);
            //if (same.length===0) {
            //    aots = [...aots, {"username": username, "email": email}]
            //    localStorage.setItem('aots', JSON.stringify(aots));
             //   localStorage.setItem('userloggedin', username);
             ///   username="";
              //  email=""
                
              //  afterSignup();
                
           // } 
           // else{ document.querySelector(".box-exist").style.display="flex"}

        
    
}