module.exports = function getLoveTrianglesCount(preferences = []) {

    let firstElement, secondElement, thirdElement;
    let result = 0;

    for (let i = 0; i < preferences.length; i++) {

        firstElement = preferences[i];
        secondElement = preferences[firstElement-1];
        thirdElement = preferences[secondElement-1];

        if ((thirdElement == i+1) && (firstElement < secondElement) && (thirdElement < secondElement))
        {
            result++;
        }
    }

    return result;
};