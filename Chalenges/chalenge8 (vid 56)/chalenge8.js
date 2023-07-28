//???????????? DONE ?????????????


let myAdmins=["Ahmed", "Osama", "Sayed", "Stop","Samera"];
let myEmployees=["Amgad","Samah","Ameer","Omar","Othman","Amany","Samia"];

//document.write(`<div> we have X admins </div>`)


Admins: for(let i=0; i<myAdmins.length; i++)//0
{
    let k=1;
    if( myAdmins[i]=="Stop")
    {
        break;
    }
    else
    {
        document.write(`<div>`);
        document.write(`<h3>The Admin of team ${i+1} is ${myAdmins[i]}</h3>`);//? Ahmed
        document.write(`<h2> Team Members </h2>`);
        TeamMembers:for(let j=0;j<myEmployees.length; j++)
        {
        if(myAdmins[i][0]==myEmployees[j][0])
        {
           
            document.write(`<p> -${k++} ${myEmployees[j]} </p>`);
        }
        }
        document.write(`</div>`);
    }
}