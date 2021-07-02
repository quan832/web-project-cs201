<?php
// required headers
header("Access-Control-Allow-Origin: http://localhost:8000/api/manageUser/login.php");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
header('Access-Control-Allow-Origin: *');

// files needed to connect to database
include_once '../../config/Database.php';
include_once '../../models/User/User.php';

// generate json web token
include_once '../../config/core.php';
include_once '../../libs/php-jwt-master/src/BeforeValidException.php';
include_once '../../libs/php-jwt-master/src/ExpiredException.php';
include_once '../../libs/php-jwt-master/src/SignatureInvalidException.php';
include_once '../../libs/php-jwt-master/src/JWT.php';
use \Firebase\JWT\JWT;
 
// generate jwt will be here
 
// get database connection
$database = new Database();
$db = $database->connect();
 
// instantiate user object
$user = new User($db);
 
// get posted data
$data = json_decode(file_get_contents("php://input"));
 
// set product property values
$user->user_email = $data->email;
$email_exists = $user->isEmailExists();
 
// check if email exists and if password is correct
if($email_exists && password_verify($data->password, $user->user_password)){
 
    $token = array(
       "iat" => $issued_at,
       "exp" => $expiration_time,
       "iss" => $issuer,
       "data" => array(
           "id" => $user->user_id,
           "username" => $user->username,
           "email" => $user->user_email,
           "phone" => $user->user_phone,
           "password" => $user->user_password
       )
    );
 
    // set response code
    http_response_code(200);
 
    // generate jwt
    $jwt = JWT::encode($token, $key);
    echo json_encode(
            array(
                "message" => "Successful login.",
                "jwt" => $jwt
            )
        );
 
}
// login failed
else{
 
    // set response code
    http_response_code(401);
 
    // tell the user login failed
    echo json_encode(array("message" => "Login failed."));
}
?>