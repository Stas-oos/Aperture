function burgerMenu() {
    const e = document.querySelector(".burger")
        , s = document.querySelector(".menu")
        , t = document.querySelector("body");
    s.addEventListener("click", (c => {
            s.classList.contains("active") && (s.classList.remove("active"),
                e.classList.remove("active-burger"),
                t.classList.remove("locked"))
        }
    )),
        e.addEventListener("click", ( () => {
                s.classList.contains("active") ? (s.classList.remove("active"),
                    e.classList.remove("active-burger"),
                    t.classList.remove("locked")) : (s.classList.add("active"),
                    e.classList.add("active-burger"),
                    t.classList.add("locked"))
            }
        )),
        window.addEventListener("resize", ( () => {
                window.innerWidth > 767.98 && (s.classList.remove("active"),
                    e.classList.remove("active-burger"),
                    t.classList.remove("locked"))
            }
        ))
}
function fixedNav() {
    const e = document.querySelector("nav")
        , s = document.querySelector(".hero");
    window.scrollY >= 80 ? (s.style.paddingTop = 4 + e.clientHeight / 10 + "rem",
        e.classList.add("fixed__nav")) : (s.style.paddingTop = "4rem",
        e.classList.remove("fixed__nav"))
}
burgerMenu(),
    window.addEventListener("scroll", fixedNav),
    document.addEventListener("DOMContentLoaded", ( () => {
            const e = document.querySelectorAll("p");
            e.forEach((e => {
                    e.classList.add("hide")
                }
            ));
            function s() {
                e.forEach((e => {
                        window.pageYOffset + window.screen.height - 100 >= e.offsetTop + e.offsetHeight && (e.classList.remove("hide"),
                            e.classList.add("show"))
                    }
                ))
            }
            s(),
                window.addEventListener("scroll", ( () => {
                        s()
                    }
                ))
        }
    ));
