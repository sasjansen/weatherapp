var app = new Vue({
    el: '.maincontainer',
    data: {
        list: [],
        arrayOfCities: []
    },
    created() {
        fetch('https://api.openweathermap.org/data/2.5/box/city?bbox=-5,30,15,85,10&APPID=7feade32f6a4a73967162de46cf2b8e1')
            .then(response => response.json())
            .then(json => {
                this.list = json.list
                console.log(this.list);
            })
    },
    methods: {
        showCities: function (weathertype) {
            this.arrayOfCities = []; 
        
            if (weathertype === "Thunderstorm"){  
            for (var i = 0; i < this.list.length; i++) {
            if (this.list[i].weather[0].main === weathertype) {        
            this.arrayOfCities.push(this.list[i].name);
                } 
            }
            if (this.arrayOfCities.length===0){
            this.arrayOfCities.push("There are no cities with this weather");    
                }
            }
            
            else if (weathertype === "clouds"){
            for (var i = 0; i < this.list.length; i++) {
            if(this.list[i].clouds.today){
            var clouds = this.list[i].clouds.today;
            }else{
            var clouds = "0";    
            }
               if (clouds > "50") {
                    this.arrayOfCities.push(this.list[i].name);
                    clouds = "0";
                    }                
                }                
           if (this.arrayOfCities.length===0){
            this.arrayOfCities.push("There are no cities with this weather");    
                }
            }
            
            else if (weathertype === "snow"){
            for (var i = 0; i < this.list.length; i++) {
                if (this.list[i].snow !== null) {
                    this.arrayOfCities.push(this.list[i].name);
                    }               
                }
              if (this.arrayOfCities.length===0){
            this.arrayOfCities.push("There are no cities with this weather");    
                }             
            }
            else if (weathertype === "clear sky"){
            for (var i = 0; i < this.list.length; i++) {
             if (this.list[i].weather[0].description === weathertype) {
                    this.arrayOfCities.push(this.list[i].name);
                } 
            }
            if (this.arrayOfCities.length===0){
            this.arrayOfCities.push("There are no cities with this weather");    
                }       
            }
            
            else if (weathertype === "rain"){
            for (var i = 0; i < this.list.length; i++) {
                if (this.list[i].rain !== null) {
                    this.arrayOfCities.push(this.list[i].name);
                }
            }
            if (this.arrayOfCities.length===0){
            this.arrayOfCities.push("There are no cities with this weather");    
                }      
            }
            this.arrayOfCities.sort();
            
        }
    }
})
