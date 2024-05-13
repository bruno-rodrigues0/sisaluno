<?php

function deleteAluno($email)
{
    require_once realpath(dirname(__FILE__) . "\\..\\..\\database\\index.php");

    try {
        $conn->query("DELETE FROM teste WHERE email = '$email' ");
    } catch (Exception $e) {
        echo "" . $e->getMessage() . "";
    }
}
