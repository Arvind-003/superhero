(function () {
    //fetching name of super hero from local storage
    var body=document.getElementsByTagName('body')[0];
    var heroname=localStorage.getItem("about");
    console.log(heroname);
    //initialising the request
    var xhr=new XMLHttpRequest();
    var idurl='https://www.superheroapi.com/api.php/1717995188354868/search/' +heroname;
    xhr.open('GET',idurl,true);
    xhr.onload=function(){
        console.log(xhr.response);
        var response=JSON.parse(xhr.response);
        console.log(response);

        const aboutdiv = document.createElement('div');
                
        aboutdiv.className = "about";
       
        aboutdiv.innerHTML = ` <div class="image"><img src="${response.results[0].image.url}" alt="superhero"></div>
        <div class="basicinfo">
            <div class="name">${response.results[0].name}</div>
            <div class="biography">
                <div class="biographypart">Biography : </div>
                <div class="biographyinfo">
                    <p>Full name : <span>${response.results[0].biography['full-name']}</span></p>
                    <p>Aliases : <span>${response.results[0].biography.aliases[0]}</span></p>
                    
                    <p>Publisher : <span>${response.results[0].biography.publisher}</span></p>
                    <p>Alignment : <span>${response.results[0].biography.alignment}</span></p>
                </div>
            </div>
            <div class="biography">
                <div class="biographypart">Appearance : </div>
                <div class="biographyinfo">
                    <p>Gender : <span>${response.results[0].appearance.gender}</span></p>
                    <p>Race : <span>${response.results[0].appearance.race}</span></p>
                    <p>Weight : <span>${response.results[0].appearance.weight[0]}</span></p>
                    
                    <p>Height : <span>${response.results[0].appearance.height[0]}</span></p>
                </div>
            </div>
            <div class="biography">
                <div class="biographypart">Work : </div>
                <div class="biographyinfo">
                    <p>Occupation : <span>${response.results[0].work.occupation}</span></p>
                    <p>Base : <span>${response.results[0].work.base}</span></p>
                </div>
            </div>
            <div class="biography">
                <div class="biographypart">Powerstats : </div>
                <div class="biographyinfo">
                    <p>Combat : <span>${response.results[0].powerstats.combat}</span></p>
                    <p>Durability : <span>${response.results[0].powerstats.durability}</span></p>
                    <p>intelligence : <span>${response.results[0].powerstats.intelligence}</span></p>
                    <p>Power : <span>${response.results[0].powerstats.power}</span></p>
                    <p>Speed : <span>${response.results[0].powerstats.speed}</span></p>
                    <p>strength : <span>${response.results[0].powerstats.strength}</span></p>
                   
                </div>
            </div>
            <div class="biography">
                <div class="biographypart">Connections: </div>
                <div class="biographyinfo">
                    <p>Group affiliation : <span>${response.results[0].connections['group-affiliation']}</span></p>
                </div>
            </div>
        </div>`;

   
       body.appendChild(aboutdiv);



    }
    
    xhr.send();
    
    

    
})();