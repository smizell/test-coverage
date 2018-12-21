exports.alwaysTwelve = function (a, b) {
  // If a and b are both true, it returns 12
  // If a and b are both false, it returns 12

  // This gives 100% test coverage, even though there
  // is the glaring issue when a is true and b is false
  // and vice versa.

  let y, z;

  if (a === true) {
    y = 4;
  } else {
    y = 6;
  }

  if (b === true) {
    z = 3;
  } else {
    z = 2;
  }

  return y * z;
}
