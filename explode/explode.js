const texts = document.querySelectorAll("div");

const viewer = new IntersectionObserver((entries) => {
    entries.forEach(entry =>{
        if (entry.isIntersecting){
            entry.target.classList.add("visible")
            viewer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.2
});

texts.forEach(text => viewer.observe(text));