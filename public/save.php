<?php
    $servername = "sql2.netim.hosting";
    $username   = "HK5153_hertz";
    $password   = "VyFWTK7eXbTzdc9";
    $dbname     = "HK5153_csd";

    // Create connection
    $conn = new mysqli($servername, $username, $password, $dbname);

    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    $data = json_decode(file_get_contents('php://input'), true);

    $sql = "INSERT INTO subscription (email, current_page) VALUES ('" . $data['email'] . "', '" . $data['page'] . "')";
    if (mysqli_query($conn,$sql)) {
        $data = "success";
        echo json_encode($data);
    } else {
        $data = "error";
        echo json_encode($data);
    }
?>
