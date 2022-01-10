nam_e= localStorage.getItem("User Id");
document.getElementById("name_dis").innerHTML= "Welcome "+nam_e+" !!!";

function en(){
    type = document.getElementById("type").value;
    localStorage.setItem("Type",type);
    if(type == "Domestic"){
        document.getElementById("in").style.display="none";
        document.getElementById("do").style.display="block";
    }
    else if(type == "International"){
        document.getElementById("do").style.display="none";
        document.getElementById("in").style.display="block";
    }
}
function cf(){
    window.location="index3.html";
}