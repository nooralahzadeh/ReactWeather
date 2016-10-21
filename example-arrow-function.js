var names=['Andrew', 'Farhad','Shayan'];
// names.forEach(function(name){
//   console.log('forEach',name);
// });
//
// names.forEach((name) => {
//   console.log('arrowFunc',name);
// });
//
// names.forEach((name)=>console.log('arrowFunc',name));

// var returnMe=(name)=> name+ '!';
// console.log(returnMe('Farhad'));

// var person={
//   name:'Farhad',
//   greet: function(){
//     names.forEach((name) =>{
//     console.log(this.name +' Says hi to' + name)
//   });
// }
// };
// person.greet();

function addStatement(a,b) {
  console.log(a+b);
};

var addExp =(a,b) => console.log(a+b);
addStatement(1,2);
addExp(3,4) ;
