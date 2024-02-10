document.addEventListener("DOMContentLoaded", function() {
    const temperatureInput = document.getElementById("temperature");
    const resultSpan = document.getElementById("result");
    
    document.getElementById("toFahrenheit").addEventListener("click", function() {
        const celsius = parseFloat(temperatureInput.value);
        if (!isNaN(celsius)) {
            const fahrenheit = (celsius * 9/5) + 32;
            resultSpan.textContent = `${celsius}°C is ${fahrenheit.toFixed(2)}°F`;
        } else {
            resultSpan.textContent = "Please enter a valid temperature";
        }
    });
    
    document.getElementById("toCelsius").addEventListener("click", function() {
        const fahrenheit = parseFloat(temperatureInput.value);
        if (!isNaN(fahrenheit)) {
            const celsius = (fahrenheit - 32) * 5/9;
            resultSpan.textContent = `${fahrenheit}°F is ${celsius.toFixed(2)}°C`;
        } else {
            resultSpan.textContent = "Please enter a valid temperature";
        }
    });
});
