function validateEAN(ean ='') {

// Loop through the numbers
// Multiply them whith 1 for odd and 3 with even position
// Sum all the numbers
// 9783815820865

// If this sum is dividable by 10, the checksum is 0. Otherwise the checksum has the following formula:
// checksum = 10 - (sum mod 10)

let eanSum = 0;
for(let i = 1; i < 13; i++){
  console.log
  if ( i % 2 !== 0){
    eanSum += ean[i-1]
    console.log('Odd number ean[i]: ', ean[i-1], 'i: ', i-1)
  }else {
    eanSum += ean[i]*3
    console.log('Eveb number: ', ean[i-1]*3, 'i: ', i-1)
  }
}
// Finish last part
// if (eanSum % 10 === 0) retur

return true;

}

module.exports = validateEAN;
