# Todo List

## Overview

This is a simple todo list application built with React and Material-UI. The application allows users to add, edit, delete, and mark tasks as complete or incomplete. Tasks can be filtered by status (All, Open, Closed), and the interface is designed to be clean and responsive.

## Features

- **Add New Task**: Allows users to add a new task with a name and description.
     - **Task Name**: Mandate Field.
     - **Description Name**: Optional Field.
- **Edit Task**: Users can edit existing tasks.
- **Delete Task**: Users can delete tasks.
- **Mark Task as Complete**: Users can mark tasks as completed or uncompleted.
- **Filter Tasks**: Users can filter tasks by status: All, Open (incomplete), or Closed (completed).
- **Responsive Design**: The application is fully responsive and works well on different screen sizes.

## Design Choices

1. **Material-UI for Styling**:
   - **Consistency and Customization**: Material-UI components were chosen to provide a consistent and professional look and feel. The components were customized to match a specific color scheme and design language.
   - **Modularity**: Using Material-UI's theming capabilities allows for easy adjustments and scaling as the application grows.

2. **Component Structure**:
   - **TaskHeader**: This component contains the header, including the title and the "New Task" button. It also includes the filter chips for switching between different task views.
   - **TaskForm**: This modal form is used for both adding new tasks and editing existing ones. The form includes validation to ensure that task names are not empty.
   - **TaskItem**: Represents an individual task with options to mark it as complete, edit, or delete it.
   - **TaskList**: Renders a list of `TaskItem` components. This component is responsible for mapping over the tasks and passing down necessary props to each `TaskItem`.

3. **State Management**:
   - **Use of React's `useState`**: State is managed at the `TaskManager` level, which ensures that all components have access to the necessary data and actions.

4. **Validation**:
   - **Task Name Validation**: The task name field is validated to ensure it is not empty. If the user tries to save a task without a name, an error message is displayed.

## Setup Instructions

### Prerequisites

- **Node.js** (v12 or higher) and **npm** installed on your machine.

### Steps

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/PoonamChauhan229/Interview_Task_To_do_List.git
   cd Interview_Task_To_do_List
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   npm install @mui/material @emotion/react @emotion/styled
   npm install @mui/icons-material
   ```

3. **Start the Development Server**:
   ```bash
   npm run dev
   ```
   This will start the development server on `http://localhost:5173`.
   This is hosted at netlify on `https://todomui229.netlify.app/`



### Folder Structure

- **src/**: Contains the source code.
  - **components/**: Contains all the React components (`TaskHeader.js`, `TaskForm.js`, `TaskItem.js`, `TaskList.js`).
  - **App.js**: The main entry point for the React application.
  - **index.js**: The entry point for React DOM rendering.

### Advanced Features

- **Validation**: The `TaskForm` component includes validation logic to ensure that task names are not left empty.
- **State Management**: The application effectively manages state across different components using React's `useState` hook, ensuring that changes are reflected across the UI in real-time.
- **Responsive Design**: The application layout adjusts dynamically to different screen sizes, providing an optimal user experience on both desktop and mobile devices.

---
# Task_To_Do_List-09-10-2025
