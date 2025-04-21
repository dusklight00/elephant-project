document.addEventListener("DOMContentLoaded", function () {
  // Sample data for demonstration purposes
  const elephantData = {
    assam: {
      population: {
        "last-year":
          "Assam had approximately 5,719 elephants according to the latest census. The population remains stable with a slight increase of 2% compared to previous years.",
        "last-5-years":
          "Over the past 5 years, Assam's elephant population has grown from 5,620 to 5,719, showing resilience despite habitat challenges.",
        "last-10-years":
          "10-year data shows a fluctuating but overall stable population in Assam, with improved conservation efforts leading to better survival rates.",
        "all-time":
          "Historical data from Assam shows the elephant population has recovered from a low of 4,800 in the 1990s to current levels of over 5,700.",
      },
      health: {
        "last-year":
          "Health surveys indicate 87% of observed elephants in Assam are in good health, with sporadic cases of foot diseases and parasitic infections.",
        "last-5-years":
          "5-year health trends show improved veterinary care with vaccination programs reaching 76% of the monitored population.",
        "last-10-years":
          "Decade-long health records indicate decreased mortality from preventable diseases by 34%.",
        "all-time":
          "Comprehensive health records since monitoring began show significantly improved health outcomes due to better management practices.",
      },
      // Other data types would be defined similarly
    },
    arunachal: {
      population: {
        "last-year":
          "Arunachal Pradesh has an estimated 1,614 elephants, mostly concentrated in protected forest areas.",
        "last-5-years":
          "5-year data shows a slight decline of 3% in elephant population, primarily due to habitat fragmentation.",
        "last-10-years":
          "The decade trend shows fluctuations with a concerning overall decline of 8% since 2013.",
        "all-time":
          "Historical records indicate Arunachal had nearly 2,000 elephants in the 1980s, showing a gradual decline over decades.",
      },
      // Other data would continue for all locations and data types
    },
    // Other locations would be defined similarly
  };

  // Handle form submission
  const dataForm = document.getElementById("data-search-form");
  const resultsSection = document.getElementById("data-visualization");

  dataForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // Get selected values
    const location = document.getElementById("location").value;
    const dataType = document.getElementById("data-type").value;
    const timePeriod = document.getElementById("time-period").value;

    // Display results
    displayResults(location, dataType, timePeriod);
  });

  function displayResults(location, dataType, timePeriod) {
    // Clear previous results
    resultsSection.innerHTML = "";

    try {
      // Check if data exists
      if (
        elephantData[location] &&
        elephantData[location][dataType] &&
        elephantData[location][dataType][timePeriod]
      ) {
        const data = elephantData[location][dataType][timePeriod];

        // Create result elements
        const resultTitle = document.createElement("h3");
        resultTitle.textContent = `${capitalizeFirstLetter(
          dataType
        )} Data for ${capitalizeFirstLetter(location)}`;

        const resultContent = document.createElement("p");
        resultContent.textContent = data;

        const resultDate = document.createElement("p");
        resultDate.className = "result-date";
        resultDate.textContent = `Data retrieved on ${new Date().toLocaleDateString()}`;

        // Append elements to results section
        resultsSection.appendChild(resultTitle);
        resultsSection.appendChild(resultContent);
        resultsSection.appendChild(resultDate);

        // Add a note that this is sample data
        const disclaimer = document.createElement("div");
        disclaimer.className = "disclaimer";
        disclaimer.textContent = "Note: This is sample demonstration data.";
        resultsSection.appendChild(disclaimer);
      } else {
        resultsSection.innerHTML =
          '<p class="no-data-message">No data available for the selected criteria. Please try a different selection.</p>';
      }
    } catch (error) {
      resultsSection.innerHTML =
        '<p class="no-data-message">Error retrieving data. Please try again later.</p>';
      console.error("Error displaying results:", error);
    }
  }

  // Helper function to capitalize first letter
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.replace(/-/g, " ").slice(1);
  }
});
