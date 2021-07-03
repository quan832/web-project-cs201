<?php
// Headers
header('Access-Control-Allow-Origin: localhost:8000/api/manageShowtime/read_seat_by_showtime.php');
header('Content-Type: application/json');

include_once '../../config/Database.php';
include_once '../../models/ShowTime/ShowTime.php';
include_once '../../models/Seat/Seat.php';

// Instantiate DB & connect
$database = new Database();
$db = $database->connect();

// Instantiate blog movie object
$showtime = new ShowTime($db);
$seat = new Seat($db);

// Blog showtime query
$result_showtime = $showtime->read();
// Get row count
$num_showtime = $result_showtime->rowCount();

// Blog seat query
$result_seat = $seat->read();
// Get row count
$num_seat = $result_seat->rowCount();


function read_seats_for_showtime($showtime_param) {

    global $num_showtime;
    global $num_seat;
    global $result_seat;
    global $result_showtime;


    if ($num_showtime > 0) {

        $showtime_need = array();
        global $showtime_need;

        // Take the seats for the showtime you need
        if ($num_seat > 0) {
            $seat_arr = array();
            // global $seat_arr;

            while($rows_seat = $result_seat->fetch(PDO::FETCH_ASSOC)) {
                extract($rows_seat);

                if ($rows_seat['showtime_id'] == $showtime_param) {
                    $seat = array(
                        'seat_id' => $rows_seat['seat_id'],
                        'seat_type' => $rows_seat['seat_type'],
                        'seat_price' => $rows_seat['seat_price']
                    );

                    // Push to "data"
                    array_push($seat_arr, $seat);
                }
            }
        }

        // No seat for the showtime you need
        if (empty($seat_arr)){
            $seat = array(
                'message' => 'No seats found'
            );
            array_push($seat_arr, $seat);
        }

        // Take the showtime you need
        while ($row_showtime = $result_showtime->fetch(PDO::FETCH_ASSOC)) {

            extract($row_showtime);

            if ($row_showtime['showtime_id'] == $showtime_param) {

                $showtime_need = array(
                    'showtime_id' => $row_showtime['showtime_id'],
                    'date_and_time' => $row_showtime['date_and_time'],
                    'ticket_price' => $row_showtime['ticket_price'],
                    'showtime_duration' => $row_showtime['showtime_duration'],
                    'movie_id' => $row_showtime['movie_id'],
                    'seats_info' => array($seat_arr)
                );
                break;
            }
        }

        echo json_encode($showtime_need);

        $seat_arr = array();

    } else {
        // No showtime
        echo json_encode(
            array('message' => 'No showtimes found')
        );
    }
}

read_seats_for_showtime(1);
?>