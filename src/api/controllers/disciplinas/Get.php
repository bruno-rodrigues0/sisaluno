<?php

function getDisciplina()
{
    require_once(dirname(__FILE__) . "\\..\\..\\database\\index.php");

    try {
        $data = $conn->query("SELECT * FROM disciplina")->fetch_all(MYSQLI_ASSOC);
    } catch (Exception $e) {
        $data = $e->getMessage();
    }

    return $data;
}
