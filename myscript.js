<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="../CSS/Practical15/Practical15.css">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">
    <title>Assignment-15</title>
    <style>
        * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

body {
    background-color: darkslateblue;
    font-family: 'Open Sans', sans-serif;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}
.container {
    background-color: #fff;
    width: 400px;
    border-radius: 5px;
    overflow: hidden;
}
.header {
    background-color: #f7f7f7;
}
.header h2 {
    padding: 20px;
    text-align: center;
}
.form {
    padding: 20px 30px;
}
.form-control {
    margin-bottom: 10px;
    padding-bottom: 20px;
    position: relative;
}
.form-control label {
    display: block;
    margin-bottom: 5px;
}
.form-control input {
    display: block;
    width: 100%;
    padding: 10px;
    border-radius: 5px;
    outline: none;
    border: 2px solid #f0f0f0;
}
.form-control i {
    position: absolute;
    right: 10px;
    top: 40px;
    visibility: hidden;
}
.form-control small {
    position: absolute;
    left: 0;
    margin-top: 5px;
    visibility: hidden;
}
.form button {
    display: block;
    width: 100%;
    background-color: darkslateblue;
    color: white;
    padding: 10px;
    outline: none;
    border: none;
    border-radius: 5px;
    text-align: center;
}
.form-control.success input {
    border-color: rgb(48, 207, 48);
}
.form-control.success .fa-check-circle {
    visibility: visible;
    color: rgb(48, 207, 48);
}
.form-control.error input {
    border-color: red;
}
.form-control.error .fa-exclamation-circle {
    color: red;
    visibility: visible;
}
.form-control.error small {
    visibility: visible;
    color: red;
}
    </style>
</head>
<body>
<div class="container">
    <div class="header">
        <h2>Create Account</h2>
    </div>
    <form class="form" id="form">
        <div class="form-control">
            <label for="username">Username</label>
            <input type="text" id="username" placeholder="Enter Username">
            <i class="fa fa-check-circle"></i>
            <i class="fa fa-exclamation-circle"></i>
            <small>Error Msg</small>
        </div>

        <div class="form-control">
            <label for="email">Email ID </label>
            <input type="text" id="email" placeholder="Enter Email Id">
            <i class="fa fa-check-circle"></i>
            <i class="fa fa-exclamation-circle"></i>
            <small>Error Msg</small>
        </div>

        <div class="form-control">
            <label for="password1">Password</label>
            <input type="password" id="password1" placeholder="Enter Password">
            <i class="fa fa-check-circle"></i>
            <i class="fa fa-exclamation-circle"></i>
            <small>Error Msg</small>
        </div>

        <div class="form-control">
            <label for="password2">Re-Enter Password</label>
            <input type="password" id="password2" placeholder="Enter Password Again">
            <i class="fa fa-check-circle"></i>
            <i class="fa fa-exclamation-circle"></i>
            <small>Error Msg</small>
        </div>
        <button type="submit">Submit</button>
    </form>
</div>
<script src="../js/Practical-15.js"></script>
</body>
</html>