Mini Stock Price Tracker
Objective: Develop a simple application that fetches stock prices from a mock API every minute and displays them. Users can select which stocks they want to view from a predefined list.

Features:

Frontend (React):

Stock Selector: A dropdown where users can select a stock from a predefined list.
Price Display: Display the current price of the selected stock. The price should update every minute without a full page refresh.
Backend (Express and Node):

Mock API Endpoint: Create a mock API endpoint that returns a random stock price for a list of predefined stocks.
Database (MongoDB): (Simplified to reduce time)

Stocks Schema: Store the list of predefined stocks with their current prices.
Challenge Elements:

Data Handling: Use a simple polling mechanism to fetch stock price updates every minute.
State Management: Manage user's stock selection and display relevant data.
