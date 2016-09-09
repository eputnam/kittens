/*
  Bookmarklet for Kittens
  Shows trade quality based on the current season.
  Author: Eric Putnam <putnam.eric@gmail.com>
  */

javascript: (function() {

    var raceElements = document.getElementsByClassName('panelContainer');
    var season = document.getElementById('calendarDiv').textContent;


    function statusColor(status){
        var colorHex = "";
        switch(status.toLowerCase()){
        case "highest":
            colorHex = "#1f7a25";
            break;
        case "high":
            colorHex = "#349f3b";
            break;
        case "average":
            colorHex = "#eede51";
            break;
        case "low":
            colorHex = "#4888D8";
            break;
        case "lowest":
            colorHex = "#2f5a90";
            break;
        }
        return colorHex;
    }

    function statusText(status){
        var text = "";
        switch(status.toLowerCase()){
        case "highest":
            text = " - Highest";
            break;
        case "high":
            text = " - High";
            break;
        case "average":
            text = " - Average";
            break;
        case "low":
            text = " - Low";
            break;
        case "lowest":
            text = " - Lowest";
            break;
        }
        return text;
    }

    function setAvailability(raceElement, status){
        raceElement.children[2].children[1].children[0].children[0].setAttribute("style", "background-color:" + statusColor(status));
        raceElement.children[2].children[1].children[0].children[0].innerHTML += statusText(status);
    }


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

})()
