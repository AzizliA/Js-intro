console.log("Vurma cədvəli:")

for (let i = 1; i <= 10; i++) 
{
    let row = "";
   
    for (let a = 1; a <= 10; a++) 
    {
        let product = i * a;
        row += `${i} x ${a} = ${product}\t`;
    }
   
    console.log(row);
}
