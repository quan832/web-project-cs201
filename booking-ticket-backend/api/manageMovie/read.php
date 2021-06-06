<?php
// Headers
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

include_once '../../config/Database.php';
include_once '../../models/Movie/Movie.php';

// Instantiate DB & connect
$database = new Database();
$db = $database->connect();

// Instantiate blog movie object
$movie = new Movie($db);

// Blog movie query
$result = $movie->read();
// Get row count
$num = $result->rowCount();

// Check if any movies
if ($num > 0) {
    // movie array
    $movies_arr = array();
    // $movies_arr['data'] = array();

    while ($row = $result->fetch(PDO::FETCH_ASSOC)) {
        extract($row);

        $movie_item = array(
            'id' => $movie_id,
            'name' => $movie_name,
            'content' => html_entity_decode($aliases),
            'trailerURL' => $trailer,
            'imgURL' => $movie_img,
            'premiereDate' => $premiere_date,
            'rate' => $rate,
        );

        // Push to "data"
        array_push($movies_arr, $movie_item);
        // array_push($movies_arr['data'], $movie_item);
    }

    // Turn to JSON & output
    echo json_encode($movies_arr);
} else {
    // No movies
    echo json_encode(
        array('message' => 'No movies Found')
    );
}
