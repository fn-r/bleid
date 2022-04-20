// Burger menus
document.addEventListener('DOMContentLoaded', function() {
    // open
    const burger = document.querySelectorAll('.navbar-burger');
    const menu = document.querySelectorAll('.navbar-menu');

    if (burger.length && menu.length) {
        for (var i = 0; i < burger.length; i++) {
            burger[i].addEventListener('click', function() {
                for (var j = 0; j < menu.length; j++) {
                    menu[j].classList.toggle('hidden');
                }
            });
        }
    }

    // close
    const close = document.querySelectorAll('.navbar-close');
    const backdrop = document.querySelectorAll('.navbar-backdrop');

    if (close.length) {
        for (var i = 0; i < close.length; i++) {
            close[i].addEventListener('click', function() {
                for (var j = 0; j < menu.length; j++) {
                    menu[j].classList.toggle('hidden');
                }
            });
        }
    }

    if (backdrop.length) {
        for (var i = 0; i < backdrop.length; i++) {
            backdrop[i].addEventListener('click', function() {
                for (var j = 0; j < menu.length; j++) {
                    menu[j].classList.toggle('hidden');
                }
            });
        }
    }
});

function generateData() {
    function createElement(list, uuid) {
        const input = document.createElement("input")
        input.classList.add("w-full", "p-4", "text-lg", "outline-none", "rounded", "text-center",
        "border-4", "border-blue-400", "text-blue-400", "bg-blue-200", "font-extrabold",
        "tracking-wider", "uppercase")
        input.type = "text"
        input.value = uuid
        input.disabled = true

        const div = document.createElement("div")
        div.classList.add("mb-3", "w-full", "lg:w-1/2", "px-2")
        div.append(input)

        list.append(div)
    }

    async function fetchData(link) {
        try {
            const response = await fetch(link, {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                },
            });

            if (!response.ok) {
                throw new Error(`Error! status: ${response.status}`);
            }

            const result = await response.json();
            const uuid_section = document.getElementById('uuid-section')
            uuid_section.hidden = false
            const uuid_list = document.getElementById('uuid-list')

            result.forEach(id => createElement(uuid_list, id))
        } catch (err) {
            console.log(err);
        }
    }

    const uuid_number = document.querySelector('input[type="number"]').value
    const link = `https://www.uuidgenerator.net/api/version4/${uuid_number}`
    fetchData(link)
}

const form = document.querySelector('form')
form.addEventListener('submit', (e) => {
    e.preventDefault()
    generateData()
})

function changeData(i) {
    const uuid_info = document.querySelectorAll('[uuid-info]')
    uuid_info.forEach((info, index) => {
        if(index === i) {
            info.hidden = false
        } else {
            info.hidden = true
        }
    })
}

function changeClass(selected_btn) {
    const add_class = ["text-blue-600", "border-blue-600"]
    const remove_class = ["border-transparent", "transition", "duration-150", "hover:text-blue-600", "hover:border-blue-600"]
    btns.forEach(btn => {
        if(btn === selected_btn) {
            btn.classList.remove(...remove_class)
            btn.classList.add(...add_class)
        } else {
            btn.classList.add(...remove_class)
            btn.classList.remove(...add_class)
        }
    })
}

const uuid_versions = document.getElementById('uuid-versions').children
const btns = Array.from(uuid_versions) 
btns.forEach((btn, i) => {
    btn.addEventListener('click', () => {
        changeClass(btn)
        changeData(i)
    })
})

gsap.from('[anim-form]', {
    duration: 1,
    y: '-100%',
    ease: 'bounce',
    scrollTrigger: '[anim-form]'
})
gsap.from('[anim-form-data]', {
    duration: .5,
    opacity: 0,
    stagger: .4
})

gsap.registerPlugin(ScrollTrigger)

const about_anim = {
    duration: 2,
    scrollTrigger: {
        toggleActions: 'restart none none reset',
    }
}
const about_anim_img = {
    delay: 1,
    duration: 2,
    scrollTrigger: {
        toggleActions: 'restart none restart reset',
    }
}

about_anim_img.opacity = 0
about_anim_img.scrollTrigger.trigger = '[anim-about-1-img]'
gsap.from('[anim-about-1-img]', about_anim_img)

about_anim.x = '-100vw'
about_anim.stagger = .4
about_anim.scrollTrigger.trigger = '[anim-about-1]'
gsap.from('[anim-about-1]', about_anim)

about_anim_img.opacity = 0
about_anim_img.scrollTrigger.trigger = '[anim-about-2-img]'
gsap.from('[anim-about-2-img]', about_anim_img)

about_anim.x = '100vw'
about_anim.stagger = .4
about_anim.scrollTrigger.trigger = '[anim-about-2]'
gsap.from('[anim-about-2]', about_anim)

about_anim_img.opacity = 0
about_anim_img.scrollTrigger.trigger = '[anim-about-3-img]'
gsap.from('[anim-about-3-img]', about_anim_img)

about_anim.x = '-100vw'
about_anim.stagger = .4
about_anim.scrollTrigger.trigger = '[anim-about-3]'
gsap.from('[anim-about-3]', about_anim)

gsap.from('[anim-info]', {
    duration: 2,
    opacity: 0,
    stagger: .2,
    scrollTrigger: {
        trigger: '[anim-info]',
        toggleActions: 'restart none none reset',
    },
})