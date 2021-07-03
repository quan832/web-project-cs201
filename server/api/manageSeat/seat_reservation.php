<?php
// Headers
header('Access-Control-Allow-Origin: localhost:8000/api/manageSeat/seat_reservation.php');
header('Content-Type: application/json');

include_once '../../config/Database.php';
include_once '../../models/Seat/Seat.php';

// Instantiate DB & connect
$database = new Database();
$db = $database->connect();

// Instantiate blog movie object
$seat = new Seat($db);

// get posted data
$data = json_decode(file_get_contents("php://input"));

// Take the array of seats
$seats = $data->array_seat;

if (!empty($seats)) {
    // Update the seat_status 
   $seat->updateSeatStatus($seats);

    // set response code
    http_response_code(200);

    echo json_encode(
        array(
            "message" => "Seats are successfully booked."
        )
    );
} else {
    
    // set response code
    http_response_code(401);
 
    // tell the user login failed
    echo json_encode(array("message" => "Failed."));
}



