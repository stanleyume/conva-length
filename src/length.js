import { standardUnits, validUnits } from './units.js';

export function isUnit(unit){
  if (validUnits.indexOf(unit) > -1)
    return true;
  else
    return false;
}

var length = (value, fromUnit, toUnit) => {
  if (!isUnit(fromUnit) || !isUnit(toUnit))
    return false;

  var baseValue = value * standardUnits[fromUnit];

  return baseValue / standardUnits[toUnit];

}

window.c = {
  length: length,
  isUnit: isUnit,
  validUnits: ()=>{ return validUnits },
};

export default c;
