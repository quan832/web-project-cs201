<?php
// Headers
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

include_once '../../config/Database.php';
include_once '../../models/Theater/Theater.php';

// Instantiate DB & connect
$database = new Database();
$db = $database->connect();

// Instantiate blog movie object
$movie = new Theater($db);

// Blog movie query
$result = $movie->read();
// Get row count
$num = $result->rowCount();

// Check if any movies
if ($num > 0) {
    // movie array
    $theater_arr = array();
    // $movies_arr['data'] = array();

    while ($row = $result->fetch(PDO::FETCH_ASSOC)) {
        extract($row);

        $theater = array(
            'theater_id' => $theater_id,
            'theater_name' => $theater_name,
            'theater_img' => $theater_img
        );

        // Push to "data"
        array_push($theater_arr, $theater);
        // array_push($movies_arr['data'], $movie_item);
    }

    // Turn to JSON & output
    echo json_encode($theater_arr);
} else {
    // No movies
    echo json_encode(
        array('message' => 'No theaters Found')
    );
}
