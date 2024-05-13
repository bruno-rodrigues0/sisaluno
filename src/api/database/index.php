<?php

require_once realpath(dirname(__FILE__) ."\\..\\..\\..\\vendor\\autoload.php");

use Dotenv\Dotenv as Dotenv;

$dotenv = Dotenv::createImmutable('C:\\xampp\\htdocs\\sisaluno\\');
$dotenv->load();

$hostname = $_ENV['SQL_HOST'];
$username = $_ENV['SQL_USER'];
$password = $_ENV['SQL_PASS'];
$database = $_ENV['SQL_DATABASE'];
$port = $_ENV['SQL_PORT'];

// Create connection
$conn = new mysqli($hostname, $username, $password, $database, $port);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
echo "Connected successfully";
