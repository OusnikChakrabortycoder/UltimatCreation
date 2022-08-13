function Givename(){
   name= document.getElementById("text").value ;
   localStorage.setItem("name", name) ;
   window.location= "nextpage.html" ;
}