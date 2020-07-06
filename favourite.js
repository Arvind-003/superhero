
(function () {
    let superherolist = document.getElementsByClassName('superhero-list')[0];
    //fetching name of super hero from local storage and adding them to the favourite list
    var body = document.getElementsByTagName('body')[0];
    for (let i = 0; i < localStorage.length; i++) {
        var heroname = localStorage.key(i);
        console.log(heroname);
        var herovalue = localStorage.getItem(heroname);
        console.log(herovalue);
        //this if  represents the hero name which we will travel to know about that
        if (heroname == "about") {
            continue;
        }


        const listdiv = document.createElement('div');

        listdiv.className = "list";

        listdiv.innerHTML = `<div class="id" style="display:none">${herovalue}</div>
               
               <div class="info">
                <div class="text name animate__animated animate__bounce" style="font-size:1.5rem ; color:rgb(0, 255, 76); cursor:pointer" >${heroname}</div>
                
                <div class="text animate__animated animate__flip" id="fav"><button class="delete">remove</button></div>

               </div>`;


        superherolist.appendChild(listdiv);
    }

    // delete our favourite superhero to favourite list
    var container = document.getElementsByClassName('superhero-list')[0];
    container.addEventListener('click', delfav);

    function delfav(e) {

        if (e.target.classList.contains("delete")) {
            var heroname = e.target.parentElement.parentElement.children[0].innerHTML;
            e.target.parentElement.parentElement.parentElement.innerHTML = "";
            const key = heroname;
            // const value=herovalue;
            console.log(key);

            localStorage.removeItem(heroname);
            location.reload();



        }

    }



})();