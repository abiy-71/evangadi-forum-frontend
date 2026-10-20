# Evangadi Forum Frontend

The frontend of the Evangadi Forum application, built with React and Vite. The application allows users to authenticate and view questions retrieved from the backend API.

## Features

### Implemented
- User registration and login
- Home page displaying questions fetched from the backend
- Display of the logged-in user's name
- Ask Question button on the Home page
- Ask question page prompting the user to insert question title and description
- Posting a question

### In Progress
- Implementing question details and answers

## Technologies Used

- **React** – Building the user interface
- **Vite** – Development server and build tool
- **React Router** – Client-side navigation
- **Axios** – Making HTTP requests to the backend API
- **React Icons** – Icons used in the interface

## Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/)
- npm, which is included with Node.js

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/abiy-71/evangadi-forum-frontend.git
   ```

2. Navigate into the project directory:

   ```bash
   cd evangadi-forum-frontend
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open the local URL displayed in your terminal, usually `http://localhost:5173`.

## Backend Configuration

The frontend communicates with the Evangadi Forum backend API to retrieve questions and authenticate users.

Before running the application, make sure the backend is configured and running.

The backend repository is available at:

[evangadi-forum-backend](https://github.com/abiy-71/evangadi-forum-backend)

The frontend's API configuration must point to the backend server. Check your Axios configuration file to confirm the correct base URL for your local setup.

## Project Status

The project is actively being developed. The Home page and authentication functionality are implemented and also the ask question page, while the question details with answers page is still in progress.


