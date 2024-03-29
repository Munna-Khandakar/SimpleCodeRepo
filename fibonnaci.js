// function fibonnaci for printing upto n using loop
function FibonacciByLoop(n) {
  let firstTerm = 0;
  let secondTerm = 1;
  let thirdTerm = firstTerm + secondTerm;
  for (let i = 3; i <= n; i++) {
    console.log(thirdTerm);
    firstTerm = secondTerm;
    secondTerm = thirdTerm;
    thirdTerm = firstTerm + secondTerm;
  }
}

// function fibonnaci for printing upto n using map
function FibonacciByMap(n) {
  const cache = {
    0: 0,
    1: 1
  }
  for (let i = 0; i < n; i++) {
    if(cache[i] !== undefined){
        console.log(cache[i]);
    }else{
        cache[i] = cache[i - 2] + cache[i - 1];
        console.log(cache[i]);
    }
  }
}


// function fibonnaci for printing upto n using recursion
const FibonacciByRecursion = (n)=>{
  if(n===0) return 0;
  if(n === 1) return 1;
  return FibonacciByRecursion(n-1)+FibonacciByRecursion(n-2);
}



const a = FibonacciByRecursion(8);
console.log(a)
FibonacciByLoop(9)
FibonacciByMap(9)
