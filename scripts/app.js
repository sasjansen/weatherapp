var app = new Vue({
    el: '.maincontainer',
    data: {
        list: [],
        arrayOfCities: []
    },
    created() {
//bbox bounding box [lon-left,lat-bottom,lon-right,lat-top,zoom]
        fetch('http://api.openweathermap.org/data/2.5/box/city?bbox=-5,30,15,85,10&APPID=7feade32f6a4a73967162de46cf2b8e1')
        //        fetch('http://api.openweathermap.org/data/2.5/box/city?bbox=45,-68,15,37,10&APPID=7feade32f6a4a73967162de46cf2b8e1')
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
//            console.log(this.arrayOfCities);
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
//                   console.log(i);
//                   console.log(this.list[i].name);                 
//                   console.log(clouds);                   
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
//                 console.log(this.list[i].snow);
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

console.log(app);


///////////////////////version2
//
//var app = new Vue({
//    el: '.maincontainer',
//    data: {
//        list: [],
//        arrayOfCities: []
//    },
//    created() {
//        //       fetch('http://api.openweathermap.org/data/2.5/box/city?bbox=40,47,15,37,10&APPID=7feade32f6a4a73967162de46cf2b8e1')
//        fetch('http://api.openweathermap.org/data/2.5/box/city?bbox=45,-68,15,37,10&APPID=7feade32f6a4a73967162de46cf2b8e1')
//            .then(response => response.json())
//            .then(json => {
//                this.list = json.list
//                console.log(this.list);
//            })
//    },
//    methods: {
//        showCities: function (weathertype) {
//            this.arrayOfCities = []; 
//
//
//
//            
//            
//            for (var i = 0; i < this.list.length; i++) {
//                
//            var main = this.list[i].weather[0].main
//            if(this.list[i].clouds.today){
//            var clouds = this.list[i].clouds.today;
//            }else{
//            var clouds = "0";    
//            }
////            console.log(clouds)
//            //[""0""].clouds.today
//            var snow = this.list[i].weather[0].snow
//            var description = this.list[i].weather[0].description
//            var rain = this.list[i].weather[0].rain
//            if (weathertype === "Thunderstorm"){  
////            if ((weathertype === "Thunderstorm")&&(main=== weathertype)){  
////                            if (main === weathertype) {    
//                if (main === "eathertype") {
//                    this.arrayOfCities.push(this.list[i].name);
//            } else{
//                this.arrayOfCities.push("There are no cities with this weather");
//            }
//            }
//            else if (weathertype === "clouds"){
////               if (clouds && clouds !== "0") {
//               if (clouds !== "0") {
////                   console.log(i);
////                   console.log(this.list[i].name);                   
////                   console.log(clouds);
//                    this.arrayOfCities.push(this.list[i].name);
//                   clouds = 0;
//                }                
//            }
//            else if (weathertype === "snow"){
//                 console.log(snow);
//                if (snow !== null) {
//                    this.arrayOfCities.push(this.list[i].name);
//                }               
//            }
//            else if (weathertype === "clear sky"){
//                if (description === weathertype) {
//                    this.arrayOfCities.push(this.list[i].name);
//                } 
//            }
//            else if (weathertype === "rain"){
//                if (rain !== null) {
//                    this.arrayOfCities.push(this.list[i].name);
//                }               
//            }
//            else{
////            if(this.arrayOfCities.length===0){
//                this.arrayOfCities.push("There are no cities with this weather");
////                }
//            }
//            }
//            console.log(this.arrayOfCities)
//        }
//    }
//})
//
//console.log(app);
//
//
///////////////////////version1
//
//var app = new Vue({
//    el: '.maincontainer',
//    data: {
//        list: [],
//        arrayOfCities: []
//    },
//    created() {
//        //       fetch('http://api.openweathermap.org/data/2.5/box/city?bbox=40,47,15,37,10&APPID=7feade32f6a4a73967162de46cf2b8e1')
//        fetch('http://api.openweathermap.org/data/2.5/box/city?bbox=45,-68,15,37,10&APPID=7feade32f6a4a73967162de46cf2b8e1')
//            .then(response => response.json())
//            .then(json => {
//                this.list = json.list
//                console.log(json.list);
//            })
//    },
//    methods: {
//        showCities: function (weathertype) {
//            for (var i = 0; i < this.list.length; i++) {
//            if (weathertype === "Thunderstorm"){
//            var main = this.list[i].weather[0].main
////            this.arrayOfCities = []; 
//                if (main === weathertype) {
////                if (main === "eathertype") {
//                    this.arrayOfCities.push(this.list[i].name);
//                } 
//            }
//            if (weathertype === "clouds"){
//                var clouds = this.list[i].weather[0].clouds
////                this.arrayOfCities = []; 
//               if (clouds !== 0) {
//                    this.arrayOfCities.push(this.list[i].name);
//                } else {
//                }                
//            }
//            if (weathertype === "snow"){
//                 var snow = this.list[i].weather[0].snow
////                 this.arrayOfCities = []; 
//                 console.log(snow);
//                if (snow !== null) {
//                    this.arrayOfCities.push(this.list[i].name);
//                } else {
//                }               
//            }
//            if (weathertype === "clear sky"){
//                var description = this.list[i].weather[0].description
////                this.arrayOfCities = []; 
//                if (description === weathertype) {
//                    this.arrayOfCities.push(this.list[i].name);
//                } else {
//                }
//            }
//            if (weathertype === "rain"){
//                 var rain = this.list[i].weather[0].rain
////                 this.arrayOfCities = []; 
//                if (rain !== null) {
//                    this.arrayOfCities.push(this.list[i].name);
//                } else {
//                }               
//            }
//            }
////            if(this.arrayOfCities.length===0){
////                this.arrayOfCities.push("There are no cities with this weather");
////                }
//            console.log(this.arrayOfCities)
//        }
//    }
//})
//
//console.log(app);



// https://samples.openweathermap.org/data/2.5/box/city?bbox=12,32,15,37,10&appid=b6907d289e10d714a6e88b30761fae22
