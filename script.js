function mincost(arr)
{ 
//write your code here
// return the min cost

  arr.sort((a,b)=>a-b);
  let mincost = 0;
  while(arr.length !== 1){
	  let sum = (arr[0]+arr[1]);
	  mincost += sum;
	  arr.shift();
	  arr.shift();
	  arr.push(sum);
	  arr.sort((a,b) => a-b);
  }

 return mincost;
  
}

module.exports=mincost;
