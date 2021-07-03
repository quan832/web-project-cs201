<?php
// Headers
header('Access-Control-Allow-Origin: localhost:8000/api/manageMovie/read_single_movie.php');
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
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
// Blog movie query
$result = $movie->read();
// Get row count
$num = $result->rowCount();


// pass ID of the movie you want to get data.
function readSingleMovie($movie_id_param)
{

    global $num;
    global $result;

    // Check if any movies
    if ($num > 0) {

        $movie_item = array();


        while ($row = $result->fetch(PDO::FETCH_ASSOC)) {
            extract($row);

            if ($row['movie_id'] == $movie_id_param) {
                $movie_item = array(
                    'id' => $movie_id,
                    'name' => $movie_name,
                    'content' => html_entity_decode($aliases),
                    'trailerURL' => $trailer,
                    'imgURL' => $movie_img,
                    'premiereDate' => $premiere_date,
                    'rate' => $rate,
                );
                break;
            }
        }

        echo json_encode($movie_item);
    } else {
        // No movies
        echo json_encode(
            array('message' => 'No movies found')
        );
    }
}

readSingleMovie(4);
