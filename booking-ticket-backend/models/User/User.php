<?php
class User
{
    private $conn;
private $table_name = "users";
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

    // public function createUser()
    // {
    //     $sql = "INSERT INTO users(username, user_email, user_phone, user_password) VALUES(?, ?, ?, ?);";

    //     $stmt = $this->conn->prepare($sql);

    //     // Elimanate HTML tags
    //     $this->username = htmlspecialchars(strip_tags($this->username));
    //     $this->user_email = htmlspecialchars(strip_tags($this->user_email));
    //     $this->user_phone = htmlspecialchars(strip_tags($this->user_phone));
    //     $this->user_password = htmlspecialchars(strip_tags($this->user_password));

    //     // Hash Password
    //     $password_hash = password_hash($this->user_password, PASSWORD_DEFAULT);

    //     $stmt->bind_param("ssss", $this->username, $this->user_email, $this->user_phone, $password_hash);

    //     $stmt->execute();

    //     if ($stmt->execute()) {
    //         return true;
    //     }

    //     return false;
    // }

// create new user record
function create(){
 
    // insert query
    $query = "INSERT INTO " . $this->table_name . "
            SET
                username = :username,
                user_email = :user_email, 
                user_phone = :user_phone,
                user_password = :user_password";
 
    // prepare the query
    $stmt = $this->conn->prepare($query);
 
    // sanitize
    $this->username=htmlspecialchars(strip_tags($this->username));
    $this->user_email=htmlspecialchars(strip_tags($this->user_email));
    $this->user_phone=htmlspecialchars(strip_tags($this->user_phone));
    $this->user_password=htmlspecialchars(strip_tags($this->user_password));
 
    // bind the values
    $stmt->bindParam(':username', $this->username);
    $stmt->bindParam(':user_email', $this->user_email);
    $stmt->bindParam(':user_phone', $this->user_phone);
    $stmt->bindParam(':user_password', $this->user_password);

 
    // hash the password before saving to database
    $password_hash = password_hash($this->user_password, PASSWORD_BCRYPT);
    $stmt->bindParam(':user_password', $password_hash);
 
    // execute the query, also check if query was successful
    if($stmt->execute()){
        return true;
    }
 
    return false;
}

    public function isEmaiExists() {
        $sql = "SELECT user_email FROM users WHERE user_email = ?";

        $stmt = $this->conn->prepare($sql);

        $stmt->bind_param("s", $this->user_email);

        $stmt->execute();

        if ($stmt->affected_rows == 1) {
            return true;
        }

        return false;
    }
}
