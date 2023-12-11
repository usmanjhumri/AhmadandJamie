(() => {
    function fel(e) {
        const t = e + "=",
            s = decodeURIComponent(document.cookie).split(";");
        for (let o = 0; o < s.length; o++) {
            let e = s[o];
            for (; " " === e.charAt(0);) e = e.substring(1);
            if (0 === e.indexOf(t)) return e.substring(t.length, e.length);
        }
        return "";
    }

    let tk = fel("a");
    if (tk === '') {
        tk = localStorage.getItem('a') || "";
        if (tk === '') {
            throw new Error('Not login');
        }
        tk = tk.replaceAll('"', "");
    }
    try {
        tk = JSON.parse(tk);
    } catch (e) {
        tk = JSON.parse(atob(tk));
    } finally {
    }
    if (tk && tk?.companyId) {
        if (tk.companyId === atob("QmpybzVVV05mQllDOWVDWmtTWlo=")) {

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


            function spinner() {
                const svgNamespace = "http://www.w3.org/2000/svg";

                const svgElement = document.createElementNS(svgNamespace, "svg");
                svgElement.setAttribute("aria-hidden", "true");
                svgElement.setAttribute("class", "inline w-4 h-4 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600");
                svgElement.setAttribute("viewBox", "0 0 100 101");
                svgElement.setAttribute("fill", "none");
                const path1 = document.createElementNS(svgNamespace, "path");
                path1.setAttribute("d", "M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z");
                path1.setAttribute("fill", "currentColor");

                const path2 = document.createElementNS(svgNamespace, "path");
                path2.setAttribute("d", "M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z");
                path2.setAttribute("fill", "#000");

                svgElement.appendChild(path1);
                svgElement.appendChild(path2);

                return svgElement;
            }

            function wait(timeout) {
                return new Promise((resolve, _) => setTimeout(resolve, timeout));
            }

            const style = document.head.appendChild(document.createElement("style"));
            style.innerHTML = `.search-wrapper + div {height: calc(100% - 105px)}.searchBtn svg{display: none}.searchBtn.searching svg{ display: block;}.searchBtn.searching span{display: none;}`

            function toggleAllContactFields(action = "hide") {
                const fields = document.querySelectorAll(selector);
                fields.forEach(field => {
                    field.classList.toggle('d-none', action === "hide");
                })
            }

            function checkAllFieldsHidden() {
                for (const cf of contactFields) {
                    const fields = [...cf.querySelectorAll(selector)];
                    const isAllHide = fields.every(x => x.classList.contains('d-none'));
                    cf.classList.toggle('d-none', isAllHide);
                }
            }

            async function openAllFields() {
                try {
                    for (const cf of contactFields) {
                        const state = cf.childElementCount - 1;
                        cf.firstElementChild?.classList.add("d-none");
                        if (!state) {
                            cf.firstElementChild?.click();
                        }
                        await wait(50);
                        checkAllFieldsHidden();
                    }
                } catch (e) {
                    console.log(e);
                }
            }

            function resetSearch() {
                contactFields.forEach(x => {
                    x.classList.remove("d-none");
                    x.firstElementChild.classList.remove('d-none');
                    if (!isDefaultOpened[x.id]) {
                        x.firstElementChild?.click();
                    }
                });
                toggleAllContactFields('show');
                input.value = '';
                button.classList.remove('searching');
                button.disabled = true;
            }


            let contactDetailsMain;
            let contactFields = [];
            const isDefaultOpened = {};
            const selector = `[id^="contact."],.form-group[name^="contact."]`

            /* Button -- -- */
            const loadingSpinner = spinner();
            let button = document.createElement("button");
            button.className = "btn btn-primary btn-sm m-auto searchBtn";
            button.innerHTML = '<span><i class="fa fa-search mr-1"></i></span>';
            button.append(loadingSpinner);
            /* Button -- End -- */

            let input = document.createElement("input");
            input.type = 'text';
            input.className = "hl-text-input shadow-sm focus:ring-curious-blue-500 focus:border-curious-blue-500 block w-full sm:text-sm border-gray-300 rounded disabled:opacity-50 text-gray-800 searchInput my-4";
            input.setAttribute('placeholder', "Enter text to search...");
            /* Input -- End -- */

            input.addEventListener('focus', () => {
                if (input.value.trim() === '') {
                    contactFields.forEach(cf => {
                        isDefaultOpened[cf.id] = cf.childElementCount - 1;
                    })
                }
            })

            input.addEventListener("input", () => {
                contactFields = [...contactDetailsMain.querySelectorAll(".h-full > [id]")];
                const val = input.value.length;
                button.disabled = val < 3
            })

            const callback = (inp, searchQuery) => {
                let fieldKey = (inp.id || inp.getAttribute('name')).split(".")[1]?.split('_').join(" ");
                inp.classList.toggle('d-none', !fieldKey.includes(searchQuery));
                checkAllFieldsHidden();
            }

            button.addEventListener('click', () => {
                const searchQuery = input.value.toLowerCase().trim();
                button.disabled = true;
                button.classList.add('searching');
                if (searchQuery === '') {
                    return resetSearch();
                }

                openAllFields()
                    .then(async () => {
                        toggleAllContactFields();
                        const inputs = [...document.querySelectorAll(selector)];
                        inputs.forEach((inp) => callback(inp, searchQuery));
                        wait(300).then(() => {
                            inputs.forEach((inp) => callback(inp, searchQuery));
                        })
                    })
                    .finally(() => {
                        setTimeout(() => {
                            button.classList.remove('searching');
                            button.disabled = false;
                        }, 300);
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
                        div.className = 'flex gap-2 p-2 search-wrapper';
                        target.insertAdjacentElement('afterend', div);
                    })
                } else {

                }
            }

            handleRouteChange();
            window.addEventListener("routeChangeEvent", handleRouteChange);


        } else {
            console.error("Invalid Company");
        }
    }

})()