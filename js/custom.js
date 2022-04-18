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

gsap.registerPlugin(ScrollTrigger)

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
gsap.from('[anim-about-1]', {
    duration: 2,
    x: '-100vw',
    stagger: .4,
    scrollTrigger: {
        trigger: '[anim-about-1]',
        toggleActions: 'restart pause resume pause',
    },
})
gsap.from('[anim-about-1-img]', {
    duration: 2,
    opacity: 0,
    delay: 1,
    scrollTrigger: {
        trigger: '[anim-about-1]',
        toggleActions: 'restart pause resume pause',
    },
})
gsap.from('[anim-about-2-img]', {
    duration: 2,
    opacity: 0,
    delay: 1,
    scrollTrigger: {
        trigger: '[anim-about-2-img]',
        toggleActions: 'restart pause resume pause',
    },
})
gsap.from('[anim-about-2]', {
    duration: 2,
    x: '100vw',
    stagger: .4,
    delay: 1,
    scrollTrigger: {
        trigger: '[anim-about-2]',
        toggleActions: 'restart pause resume pause',
    },
})
gsap.from('[anim-about-3]', {
    duration: 2,
    x: '-100vw',
    stagger: .4,
    delay: 1,
    scrollTrigger: {
        trigger: '[anim-about-3]',
        toggleActions: 'restart pause resume pause',
    },
})
gsap.from('[anim-about-3-img]', {
    duration: 2,
    opacity: 0,
    delay: 1,
    scrollTrigger: {
        trigger: '[anim-about-3-img]',
        toggleActions: 'restart pause resume pause',
    },
})
gsap.from('[anim-info]', {
    duration: 2,
    opacity: 0,
    stagger: .2,
    scrollTrigger: {
        trigger: '[anim-info]',
        toggleActions: 'restart none resume pause',
    },
})