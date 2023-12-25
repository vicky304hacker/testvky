<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Special Event</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            margin: 20px;
        }

        #timer {
            font-size: 24px;
            color: #333;
        }

        #gift-box {
            font-size: 36px;
            cursor: pointer;
            display: none; /* Initially hidden */
        }

        #slideshow-container {
            display: none;
            margin: 20px auto;
            max-width: 100%;
        }

        #birthday-message {
            font-size: 28px;
            color: green;
            margin-top: 20px;
            display: none;
        }
    </style>
</head>
<body>

<audio id="background-music" loop>
    <source src="background-music.mp3" type="audio/mp3">
    Your browser does not support the audio element.
</audio>

<div id="timer"></div>
<div id="gift-box">🎁</div>
<div id="slideshow-container">
    <img id="slideshow-image" src="img.jpg" alt="Slideshow Image" style="max-width: 100%; height: auto;">
</div>
<div id="birthday-message">I don’t need to write a whole paragraph to let you know how amazing you are, If you were not born on this day, the word ‘beautiful’ would cease to exist from dictionaries by now. Happy birthday!</div>

<script src="script1.js"></script>

</body>
</html>
