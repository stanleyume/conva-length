import { standardUnits, validUnits } from './units.js';

function validateUnit(unit){
  if (validUnits.IndexOf(unit))
    return true;
  else
    return false;
}

function convert (value, fromUnit, toUnit) {
  if (!validateUnit(fromUnit) || !validateUnit(toUnit))
    return false;
  var baseValue = value * standardUnits[toUnit];

  return baseValue / standardUnits[toUnit];

}
