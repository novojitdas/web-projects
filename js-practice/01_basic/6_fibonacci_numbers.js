// first 10 numbers of fibo series
// formula f(n) = f(n-1) + f(n-2)

function fiboSeries(n) {
      const fibSeries = [0,1];
      for (let i = 2;i<n;i++){
            fibSeries[i] = fibSeries[i-1] + fibSeries[i-2];
      }
      return fibSeries;
}

console.log(fiboSeries(5));
console.log(fiboSeries(10));