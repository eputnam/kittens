/*
  Bookmarklet for Kittens
  Shows trade quality based on the current season.
  Author: Eric Putnam <putnam.eric@gmail.com>
  */


    var raceElements = document.getElementsByClassName('panelContainer');
    var season = document.getElementById('calendarDiv').textContent;

    var colorHighest = "#00cc00";
    var colorHigh = "#009900";
    var colorAverage = "#006600";
    var colorLow = "#003300";
    var colorLowest = "#001a00";

    function statusColor(status){
        var colorHex = "";
        switch(status.toLowerCase()){
        case "highest":
            colorHex = colorHighest;
            break;
        case "high":
            colorHex = colorHigh;
            break;
        case "average":
            colorHex = colorAverage;
            break;
        case "low":
            colorHex = colorLow;
            break;
        case "lowest":
            colorHex = colorLowest;
            break;
        }
        return colorHex;
    }

    function setAvailability(raceElement, status){
        raceElement.children[2].children[1].children[0].children[0].setAttribute("style", "background-color:" + statusColor(status));
    }

    var statusBar = ' <style> .statusKeyItem {font-family: sans-serif; font-size: 14px; text-shadow: 1px 1px 0 #444; display: inline-block; height: 20px; width: 75px; border: solid #DE8D47 1px; border-radius:3px; text-align:center;} </style> <div id="statusKey" style="height:50px; display:block;"> <div class="statusKeyItem" style="background-color:' + colorHighest + '">Highest</div> <div class="statusKeyItem" style="background-color:' + colorHigh + '">High</div> <div class="statusKeyItem" style="background-color:' + colorAverage + '">Average</div> <div class="statusKeyItem" style="background-color:' + colorLow + '">Low</div> <div class="statusKeyItem" style="background-color:' + colorLowest + '">Lowest</div></div>';


$('.tabsContainer a:nth-child(9)').click(function(){
    
    $('<div id="placeholder"></div>').insertBefore('.expandAllBar');
    document.getElementById("placeholder").innerHTML = statusBar;


    if(season.includes("Autumn")){
        for(i = 0; i < raceElements.length; i++){
            var race = raceElements[i].children[1].textContent;
            if(race.includes("Lizards")){
                setAvailability(raceElements[i], "high");
            } else if(race.includes("Sharks")){
                setAvailability(raceElements[i], "low");
            } else if(race.includes("Griffins")){
                setAvailability(raceElements[i], "highest");
            } else if(race.includes("Nagas")){
                setAvailability(raceElements[i], "lowest");
            } else if(race.includes("Zebras")){
                setAvailability(raceElements[i], "lowest");
            } else if(race.includes("Spiders")){
                setAvailability(raceElements[i], "highest");
            }
        }
    } else if(season.includes("Winter")){
        for(i = 0; i < raceElements.length; i++){
            var race = raceElements[i].children[1].textContent;
            if(race.includes("Lizards")){
                setAvailability(raceElements[i], "low");
            } else if(race.includes("Sharks")){
                setAvailability(raceElements[i], "highest");
            } else if(race.includes("Griffins")){
                setAvailability(raceElements[i], "low");
            } else if(race.includes("Nagas")){
                setAvailability(raceElements[i], "low");
            } else if(race.includes("Zebras")){
                setAvailability(raceElements[i], "lowest");
            } else if(race.includes("Spiders")){
                setAvailability(raceElements[i], "lowest");
            }
        }
    } else if(season.includes("Spring")){
        for(i = 0; i < raceElements.length; i++){
            var race = raceElements[i].children[1].textContent;
            if(race.includes("Lizards")){
                setAvailability(raceElements[i], "lowest");
            } else if(race.includes("Sharks")){
                setAvailability(raceElements[i], "high");
            } else if(race.includes("Griffins")){
                setAvailability(raceElements[i], "lowest");
            } else if(race.includes("Nagas")){
                setAvailability(raceElements[i], "highest");
            } else if(race.includes("Zebras")){
                setAvailability(raceElements[i], "high");
            } else if(race.includes("Spiders")){
                setAvailability(raceElements[i], "low");
            }
        }
    } else if(season.includes("Summer")){
        for(i = 0; i < raceElements.length; i++){
            var race = raceElements[i].children[1].textContent;
            if(race.includes("Lizards")){
                setAvailability(raceElements[i], "highest");
            } else if(race.includes("Sharks")){
                setAvailability(raceElements[i], "lowest");
            } else if(race.includes("Griffins")){
                setAvailability(raceElements[i], "high");
            } else if(race.includes("Nagas")){
                setAvailability(raceElements[i], "high");
            } else if(race.includes("Zebras")){
                setAvailability(raceElements[i], "highest");
            } else if(race.includes("Spiders")){
                setAvailability(raceElements[i], "high");
            }
        }
    }

})

