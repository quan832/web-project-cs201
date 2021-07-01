<?php

class Seat
{
    private $conn;
    private $table_name = "seats";
    // Properties

    public $seat_id;
    public $seat_type;
    public $seat_price;

    public function __construct($conn)
    {
        $this->conn = $conn;
    }

    public function read()
    {
        $sql = 'SELECT seat_id, seat_type, seat_price, showtime_id 
                FROM ' . $this->table_name . 
                ' ORDER BY seat_id ASC';

        // Prepare statement
        $stmt = $this->conn->prepare($sql);

        // Execute query
        $stmt->execute();

        return $stmt;
    }
}
?>