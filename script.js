$(document).ready(function() {

    //clock function
    function updateClock() {
        var now = new Date();
        var hours = now.getHours();
        var minutes = now.getMinutes();
        var seconds = now.getSeconds();

        // Format hours, minutes, and seconds to always have two digits
        hours = hours < 10 ? '0' + hours : hours;
        minutes = minutes < 10 ? '0' + minutes : minutes;
        seconds = seconds < 10 ? '0' + seconds : seconds;

        var currentTime = '_' + hours + '_' + minutes + '_' + seconds + '_';

        $('#home_clock').text(currentTime);
    }

    // Initial call to display clock immediately
    updateClock();

    // Update the clock every second
    setInterval(updateClock, 1);

    //fill blank in screen
    function fillWithRandomNumbers() {
        var windowWidth = $(window).width();
        var charWidth = getTextWidth('0', $('#randomNumbers').css('font'));
        var numChars = Math.floor(windowWidth / charWidth) - 22;
        var randomNumbers = '';

        for (var i = 0; i < numChars; i++) {
            randomNumbers += Math.floor(Math.random() * 10);
        }

        $('#randomNumbers').text(randomNumbers);
    }

    function getTextWidth(text, font) {
        var canvas = document.createElement('canvas');
        var context = canvas.getContext('2d');
        context.font = font;
        var metrics = context.measureText(text);
        return metrics.width;
    }

    // Initial call to fill the div immediately
    fillWithRandomNumbers();

    // Update the content when the window is resized
    $(window).resize(fillWithRandomNumbers);

    //load content
    $('#loadButton').click(function() {
        $('#contentArea').load('content.html', function(response, status, xhr) {
            if (status == "error") {
                var msg = "Sorry but there was an error: ";
                $('#contentArea').html(msg + xhr.status + " " + xhr.statusText);
            }
        });
    });
});