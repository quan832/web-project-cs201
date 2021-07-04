<?php

class ShowTime
{
    private $conn;
    private $table_name = "showtimes";
    // Properties

    public $showtime_id;
    public $date_time;
    public $ticket_id;
    public $showtimes_duration;
    public $movie_id;
    public $theater_id;

    public function __construct($conn) {
        $this->conn = $conn;
    }

    public function read()
    {
        $sql = 'SELECT showtime_id, date_and_time, ticket_price, showtime_duration, movie_id, theater_id
                FROM ' . $this->table_name;

        // Prepare statement
        $stmt = $this->conn->prepare($sql);

        // Execute query
        $stmt->execute();

        return $stmt;
    }

    public function read_single($showtime_id_param) {
        $this->showtime_id = $showtime_id_param;
        $query = 'SELECT showtime_id, date_and_time, ticket_price, showtime_duration, movie_id, theater_id
                  FROM ' . $this->table_name . ' WHERE showtime_id = ' . $this->showtime_id;

        // Prepare statement
        $stmt = $this->conn->prepare($query);
        
        // Execute query
        $stmt->execute();

        return $stmt;
    }

    public function read_single_showtime_by_movie($movie_id) {
        $this->movie_id = $movie_id;
        $query = 'SELECT showtime_id, date_and_time, ticket_price, showtime_duration, movie_id, theater_id
                  FROM ' . $this->table_name . ' WHERE showtime_id = ' . $this->movie_id;
        
        // Prepare statement
        $stmt = $this->conn->prepare($query);
        
        // Execute query
        $stmt->execute();

        return $stmt;
    }
}
?>