<?php

class Seat
{
    private $conn;
    private $table_name = "seats";
    // Properties

    public $seat_id;
    public $seat_type;
    public $seat_price;
    public $seats = [];

    public function __construct($conn)
    {
        $this->conn = $conn;
    }

    public function read()
    {
        $sql = 'SELECT seat_id, seat_type, seat_price, showtime_id, seat_status 
                FROM ' . $this->table_name . 
                ' ORDER BY seat_id ASC';

        // Prepare statement
        $stmt = $this->conn->prepare($sql);

        // Execute query
        $stmt->execute();

        return $stmt;
    }

    // Function update seat_status in seats table 
    public function updateSeatStatus($array_seat) {
        for ($i = 0; $i <= count($array_seat); $i++) {
            $sql = "UPDATE " . $this->table_name . " SET seat_status = 1 WHERE seat_id = :seat_id;";

            $this->seat_id = $array_seat[$i];
            
            $stmt = $this->conn->prepare($sql);
            $stmt->bindParam(":seat_id", $this->seat_id);
            $stmt->execute();
        }
    }
}
?>