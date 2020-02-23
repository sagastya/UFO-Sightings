// from data.js
var tableData = data;

// YOUR CODE HERE!

// Create UFO Sightings table
createTable(tableData);

// Handle 'Filter Table' button click event
var button = d3.select("#filter-btn");
button.on("click", buttonClick);

// This function creates UFO sightings table
function createTable(table){
    // Get a reference to the table body
    var tbody = d3.select("tbody");
  
    // Clear the table data
    tbody.html("");
  
    // Create a table and add the ufo sightings
    table.forEach((ufoReport) => {
      var row = tbody.append("tr");
      Object.entries(ufoReport).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value); });
    });
}

// This function is triggered when the 'Filter Table' button is clicked
function buttonClick() {
//   console.log("The Date button was clicked!");

  // We can use d3 to see the object that dispatched the event
//   console.log(d3.event.target);

  // Select the input date element
  var inputElement = d3.select("#datetime");

  // Get the value property of the input date
  var inputDate = inputElement.property("value");
//   console.log(inputDate);

  // Filter sightings for input date 
  if (inputDate) {
    // filter table data by input date
    result = tableData.filter(sighting => sighting.datetime === inputDate);
    // console.log(result);  
    createTable(result);
  } else {
      d3.select("tbody").html("");
  }
}


