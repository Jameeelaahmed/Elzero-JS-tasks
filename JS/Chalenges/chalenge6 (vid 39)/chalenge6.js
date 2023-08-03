//??????????????????? DONE ???????????????

//! 1
//* use switch 

let job= "Support";
let salery = 0;

// if(job==="Maneger")
// {
//     salery=8000;
// }
// else if (job === "IT" || job==="support")
// {
//     salery=6000;
// }
// else if (job==="Developer" || job==="Designer")
// {
//     salery=7000;
// }
// else 
// {
//     salery=4000;
// }

//* solution 

switch(job)
{
    case "Manager" :
        salery=8000;
        console.log(salery);
        break;
    case "IT":
    case "Support":
        salery=6000;
        console.log(salery);
        break;
    case "Developer":
    case "Designer":
        salery=7000;
        console.log(salery);
        break;
    default:
        salery=4000;
        console.log(salery);
}


//! 2 

let holidays =0;
let money=0;

switch(holidays)
{
    case 0:
        money=5000;
        console.log(`My money is ${money}`);
        break;
    case 1:
    case 2:
        money=3000;
        console.log(`My money is ${money}`);
        break;
    case 3:
        money=2000;
        console.log(`My money is ${money}`);
        break;
    case 4:
        money=1000;
        console.log(`My money is ${money}`);
        break;
}

if (holidays==0)
{
    money=5000;
    console.log(`My money is ${money}`);
}
else if (holidays==1 || holidays==2)
{
    money=3000;
    console.log(`My money is ${money}`);
}
else if(holidays == 3)
{
    money=2000;
    console.log(`My money is ${money}`);
}
else 
{
    money=1000;
    console.log(`My money is ${money}`);
}