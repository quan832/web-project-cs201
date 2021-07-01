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

    public function create()
    {

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
        $this->username = htmlspecialchars(strip_tags($this->username));
        $this->user_email = htmlspecialchars(strip_tags($this->user_email));
        $this->user_phone = htmlspecialchars(strip_tags($this->user_phone));
        $this->user_password = htmlspecialchars(strip_tags($this->user_password));

        // bind the values
        $stmt->bindParam(':username', $this->username);
        $stmt->bindParam(':user_email', $this->user_email);
        $stmt->bindParam(':user_phone', $this->user_phone);
        $stmt->bindParam(':user_password', $this->user_password);


        // hash the password before saving to database
        $password_hash = password_hash($this->user_password, PASSWORD_BCRYPT);
        $stmt->bindParam(':user_password', $password_hash);

        // execute the query, also check if query was successful
        if ($stmt->execute()) {
            return true;
        }

        return false;    
    }

    public function isEmailExists() {
         // query to check if email exists
        $sql = "SELECT ID, username, user_password
                FROM " . $this->table_name . "
                WHERE user_email = ?
                LIMIT 0,1";

        // prepare the query
        $stmt = $this->conn->prepare($sql);

        // sanitize
        $this->user_email=htmlspecialchars(strip_tags($this->user_email));

        // bind given email value
        $stmt->bindParam(1, $this->user_email);

        // execute the query
        $stmt->execute();

        // get number of rows
        $num = $stmt->rowCount();

        // if email exists, assign values to object properties for easy access and use for php sessions
        if($num>0){

            // get record details / values
            $row = $stmt->fetch(PDO::FETCH_ASSOC);

            // assign values to object properties
            $this->user_id = $row['ID'];
            $this->username = $row['username'];
            $this->user_password = $row['user_password'];

            // return true because email exists in the database
            return true;
        }

        // return false if email does not exist in the database
        return false;
    }
}
