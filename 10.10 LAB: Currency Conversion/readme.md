Overview
In this lab, you will use jQuery to implement a currency conversion calculator that parses a JSON-formatted string containing exchange rates from US dollars (USD) to several other currencies. The exchange data is provided by OpenExchangeRates.org.

Textbox for US Dollars contains 100.00, "Select currency" dropdown list as Bitcoin selected, "Bitcoin (BTC)" textbox reads 0.02. A multi-line textbox at the bottom with label "Exchange Rate Data (JSON)" contains JSON text with USD rates for various currencies.

Step 1: Implement ready event handler
Create a jQuery ready event handler that updates the options within the <select> element with ID toCurrency such that:

The first <option> element is: <option value="" disabled selected>Select currency</option>
Only the currencies listed in the rates property of the exchangeRates object should appear in the dropdown
The <option> element for each currency should show the full currency name followed by the currency's abbreviation in parentheses
Ex: Canadian Dollar (CAD)
The value for each <option> element should be the currency abbreviation
The allCurrencies object in the provided JavaScript template provides a mapping from all possible abbreviations to full currency name
Once this step is completed, the "Select currency" dropdown should display six options.

Dropdown with 6 options: Select currency, Bitcoin (BTC), Canadian Dollar (CAD), Euro (EUR), Japanese Yen (JPY), United States Dollar (USD).

Step 2: Implement change event handler
Create a jQuery change event handler for the select dropdown that:

Converts the user-entered US dollars to the selected currency using the rates listed in the exchangeRatesobject. Display the converted currency with two decimal digits.
Ex: If the user-entered US dollars is 100.00, Canadian Dollar (CAN) is elected, and the exchange rate is "CAD": 1.316853, the resulting converted currency is 131.69
Displays the resulting converted currency by updating the read-only <input> element with ID resultCurrency
Updates the associated label for resultCurrency to the selected currency's full currency name, currency abbreviation in parentheses, and colon
Ex: Canadian Dollar (CAN):
Once this step is completed, the conversion from US dollars to the selected currency will happen as soon as the currency is selected from the dropdown menu.

Step 3: Implement click event handler
Create a jQuery click handler for the Update Rates button that:

Updates the exchangeRates object by calling JSON.parse() with the JSON string provided in the <textarea> element with ID exchangeRates
Updates the select dropdown such that only the currencies listed in the rates property of the updated exchangeRates object appear in the dropdown
Resets the read-only <input> element with ID resultCurrency to display "---.--"
Resets the associated label for resultCurrency to display "To Currency ():"
Once this step is completed, clicking the Update Rates button should load the JSON from the textbox. Then the dropdown menu will show some new currency options.

Dropdown shows 5 options: Select currency, Canadian Dollar (CAD), Chinese Yuan (CNY), Euro (EUR), Indian Rupee (INR).
