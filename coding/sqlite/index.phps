<?php
echo '<pre>', print_r(SQLite3::version()), '</pre>';

class MyDB extends SQLite3
{
    function __construct()
    {
        $this->open('test.db');
    }
}

$db = new MyDB();

@$db->exec('CREATE TABLE foo (bar STRING)');
$db->exec("INSERT INTO foo (bar) VALUES ('This is a test')");

$result = $db->query('SELECT bar FROM foo');
echo '<pre>', print_r($result->fetchArray()), '</pre>';
?>