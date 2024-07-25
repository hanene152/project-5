$(function () {
   $("#fetchQuotesBtn").click(function () {
      // Get selected topic and count from drop-down lists
      const selectedTopic = $("#topicSelection option:selected").val();
      const selectedCount = $("#countSelection option:selected").val();
      fetchQuotes(selectedTopic, selectedCount);
   });
});

function fetchQuotes(topic, count) {
   // Construct the URL for the API request
   const apiUrl = `https://wp.zybooks.com/quotes.php?topic=${topic}&count=${count}`;

   // Make the AJAX request using $.get()
   $.get(apiUrl, function (data) {
      if (data.error) {
         // Display error message
         $("#quotes").html(data.error);
      } else {
         // Display the quotes in an ordered list
         let html = "<ol>";
         data.forEach(quoteObj => {
            html += `<li>${quoteObj.quote} - ${quoteObj.source}</li>`;
         });
         html += "</ol>";
         $("#quotes").html(html);
      }
   }, "json")
      .fail(function () {
         // Handle the case where the request fails (e.g., network issues)
         $("#quotes").html("An error occurred while fetching the quotes.");
      });
}
