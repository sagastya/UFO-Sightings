// from data.js
var tableData = data;

// YOUR CODE HERE!

// Create UFO Sightings table
createTable(tableData);

// Handle 'Filter Table' button click event
var button = d3.select("#filter-btn");
button.on("click", buttonClick);

// Handle 'Filter Table' input change event
var inputElem = d3.select("#filters");
inputElem.on("change", inputChange);

// This function creates UFO sightings table
function createTable(table) {
  // Get a reference to the table body
  var tbody = d3.select("tbody");

  // Clear the table data
  tbody.html("");

  // Create a table and add the ufo sightings
  table.forEach((ufoReport) => {
    var row = tbody.append("tr");
    Object.entries(ufoReport).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
}

// This function is triggered when the 'Filter Table' button is clicked
function buttonClick() {
  //   console.log("The Date button was clicked!");

  // We can use d3 to see the object that dispatched the event
  //   console.log(d3.event.target);

  // Get the value property of the input elements
  var inputDate = d3.select("#datetime").property("value");
  var inputCity = d3.select("#city").property("value");
  var inputState = d3.select("#state").property("value");
  var inputCountry = d3.select("#country").property("value");
  var inputShape = d3.select("#shape").property("value");
  // console.log(inputDate);
  // console.log(inputCity);
  // console.log(inputState);
  // console.log(inputCountry);
  // console.log(inputShape);

  // Filter sightings for input date 
  if (inputDate) {
    // filter table data by input date
    filteredData = tableData.filter(sighting => sighting.datetime === inputDate);
    console.log(filteredData);
  };
  if (inputCity) {
    if (filteredData != "") {
      filteredData = filteredData.filter(sighting => sighting.city === inputCity);
      console.log(filteredData);
    } else {
      filteredData = tableData.filter(sighting => sighting.city === inputCity);
      console.log(filteredData);
    }
  };
  if (inputState) {
    if (filteredData != "") {
      filteredData = filteredData.filter(sighting => sighting.state === inputState);
      console.log(filteredData);
    } else {
      filteredData = tableData.filter(sighting => sighting.state === inputState);
      console.log(filteredData);
    }
  };
  if (inputCountry && filteredData!="") {
    filteredData = filteredData.filter(sighting => sighting.country === inputCountry);
    console.log(filteredData);
  } else if (inputCountry) {
    filteredData = tableData.filter(sighting => sighting.country === inputCountry);
    console.log(filteredData);
  };
  if (inputShape && filteredData) {
    filteredData = filteredData.filter(sighting => sighting.shape === inputShape);
    console.log(filteredData);
  } else if (inputShape) {
    filteredData = tableData.filter(sighting => sighting.shape === inputShape);
    console.log(filteredData);
  };

  if (filteredData) {
    createTable(filteredData);
  } else {
    createTable(tableData);
  };
}

function inputChange() {
  d3.select("tbody").html("");
  filteredData = "";
  button.on("click", buttonClick);
}


