
# Payment Flow App

This is a small app that simulates a payment flow for a company. Built as a showcase of different technologies and based on a technical challenge.

Below are two videos explaining the decisions made during the development. The first video goes over the product, and the second video shows how the code is structured.

### Product explanation :
[![Watch the video](https://img.youtube.com/vi/LaqsBrz2Hyg/0.jpg)](https://www.youtube.com/watch?v=LaqsBrz2Hyg)

### Technical explanation :
[![Watch the video](https://img.youtube.com/vi/U4twjmc28s0/0.jpg)](https://www.youtube.com/watch?v=U4twjmc28s0)

## Deployment

The app is deployed on Vercel and can be tested at this URL: [Payment Flow](https://paymentsflow.vercel.app/)

## Running Locally

To run the application locally, follow these steps:

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Running Tests

The application comes with tests that can be run using:
```bash
npm run test
```

## Notable Features

- **Lighthouse Score**: The app scores a 100 in all metrics measured in Lighthouse.

- **Vercel Integration**: Fully integrated and deployed with Vercel, having linked the GitHub repository and getting automatic deploys on each push to production.

- **Using Latest Standards**: Using Next.js and React latest versions. Making use of the new App Router routing.

- **Responsive Design**: Responsive designs were applied and the app works on all different screen sizes.

- **High Test Coverage**: The app has tests for every single page and considers multiple flow scenarios. In a real-case scenario, more depth into all the possible flow paths could have been added.


## Important Considerations

- **Technologies Used**: Some of the technologies used for the challenge were Next.js, Typescript, Redux, Jest, Tailwind and Vercel for deploy. 

- **Mocked Endpoints**: This app was built as a showcase of frontend and for that reason the actual calls to the endpoints that would happen to fetch the user info and do the payment are currently mocked.

- **Designs**: Figma designs provided with the challenge were used, some of the ones of Desktop were missing so mobile was used as a reference. 

- **Data Storage**: The app uses Redux for data storage, meaning that when there is a reload, everything starts fresh. In a real scenario, this could be linked to a database or API to get the last added info, or stored info from the user. The same cleaning of the Redux state happens when the user completes the flow as a way to reset it.

- **Header Routing**: The logo in the header can be used as a redirect to the login screen and is useful for testing the flow.

- **Timeframe**: The challenge was meant to be completed within 4 hours, so the number of features was limited.


## Future Improvements

- **Better Inputs**: With more time, more formats could have been added for some specific inputs such as the Expire Date (automatic / separator) and the Credit Card Number (split in sections of 4). Also, validation for "valid dates" could have been added to the date. Finally, other inputs such as the zip code could have been linked to an API to check if they are valid.

- **UI Kit**: I did separate many of the UI components to make them reusable. In a real-case scenario, this would have probably been part of a separate UI Kit with its own storybook and behaviors as a way to improve future development.

- **Login System**: Add a login for the different parties and show a different UI based on the logged-in users. Each user would see the corresponding amount they need to pay.

- **Persistent Data**: Make the data persistent using a database and a small API.

- **Components Refactor**: There is a lot of room for improvement in the components. With more time, I would have tried something more modular and reusable.





