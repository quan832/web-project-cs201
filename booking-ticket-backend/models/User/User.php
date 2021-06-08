<?php
class User
{
    private $conn;

    // Properties
    public $user_id;
    public $user_account;
    public $user_password;
    public $user_email;
    public $user_phone;
    public $user_type_id;
    public $username;

    public function __construct($conn)
    {
        $this->conn = $conn;
    }

    public function create()
    {
        $sql = "INSERT INTO users(username, user_email, user_phone, user_password) VALUES(?, ?, ?, ?);";

        $stmt = $this->conn->prepare($sql);

        // Elimanate HTML tags
        $this->username = htmlspecialchars(strip_tags($this->username));
        $this->user_email = htmlspecialchars(strip_tags($this->user_email));
        $this->user_phone = htmlspecialchars(strip_tags($this->user_phone));
        $this->user_password = htmlspecialchars(strip_tags($this->user_password));

        // Hash Password
        $password_hash = password_hash($this->user_password, PASSWORD_DEFAULT);

        $stmt->bind_param("ssss", $this->username, $this->user_email, $this->user_phone, $password_hash);

        $stmt->execute();

        if ($stmt->execute()) {
            return true;
        }

        return false;
    }
}
