<?php
class User
{
    private $conn;
    private $table_name = "users";
    // Properties
    public $user_id;
    public $user_account;

    public $user_password;
    public $user_hash;

    public $user_email;
    public $user_phone;
    public $user_type_id;
    public $username;
    public $user = [];
    public $errors = [];

    public function __construct($conn)
    {
        $this->conn = $conn;
    }

    public function getUser() {
        // Check whether the email existed
        $sql = "SELECT * FROM " . $this->table_name . " WHERE user_email = :user_email";
        $stmt = $this->conn->prepare($sql);
        $stmt->bindParam(":user_email", $this->user_email);
        $stmt->execute();
        // $results = $stmt->bind_result();
        // if($results->num_rows == 1) {
        //   $this->user = $results->fetchAll();
        // }
        $this->user = $stmt->fetch(PDO::FETCH_ASSOC);
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
        $this->user_hash = password_hash($this->user_password, PASSWORD_BCRYPT);
        $stmt->bindParam(':user_password', $this->user_hash);

        // execute the query, also check if query was successful
        if ($stmt->execute()) {
            return true;
        }

        return false;    
    }

    public function isEmailExists() {
        // $this->user_email = $email;
         // query to check if email exists in the db
        $sql = "SELECT user_id, username, user_password
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

            // $row = $stmt->fetch(PDO::FETCH_ASSOC);


            // assign values to object properties

            // $this->user_id = $row['user_id'];
            // $this->username = $row['username'];
            // $this->user_password = $row['user_password'];

            // return true because email exists in the database
            return true;
        }

        // return false if email does not exist in the database
        return false;
    }

    public function checkLogin($email, $password) {

        $this->user_email = $email;
        $this->user_password = $password;

        $email_exist = $this->isEmailExists();

        // If the email is exist => ready to login
        if ($email_exist) {

            // get the info of the user 
            $this->getUser();
            
            // verify the password in the database and password from the user inputs
            if (password_verify($this->user_password, $this->user['user_password'])) {
                $this->username = $this->user['username'];
                $this->user_email = $this->user['user_email'];
                $this->user_phone = $this->user['user_phone'];
                $this->user_hash = $this->user['user_password'];

                return true;
            }
            // if password not match 
            else {
                $message = "Password does not match";
                array_push($this->errors, $message);
            }  
        } 
        // if the email is not existed in the Database
        else {
            $message = "Email is not existed";
            array_push($this->errors, $message);
        }

        return false;
    }

}
