function si(){
    name = document.getElementById("name").value;
    localStorage.setItem("User Id",name);
    window.location="index2.html";
}