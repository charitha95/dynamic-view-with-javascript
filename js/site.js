

let users = getUsers().users;
let debts = getDebts().debts;

// ************  
// users related 
// ************  
const createUserDebtNodes = (user) => {

    // selects parent node
    const dyanamicUdContainer = document.querySelector('#dyanamic-ud-container');

    // creates dynamic elements
    let skyCardUdCardSlide = document.createElement('div');
    let udCardWrapper = document.createElement('div');
    let udCardImg = document.createElement('div');
    let skyCardImage = document.createElement('img');
    let udCardContentWrapper = document.createElement('div');
    let udCardSubTitle = document.createElement('div');
    let skyCardTitle = document.createElement('div');
    let skyCardContentUdCardContent = document.createElement('div');
    let ageP = document.createElement('p');
    let ageLabel = document.createElement('label');
    let phoneP = document.createElement('p');
    let phoneLabel = document.createElement('label');
    let addressP = document.createElement('p');
    let addressLabel = document.createElement('label');


    //  adds classes to the dynamic content
    skyCardUdCardSlide.classList.add('sky-card', 'ud-card', 'slide');
    udCardWrapper.classList.add('ud-card-wrapper');
    udCardImg.classList.add('ud-card-img');
    skyCardImage.classList.add('sky-card-image');
    udCardContentWrapper.classList.add('ud-card-content-wrapper');
    udCardSubTitle.classList.add('ud-card-sub-title');
    skyCardTitle.classList.add('sky-card-title');
    skyCardContentUdCardContent.classList.add('sky-card-content', 'ud-card-content');


    // appends values to the memory elems
    skyCardImage.setAttribute('src', `${user.picture}`);
    udCardSubTitle.innerHTML = `${user.category}`;
    skyCardTitle.innerHTML = `${user.firstName} ${user.lastName}`;
    ageLabel.innerHTML = `${user.age}`;
    ageP.innerHTML = "Age: ";
    phoneLabel.innerHTML = `${user.phone}`;
    phoneP.innerHTML = "Phone: ";
    addressLabel.innerHTML = `${user.address}`;
    addressP.innerHTML = "Address: ";


    // appends memory elems to actual elements
    dyanamicUdContainer.append(skyCardUdCardSlide);
    skyCardUdCardSlide.append(udCardWrapper);
    udCardContentWrapper.append(udCardSubTitle);
    udCardContentWrapper.append(skyCardTitle);
    udCardContentWrapper.append(skyCardTitle);
    udCardWrapper.append(udCardImg);
    udCardWrapper.append(udCardContentWrapper);
    udCardImg.append(skyCardImage);
    ageP.append(ageLabel);
    phoneP.append(phoneLabel);
    addressP.append(addressLabel);
    skyCardContentUdCardContent.append(ageP);
    skyCardContentUdCardContent.append(phoneP);
    skyCardContentUdCardContent.append(addressP);
    udCardContentWrapper.append(skyCardContentUdCardContent);

}

