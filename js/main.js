// Shahrizoda Dental Studio – barcha sahifalar uchun umumiy JavaScript

// 8-talab: Bootstrap 5 da tooltip va popoverlar o'zi ishlamaydi, ularni ishga tushiramiz
document.querySelectorAll('[data-bs-toggle="tooltip"]').forEach(function (el) {
  new bootstrap.Tooltip(el);
});
document.querySelectorAll('[data-bs-toggle="popover"]').forEach(function (el) {
  new bootstrap.Popover(el);
});

// 4-talab: forma to'g'ri to'ldirilmasa, Bootstrap xato xabarlarini ko'rsatadi
document.querySelectorAll('.needs-validation').forEach(function (forma) {
  forma.addEventListener('submit', function (hodisa) {
    if (!forma.checkValidity()) {
      hodisa.preventDefault();
      hodisa.stopPropagation();
    }
    forma.classList.add('was-validated');
  });
});
