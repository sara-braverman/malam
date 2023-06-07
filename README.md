# Node.js and React Project

This project is a full-stack web application that allows users to create, view, and update house records. The project is built using Node.js and React, and uses the Sequelize ORM for database access.

## Backend Development

To set up the backend of the project, follow these steps:

1. Clone the repository to your local machine.
2. Install the required dependencies using the npm install command.
3. Set up a MySql database and run the database named 'malam' on port 3306.
5. Start the Node.js server using the node app.js command.

The backend of the project includes a House model with the following attributes:

- id: Integer (Primary Key)
- address: String
- currentValue: Float
- loanAmount: Float
- risk: Float (A risk percentage for loan)

The following API endpoints are implemented:

- POST /api/houses to create a new house record in the database.
- GET /api/houses/:id to fetch a house record.
- PUT /api/houses/:id to update a house record.

## Frontend Development

To set up the frontend of the project, follow these steps:

1. Navigate to the frontend directory.
2. Install the required dependencies using the npm install command.
3. Start the React development server using the npm start command.

The frontend of the project includes a form to submit a new house record, and a house detail view page to view and update house records. The following features are implemented:

- The form includes fields for address and current value. Upon form submission, a request is made to the POST /api/houses endpoint, route - /addHouse.
- The newly created house's ID is shown to the user after submission, along with a link to navigate to the house detail view page, route - /house/:id.
- The house detail view page fetches the house's details via the GET /api/houses/:id endpoint and displays the loanAmount and risk.
- A form is implemented to update the house's details via the PUT /api/houses/:id endpoint.

## Algorithm Implementation

The project includes a simplistic risk calculation model based on the following:

- The risk attribute is calculated as the ratio of loanAmount to currentValue.
- If the loanAmount is more than 50% of the currentValue, the risk is increased by an additional 10%.
- The risk is a value between 0 and 1.
- The POST /api/houses endpoint automatically calculates the risk when a new house record is created.
- The PUT /api/houses/:id endpoint recalculates the risk whenever a house's currentValue or loanAmount is updated.

## Integration

The backend and frontend of the project are integrated using API requests. The frontend makes requests to the backend API endpoints to create, view, and update house records.
