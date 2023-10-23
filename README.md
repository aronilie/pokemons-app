# Pokemon App

**Description:**  
The Pokemon App allows users to explore the list of Pokemon from the first generation and mark their favourites. The app provides a simple and optimized experience for users to view Pokemon details and manage their favourite Pokemon.

## Install and Run the App

To install and run the app, follow these steps:

1. Install all dependencies:

   ```bash
   npm install
   ```

1. Run the app:
   ```bash
   npm start
   ```

## Functionality

- **Pokemons List Page**: Displays a list of all Pokemon from the first generation.
- **Set as favourite**: Users can mark a Pokemon as their favourite.
- **Pokemon favourite Page**: Lists the favourite Pokemon.

## Features & Performance

**Efficient Data Loading**: Pokemon data is loaded once and then managed through app context for efficient access.

**Custom Hooks**: Utilizes custom hooks to manage application data and state.

**Feedback**: Provides user-friendly feedback for data load and errors.

**Optimized Navigation**: Ensures fast navigation and rendering between components.

**Minimal Rerendering**: Prevents unnecessary component re-renders for improved performance.

**Responsive Design**: The application is designed to be fully responsive, ensuring a seamless experience on various screen sizes and devices.

## Tests

The application has been thoroughly tested with Jest and React Testing Library, covering at least 90% of the codebase. To run the tests, use the following command:

```bash
  npm run test
```

## Custom Webpack Implementation

This app uses a custom Webpack implementation for a tailored build process, optimizing performance and resource utilization, instead of create-react-app or similar packages.

## Third Party Libraries

- **ESLint**: The app uses ESLint as a linter to ensure code quality.
- **Styled-Components**: Styled-Components is used for styling, allowing for efficient and maintainable CSS-in-JS.
