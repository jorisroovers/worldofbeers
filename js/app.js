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

search.oninput = function (e) {
    var countries = document.querySelectorAll(".country");
    for (var i = 0; i < countries.length; i++) {
        var country_name = countries[i].id.replace("country-", "");
        if (country_name.startsWith(search.value.toLowerCase())) {
            countries[i].style.display = "block";
        } else {
            countries[i].style.display = "none";
        }
    }
}