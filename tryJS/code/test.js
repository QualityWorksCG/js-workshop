const myArray2 = ['Hello from QW', 'Hello from another land', 'QW says hello']

function mapByWordsWithQW(value) {
    let newValue = value
    if(value.includes('QW')) {
        newValue = value.replace('QW', 'QualityWorks')
    }
    return newValue
}

const mappedList = myArray2.map(mapByWordsWithQW);
console.log(mappedList);
console.log(myArray2);