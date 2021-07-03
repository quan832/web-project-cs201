<?php
// Headers
header('Access-Control-Allow-Origin: localhost:8000/api/manageShowtime/read_seat_by_showtime.php');
header('Content-Type: application/json');

include_once '../../config/Database.php';
include_once '../../models/ShowTime/ShowTime.php';
include_once '../../models/Seat/Seat.php';
include_once '../../models/Movie/Movie.php';

// Instantiate DB & connect
$database = new Database();
$db = $database->connect();

// Instantiate blog movie object
$showtime = new ShowTime($db);
$seat = new Seat($db);
$movie = new Movie($db);


// get posted data
$showtime_id = $_GET['showtime_id'];


// Blog showtime query
$result_showtime = $showtime->read_single($showtime_id);
// Get row count
$num_showtime = $result_showtime->rowCount();

// Blog seat query
$result_seat = $seat->read();
// Get row count
$num_seat = $result_seat->rowCount();


if ($num_showtime == 1) {

    $row_showtime = $result_showtime->fetch(PDO::FETCH_ASSOC);

    // get the movie name
    $result_movie = $movie->read_single($row_showtime['movie_id']);
    $row_movie = $result_movie->fetch(PDO::FETCH_ASSOC);
    $movie_name = $row_movie['movie_name'];


    // get seats 
    $seat_arr = array();

    while($rows_seat = $result_seat->fetch(PDO::FETCH_ASSOC)) {
        extract($rows_seat);

        if ($rows_seat['showtime_id'] == $row_showtime['showtime_id']) {
            $seat = array(
                'seat_id' => $rows_seat['seat_id'],
                'seat_type' => $rows_seat['seat_type'],
                'seat_price' => $rows_seat['seat_price'],
                'seat_status' => $rows_seat['seat_status']
            );

            array_push($seat_arr, $seat);
        }
    }

    // info for the showtime you need
    $showtime_need = array(
        'showtime_id' => $row_showtime['showtime_id'],
        'date_and_time' => $row_showtime['date_and_time'],
        'ticket_price' => $row_showtime['ticket_price'],
        'showtime_duration' => $row_showtime['showtime_duration'],
        'movie_id' => $row_showtime['movie_id'],
        'movie_name' => $movie_name,
        'seats_info' => $seat_arr
    );

    echo json_encode($showtime_need);

    $seat_arr = array();

} else {
    // No showtime
    echo json_encode(
        array('message' => 'No showtimes found')
    );
}
?>