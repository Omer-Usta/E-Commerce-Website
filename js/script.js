document.querySelectorAll(".product-carousel").forEach(function(carousel) {

    const container = carousel.querySelector(".product-container");
    const nextBtn = carousel.querySelector(".next");
    const prevBtn = carousel.querySelector(".prev");

    // Sağ ok -js de sorun var 
    nextBtn.addEventListener("click", function() {

        container.scrollTo({
            left: container.scrollLeft + container.clientWidth,
            behavior: "smooth"
        });

    });

    // Sol ok
    prevBtn.addEventListener("click", function() {

        container.scrollTo({
            left: container.scrollLeft - container.clientWidth,
            behavior: "smooth"
        });

    });

});