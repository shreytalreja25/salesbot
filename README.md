# Dunder Mifflin AI Sales Assistant

This project is an AI-powered sales assistant for a hypothetical office supplies company called Dunder Mifflin. It consists of a lead generation form and a chatbot interface that interacts with potential customers, providing information about the products and answering their queries.

## Features

- **Lead Form**: Collects user details and saves them to a MongoDB collection.
- **Chatbot Interface**: Interacts with users, providing detailed product information and answering queries.
- **Product Database**: Stores office supplies products in a MongoDB database.
- **AI Integration**: Uses OpenAI's GPT-3.5-turbo model to generate responses based on user queries and product details.

## Technologies Used

- **Frontend**: React, Vite
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **AI Integration**: OpenAI GPT-3.5-turbo

## Project Structure

salesbot/
│
├── backend/
│ ├── node_modules/
│ ├── src/
│ │ ├── models/
│ │ │ ├── Lead.js
│ │ │ ├── Product.js
│ │ ├── routes/
│ │ │ ├── chat.js
│ │ │ ├── lead.js
│ │ ├── openai.js
│ │ ├── index.js
│ ├── .env
│ ├── package.json
│ ├── package-lock.json
│
├── frontend/
│ ├── vite-project/
│ │ ├── node_modules/
│ │ ├── public/
│ │ ├── src/
│ │ │ ├── assets/
│ │ │ ├── App.css
│ │ │ ├── App.jsx
│ │ │ ├── ChatInterface.jsx
│ │ │ ├── index.css
│ │ │ ├── LeadForm.jsx
│ │ │ ├── main.jsx
│ │ ├── .eslintrc.cjs
│ │ ├── .gitignore
│ │ ├── index.html
│ │ ├── package.json
│ │ ├── package-lock.json

## Setup and Installation

### Prerequisites

- Node.js
- MongoDB

### Backend Setup

1. Navigate to the `backend` directory.
2. Install dependencies:
    ```bash
    npm install
    ```
3. Create a `.env` file in the `backend` directory and add your MongoDB URI and OpenAI API key:
    ```
    MONGO_URI=mongodb://localhost:27017/leads
    OPENAI_API_KEY=your-openai-api-key
    ```
4. Start the backend server:
    ```bash
    node src/index.js
    ```

### Frontend Setup

1. Navigate to the `frontend/vite-project` directory.
2. Install dependencies:
    ```bash
    npm install
    ```
3. Start the frontend development server:
    ```bash
    npm run dev
    ```

## Usage

1. Open the frontend application in your browser (usually at `http://localhost:3000`).
2. Fill out the lead form with your details and submit it.
3. The chatbot will respond with information based on the products in the database and will interact with you to answer any queries.

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Make your changes and commit them (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a pull request.

## License

This project is licensed under the MIT License.

