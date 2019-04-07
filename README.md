<h1>Conva Length</h1>

---

## Installation

You can use this package by either including a script tag in your HTML or by installing via NodeJS.

#### Browser
Download the single javascript file from [here](https://github.com/stanleyume/conva-length/blob/master/dist/length.js).
Then include in your HTML like so.
```
<script src="length.js"></script>
```

#### NodeJS
```
npm install --save conva-length
```
Import the module into your app.
```
import c from 'conva-length';
```

## Usage
#### ``` c.length(value, from, to) ```
Returns integer in ``to`` units.

#### Example
To convert 32 kilometres to feet.
```
c.length(32, 'km', 'ft')
```
#### Parameters
|Parameter   	|Type   	|Description   	|
|---	|---	|---	|
|``value``   	|Required. Integer   	|Integer to convert from   	|
|``from``   	|Required. String   	|Unit of ``value`` you are converting from   	|
|``to``   	|Required. String   	|Unit you are converting to   	|

#### Methods
##### ``.length(value, from, to)``
Converts value from one unit to another.

##### ``.isUnit(unit)``
Checks if a unit is valid. Returns true or false.

##### ``.validUnits()``
Returns an array of valid units.

## Units
* **``m``** metre
* **``fm``**  femtometre
* **``pm``**  picometre
* **``a``**  angström
* **``nm``**  nanometre
* **``um``**  micrometre
* **``mm``**  millimetre
* **``cm``**  centimetre
* **``dm``**  decimetre
* **``dam``** decametre
* **``hm``**  hectometre
* **``km``**  kilometre
* **``nmi``** nautical mile
* **``ft``**  foot
* **``in``**  inch
* **``yd``**  yard
* **``ftm``**  fathom
* **``fth``**  British fathom
* **``mi``**  mile
* **``ld``**  lunar distance
* **``au``**  astronomical unit
* **``ly``**  light year
* **``pc``** parsec
* **``mil``** Milli-Inch
* **``ha``** Hands
* **``sp``** Span
* **``miu``** U.S. Survey Mile
* **``nma``** British Nautical Mile (Admiralty)
* **``ch``** Chain (22 yards)
* **``li``** Gunter's Link
* **``bc``** Barleycorn
* **``rd``** Rod / Pole / Perch
* **``fur``** Furlong
* **``pi``** Pica
* **``pia``** American Pica
* **``pif``** Cicero / French Pica
* **``pt``** Point (PostScript)
* **``ptp``** alias: Point (PostScript)
* **``ptd``** Point (Didot)
* **``ptm``** Point (Metric)
* **``pta``** Point (ATA)
* **``au``** Astronomical Unit (Earth to Sun)
* **``cho``** Cho (Japan)
* **``chr``** Chr (Taiwan)
* **``bu``** Bu (China)
* **``chi``** Chi (China)
* **``cun``** Cun (China)
* **``fen``** Fen (China)
* **``hao``** Hao (China)
* **``hu``** Hu (China)
