let icon = document.getElementById("icon");
let list = document.getElementById("list");

icon.onclick=function(){
    if(list.classList.contains("show")){
        list.classList.remove("show");
    }else{
        list.className =("show");
    }
    console.log(list.classList.contains("show"))
}