// ************  
// debts related 
// ************  
const createDebtNodes = (debts) => {

    // selects parent node
    const dyanamicDContainer = document.querySelector('#dyanamic-d-container');

    // creates dynamic elements
    let skyCardUdCardSlide = document.createElement('div');
    let udCardWrapper = document.createElement('div');
    let udCardContentWrapper = document.createElement('div');
    let skyCardTitle = document.createElement('div');
    let skyCardContentUdCardContent = document.createElement('div');
    let skyGrid = document.createElement('div');
    let skyColSkyColD = document.createElement('div');
    let skyColSkyColE = document.createElement('div');
    let balanceP = document.createElement('p');
    let balanceLabel = document.createElement('label');
    let paymentP = document.createElement('p');
    let paymentLabel = document.createElement('label');
    let bankP = document.createElement('p');
    let bankLabel = document.createElement('label');
    let categoryP = document.createElement('p');
    let categoryLabel = document.createElement('label');
    let escalteP = document.createElement('p');
    let escalteUl = document.createElement('ul');


    //  adds classes to the dynamic content
    skyCardUdCardSlide.classList.add('sky-card', 'ud-card', 'slide');
    udCardWrapper.classList.add('ud-card-wrapper');
    udCardContentWrapper.classList.add('ud-card-content-wrapper');
    skyCardTitle.classList.add('sky-card-title');
    skyCardContentUdCardContent.classList.add('sky-card-content', 'ud-card-content');
    skyGrid.classList.add('sky-grid');
    skyColSkyColD.classList.add('sky-col', 'debts-col');
    skyColSkyColE.classList.add('sky-col', 'debts-col');


    // appends values to the create elems
    skyCardTitle.innerHTML = `${debts.description}`;
    balanceP.innerHTML = `Balance: `;
    balanceLabel.innerHTML = `${debts.balance}`;
    paymentP.innerHTML = `Payment: `;
    paymentLabel.innerHTML = `${debts.payment}`;
    bankP.innerHTML = `Bank: `;
    bankLabel.innerHTML = `${debts.bank}`;
    categoryP.innerHTML = `Category: `;
    categoryLabel.innerHTML = `${debts.category}`;


    // escalade related
    if (debts.escalate) {
        escalteP.innerHTML = "Escalate"
        debts.escalate.staff.forEach(es => {
            let escalteLi = document.createElement('li')
            escalteLi.textContent = es;
            escalteUl.appendChild(escalteLi);
        });
    }
    else {
        escalteP.innerHTML = "Escalate"
        let escalteLi = document.createElement('li')
        escalteLi.textContent = 'no records found';
        escalteUl.appendChild(escalteLi);
    }

    // appends memory elems to actual elements
    dyanamicDContainer.append(skyCardUdCardSlide);
    skyCardUdCardSlide.append(udCardWrapper);
    udCardContentWrapper.append(skyCardTitle);
    udCardContentWrapper.append(skyCardContentUdCardContent);
    udCardWrapper.append(udCardContentWrapper);
    skyCardContentUdCardContent.append(skyGrid);
    skyGrid.append(skyColSkyColD)
    skyGrid.append(skyColSkyColE);
    balanceP.append(balanceLabel);
    paymentP.append(paymentLabel);
    bankP.append(bankLabel);
    categoryP.append(categoryLabel);
    skyColSkyColD.append(balanceP);
    skyColSkyColD.append(paymentP);
    skyColSkyColD.append(bankP);
    skyColSkyColD.append(categoryP);
    skyColSkyColE.append(escalteP);
    skyColSkyColE.append(escalteUl);
}

users.forEach(user => createUserDebtNodes(user));

debts.forEach(debt => createDebtNodes(debt));

var userSearch = document.getElementById('user-search');
var debtSearch = document.getElementById('debt-search');

var timeout = null;


userSearch.onkeyup = function (e) {
    clearTimeout(timeout);
    timeout = setTimeout(function () {
        clearNodes(0);
        if (userSearch.value) {
            let searchedUsers = users.filter(user =>
                user.firstName.toUpperCase().includes(userSearch.value.toUpperCase()) ||
                user.lastName.toUpperCase().includes(userSearch.value.toUpperCase()) ||
                `${user.firstName} ${user.lastName}`.toUpperCase().includes(userSearch.value.toUpperCase()) ||
                `${user.lastName} ${user.firstName}`.toUpperCase().includes(userSearch.value.toUpperCase()));
            searchedUsers.forEach(user => createUserDebtNodes(user));
        }
        else
            users.forEach(user => createUserDebtNodes(user));
    }, 300);
};

debtSearch.onkeyup = function (e) {
    clearTimeout(timeout);
    timeout = setTimeout(function () {
        clearNodes(1);
        if (debtSearch.value) {
            let searchedDebts = debts.filter(debt =>
                debt.description.toUpperCase().includes(debtSearch.value.toUpperCase()));
            searchedDebts.forEach(debt => createDebtNodes(debt));
        }
        else
            debts.forEach(debt => createDebtNodes(debt));
    }, 300);
};

//0 = users, 1 = debts
const clearNodes = (type) => {
    if (!type) {
        var parent = document.getElementById("dyanamic-ud-container");
        while (parent.firstChild) {
            parent.removeChild(parent.firstChild);
        }
    } else {
        var parent = document.getElementById("dyanamic-d-container");
        while (parent.firstChild) {
            parent.removeChild(parent.firstChild);
        }
    }
}