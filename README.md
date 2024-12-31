# Insurance Policy Management System - Frontend

This project is a simple Insurance Policy Management System built using Angular for the front-end. It allows users to display, add, edit, and delete insurance policies through a user-friendly interface.

## Features

- **Display Policies**: View a list of all insurance policies.
- **Add Policy**: Create new insurance policies.
- **Edit Policy**: Modify existing insurance policies.
- **Delete Policy**: Remove insurance policies from the list.

## Technologies Used

- Angular: Front-end framework for building the user interface.
- TypeScript: Programming language used for Angular development.
- HTML/CSS: Markup and styling for the application.

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine.
- Angular CLI installed globally. You can install it using the following command:

  npm install -g @angular/cli

### Installation

1. Clone the repository:

   git clone https://github.com/kennedy-273/Insurance-Management-System-.git

2. Navigate to the  directory:

   cd Insurance-Management-System

3. Install the dependencies:

   npm install

### Running the Application

To start the Angular application, run the following command:

npm start

[Uploading Screencast from 2024-12-31 23-44-37.webm…]()

Have used json sever to test the endpoint run this command

json-server --watch db.json

you will see this endpoints if not running change it to be specif port i am using 3008
navigate to service folder and add the endpoint to employee.service.ts

http://localhost:3008/posts
http://localhost:3008/comments
http://localhost:3008/profile
http://localhost:3008/insurances


The application will be available at `http://localhost:4200`.

## Folder Structure

- `src/app/components/app-component.html`: Contains the components for displaying the list of policies.
- `src/app/components/emp-add-edit`: Contains the components for adding and editing policies.
- `src/app/services`: Contains the service for making API calls to the back-end.
- `src/app/app.module.ts`: Main module of the application.
- `src/app/app.component.ts`: Root component of the application.




