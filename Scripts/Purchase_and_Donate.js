alert("Welcome To Travel Sri Lanka Purchase and Donate Page!");

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

document.getElementById("catergory");
document.getElementById("donour_name");
document.getElementById("donour_card_number");
document.getElementById("cv_number");
document.getElementById("expiary_date");
document.getElementById("donour_mobile_number");
document.getElementById("donour_land_number");
document.getElementById("donour_address");
document.getElementById("donour_email");
document.getElementById("donation");
document.getElementById("comments");
document.getElementById("submit_button").addEventListener("click",notification);

function notification()
{
    const a = catergory.value;
    const b = donour_name.value;
    const c = donour_card_number.value;
    const d = cv_number.value;
    const e = expiary_date.value;
    const f = donour_mobile_number;
    const g = donour_land_number;
    const h = donour_address.value;
    const i = donour_email.value;
    const j = donation.value;
    const k = comments.value;
    if (a > 1 && b != 0 && c != 0 && d != 0 && e != 0 && f != 0 && g != 0 && h != 0 && i != 0 && j > 1 && k != 0)
    {
        alert("Transaction sucsessfull");
    }
    else
    {
        alert("Transaction unsucsessfull");
    }
}

let merch_catergory = document.getElementById("merch_catergory");
let size = document.getElementById("merch_size");
let comments = document.getElementById("comments");
let btnfavourites = document.getElementById("add_button");
let btnorder = document.getElementById("order_button");

btnfavourites.addEventListener("click", addEntry);

let items = [];

function addEntry()
{
    const entry = {
        "merch_type": merch_catergory.value,
        "merch_size": merch_size.value,
        "comments": comments.value
    };
    items.push(entry);
    localStorage.setItem("items",JSON.stringify(items));
}

function language()
{
    alert("Translator mechanisum is under maintainance!");
}








