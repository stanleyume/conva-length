import { standardUnits, validUnits } from './units.js';

export function validateUnit(unit){
  if (validUnits.indexOf(unit) > -1)
    return true;
  else
    return false;
}

var length = (value, fromUnit, toUnit) => {
  if (!validateUnit(fromUnit) || !validateUnit(toUnit))
    return false;

  var baseValue = value * standardUnits[fromUnit];

  return baseValue / standardUnits[toUnit];

}

window.c = {
  length: length,
  validateUnit: validateUnit,
};
