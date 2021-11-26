//Euclidean Algorithm for calculating GCD in JavaScript
    
const gcd=(a,b)=>{
    if(b == 0){
        return a;
    }else{
        return gcd(b,a%b);
    }
}

console.log(gcd(600,45));
