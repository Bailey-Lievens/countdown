<?php
    if(!empty($_POST)){
        $userCode = $_POST["userCode"];
        $file = fopen("result.txt", "a");

        $txt = "0";
        $response = [
            "status" => false
        ];

        if($userCode == "Stephan") {
            $txt = "1";
            $response = [
                "status" => true
            ];
        }

        fwrite($file, $txt);

        fclose($file);
        header("Content-Type: applications/json");
        echo json_encode($response);
    }
?>