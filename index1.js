const commandLineArguments=process.argv.slice(4);
const operation=process.argv[3];
function add()
{
    let sum=0;
    for(item of commandLineArguments)
    {
        if(!isNaN(item))
            sum+=Number(item);
        else{
            console.log("please enter numbers only");
            return;
        }
    }
    console.log(sum);
}
function subtract()
{
    if(commandLineArguments.length!==2)
    {
        console.log("Enter only Two Number");
        return;
    }
    else if((isNaN(commandLineArguments[0]) || isNaN(commandLineArguments[1])))
    {
        console.log("Enter  Numbers Only");
        return;
    }
    console.log(Number(commandLineArguments[0])-Number(commandLineArguments[1]));     
}
function multiply()
{
    let product=0;
    for(item of commandLineArguments)
    {
        if(!isNaN(item))
            product*=Number(item);
        else{
            console.log("please enter numbers only");
            return ;
        }
    }
    console.log(product);
}
function divide()
{
    if(commandLineArguments.length!==2)
    {
        console.log("Enter only Two Number");
        return;
    }
    else if(isNaN(commandLineArguments[0]) || isNaN(commandLineArguments[1]))
    {
        console.log("Enter  Numbers Only");
        return;
    }
    console.log(Number(commandLineArguments[0])/Number(commandLineArguments[1]));   
}

switch(operation){
    case "addition":
        add();
        break;
    case "subtraction":
        subtract();
        break;
    case "multiply":
        multiply()   
        break;
    case "division":
       divide();   
       break;
    default:
        console.log("You have entered a wrong arithmetic operation. Please try again");
        break;
}