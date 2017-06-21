<?php

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
	
	if($_SERVER['REQUEST_METHOD'] === 'POST') {

		$newMenu = $_FILES["newMenu"];
		$tmp_name = $_FILES["newMenu"]["tmp_name"];
	  $name = 'menu.pdf';
	  unlink('assets/'. $name);
	  move_uploaded_file($tmp_name, "assets/$name");

	  echo 'File succesfully uploaded.';
	}
?>