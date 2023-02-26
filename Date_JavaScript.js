// a (not very efficient) oneliner
let yesterday = new Date(new Date().setDate(new Date().getDate()-1));
console.log(`Yesterday (oneliner)\n${yesterday}`);

// a function call
yesterday = ( function(){this.setDate(this.getDate()-1); return this} )
            .call(new Date);
console.log(`Yesterday (function call)\n${yesterday}`);

// an iife (immediately invoked function expression)
yesterday = function(d){ d.setDate(d.getDate()-1); return d}(new Date);
console.log(`Yesterday (iife)\n${yesterday}`);

// oneliner using es6 arrow function
yesterday = ( d => new Date(d.setDate(d.getDate()-1)) )(new Date);
console.log(`Yesterday (es6 arrow iife)\n${yesterday}`);

// use a method
const getYesterday = (dateOnly = false) => {
  let d = new Date();
  d.setDate(d.getDate() - 1);
  return dateOnly ? new Date(d).toDateString() : d;
};
console.log(`Yesterday (method)\n${getYesterday()}`);
console.log(`Yesterday (method dateOnly=true)\n${getYesterday(true)}`);

// use Date.now
console.log(`Yesterday, using Date.now\n${new Date(Date.now() - 864e5)}`);
