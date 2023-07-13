const fibonacci = function(num) {
   if (num < 0 ) return 'OOPS';
   if (num === 0) return 0;

   let prev = 1;
   let prePrev = 0;

   for( let i = 1; i < num; i++){
    let current = prev + prePrev;
    prePrev = prev
    prev = current
   }

   return prev;


};

// Do not edit below this line
module.exports = fibonacci;
