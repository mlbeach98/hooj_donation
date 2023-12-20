$(document).ready(function() {
    // auto refresh page after 1 second
    setInterval('refreshPage()', 1000);
});

function refreshPage() {
    location.reload();
}