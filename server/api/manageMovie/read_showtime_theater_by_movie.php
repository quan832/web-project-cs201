<?php
// Headers
header('Access-Control-Allow-Origin: localhost:8000/api/manageMovie/read_showtime_theater_by_movie.php');
header('Content-Type: application/json');
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

header('Access-Control-Allow-Origin: *');

header('Access-Control-Allow-Methods: GET, POST');

header("Access-Control-Allow-Headers: X-Requested-With");

include_once '../../config/Database.php';
include_once '../../models/ShowTime/ShowTime.php';
include_once '../../models/Theater/Theater.php';
include_once '../../models/Movie/Movie.php';

// get posted data
$movie_id = $_GET['movie_id'];

// Instantiate DB & connect
$database = new Database();
$db = $database->connect();

// Instantiate blog movie object
$showtime = new ShowTime($db);
$movie = new Movie($db);
$theater = new Theater($db);


$result_movie = $movie->read_single($movie_id);
$num_movie = $result_movie->rowCount();


// $result_theater = $theater->read();


if ($num_movie == 1) {

    $array_showtime = array();

    $array_theater = array();
    $array_theater_id = array();

    $row_movie = $result_movie->fetch(PDO::FETCH_ASSOC);


    // Get the showtimes for the movie
    $result_showtime = $showtime->read();
    $num_showtime = $result_showtime->rowCount();

    if ($num_showtime > 0) {

        while ($row_showtime = $result_showtime->fetch(PDO::FETCH_ASSOC)) {
            extract($row_showtime);

            if ($row_showtime['movie_id'] == $row_movie['movie_id']) {
                $showtime_need = array(
                    'showtime_id' => $row_showtime['showtime_id'],
                    'date_and_time' => $row_showtime['date_and_time'],
                    'ticket_price' => $row_showtime['ticket_price'],
                    'showtime_duration' => $row_showtime['showtime_duration'],
                );

                array_push($array_theater_id, $row_showtime['theater_id']);
                array_push($array_showtime, $showtime_need);
            }
        }

    } 
    if (empty($array_showtime)) {
        // $message = "No showtimes found";
        $array_showtime = array('message' => "No showtimes found");
    }


    // Get the theaters for the movie
    $theater_length = count($array_theater_id);
    if ($theater_length > 0) {
        for ($i = 0; $i < $theater_length; $i++) {
        
            $result_theater = $theater->read_single($array_theater_id[$i]);
    
            $row_theater = $result_theater->fetch(PDO::FETCH_ASSOC);
    
            $theater_need = array(
                'theater_id' => $row_theater['theater_id'],
                'theater_name' => $row_theater['theater_name'],
                'theater_img' => $row_theater['theater_img']
            );
    
            array_push($array_theater, $theater_need);
        }
    }
    else {
        // $message = "No theaters found";
        $array_theater = array('message' => "No theaters found");
    }


    $movie_need = array(
        'id' => $row_movie['movie_id'],
        'name' => $row_movie['movie_name'],
        'content' => html_entity_decode($row_movie['aliases']),
        'trailerURL' => $row_movie['trailer'],
        'imgURL' => $row_movie['movie_img'],
        'premiereDate' => $row_movie['premiere_date'],
        'rate' => $row_movie['rate'],
        'showtimes_info' => $array_showtime,
        'theaters_info' => $array_theater
    );

    echo json_encode($movie_need);


    $array_showtime = array();
    $array_theater = array();
    $array_theater_id = array();

} else {
    // No movies
    echo json_encode(
        array('message' => 'No movies found')
    );
}
?>