// api https://www.superheroapi.com/api.php/1717995188354868/search/a


(function () {
    let superherolist = document.getElementsByClassName('superhero-list')[0];
    let inputkeypress = document.getElementsByTagName('input')[0];
    
    function requestinitialise() 
    {
        //request to server initialised
        var xhr = new XMLHttpRequest();
        var name = inputkeypress.value;
        
        //accesing from name 
        var url = 'https://www.superheroapi.com/api.php/1717995188354868/search/' + name;
        xhr.open('GET', url, true);
        xhr.onprogress = function () {
            document.getElementsByClassName('progress')[0].innerHTML = "Loding........";
            console.log('loading');

        }
        function addlist() {
            //convert the string response to object response ,so that we can traverse easily
            var response = JSON.parse(xhr.response);
            //result is key of response object
            var size = response.results.length;
            console.log(size);
            //iterate through all the elements of response object
            for (var i = 0; i < size; i++) {
                const listdiv = document.createElement('div');
                
                listdiv.className = "list";
                //first div has id -id of the superhero,we will use superheros id to go to its about section
                listdiv.innerHTML = `<div class="id" style="display:none">${response.results[i].id}</div>
                <div class="photo">
                <img src="${response.results[i].image.url}" alt="">
                </div>
               <div class="info">
                <div class="text name animate__animated animate__bounce" style="font-size:1.5rem ; color:rgb(0, 255, 76); cursor:pointer" id="${response.results[i].id}">${response.results[i].name}</div>
                <div class="text" id="strength">Strength:${response.results[i].powerstats.strength}</div>
                <div class="text" id="publisher">publisher:${response.results[i].biography.publisher}</div>
                <div class="text animate__animated animate__flip" id="fav"><button class="fav">add fav</button></div>

               </div>`;

           
               superherolist.appendChild(listdiv);
                // console.log(listdiv);

                
                
            }

        }
        xhr.onload = function () {
            //whenever we seach other heros ,previous search should be clear
            document.getElementsByClassName('progress')[0].innerHTML = "";
            addlist();

            //to go to description page of individual heroes we used target method and store the id of hero in local storage
            var container=document.getElementsByClassName('superhero-list')[0];
            // var arr=[];
            container.addEventListener('click',about);
            function about(e){
                if (e.target.classList.contains("name")) {
                    //to get name of hero we store name in innerhtml  and stored name in keyvalue variable
                    // var keyvalue=e.target.parentElement.parentElement.children[0].innerHTML;
                    var keyvalue=e.target.innerHTML;
                    console.log(keyvalue);

                    localStorage.setItem('about', keyvalue);
                    //to go to description page
                     window.location.assign('./about.html');
                }

            }

            
            
            container.addEventListener('click',addfav);
            function addfav(e){
                if (e.target.classList.contains("fav")) {
                    
                    //wheneever we click on add fav button the super hero added to the favourite list
                    var heroname=e.target.parentElement.parentElement.children[0].innerHTML;
                    var herovalue=e.target.parentElement.parentElement.parentElement.children[0].innerHTML;
                    const key=heroname;
                    const value=herovalue;
                    console.log(key);
                    console.log(value);
                    if(key && value)
                    {
                        localStorage.setItem(key,value);
                    }

                    e.target.className="favhero";
                    

                    
                    
                }

            }

            
        };
        xhr.send();
    }

    function search() {
        var remove = document.getElementsByClassName('superhero-list')[0];
        remove.innerHTML = "";

        requestinitialise();
    }
    function initialise() {

        inputkeypress.addEventListener('keyup', search);
    }

    initialise();
})();