alert("Welcome To Travel Sri Lanka Heritage Locations Page!");

const txtInput = document.getElementById("search_bar");
document.getElementById("search").addEventListener("click",confimation);
function confimation()
{
    const search_value = txtInput.value;
    const search_length = search_value.length;
    if (search_length >= 6)
    {
        alert("Your Search Request is Granted!");
    }
    else
    {
        alert("Your Search Request cannot be Granted!");    
    }
}

function deactive()
{
    alert("Deactivated Link! Site under maintainance");
}

function language()
{
    alert("Translator Mechanisum is under maintainance!");
}