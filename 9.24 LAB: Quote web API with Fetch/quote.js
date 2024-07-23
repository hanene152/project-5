window.addEventListener("DOMContentLoaded", function () {
   document.querySelector("#fetchQuotesBtn").addEventListener("click", function () {

      // Get values from drop-downs
      const topicDropdown = document.querySelector("#topicSelection");
      const selectedTopic = topicDropdown.options[topicDropdown.selectedIndex].value;
      const countDropdown = document.querySelector("#countSelection");
      const selectedCount = countDropdown.options[countDropdown.selectedIndex].value;

      // Get and display quotes
      fetchQuotes(selectedTopic, selectedCount);
   });
});

function showAnonymousQuotes(count) {
   let html = "<ol>";
   for (let c = 1; c <= count; c++) {
      html += `<li>Quote ${c} - Anonymous</li>`;
   }
   html += "</ol>";

   document.querySelector("#quotes").innerHTML = html;
}

function fetchQuotes(topic, count) {
   // Remove the call to showAnonymousQuotes()
   // showAnonymousQuotes(count);

   // Construct the API URL
   const apiUrl = `https://wp.zybooks.com/quotes.php?topic=${topic}&count=${count}`;

   // Use Fetch API to get quotes
   fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
         // Check if there's an error in the response
         if (data.error) {
            document.querySelector("#quotes").innerHTML = data.error;
         } else {
            // Display the quotes in an ordered list
            let html = "<ol>";
            data.forEach(quote => {
               html += `<li>${quote.quote} - ${quote.source}</li>`;
            });
            html += "</ol>";
            document.querySelector("#quotes").innerHTML = html;
         }
      })
      .catch(error => {
         // Handle any errors that occurred during fetch
         document.querySelector("#quotes").innerHTML = "An error occurred while fetching quotes.";
         console.error("Error fetching quotes:", error);
      });
}
