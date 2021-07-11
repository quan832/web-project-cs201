# CS2O1 Project
## _GROUP 4_

Booking Movie Web is simple project that use react for frontend and php for server. It will display movies in database so users can choose movie they want and book time and seat in theater. Let me introduce some stack and feature in my project 

### TECH

- Frontend: [React](https://reactjs.org/), [Redux](https://redux.js.org/) [Redux Saga](https://redux-saga.js.org/) for manage state, [axios](https://www.npmjs.com/package/axios) for call API, react-router-dom, ..,
- Backend: RESTAPI by PHP, authentication by JWT, ...
- Database: MYSQL in phpmyAdmin

## Features

- User can **login** and **register** 
- **Show movies** recently and **detail movie** with content, premiere date, star, and name
- A ticket page with all showtime from many theater, user can **choose theater nearby their home & the time** they free 
- **Show status and all seat** is exist or not and user can **book their ticket** and status immediately change booked status


## Installation

Booking Ticket requires [Node.js](https://nodejs.org/) v10+ and [Composer](https://getcomposer.org/) to run


- Start Database

```sh
run xampp
load sql file in phpmyadmin
```

- Start the server.

```sh
cd server
php -S localhost:8000
```

- Install the dependencies and devDependencies and 
```sh
cd client
npm i
npm start
```


## API

Booking movie is currently extended with the following API.
Instructions on how to use them in your own application are linked below.

| API | Link **(/api)** |
| ------ | ------ |
| /manageMovie | **GET Showtime by movie ID**: /read_showtime_theater_by_movie.php |
|             | **GET Movies**: /read.php |              
|             | **GET Single Movie**: /read_single_movie.php |       
| /manageSeat | **POST Bookseat**: /seat_reservation.php |
| /manageShowtime | **GET Movie by showtime ID**: /read_movie_by_showtime.php |
|                 | **GET Seats by showtime ID**: /read_seat_by_showtime.php |              
|                 | **GET showtimes**: /read.php |          
| /manageTheater | **GET theaters**: /read.php |
|/manageSeat | **POST login**: /login.php |
|            | **POST register**: /register.php |

## Database

<img width="959" alt="db" src="https://user-images.githubusercontent.com/72009774/125190611-3ba3d180-e268-11eb-846e-729e2bcb738e.png">




## Manage Process in Project

We use [Clickup](https://clickup.com/) to divide work and tasks for each team member. 

You can watch my process and task in here [Process](https://sharing.clickup.com/b/h/4-5949856-2/5660f074803c2cf)


## Contributing
5 member:

- Huỳnh Thiên Ân - 1959001
- Nguyễn Sơn Thiện - 1959037
- Trần Hồng Quân - 1959030
- Phan Nguyễn Đức Trọng - 1959045
- Đ0ặng Minh Triết - 1959042



