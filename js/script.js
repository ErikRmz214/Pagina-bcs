var modal = document.getElementById('emergente');

window.onload = function() {
    var modalInstance = new bootstrap.Modal(modal);
    modalInstance.show();
};

document.getElementById('correo').addEventListener('click', function () {
    window.location.href = 'mailto:luis.fel_bs@outlook.com';
});