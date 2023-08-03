//??????????? DONE ??????????

//! 1

function getDetails(zName, zAge, zCountry)
{
    function namePattern()
    {

        return `Hello ${zName.slice(0, zName.indexOf(" "))}${zName.substr(zName.indexOf(" "),2).toUpperCase()}.`
    }

    function ageWithMessage()
    {
        return `Your age is ${parseInt(zAge)}`;
    }

    function countryTwoLetters()
    {
        return `You live in ${zCountry.slice(0,2)}`;
    }

    function fullDetails()
    {
        return `${namePattern()}, ${ageWithMessage()}, ${countryTwoLetters()}`;
    }
    return fullDetails(); // Do Not Edit This
}

console.log(getDetails("Jameela Ahmed", "22 is my age" , "Egypt"));

//! 2

itsMe = () => `Iam A Normal Function`;
   console.log(itsMe()); //? Iam A Normal Function

urlCreate = (protocol, web, tld) =>  `${protocol}://www.${web}.${tld}`;
  console.log(urlCreate("https", "elzero", "org")); //? https://www.elzero.org

//! 3

checker = (zName) => (status) => (salary) => status === "Available" ? `${zName}, My Salary Is ${salary}` : `Iam Not Avaialble`;
console.log(checker("Osama")("Available")(4000)); // Osama, My Salary Is 4000
console.log(checker("Ahmed")("Not Available")()); // Iam Not Avaialble

//! 4

function specialMix(...data) {
    let num=0;
    for(let i=0; i<data.length; i++)
    {
        if(isNaN(parseInt(data[i]))===false)
        {
            num+=parseInt(data[i]);
        }
    }

    if(num==0)
    {
        return "All is Strings";
        
    }
return num;
}
  console.log(specialMix(10, 20, 30)); // 60
 console.log(specialMix("10Test", "Testing", "20Cool")); // 30
  console.log(specialMix("Testing", "10Testing", "40Cool")); // 50
  console.log(specialMix("Test", "Cool", "Test")); // All Is Strings



