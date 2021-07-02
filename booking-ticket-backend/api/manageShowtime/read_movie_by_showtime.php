<?php
// Headers
header('Access-Control-Allow-Origin: localhost:8000/api/manageShowtime/read_movie_by_showtime.php');
header('Content-Type: application/json');

include_once '../../config/Database.php';
include_once '../../models/ShowTime/ShowTime.php';
include_once '../../models/Theater/Theater.php';

// Instantiate DB & connect
$database = new Database();
$db = $database->connect();

// Instantiate blog movie object
$showtime = new ShowTime($db);
$theater = new Theater($db);

// Blog showtime query
$result_showtime = $showtime->read();
// Get row count
$num_showtime = $result_showtime->rowCount();

// Blog theater query
$result_theater = $theater->read();
// Get row count
$num_theater = $result_theater->rowCount();


if ($num_theater > 0) {

    $theater_showtime_arr = array();
    $theater_showtime = array();
    $showtimes_info = array();

    if ($num_showtime > 0) {
        // movie array
        $showtime_arr = array();
        global $showtime_arr;
        // $movies_arr['data'] = array();
    
        while ($rows_showtime = $result_showtime->fetch(PDO::FETCH_ASSOC)) {
            extract($rows_showtime);

            //var_dump($rows_showtime);
    
            $showtime = array(
                'showtime_id' => $showtime_id,
                'date_and_time' => $date_and_time,
                'ticket_price' => $ticket_price,
                'showtime_duration' => $showtime_duration,
                'movie_id' => $movie_id,
                'theater_id' => $theater_id,
            );
    
            // Push to "data"
            array_push($showtime_arr, $showtime);
        }
    }
    

    while ($rows_theater = $result_theater->fetch(PDO::FETCH_ASSOC)) {
        extract($rows_theater);

        // var_dump($rows_theater);
        
        foreach ($showtime_arr as $showtime) {
            
            if ($rows_theater['theater_id'] == $showtime['theater_id']) {
                array_push($showtimes_info, $showtime);
            }
        }

        if (empty($showtimes_info)){
            $showtime_info = array(
                'message' => 'No showtimes found'
            );
            array_push($showtimes_info, $showtime_info);
        }

        $theater_showtime = array(
            'theater_id' => $theater_id,
            'theater_name' => $theater_name,
            'theater_img' => $theater_img,
            'showtimes_info' => $showtimes_info
        );

        // Push to "data"        
        array_push($theater_showtime_arr, $theater_showtime);

        // Important
        $showtimes_info = array();
    }

    // Turn to JSON & output
    echo json_encode($theater_showtime_arr);

} else {
    // No movies
    echo json_encode(
        array('message' => 'No theaters Found')
    );
}
