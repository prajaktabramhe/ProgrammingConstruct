function arithmaticOperation(a, b, c){
    let value1 = a + b * c;
    let value2 = a % b + c;
    let value3 = c + a / b;
    let value4 = a * b + c;
    value.push(value1, value2, value3, value4);
    }
    
    let a = 10;
    let b = 20;
    let c = 30;
    let value = [];
    arithmaticOperation(a, b, c);
    let maxValue = value[0];
    let minValue = value[0];
    for (let index = 1; index < value.length; index++){
    if (value[index] < minValue)
    minValue = value[index];
    else if (value[index] > maxValue)
    maxValue = value[index];
    }
    console.log("Array elements : "+value);
    console.log("Maximum value in array : "+maxValue);
    console.log("Minimum value in array : "+minValue);