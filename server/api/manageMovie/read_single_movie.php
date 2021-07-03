<?php
// Headers
header('Access-Control-Allow-Origin: localhost:8000/api/manageMovie/read_single_movie.php');
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

header('Access-Control-Allow-Origin: *');

header('Access-Control-Allow-Methods: GET, POST');

header("Access-Control-Allow-Headers: X-Requested-With");

include_once '../../config/Database.php';
include_once '../../models/Movie/Movie.php';

// Instantiate DB & connect
$database = new Database();
$db = $database->connect();

// Instantiate blog movie object
$movie = new Movie($db);

// get posted data
$data = $_GET['id'];
$movie->movie_id = $data;
// var_dump("The movie id you pass: " . $movie->movie_id);
$result = $movie->read_single($movie->movie_id);

if ($result->rowCount() == 1) {

    $row = $result->fetch(PDO::FETCH_ASSOC);

    $single_movie = array(
        'id' => $row['movie_id'],
        'name' => $row['movie_name'],
        'content' => html_entity_decode($row['aliases']),
        'trailerURL' => $row['trailer'],
        'imgURL' => $row['movie_img'],
        'premiereDate' => $row['premiere_date'],
        'rate' => $row['rate'],
    );

    echo json_encode($single_movie);
    
} else {
    // No movies
    echo json_encode(
        array('message' => 'No movies found')
    );
}