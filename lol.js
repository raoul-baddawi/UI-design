window.addEventListener('DOMContentLoaded', function() {
        var myArray = document.getElementsByClassName("img");
        for(var d of myArray){
          attach_eventhandler(d);
        }
    });

    function attach_eventhandler(d){
        d.onclick = function(){
            this.style.visibility = "hidden";
            console.log("akal");
        };
    }


function open() {
    let open = document.getElementsByClassName(".sidebar");
    open.classList.toggle("sidebar-2")
}