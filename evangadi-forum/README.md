# Evangadi Forum Frontend

The frontend of the Evangadi Forum application, built with React and Vite. Users can register, log in, browse questions, post questions, view question details, and share answers with the community.

## Features

- User registration and login
- Display of the logged-in user's name
- Home page displaying questions fetched from the backend API
- Navigation to the Ask Question page
- Form to submit questions with a title and description
- Question details page displaying the question and its answers
- Form to post answers to questions
- Automatic display of newly posted answers without refreshing the page
- Loading indicator while answers are being fetched
- Feedback messages for successful and failed submissions
- Client-side navigation using React Router

## Technologies Used

- **React**: Building the user interface
- **Vite**: Development server and build tool
- **React Router**: Client-side routing and navigation
- **Axios**: HTTP requests to the backend API
- **React Icons**: Icons used throughout the interface
- **CSS**: Styling and responsive layout

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

The frontend communicates with the Evangadi Forum backend API for authentication, questions, and answers.

The backend repository is available here:

[**Evangadi Forum Backend**](https://github.com/abiy-71/evangadi-forum-backend)

Before using the application, make sure the backend server is running and the Axios configuration points to the correct API base URL for your environment.

Follow the backend repository's instructions to configure its database, environment variables, and server.

## Project Status

**Completed:** The frontend's core features for authentication, browsing and posting questions, viewing question details, and posting answers have been implemented.

