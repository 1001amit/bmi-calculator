document.getElementById('bmi-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const height = parseFloat(document.getElementById('height').value) / 100;
    const weight = parseFloat(document.getElementById('weight').value);

    if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
        document.getElementById('result').textContent = "Please enter valid values for height and weight.";
        return;
    }

    const bmi = weight / (height * height);
    const bmiRounded = bmi.toFixed(2);

    let resultMessage = `Your BMI is ${bmiRounded}. `;

    if (bmi < 18.5) {
        resultMessage += "You are underweight.";
    } else if (bmi < 24.9) {
        resultMessage += "You are normal weight.";
    } else if (bmi < 29.9) {
        resultMessage += "You are overweight.";
    } else {
        resultMessage += "You are obese.";
    }

    document.getElementById('result').textContent = resultMessage;
});

