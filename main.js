
let rate = 0;
let nper = 6;
let pv = 1000;
let pmt;

rate = rate / 12;

pmt = pv * rate/(1 - (Math.pow(1 + rate, -nper)));
pmt = Number(pmt.toFixed(2));

console.log(pmt);

