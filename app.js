let arry = [1,2,3,4,5,6,7,8,9];
function frac(arr,size){
  let result = [];
  let index = 0;
  let placeholder = '';
  arr.reverse();
  while(index < arr.length){
    result.push(arr.slice(index, index+size).join(''));
    index = index+size;
  }
  let answer = result.join();
  console.log(answer);
 for (let letter of answer){
   placeholder = letter + placeholder;
 }
  console.log(placeholder);
}
let size = 3;
frac(arry,size);