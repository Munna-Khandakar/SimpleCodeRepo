let arr = [1,2,3,4,5,6,7,8,9]
let result = 0;

for(let i=0;i<arr.length;i++){
  if(Math.sqrt(arr[i]) % 1 === 0){
    result = result + arr[i];
  }
}

console.log(result);
