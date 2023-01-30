const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            document.querySelectorAll(".about-cont-box")[0].classList.add("fadein")
            document.querySelectorAll(".about-cont-boxl")[0].classList.add("fadein")
            document.querySelectorAll(".about-cont-boxs")[0].classList.add("fadein")
        }
    })
})

observer.observe(document.querySelector(".about-cont-box"));
observer.observe(document.querySelector(".about-cont-boxl"));
observer.observe(document.querySelector(".about-cont-boxs"));