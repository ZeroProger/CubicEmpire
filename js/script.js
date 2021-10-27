const myModal = new HystModal({
    linkAttributeName: "data-hystmodal",
    backscroll: false,
});

window.onload = function () {
    var modalForms = document.getElementsByClassName("hystmodal")
    //var changeBtns = document.querySelectorAll('.form-change-btn p a');
    var closeBtns = document.querySelectorAll('.close');

    for (var closeBtn of closeBtns) {
        closeBtn.addEventListener('click', function () {
            for(var i = 0; i < 2; i++) {
                modalForms[i].classList.remove('hystmodal--active');
                modalForms[i].setAttribute('aria-hidden', 'true');
            }
        });
    }

    var navBtns = document.querySelectorAll('.nav-item a');
    var navCollapse = document.querySelector('.navbar-collapse');
    var navCollapseBtn = document.querySelector('.navbar-toggler');
    for (var navBtn of navBtns) {
        navBtn.addEventListener('click', function () {
            navCollapse.classList.remove('show');
            navCollapseBtn.classList.add('collapsed');
            navCollapseBtn.setAttribute('aria-expanded', 'false');
        });
    }
};