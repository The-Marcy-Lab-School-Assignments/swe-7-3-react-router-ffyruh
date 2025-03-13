## Technical Checklist

There are 18 tasks to complete and 1 bonus.

Your goal is to meet at least 75% of these requirements to complete the assignment. But don't stop there! Shoot for 100%!

**Functionality**
- [x] Navigating to `/` renders the `BotsPage`
- [x] Clicking on a robot navigates the user to `/robots:/id` where `:id` is the id of the clicked robot.
- [x] Navigating to `/robots/:id` renders the `BotSpecsPage`
- [x] The `BotSpecsPage` renders the robot whose `id` matches the `:id` portion of the URL
- [x] Navigating to any other URL renders the `NotFoundPage` component
- [x] Wherever the `GoHomeButton` component is rendered, clicking on the button navigates the user back to the `/` page.

**React Fundamentals**
- [x] Uses `BrowserRouter` in `main.jsx` to provide routing to the entire `App`
- [x] Uses `Routes` in `App.jsx` to render multiple Routes
- [x] Uses `Route` to render a component based on the URL
- [x] Uses `Link` in `GoHomeButton.jsx` to render a component that redirects the user upon click
- [x] Uses `useParams` in `BotSpec.jsx`to get the `id` value from the URL
- [x] Uses `useState` in `BotSpec.jsx` to set up `robot` and `error` state for fetching
- [x] Uses `useEffect` in `BotSpec.jsx` to fetch the robot according to the `id`
- [x] Injects `robot` data into the `BotSpec` component using proper JSX syntax
- [x] Renders fallback components in the event that the fetch fails or a robot is not found.
- [x] Uses `useNavigate` in `BotCard.jsx` to programmatically redirect the user to the home page.

**Miscellaneous**
- [x] Props are extracted in child components using destructuring
- [x] At no point did you ever use any vanilla DOM JS methods (e.g. `document.querySelector` or `document.createElement`)
- [ ] Bonus: Your project has some extra CSS styling!
