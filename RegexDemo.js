function CheckName(name)
{
    let nameRgx = new RegExp("^[A-Z][a-z]{2,}$");
    if(nameRgx.test(name))
        console.log("Valid");
    else
        console.log("Invalid");
}

CheckName("Jyoti");