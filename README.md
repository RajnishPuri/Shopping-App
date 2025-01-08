# Shopping Cart App with React, Vite, and Stripe Integration

This is a simple shopping cart application built using React, Vite, and integrated with Stripe for payment processing. The app allows users to browse products, add them to the cart, and proceed to checkout for payment. The backend APIs handle the payment process and store relevant details in the database.

## Features
- **Product Details**: Fetch product details from the frontend API.
- **Add to Cart**: Add products to the cart with support for quantity updates.
- **State Management**: Redux is used to manage the state of the cart and product data.
- **Checkout**: Users can proceed to checkout, fill in their details, and reach the Stripe payment gateway.
- **Payment Gateway**: Integrated with Stripe for secure payments.
- **Webhooks**: Webhook integration for order verification and storing data in the backend.
  
## Tech Stack
- **Frontend**: React, Vite, Redux
- **Backend**: Node.js with Express
- **Payment Gateway**: Stripe

## Frontend API

- `http://localhost:5173`: This is the API endpoint for fetching product details. You can use it to get all available products and their details for displaying in the app.

## Backend APIs

- `http://localhost:3000/create-checkout-session`: This endpoint handles the creation of a Stripe checkout session for processing the payment. It sends all the necessary details to Stripe for initiating the payment.
  
- `http://localhost:3000/session-status`: This endpoint checks the current status of the session to verify whether the payment has been successful or not.

- `/hooks`: Webhook integration that receives notifications from Stripe to verify payments and store order details in the database.

## Installation

### Frontend
1. Clone this repository.
   ```bash
   git clone <repository-url>
   cd <project-directory>

2. Install dependencies.
    ```bash
    npm install
    
3. Run the development server.
    ```bash
    npm run dev
    
### Backend
1. Clone this repository.
   ```bash
   git clone <repository-url>
   cd <project-directory>

2. Install dependencies.
    ```bash
    npm install
    
3. Run the development server.
    ```bash
    npm run dev
    
    
    
###How it works
Fetching Products: The frontend fetches the product details from http://localhost:5173, and displays them for the user to browse.

Add to Cart: The user can add products to the cart, and their selections are stored in the Redux state.

Checkout: Upon clicking "Checkout," the frontend makes a request to the http://localhost:3000/create-checkout-session endpoint to create a Stripe checkout session.

Stripe Payment: The user is redirected to the Stripe payment gateway to complete the payment.

Webhook: Once payment is confirmed, Stripe sends a webhook to the backend to verify the transaction. The backend validates the signature and stores the order details in the database.

Session Status: After completing the payment, the frontend can query http://localhost:3000/session-status to check the payment status.

Environment Variables
Make sure to set up the following environment variables for both the frontend and backend:

Stripe:
STRIPE_SECRET_KEY: Your secret key from Stripe (backend).
STRIPE_PUBLISHABLE_KEY: Your publishable key from Stripe (frontend).


