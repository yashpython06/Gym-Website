function calculateBMI() {

    let weight = parseFloat(
        document.getElementById("weight").value
    );

    let height = parseFloat(
        document.getElementById("height").value
    );

    let result = document.getElementById("bmi-result");

    if (!weight || !height || weight <= 0 || height <= 0) {

        result.innerText = "Please enter valid values.";

        return;
    }

    let heightInMeter = height / 100;

    let bmi = weight / (heightInMeter * heightInMeter);

    bmi = bmi.toFixed(1);

    let category;

    if (bmi < 18.5) {
        category = "Underweight";
    }
    else if (bmi < 25) {
        category = "Normal range";
    }
    else if (bmi < 30) {
        category = "Overweight";
    }
    else {
        category = "Obesity range";
    }

    result.innerText =
        "Your BMI is " + bmi + " — " + category;
}