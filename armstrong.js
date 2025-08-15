console.log("Armstrong ədədləri:");

for (let i = 1; i <= 999; i++) 
{
    let str = i.toString(); 
    let sum = 0; 

    for (let a = 0; a < str.length; a++) 
    {
        let digit = Number(str[a]); 
        sum += digit ** 3;      
    }

    if (sum === i) 
    {
        console.log(i);
    }
}
