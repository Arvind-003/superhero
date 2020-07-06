
(function () {
    let superherolist = document.getElementsByClassName('superhero-list')[0];
    //fetching name of super hero from local storage
    var body = document.getElementsByTagName('body')[0];
    for (let i = 0; i < localStorage.length; i++) 
    {
        var heroname = localStorage.key(i);
        console.log(heroname);
        var herovalue=localStorage.getItem(heroname);
        console.log(herovalue);
        if(heroname=="about")
        {
            continue;
        }


        const listdiv = document.createElement('div');

            listdiv.className = "list";
            //first div has id -id of the superhero,we will use superheros id to go to its about section
            listdiv.innerHTML = `<div class="id" style="display:none">${herovalue}</div>
               
               <div class="info">
                <div class="text name animate__animated animate__bounce" style="font-size:1.5rem ; color:rgb(0, 255, 76); cursor:pointer" >${heroname}</div>
                
                <div class="text animate__animated animate__flip" id="fav"><button class="delete">remove</button></div>

               </div>`;


            superherolist.appendChild(listdiv);
    }
    var container=document.getElementsByClassName('superhero-list')[0];
    container.addEventListener('click',addfav);
            function addfav(e){
                if (e.target.classList.contains("delete")) {
                    //to get name of hero we store name in innerhtml  and stored name in keyvalue variable
                    // var keyvalue=e.target.parentElement.parentElement.children[0].innerHTML;
                    var heroname=e.target.parentElement.parentElement.children[0].innerHTML;
                    e.target.parentElement.parentElement.parentElement.innerHTML="";
                    const key=heroname;
                    // const value=herovalue;
                    console.log(key);
                    // console.log(value);
                    // if(key && value)
                    // {
                    //     localStorage.setItem(key,value);
                    // }
                    localStorage.removeItem(heroname);
                    location.reload();

                    
                    
                }

            }



})();