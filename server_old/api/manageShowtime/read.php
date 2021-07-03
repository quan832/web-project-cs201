<?php
// Headers
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

include_once '../../config/Database.php';
include_once '../../models/ShowTime/ShowTime.php';

// Instantiate DB & connect
$database = new Database();
$db = $database->connect();

// Instantiate blog movie object
$showtime = new ShowTime($db);

// Blog movie query
$result = $showtime->read();
// Get row count
$num = $result->rowCount();

// Check if any movies
if ($num > 0) {
    // movie array
    $showtime_arr = array();
    // $movies_arr['data'] = array();

    while ($row = $result->fetch(PDO::FETCH_ASSOC)) {
        extract($row);

        $showtime = array(
            'showtime_id' => $showtime_id,
            'date_and_time' => $date_and_time,
            'ticket_price' => $ticket_price,
            'showtime_duration' => $showtime_duration,
            'movie_id' => $movie_id,
            'theater_id' => $theater_id,
            'seat_id' => $seat_id
        );

        // Push to "data"
        array_push($showtime_arr, $showtime);
        // array_push($movies_arr['data'], $movie_item);
    }

    // Turn to JSON & output
    echo json_encode($showtime_arr);
} else {
    // No movies
    echo json_encode(
        array('message' => 'No showtimes Found')
    );
}
