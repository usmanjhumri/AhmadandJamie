function waitForElement(selector) {
    return new Promise((resolve, _) => {
        let element = document.querySelector(selector);
        if (element) {
            resolve(element);
        } else {
            new MutationObserver((mutations, observer) => {
                element = document.querySelector(selector);
                if (element) {
                    observer.disconnect();
                    resolve(element);
                }
            }).observe(document, {
                childList: true, subtree: true,
            });
        }
    });
}

const selector = `[id^="contact."]`

function wait(timeout) {
    return new Promise((resolve, _) => setTimeout(resolve, timeout));
}

function toggleAllContactFields(action = "hide") {
    const fields = document.querySelectorAll(selector);
    fields.forEach(field => {
        field.classList.toggle('d-none', action === "hide");
    })
}

function toggleFields(arr){
    for (const cf of arr) {
        const fields = [...cf.querySelectorAll(selector)];
        const isAllHide = fields.every(x => x.classList.contains('d-none'));
        cf.classList.toggle('d-none', isAllHide);
    }
}

async function openAllFields(arr) {
    try {
        for (const cf of arr) {
            const libChild = cf.children;
            const state = libChild.length - 1;
            libChild[0]?.classList.add("d-none");
            if (!state) {
                libChild[state]?.click();
            }
            await wait(200);
            toggleFields(arr);
            console.log('State', state, cf);
        }
    } catch (e) {
        throw new Error(e);
    }
}

let timeout = null;
let contactDetailsMain;
let button = document.createElement("button");
button.className = "btn btn-primary btn-sm m-auto";

let input = document.createElement("input");
input.type = 'text';
input.classList.add('searchInput', 'w-full', 'my-4')
input.setAttribute('placeholder', "Enter your Text");

input.addEventListener('input', () => {
    clearTimeout(timeout);
    timeout = setTimeout(async () => {
        const contactFields = [...contactDetailsMain.querySelectorAll(".h-full > [id]")];
        const searchQuery = input.value.toLowerCase().trim();
        if (searchQuery === '') {
            toggleAllContactFields('show');
            contactFields.forEach(x=> {
                x.classList.remove("d-none")
                x.children[0].classList.remove('d-none')
            });
            return;
        }

        openAllFields(contactFields).then(() => {
            toggleAllContactFields();
            const inps = document.querySelectorAll(selector);
            inps.forEach(inp => {
                let fieldKey = inp.id.split(".")[1] ?? '';
                fieldKey = fieldKey.split('_').join(" ");
                inp.classList.toggle('d-none', !fieldKey.includes(searchQuery));
                toggleFields(contactFields);
            })
        })
        /* --- End --- */
    }, 500)
});

button.innerHTML = '<img src="https://storage.googleapis.com/msgsndr/Q6sATpsoSLCPFf5ErtoF/media/65734f8b4f02ebb831045b47.webp" style="object-fit: contain;width: 100%;" class="h-6 w-6" alt="">';

button.addEventListener('click', () => {
    const groups = contactDetailsMain.querySelectorAll("[id]");
    groups.forEach(group => {
        group.children[0]?.classList.remove('d-none');
        if (group.children.length === 2) {
            group.children[0]?.click();
        }
    })
})

function handleRouteChange() {
    if (location.href.includes('contacts/detail')) {
        waitForElement("#contact-details .hl_contact-details-left > div").then(parent => {
            contactDetailsMain = parent;
            let target = parent.children[0] ?? parent;
            const div = document.createElement("div");
            div.append(input);
            div.append(button);
            div.className = 'flex gap-2 p-2';
            target.insertAdjacentElement('afterend', div);
        })
    }
}
handleRouteChange()
// window.addEventListener("routeChangeEvent", handleRouteChange);

