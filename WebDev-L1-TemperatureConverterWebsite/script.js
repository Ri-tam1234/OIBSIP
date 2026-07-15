function convertTemp(){

    const temp = document.getElementById("temperature").value;

    const unit = document.getElementById("unit").value;

    const output = document.getElementById("output");

    if(temp === ""){

        output.innerHTML = "❌ Please enter a temperature.";

        return;

    }

    let result="";

    let value = parseFloat(temp);

    if(unit==="celsius"){

        let fahrenheit = (value * 9/5) + 32;

        let kelvin = value + 273.15;

        result =
        `${fahrenheit.toFixed(2)} °F <br>
        ${kelvin.toFixed(2)} K`;

    }

    else if(unit==="fahrenheit"){

        let celsius = (value-32)*5/9;

        let kelvin = celsius + 273.15;

        result =
        `${celsius.toFixed(2)} °C <br>
        ${kelvin.toFixed(2)} K`;

    }

    else{

        let celsius = value - 273.15;

        let fahrenheit = (celsius*9/5)+32;

        result =
        `${celsius.toFixed(2)} °C <br>
        ${fahrenheit.toFixed(2)} °F`;

    }

    output.innerHTML=result;

}