

var standardUnits = {
  m: 1,
  fm: Math.pow(10, -15),
  pm: Math.pow(10, -12),
  a: Math.pow(10, -10),
  nm: Math.pow(10, -9),
  um: Math.pow(10, -6),
  mm: Math.pow(10, -3),
  cm: Math.pow(10, -2),
  dm: Math.pow(10, -1),
  dam: Math.pow(10, 1),
  hm: Math.pow(10, 2),
  km: Math.pow(10, 3),
  nmi: 1852,
  in: 0.0254,
  ft: 0.3048,
  yd: 0.9144,
  ftm: 1.8288,
  fth: 1.85, // British Fathom
  mi: 1609.344,
  ld: 384402000,
  au: 149597870700,
  ly: 9460730472580800,
  pc: (648000 / Math.PI) * 149597870700,
  mil: 0.0000254, // Milli-Inch
  ha: 0.1016, // hands
  sp: 0.2286, //span
  miu: 1609.347219, //U.S Survey Mile
  nma: 1853.184, //British Nautical Mile (Admiralty)
  ch: 20.1168, // Chain (22 yards)
  li: 0.201168, // Gunter's Link
  bc: 0.008467, // Barleycorn
  rd: 5.0292, // Rod / Pole / Perch
  fur: 201.168, // Furlong
  pi: 0.004233, // Pica
  pia: 0.004217, // American Pica
  pif: 0.004512, // Cicero / French Pica
  pt: 0.000352778, // Point (PostScript) 1/72 in
  ptp: 0.000352778, // alias: Point (PostScript)
  ptd: 0.000352778, // Point (Didot)
  ptm: 0.000375, // Point (Metric)
  pta: 0.0003514598, // Point (ATA)
  au: 149597870691, // Astronomical Unit (Earth to Sun)
  cho: 109.09, // Cho (Japan)
  chr: 0.30303, // Chr (Taiwan)
  bu: 1.666667, // Bu (China)
  chi: 0.3333333, // Chi (China)
  cun: 0.03333333, // Cun (China)
  fen: 0.003333333, // Fen (China)
  hao: 0.00003333333, // Hao (China)
  hu: 3.333333e-7, // Hu (China)
};

// Array of available units
var validUnits = Object.keys(standardUnits);

export { standardUnits, validUnits };
