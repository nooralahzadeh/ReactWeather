// function getTempCallback(location,callback){
//   callback(undefined,78);
//   callback('city not found');
//
// }
//
// getTempCallback('Philadelphia',function(err,temp){
//   if(err){
//     console.log('error',err);
//   }else{
//     console.log('success',temp);
//   }
// });
//
// function getTempPromise(location){
//   return new Promise(function(resolve,reject){
//     setTimeout(function(){
//       resolve(79);
//       reject('city not found')
//     },1000);
//   });
// }
//
// getTempPromise('Philadelphia').then(function(temp){
//   console.log('promise sucess',temp);
// }),function(err){
//   console.log('promise error',err);
// }
// challenge Area
function addPromise(a,b){
  return new Promise(function(resolve,reject){
    if(typeof a==='number' && typeof b==='number'){
      resolve(a + b);
    } else {
      reject('Error');
    }
  });
}

addPromise('and',3).then(function(sum){
  console.log('sucess',sum);
  },function(err){
    console.log('promise error',err);
  });
