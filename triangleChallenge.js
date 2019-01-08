/**
 * This is the main function with array of integer input
 */
function triangleChallenge(strArr) {
    if (!validateInputs(strArr)) {
        return "Inputs are not valid. Please insert three positive integer.";
    } else if(!isTriangle(strArr)) {
        return "Inputs are not valid for a triangle."
    } else {
        if (detectTriangle(strArr) === 1) {
            return "This is a isosceles Triangle.";
        } else if (detectTriangle(strArr) === 2) {
            return "This is a equilateral Triangle.";
        } else {
            return "This is a scalene Triangle.";
        }
    }
}

/**
 * This function will detect numbers are valid for an triangle
 * input is a array of integer
 */
function isTriangle(arr) {
    let a = arr[0];
    let b = arr[1];
    let c = arr[2];
    
    if(a + b <= c || a + c <= b || b + c <= a) {
        return false;
    } else {
        return true;
    }
}

/**
 * This function will validate input numbers
 * input is a array of integer
 */
function validateInputs(arr) {
    invalidNum = arr.filter(function(element){
        return (element < 1 || isNaN(element));
    });
    if (invalidNum.length > 0 || arr.length < 3) {
        return false;
    } else {     
        return true;
    }
}

/**
 * This function will detect triangle type
 * input is a array of integer
 */
function detectTriangle(arr) {
    let finalResult = [...new Set(arr)]; //Distinct array numbers to detect how many equal numbers are in array
    return finalResult.length;
}

module.exports.detectTriangle = detectTriangle;
module.exports.validateInputs = validateInputs;
module.exports.isTriangle = isTriangle;
module.exports.triangleChallenge = triangleChallenge;
