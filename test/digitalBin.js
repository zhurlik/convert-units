var convert = require('../lib')
  , assert = require('assert')
  , tests = {}
  , ACCURACY = 1/1000
  , percentError = require('../lib/percentError');


tests['b to b'] = function () {
  assert.strictEqual( convert(1).from('ib').to('ib') , 1);
};

tests['Kb to b'] = function () {
  assert.strictEqual( convert(1).from('Kib').to('ib') , 1024);
};

tests['Mb to b'] = function () {
  assert.strictEqual( convert(1).from('Mib').to('ib') , 1048576);
};

tests['Gb to b'] = function () {
  assert.strictEqual( convert(1).from('Gib').to('ib') , 1073741824);
};

tests['Tb to b'] = function () {
  assert.strictEqual( convert(1).from('Tib').to('ib') , 1099511627776);
};

tests['Pb to b'] = function () {
  assert.strictEqual( convert(1).from('Pib').to('ib') , 1125899906842624);
};

tests['Eb to b'] = function () {
  assert.strictEqual( convert(1).from('Eib').to('ib') , 1152921504606846976);
};

tests['Zb to b'] = function () {
  assert.strictEqual( convert(1).from('Zib').to('ib') , 1180591620717411303424);
};

tests['Yb to b'] = function () {
  assert.strictEqual( convert(1).from('Yib').to('ib') , 1208925819614629174706176);
};

tests['B to B'] = function () {
  assert.strictEqual( convert(1).from('iB').to('iB') , 1);
};

tests['KB to B'] = function () {
  assert.strictEqual( convert(1).from('KiB').to('iB') , 1024);
};

tests['MB to B'] = function () {
  assert.strictEqual( convert(1).from('MiB').to('iB') , 1048576);
};

tests['GB to B'] = function () {
  assert.strictEqual( convert(1).from('GiB').to('iB') , 1073741824);
};

tests['TB to B'] = function () {
  assert.strictEqual( convert(1).from('TiB').to('iB') , 1099511627776);
};

tests['PB to B'] = function () {
  assert.strictEqual( convert(1).from('PiB').to('iB') , 1125899906842624);
};

tests['EB to B'] = function () {
  assert.strictEqual( convert(1).from('EiB').to('iB') , 1152921504606846976);
};

tests['ZB to B'] = function () {
  assert.strictEqual( convert(1).from('ZiB').to('iB') , 1180591620717411303424);
};

tests['YB to B'] = function () {
  assert.strictEqual( convert(1).from('YiB').to('iB') , 1208925819614629174706176);
};

// When converting between systems, expect < 0.1% error
tests['B to b'] = function () {
  var expected = 8
    , actual = convert(1).from('iB').to('ib');
  assert.ok( percentError(expected, actual) < ACCURACY
    , 'Expected: ' + expected +', Actual: ' + actual);
};

tests['b to B'] = function () {
  var expected = 0.125
    , actual = convert(1).from('ib').to('iB');
  assert.ok( percentError(expected, actual) < ACCURACY
    , 'Expected: ' + expected +', Actual: ' + actual);
};

module.exports = tests;
