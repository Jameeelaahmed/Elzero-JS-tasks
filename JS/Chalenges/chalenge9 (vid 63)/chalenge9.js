//?????????????? DONE ??????????


//* with if
// if (typeof x==="string" && typeof y=== "number" && typeof z=="boolean") //* 1
// {
//     if(z)
//     {
//         console.log(`Hello ${x} , Your age is ${y} ,You Are Available For Hire`)
//     }
//     else
//     {
//         console.log(`Hello ${x} , Your age is ${y} ,You Are Not Available For Hire`)
//     }
// }
// else if (typeof x==="string" && typeof y=== "boolean" && typeof z=="number")//* 2
// {

//     if(y)
//     {
//         console.log(`Hello ${x} , Your age is ${z} ,You Are Available For Hire`)
//     }
//     else
//     {
//         console.log(`Hello ${x} , Your age is ${z} ,You Are Not Available For Hire`)
//     }
// }
// else if (typeof x==="boolean" && typeof y=== "number" && typeof z=="string")//* 3
// {
//     if(x)
//     {
//         console.log(`Hello ${z} , Your age is ${x} ,You Are Available For Hire`)
//     }
//     else
//     {
//         console.log(`Hello ${z} , Your age is ${x} ,You Are Not Available For Hire`)
//     }
// }
// else if (typeof x==="number" && typeof y=== "string" && typeof z=="boolean")//* 4
// {
//     if(z)
//     {
//         console.log(`Hello ${y} , Your age is ${x} ,You Are Available For Hire`)
//     }
//     else
//     {
//         console.log(`Hello ${y} , Your age is ${x} ,You Are Not Available For Hire`)
//     }
// }
// else if (typeof x==="number" && typeof y=== "boolean" && typeof z=="string")//*5
// {
//     if(y)
//     {
//         console.log(`Hello ${z} , Your age is ${y} ,You Are Available For Hire`)
//     }
//     else
//     {
//         console.log(`Hello ${z} , Your age is ${y} ,You Are Not Available For Hire`)
//     }
// }

//* Method 1 with ternary operator 
let x="jameela",y=22,z=true;
function showDetails(x,y,z)
{
    (typeof x ==="string" && typeof y==="number" && typeof z==="boolean")
    ? z
    ? console.log(`Hello ${x} , Your age is ${y} ,You Are Available For Hire`)
    : console.log(`Hello ${x} , Your age is ${y} ,You Are Not Available For Hire`) 

    :(typeof x==="string" && typeof y=== "boolean" && typeof z=="number")
    ?y
    ?console.log(`Hello ${x} , Your age is ${z} ,You Are Available For Hire`)
    :console.log(`Hello ${x} , Your age is ${z} ,You Are Not Available For Hire`)

    :(typeof x==="boolean" && typeof y=== "number" && typeof z=="string")
    ?x
    ?console.log(`Hello ${z} , Your age is ${y} ,You Are Available For Hire`)
    : console.log(`Hello ${z} , Your age is ${y} ,You Are Not Available For Hire`)

    :(typeof x==="boolean" && typeof y=== "string" && typeof z=="number")
    ?x
    ?console.log(`Hello ${y} , Your age is ${z} ,You Are Available For Hire`)
    : console.log(`Hello ${y} , Your age is ${z} ,You Are Not Available For Hire`)


    :(typeof x==="number" && typeof y=== "string" && typeof z=="boolean")
    ?z
    ?console.log(`Hello ${y} , Your age is ${x} ,You Are Available For Hire`)
    :console.log(`Hello ${y} , Your age is ${x} ,You Are Not Available For Hire`)

    :(typeof x==="number" && typeof y=== "boolean" && typeof z=="string")
    ?y
    ?console.log(`Hello ${z} , Your age is ${x} ,You Are Available For Hire`)
    :console.log(`Hello ${z} , Your age is ${x} ,You Are Not Available For Hire`)
    :null;
}
showDetails("jameela",22,true);
showDetails(22,"jameela",true);
showDetails(false,22,"jameeela");
showDetails(false,"jameela",22);




//* Method 2 with for loop


function showDetails(x,y,z)
{
    let name,age,bool;
    let arr=[x,y,z];
    for(let i=0; i<arr.length;i++)
    {
        if(typeof arr[i]==="string")
        name=arr[i];
        else if (typeof arr[i]==="number")
        age=arr[i];
        else if (typeof arr[i]==="boolean")
        {
            if(arr[i])
            {
                bool="You Are Available For Hire";
            }
            else
            {
                bool="You Are Not Available For Hire";
            }
        }
    }
    console.log(`Hello ${name}, Your age is ${age} , ${bool}`)
}

showDetails("jameela",22,true);
showDetails(22,"jameela",true);
showDetails(false,22,"jameeela");
showDetails(false,"jameela",22);