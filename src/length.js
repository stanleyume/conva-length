import { standardUnits, validUnits } from './units.js';

function validateUnit(unit){
  if (validUnits.indexOf(unit) > -1)
    return true;
  else
    return false;
}

function length(value, fromUnit, toUnit) {
  if (!validateUnit(fromUnit) || !validateUnit(toUnit))
    return false;

  var baseValue = value * standardUnits[fromUnit];

  return baseValue / standardUnits[toUnit];

}

// console.log( validUnits );
console.log( length('1', "dam", "km") );

export default length;
