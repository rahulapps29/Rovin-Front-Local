// Example JSON data from an API endpoint
const apiUrl = "http://223.239.128.54:4000/api/tasks/d";

// Fetch data from the API
fetch(apiUrl)
  .then((response) => response.json())
  .then((data) => {
    const tableBody = document
      .getElementById("Transtablez")
      .getElementsByTagName("tbody")[0];

    let runningTotal = 0;

    // Calculate running totals in reverse order
    const reverseData = data.tasks
      .slice()
      .reverse()
      .map((item, index) => {
        runningTotal += item.amt;
        return {
          ...item,
          runningTotal,
        };
      })
      .reverse(); // Re-reverse to maintain original order but with correct running totals

    // Render rows
    reverseData.forEach((item) => {
      const gave = item.amt > "" ? item.amt : "";
      const got = item.amt < "" ? item.amt : "";

      // Create table row
      const row = document.createElement("tr");
      row.innerHTML = `
              <td>${item.date_string}</td>
              <td>${item.desc}</td>
              <td>${gave}</td>
              <td>${got}</td>
              <td>${item.runningTotal}</td>
          `;
      tableBody.appendChild(row);
    });
  })

  .catch((error) => console.error("Error fetching data:", error));
