type = localStorage.getItem("Type")
if(type == "International"){
    document.getElementById("do").style.display="none";
    document.getElementById("in").style.display="block";
}
else if(type == "Domestic"){
    document.getElementById("in").style.display="none";
    document.getElementById("do").style.display="block";
}