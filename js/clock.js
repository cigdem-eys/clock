function clock(){


    $("#DivName").addClass("d-none");
    let name=$("#txtName").val();
    
    let gunler=["Pazar","Pazartesi","Salı","Çarşamba","Perşember","Cuma","Cumartesi"];
    //console.log(name);
    $("#Main").removeClass("d-none");
    $("#myName").html(name);
setInterval(function(){
    let tarih=new Date();
    $("#myClock").html(tarih.getHours()+":"+tarih.getMinutes()+":"+tarih.getSeconds()+" "+ gunler[tarih.getDay()]);
},1000)
}