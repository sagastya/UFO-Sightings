// Data from data.js
var tableData = data;

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
  // We can use d3 to see the object that dispatched the event
  //   console.log(d3.event.target);

  // Get the value property of the input elements
  var inputDate = d3.select("#datetime").property("value");
  var inputCity = d3.select("#city").property("value");
  var inputState = d3.select("#state").property("value");
  var inputCountry = d3.select("#country").property("value");
  var inputShape = d3.select("#shape").property("value");

  // Filter sightings for input data
  if (inputDate) {
    filteredData = tableData.filter(sighting => sighting.datetime === inputDate);   // filter by date
    console.log(filteredData);
  };
  if (inputCity) {
    if (filteredData != "") {
      filteredData = filteredData.filter(sighting => sighting.city === inputCity);   // filter by city
      console.log(filteredData);
    } else {
      filteredData = tableData.filter(sighting => sighting.city === inputCity);
      console.log(filteredData);
    }
  };
  if (inputState) {
    if (filteredData != "") {
      filteredData = filteredData.filter(sighting => sighting.state === inputState);  // filter by state
      console.log(filteredData);
    } else {
      filteredData = tableData.filter(sighting => sighting.state === inputState);
      console.log(filteredData);
    }
  };
  if (inputCountry) {
    if (filteredData != "") {
      filteredData = filteredData.filter(sighting => sighting.country === inputCountry);  // filter by country
      console.log(filteredData);
    } else {
      filteredData = tableData.filter(sighting => sighting.country === inputCountry);
      console.log(filteredData);
    }
  };
  if (inputShape) {
    if (filteredData != "") {
      filteredData = filteredData.filter(sighting => sighting.shape === inputShape);  // filter by shape
      console.log(filteredData);
    } else {
      filteredData = tableData.filter(sighting => sighting.shape === inputShape);
      console.log(filteredData);
    }
  };

  if (filteredData != "") {
    createTable(filteredData);
  } else {
    createTable(tableData);
  };
}

// This function is called when the user input on the form is changed
function inputChange() {
  // Clear the table data 
  d3.select("tbody").html("");
  filteredData = "";
  // button.on("click", buttonClick);
}


