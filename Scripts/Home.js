alert("Welcome To Travel Sri Lanka Home Page!");

const txtInput = document.getElementById("search_bar");
document.getElementById("search").addEventListener("click",confimation);
function confimation()
{
    const search_value = txtInput.value;
    const search_length = search_value.length;
    if (search_length >= 6)
    {
        alert("Your search request is granted!");
    }
    else
    {
        alert("Your search request cannot be granted!");    
    }
}

function deactive()
{
    alert("Deactivated Link!, Site under maintainance!");
}

function language()
{
    alert("Translator mechanisum is under maintainance!");
}