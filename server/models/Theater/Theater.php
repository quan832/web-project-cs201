<?php

class Theater
{
    private $conn;
    private $table_name = "theaters";
    // Properties

    public $theater_id;
    public $theater_name;
    public $theater_img;

    public function __construct($conn)
    {
        $this->conn = $conn;
    }

    public function read()
    {
        $sql = 'SELECT theater_id, theater_name, theater_img 
                FROM ' . $this->table_name . 
                ' ORDER BY theater_id ASC';

        // Prepare statement
        $stmt = $this->conn->prepare($sql);

        // Execute query
        $stmt->execute();

        return $stmt;
    }
}
?>