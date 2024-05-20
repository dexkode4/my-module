export const greet = () => {
    console.log("hello");
  };
  
  export const shout = (msg) => {
    console.log(msg);
  };
  
  module.exports = {
    shout,
    greet,
  };
  