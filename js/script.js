const myModal = new HystModal({
    linkAttributeName: "data-hystmodal",
    backscroll: false,
});

$(function() {
    window.addEventListener("scroll", function(event){
        var top = this.pageYOffset;
        var layers = $(".parallax-layer");
        var speed, yPos;
        layers.each(function() {
            speed = $(this).attr('data-speed');
            console.log(speed);
            yPos = -(top * speed / 100);
            $(this).attr('style','transform: translate3d(0px, ' + yPos + 'px, 0px)');
        });
    });
});


window.onload = function () {
    var pageHref = window.location.href;
    var pageName = pageHref.substring(pageHref.lastIndexOf('/') + 1, pageHref.length);
    var modalForms = document.getElementsByClassName("hystmodal")
    var closeBtns = document.querySelectorAll('.close');

    for (var closeBtn of closeBtns) {
        closeBtn.addEventListener('click', function () {
            for(var i = 0; i < 2; i++) {
                modalForms[i].classList.remove('hystmodal--active');
                modalForms[i].setAttribute('aria-hidden', 'true');
            }
        });
    }

    var policyCheckbox = document.getElementById('registration-policy');
    var registrationSubmitBtn = document.getElementById('registration-submit');
    CheckPolicyCheckBox(policyCheckbox, registrationSubmitBtn);
    policyCheckbox.addEventListener('click', function () {
        CheckPolicyCheckBox(policyCheckbox, registrationSubmitBtn);
    });

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
    console.log(pageName);
    if (pageName === "index.html") {
        CheckScrollPos();
        window.addEventListener('scroll', function() {
            CheckScrollPos();
        });
    } else {
        var miniLogo = document.querySelector('.header-mini-logo-img');
        var navBar = document.querySelector('.navbar');
        var navBarNavFirst = document.querySelector('.navbar-nav');

        miniLogo.style.transition = 'none';
        navBarNavFirst.style.transition = 'none';
        miniLogo.style.opacity = 1;
        miniLogo.style.pointerEvents = 'auto';
        navBar.style.backgroundColor = 'rgba(2, 34, 54, 1)';
        navBarNavFirst.style.marginLeft = '48px';
    }
    
    function CheckPolicyCheckBox(policyCheckbox, registrationSubmitBtn) {
        if (!policyCheckbox.checked) {
            registrationSubmitBtn.setAttribute('disabled', 'disabled');
            registrationSubmitBtn.style.opacity = '0.4';
        } else {
            registrationSubmitBtn.removeAttribute('disabled');
            registrationSubmitBtn.style.opacity = '1.0';
        }
    }
    function CheckScrollPos() {
        let scrollTop = window.pageYOffset;
        var logo = document.querySelector('.header-logo-img');
        var miniLogo = document.querySelector('.header-mini-logo-img');
        var navBar = document.querySelector('.navbar');
        var navBarNavFirst = document.querySelector('.navbar-nav');
        if (window.innerWidth <= 992) {
            navBarNavFirst.style.marginLeft = '0';
        }
        else {
            if (scrollTop > 200) {
                /*logo.style.transform = 'scale(0)';*/
                miniLogo.style.opacity = 1;
                miniLogo.style.pointerEvents = 'auto';
                navBar.style.backgroundColor = 'rgba(2, 34, 54, 1)';
                navBarNavFirst.style.marginLeft = '48px';
            }
            else {
                /*logo.style.transform = 'scale(1)';*/
                miniLogo.style.opacity = 0;
                miniLogo.style.pointerEvents = 'none';
                navBar.style.backgroundColor = 'rgba(0, 0, 0, 0.0)';
                navBarNavFirst.style.marginLeft = '0';
            }
        }
    }
};
