<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Disciplinas | Sistema aluno</title>
    <link rel="shortcut icon" href="./../../public/favicon.ico" type="image/x-icon">
    <link rel="stylesheet" href="./../globals.css">
</head>

<body>
    <side-menu>
        <i slot="house" class="fa-solid fa-house"></i>
        <i slot="person" class="fa-solid fa-chalkboard-user"></i>
        <i slot="user" class="fa-solid fa-user"></i>
        <i slot="database" class="fa-solid fa-database"></i>
        <i slot="logout" class="fa-solid fa-right-from-bracket"></i>
    </side-menu>

    <?php
        require_once(dirname(__FILE__) ."\\..\\api\\controllers\\index.php");

        $response = getDisciplina();
    ?>

    <script src="../../dist/components/tableee.js"></script>
    <script>
        async function call () {
            await constructor(<?= json_encode($response) ?>, 'disc' )
        };
        call()
     </script>

    <info-table>
        <span slot="titulo">Lista de disciplinas cadastradas</span>
        <i slot="search" class="fa-solid fa-magnifying-glass pesquisa"></i>
        <i slot="pen" class="fa-solid fa-pen"></i>
        <i slot="trash" class="fa-solid fa-trash"></i>
    </info-table>

    <script src="../../dist/components/sidemenu.js"></script>
    <script src="./../../dist/components/sidemenu.js"></script>
    <script src="https://kit.fontawesome.com/19ad99d8f1.js" crossorigin="anonymous"></script>
</body>

</html>