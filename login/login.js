$(document).ready(function () {
    $('.button').on('click', function (event) {
        event.preventDefault();

        // Lấy giá trị
        var email = $('#exampleFormControlInput1').val();
        var password = $('#password').val();

        // Kiểm tra xem email và mật khẩu có đúng không
        if (email === 'admin@admin.admin' && password === 'admin') {
            window.location.href = './loged.html';
        } else {
            alert('Đăng nhập không thành công'); // Hiển thị thông báo nếu đăng nhập thất bại
        }
    });
});