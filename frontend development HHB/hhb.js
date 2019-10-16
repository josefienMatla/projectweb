




function myfuntion(){
    document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event){
    if (!event.target.matches('.dropdown2')){
        var dropdowns = document.getElementByClassname('dropdown-inhoud');

        for (var i =0; i< dropdown.lenght; i++){
            var openDropdown = dropdown [i];
            if (openDropdown.classlist.contains('show')){
                openDropdown.Classlist.remove('show');
            }
        }
    }
}


