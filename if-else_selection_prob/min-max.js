max = 0;
min = 1000;

for ( let i = 0; i < 5 ; i++)
{
    let num = Math.floor(Math.random() * (999 -100 +1 )) + 100;
    console.log("number:" + num);
    if ( num > max)
    {
        max=num;
    }
    if (num < min)
    {
        min=num;
    }
}
console.log("maximum number:" + max);
console.log("minimum number:" + min);