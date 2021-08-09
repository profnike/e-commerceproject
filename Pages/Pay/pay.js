let totalprice=localStorage.getItem("total");

paypal.Buttons({
    style:{
        
    },
    createOrder:function(data,actions){
        return actions.order.create({
            purchase_units:[{
                amount:{
                    value:totalprice
                }
            }]
        });
    },
    onApprove:function(data,actions){
        return actions.order.capture().then(function(details){
            console.log(details)
            window.location.replace("../Success/success.html");
            arrresult=[]
            localStorage.setItem("res",JSON.stringify(arrresult));
        })
    } ,
    onCancel: function (data){
        window.location.replace("../Cancel/cancel.html");
    }
}).render('#paymentbutn');