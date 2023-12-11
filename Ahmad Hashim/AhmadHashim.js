
    const dataQ = [
    "spouse_first_name",
    "spouse_last_name",
    "spouse_date_of_birth",
    "spouse_ssn",
    "spouse_gender"
    ];
    dataQ.forEach((item) => {
    const targetedFields = document.querySelectorAll(
    `input[data-q="${item}"]`
    );
    targetedFields.forEach((inputs) => {
    const findClosest = inputs.closest(".form-field-container");
    findClosest?.classList.add("d-none");
});

});
    const maritalStatusInputs = document.querySelectorAll(
    'input[data-q="marital_status"]'
    );

    maritalStatusInputs.forEach((input) => {
    input.addEventListener("change", function () {
        const value = this.value;

        dataQ.forEach((item) => {
            const targetedFields = document.querySelectorAll(
                `input[data-q="${item}"]`
            );
            targetedFields.forEach((inputs) => {
                const findClosest = inputs.closest(".form-field-container");

                findClosest.classList.add("d-none");
                if (value === "Married") {
                    findClosest?.classList.remove("d-none");

                }


            });
        });
    });
});



    const spouse = {
    spouse_first_name: "spouseName",
    spouse_date_of_birth: "spouseDob",
    spouse_ssn: "spouseSSN",
    spouse_gender:"spouseGender"
}
    const taxDep = {
    dependent_first_name: "dependantOneName",
    dependent_gender: "dependantOneGender",
    dependent_date_of_birth: "dependantOneDob",
    dependent_ssn: "dependantOneSsn",
}

    let staticKeys = {
    first_name: "fname",
    date_of_birth: "dob",
    last_name: "lname",
    gender_name: "gender",
    marital_status: "status",
    "phone-number": "phone",
    "email-address": "email",
    address: "address",
    'dependents_taxes': "s",
    city: "city",
    state: "state",
    postal_code: "zipcode",
    estimated_houshold_income: "householdIncome",
    is_this: "monthlOrYearly",
    "carriers-interested": "planOption",
    income_verification: "incomeVerification",
    agree_with_consent: "consentToEnrollment",
    agree_with_authorization: "uthorizationAttestation",
    "give-permision": "permission",
    "medicare-Medicaid": "insurance",
    agree_with_acknowledgement: "acknowledgement"
};
    const customDependentFieldKeys =
    ["form-field-dep_Fname-6037","form-field-dep_Lname-6037",'form-field-dep_gender-6037','form-field-dep_dob-6037','form-field-dep_relationship-6037'];
    function updateDependantData(sel, obj, mapWith) {
    let status = document.querySelector(`input[data-q="${sel}"]:checked`)?.value ?? "Single";
    const childKeys = Object.keys(obj);
    childKeys.forEach((k) => {
    const f = document.querySelector(`input[data-q="${k}"]`);
    const node = document.querySelector('.' + obj[k]);
    let val = "-"
    if (f && status.toLowerCase() === mapWith) {
    val = f.value;
} else {
    childKeys.forEach((x) => setAndDispatch(x, ''));
    childKeys.forEach((x) => setAndDispatch(obj[x], ''));
    customDependentFieldKeys.forEach((x) => setAndDispatch(x, ''));
}
    node.innerHTML = val;
})

    let d = document.querySelector(`[data-q="${staticKeys[sel]}"]`);
    if (d) d.innerHTML = status;
}

    function showDataOnSlide() {
    try {
    updateDependantData("dependents_taxes", taxDep, 'yes');
    updateDependantData("marital_status", spouse, 'married');

    Object.keys(staticKeys).forEach(x => {
    let input = document.querySelector(`input[data-q="${x}"]:checked`);
    input ||= document.querySelector(`input[data-q="${x}"]`);
    let node = document.querySelector('.' + staticKeys[x]);
    if (node) {
    node.innerHTML = input.value ?? '-';
}
});

} catch (e) {
    console.error(e);
}
}


    const DependentsTaxes = document.querySelectorAll(
    'input[data-q="dependents_taxes"]'
    );

    DependentsTaxes.forEach((input) => {
    input.addEventListener("change", function () {
        const value = this.value;

        const targetedFields = document.querySelectorAll(`.form-input, .form-select`);
        targetedFields.forEach((inputs) => {
            const findClosestofTexas = inputs.closest(".form-field-container");
            findClosestofTexas?.classList.add("d-none");
        });
        targetedFields.forEach((inputs) => {
            const findClosestofTexas = inputs.closest(".form-field-container");

            findClosestofTexas.classList.add("d-none");
            if (value === "Yes") {
                findClosestofTexas?.classList.remove("d-none");
            }
        });


    });
});

    const customFields = [
    "estimated_houshold_income",
    "dependent_first_name",
    "dependent_last_name",
    "dependent_gender",
    "dependent_date_of_birth",
    "dependent_ssn",
    ];
    customFields.forEach((item) => {
    const customFieldstargeted = document.querySelectorAll(
    `input[data-q="${item}"]`
    );
    customFieldstargeted.forEach((inputs) => {
    const findcustomFieldsClosest = inputs.closest(".form-field-container");
    findcustomFieldsClosest?.classList.add("d-none");
});

});

