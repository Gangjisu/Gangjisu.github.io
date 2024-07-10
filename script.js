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

    //load content
    $('.loadButton').click(function() {
        var buttonText = $(this).text().toLowerCase();
        var filePath = buttonText + '/' + buttonText + '.html';

        $('#contentArea').load(filePath, function(response, status, xhr) {
            if (status === "error") {
                var msg = "Sorry but there was an error: ";
                $('#contentArea').html(msg + xhr.status + " " + xhr.statusText);
            }
        });
    });
});