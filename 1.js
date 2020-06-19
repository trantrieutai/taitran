window.onscroll=function(){
    var diemcong = document.getElementById("dc");
    var kc = document.documentElement.scrollTop;
    if (kc > 120) {
        diemcong.style.left="0px";
    }
    else{
        diemcong.style.left="-340px";
    } 
};
const opensearch = function() {
    var input = document.getElementById("1");
        input.style.width = '0px';
        input.style.left = '100px';   
        if (input.classList.contains("hieuunginput")){
            input.classList.remove("hieuunginput")
        } 
        else{
            input.classList.add("hieuunginput")
        }
}