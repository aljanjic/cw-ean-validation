function validateEAN(ean ='') {

  let eanSum = 0;
  for(let i = 1; i < 13; i++){
    if ( i % 2 !== 0){
      eanSum += parseInt(ean[i-1])
    }else {
      eanSum += parseInt(ean[i-1])*3
    }
  }
  let checksum = eanSum % 10 === 0 ? 0 : 10 - (eanSum % 10)
  let ean12 = ean.slice(0,12)

  return (`${ean12}${checksum}` === ean) || (`${ean12}${checksum}` === ean) 

}

module.exports = validateEAN;
