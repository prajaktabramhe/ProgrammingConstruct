function HarmonicSeries(num) 
{
    let sum = 0;
    console.log(" Harmonic Series :");
    for (let i = 1; i <= num; i++) 
    {
      console.log("1/" + i + "+");
      sum = sum + 1 / i; //computes the  sum of harmonic series upto given number
    }
    console.log("=" + sum.toFixed(2));
}
  
  HarmonicSeries(10);

  