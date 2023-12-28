# Little Lemon Restaurant

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![React Hook Form](https://img.shields.io/badge/React%20Hook%20Form-%23EC5990.svg?style=for-the-badge&logo=reacthookform&logoColor=white)
![Jest](https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white)
![Testing-Library](https://img.shields.io/badge/-TestingLibrary-%23E33332?style=for-the-badge&logo=testing-library&logoColor=white)
![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)
![Figma](https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white)
![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)

This repository contains the final capstone project developed as part of the **Meta Front-End Developer Certification**. Little Lemon Restaurant is a responsive single-page application featuring various sections such as Home, About, Menu, Reservation, Login, and Order Online. The project aims to showcase front-end development skills, implementing functionality per Meta course requirements, employing industry-standard tools and libraries and incorporating design elements provided by the Meta course (pictures, a style guide, and a design for the homepage in the mobile version in Figma). There were no code snippets provided by the Meta course, reinforcing the independent realization of the supplied design elements and requirements.

## Pages

- **Home Page**: Includes an advertisement hero and specials promotions.
- **About Page**: Highlights the restaurant's identity (displayed in a carousel) and includes testimonials from satisfied customers.
- **Menu Page**: Displays a variety of dishes from Mediterranean cuisine.
- **Reservation Page**: Features a reservation form and a "live" list of available tables for the next ten days. Includes mock reservation functionality with confirmation.
- **Login Page**: A placeholder for future user authentication functionality.
- **Order Online Page**: A placeholder for future online ordering functionality.

## Libraries Used

**Font Awesome** library for icons
**React Testing** library and **Jest** for unit testing
**React Hook Form** library for form state management and validation
**React Router** library for navigation throughout the single-page application

## How to Install and Run the Project

Clone the repository: git clone https://github.com/OlesyaMalaya/little-lemon-capstone.git
Install dependencies: npm install
Run the development server: npm start
Run unit tests: npm test

## Project Structure

The directory tree (excluding "node modules", "public" and pictures in the assets folder):

| App.css
| App.js
| index.js
| reportWebVitals.js
| router.jsx
| setupTests.js
|
+---api
| api.js
|
+---assets
|
+---components
| +---Bookings
| | Bookings.jsx
| | Bookings.module.css
| |
| +---Carousel
| | Carousel.jsx
| | Carousel.module.css
| |
| +---ConfirmedBooking
| | ConfirmedBooking.jsx
| | ConfirmedBooking.module.css
| |
| +---DishCard
| | DishCard.jsx
| | DishCard.module.css
| |
| +---Forms
| | BookingForm.jsx
| | BookingSlots.jsx
| | Form.module.css
| |
| +---Hero
| | Hero.jsx
| | Hero.module.css
| |
| +---Loader
| | Loader.jsx
| | Loader.module.css
| |
| \---Testimonial
| Testimonial.jsx
| Testimonial.module.css
|
+---data
| dates.js
| dishes.js
| heroes.js
| images.js
| infos.js
| mocks.js
| routes.js
| testimonials.js
| validation.js
|
+---layouts
| +---Footer
| | Footer.jsx
| | Footer.module.css
| |
| +---Header
| | Header.jsx
| | Header.module.css
| |
| +---Layout
| | Layout.jsx
| |
| \---TilesView
| TilesView.jsx
|
+---pages
| +---AboutPage
| | AboutPage.jsx
| |
| +---HomePage
| | HomePage.jsx
| |
| +---LoginPage
| | LoginPage.jsx
| |
| +---MenuPage
| | MenuPage.jsx
| |
| +---OrderPage
| | OrderPage.jsx
| |
| \---ReservationPage
| ReservationPage.jsx
| ReservationPage.module.css
|
+---utils
| convertDate.js
| createDate.js
| createFakeData.js
| updateBookings.js
| updateTimes.js
|
\---tests
| Bookings.test.jsx
| BookingSlots.test.jsx
| ReservationPage.test.jsx
\------BookingFormTests
| Attributes.test.jsx
| CommentValidation.test.jsx
| DateValidation.test.jsx
| EmailValidation.test.jsx
| GuestsValidation.test.jsx
| NameValidation.test.jsx
| TimeValidation.test.jsx
