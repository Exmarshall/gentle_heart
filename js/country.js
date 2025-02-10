// Function to fetch country data and populate the select element
async function loadCountries() {
  try {
    const response = await fetch("https://restcountries.com/v3.1/all"); // API URL to get all countries
    const countries = await response.json();

    // Sort the countries alphabetically by name
    countries.sort((a, b) => a.name.common.localeCompare(b.name.common));

    // Get the select element
    const selectElement = document.getElementById("country");

    // Loop through the countries and add them to the dropdown
    countries.forEach((country) => {
      const option = document.createElement("option");
      option.value = country.name.common; // Use the country's common name as value
      option.textContent = country.name.common; // Use the country's common name as text
      selectElement.appendChild(option);
    });
  } catch (error) {
    console.error("Error loading country data:", error);
  }
}

// Call the loadCountries function when the page loads
window.onload = loadCountries;
