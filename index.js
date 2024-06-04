function greet(){
  console.log("hello");

};

function shout(msg){
  console.log(msg);
};

function foo(){
  return "foo";
}

module.exports = {
  greet,
  foo,
  shout
}