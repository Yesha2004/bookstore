// JavaScript code to enhance the user experience

// Trigger the modal for book details
$(document).ready(function () {
    $('.card .btn-primary').on('click', function (e) {
        e.preventDefault();
        $('#bookDetailsModal').modal('show');
    });
});
