// we are fetching all the four requored elements from DOM
var bangloreDiv = document.getElementsByClassName('bangaloreDiv')[0];
var heyderabadDiv = document.getElementsByClassName('heyderabadDiv')[0];
var bangaloreLists = document.getElementById('bangList');
var hyderabadLists = document.getElementById('heyList');

// now we are adding events to both the city lists (mouseover event is same as css:hover property)
heyderabadDiv.addEventListener('mouseover',showHeyderabadList);
bangloreDiv.addEventListener('mouseover',showBangloreList);

// from here we are preparing methods/functions for displaying specific list-items
function showHeyderabadList() {
    bangaloreLists.style.display = 'none';
    hyderabadLists.style.display = 'flex';
}

function showBangloreList() {
    bangaloreLists.style.display = 'flex';
    hyderabadLists.style.display = 'none';
}