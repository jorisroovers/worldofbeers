// String startswith polyfill
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith
if (!String.prototype.startsWith) {
    Object.defineProperty(String.prototype, 'startsWith', {
        enumerable: false,
        configurable: false,
        writable: false,
        value: function (searchString, position) {
            position = position || 0;
            return this.lastIndexOf(searchString, position) === position;
        }
    });
}

var search = document.querySelector("#search-field");
var countries = document.querySelectorAll(".country");
var noresults = document.querySelector("#no-results");
var noresultsKeyword = document.querySelector("#keyword");

search.oninput = function (e) {

    var countryFound = false;
    for (var i = 0; i < countries.length; i++) {
        var country_name = countries[i].id.replace("country-", "");
        if (country_name.startsWith(search.value.toLowerCase())) {
            countries[i].style.display = "block";
            noresults.style.display = "none";
            countryFound = true;
        } else {
            countries[i].style.display = "none";
        }
    }
    if (!countryFound) {
        noresults.style.display = "block";
        noresultsKeyword.innerHTML = search.value;
    }
}