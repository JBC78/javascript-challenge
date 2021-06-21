// from data.js
var tableData = data;
console.log(tableData);

// Using the UFO dataset provided in the form of an array of JavaScript objects, write code that appends a table to your web page and 
// then adds new rows of data for each UFO sighting.
// Make sure you have a column for date/time, city, state, country, shape, and comment at the very least.

// Use D3 to select the table body
var tbody = d3.select("tbody");
console.log(tbody);

// Create Function forEach Ufo Sighting
tableData.forEach(function(UfoSighting) {
    console.log(UfoSighting);

    // Append one table row `tr` to the table body
    var row = tbody.append("tr");

    //   Use `Object.entries` to console.log each UFO Sighting value
    Object.entries(UfoSighting).forEach(function([key, value]) {
        console.log(key, value);
        // Append a cell to the row for each value in the Ufo Sighting object
        var cell = row.append("td");
        cell.text(value);
    });
});


// Use a date form in your HTML document and write JavaScript code that will listen for events and search through the date/time column 
// to find rows that match user input.

var FilterTableButton = d3.select("#filter-btn");
FilterTableButton.on("click", function() {

    // Call on the tbody reference relevant to the date selected
    tbody.html("");

    // Select the input element and get the raw HTML node
    var FilterSearchOnDate = d3.select("#datetime");

    // Get the value property of the input element
    var inputValue = inputElement.property("value");

    // Print the value to the console
    console.log(inputValue);


});