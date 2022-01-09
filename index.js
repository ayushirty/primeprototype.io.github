// Array.prototype.isPrime= function(n){
//     let isT=true;
//     if(n==1)
//     console.log("1 is neither a prime nor a composite number");
//     if(n>1){
//         for(let i=2;i<n;i++)
//         if(n%1==0)
//         isT=false;
//         break;
//     }
//     if(isT)
//     console.log("n is a prime number");
//     else
//     console.log("n is not a prime number");
// }
Array.prototype.checkPrime = function(){
    for(let i = 0 ; i < this.length ; i++){
    let divisor = Math.floor(this[i] / 2);
        if(this[i] > 1 ){
        let flag = true;
            for(let j = divisor; j > 1; j--) {
                       if(this[i] % j == 0){
                          flag = false;                        
                            break;                          
                        }
              }
                 if(flag)         
                   return true;
         }
  }
    return false;
}
const array1 = [1,2,3,5,4];
console.log(array1.checkPrime());

const array2 = [10,100,55,11,5];
console.log(array2.checkPrime());

const array3 = [-1,0,3];
console.log(array3.checkPrime());