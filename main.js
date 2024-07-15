let button=document.querySelector("button")
button.addEventListener('click',calculate)

function calculate()
{
    const inputvalue=document.getElementById("input").value
    const arr=inputvalue.split(" ")
    let calculation=0

    switch(arr[1])
    {
        case '+':
            calculation=Number(arr[0])+Number(arr[2])
            break

        case '-':
            calculation=Number(arr[0])-Number(arr[2])
            break

        case '*':
            calculation=Number(arr[0])*Number(arr[2])
            break

        case '/':
            calculation=Number(arr[0])/Number(arr[2])
            break

        default:
            document.querySelector(".result").innerHTML=`Invalid Input`
            break
    }
    document.querySelector(".result").innerHTML=`Answer is ${calculation}`
}