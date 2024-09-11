function Calci(clickedbutton)
{
    // console.log(clickedbutton.innerHTML)
    var text = clickedbutton.innerHTML
    var input = document.getElementById("input")  // take tag
    if(text == "C")
        {
            input.value = "data is cleared"
            return;
        }
    if(input.value == "data is cleared")
    {
        input.value = text;
        return;
    }
    if(text == "=")
        {
            let str = input.value
            result=eval(str)
            input.value=result
            return;
        }
    

    // input.value = text   //which value is present in input(input.value)
    var str = input.value
    str += text
    input.value = str
}
// String str ="abc" 
// ch='b'

// str += ch