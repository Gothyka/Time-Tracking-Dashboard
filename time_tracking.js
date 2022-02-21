const daily = document.getElementById("daily");
const weekly = document.getElementById("weekly");
const monthly = document.getElementById("monthly");
const actualHours = document.getElementsByClassName("activityHours");
const previousHours = document.getElementsByClassName("spanPreviousTime");


let json = fetch('./data.json')
    .then((response) => response.json())
    .then((responseJSON) => {

        console.log(responseJSON);
        console.log(responseJSON[0]);

        function dailyHours() {

            let arrayCurrent = [];
            let arrayPrevious = [];

            for (let i = 0; i < responseJSON.length; i++) {

                arrayCurrent.push(responseJSON[i].timeframes.daily.current);
                arrayPrevious.push(responseJSON[i].timeframes.daily.previous);

            }

            let curentValue = 0;
            let previousValue = 0;

            for (const hour of actualHours) {
                hour.innerText = arrayCurrent[curentValue] + "hrs";
                curentValue++;
            }

            for (const hour of previousHours) {
                hour.innerText = "Previous - " + arrayPrevious[previousValue] + "hrs";
                previousValue++;
            }

        }

        function weeklyHours() {

            let arrayCurrent = [];
            let arrayPrevious = [];

            for (let i = 0; i < responseJSON.length; i++) {

                arrayCurrent.push(responseJSON[i].timeframes.weekly.current);
                arrayPrevious.push(responseJSON[i].timeframes.weekly.previous);

            }

            let curentValue = 0;
            let previousValue = 0;

            for (const hour of actualHours) {
                hour.innerText = arrayCurrent[curentValue] + "hrs";
                curentValue++;
            }

            for (const hour of previousHours) {
                hour.innerText = "Previous - " + arrayPrevious[previousValue] + "hrs";
                previousValue++;
            }

        }

        function monthlyHours() {

            let arrayCurrent = [];
            let arrayPrevious = [];

            for (let i = 0; i < responseJSON.length; i++) {

                arrayCurrent.push(responseJSON[i].timeframes.monthly.current);
                arrayPrevious.push(responseJSON[i].timeframes.monthly.previous);

            }

            let curentValue = 0;
            let previousValue = 0;

            for (const hour of actualHours) {
                hour.innerText = arrayCurrent[curentValue] + "hrs";
                curentValue++;
            }

            for (const hour of previousHours) {
                hour.innerText = "Previous - " + arrayPrevious[previousValue] + "hrs";
                previousValue++;
            }

        }

        daily.addEventListener("click", function () {

            daily.style.color = "white";
            weekly.style.color = "hsl(235, 45%, 61%)";
            monthly.style.color = "hsl(235, 45%, 61%)";
            dailyHours();

        });

        weekly.addEventListener("click", function () {

            daily.style.color = "hsl(235, 45%, 61%)";
            weekly.style.color = "white";
            monthly.style.color = "hsl(235, 45%, 61%)";
            weeklyHours();

        });

        monthly.addEventListener("click", function () {

            daily.style.color = "hsl(235, 45%, 61%)";
            weekly.style.color = "hsl(235, 45%, 61%)";
            monthly.style.color = "white";
            monthlyHours();

        });

    });







