const form = document.querySelector('form')

form.addEventListener('submit', function(sam) {
    sam.preventDefault() // to prevent the default submission
    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')

    if (height == '' || height < 0 || isNaN(height)) {
        results.innerHTML = "Please give a valid number"
    }
    else if (weight == '' || weight < 0 || isNaN(weight)) {
        results.innerHTML = "Please give a valid number"
    }
    else {
        const bmi = (weight / ((height*height)/10000)).toFixed(2);
        let range
        if (bmi > 24.9) {
            range = "Overweight";
        }
        else if (bmi < 18.6) {
            range = "Under Weight";
        }
        else {
            range = "Normal Range";
        }
        results.innerHTML = `${bmi} - ${range}`;
    }
});