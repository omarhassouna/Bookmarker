var bookMarkName = document.getElementById("bookMarkName");
var websiteUrl = document.getElementById("websiteUrl");

var bookMarkerContainer = [];

if (localStorage.getItem('bookMarker') != null) {
    bookMarkerContainer = JSON.parse(localStorage.getItem('bookMarker'))
    displayBookMarker();
}
function addBookMarker() {

    if (validateBookMarkName() == true && validateWebsiteUrl() == true) {
        var bookMarker = {
            name: bookMarkName.value,
            website: websiteUrl.value
        }
        bookMarkerContainer.push(bookMarker);
        localStorage.setItem('bookMarker', JSON.stringify(bookMarkerContainer))
        displayBookMarker();
        clearForm();
    }
    else {
        window.alert("try again with right expressions")
    }
   
}



function clearForm() {
    bookMarkName.value = "";
    websiteUrl.value = "";
}

function displayBookMarker() {
    var cartona = '';
    for (var i = 0; i < bookMarkerContainer.length; i++) {
        
        cartona += `  <tr class="" id = "grad">
        <td> ${i}</td>
        <td class = "p-4">
            <h2> ${bookMarkerContainer[i].name} </h2>
        </td>
        <td class = "p-4"> <a href = "http://${websiteUrl.value}" target = "_blank"> <button class="btn" > visit </button></a></td>
        <td class = "p-4"> <button onclick="deleteBookMarker(${i});" class="btn delBtn" > Delete </button> </td>
        </tr>` ;
    }
    document.getElementById('tableBody').innerHTML = cartona;
}

function deleteBookMarker(deltedIndex) {
    bookMarkerContainer.splice(deltedIndex, 1);
    displayBookMarker();
    localStorage.setItem('bookMarker', JSON.stringify(bookMarkerContainer));
    
}

function validateBookMarkName() {
    var regex = /^[A-Z][a-z]{3,8}$/;
    if (regex.test(bookMarkName.value) == true) {
        return true;
    }
    else {
        return false;
    }
}

function validateWebsiteUrl(){
    var regex = /^((https?|ftp|smtp):\/\/)?(www.)?[a-z0-9]+\.[a-z]+(\/[a-zA-Z0-9#]+\/?)*$/
    if (regex.test(websiteUrl.value) == true){
        return true;
    }
    else {
        return false;
    }
}


