const celsiusE1 = document.getElementById("celsius");
const fahrenheitE1 = document.getElementById("fahrenheit");
const kelvinE1 = document.getElementById("kelvin");

function computeTemp() {
    const currentvalue = +event.target.value;

    
    switch (event.target.name) {
        case "celsius":
            kelvinE1.value = currentvalue + 273.15;
            fahrenheitE1.value = currentvalue * 1.8 + 32;
            break;
        case "fahrenheit":
            celsiusE1.value = (currentvalue - 32) / 1.8;
            kelvinE1.value = (currentvalue - 32) / 1.8 + 273.15;
            break;
        case "kelvin":
            celsiusE1.value = currentvalue - 273.15;
            fahrenheitE1.value = (currentvalue - 273.15) * 32;
            break;

        default:
            break;
    }
}
