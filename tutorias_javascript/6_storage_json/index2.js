let formUser = document.querySelector('#form-user');
let showAllUsersButton = document.querySelector('#show-all-users-button');
let userShowList = document.querySelector('#user-show-list');
let deleteAllButton = document.querySelector('#delete-all-button');

class User{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}

formUser.addEventListener('submit', function (e) {
    e.preventDefault();
    let listUsers = JSON.parse(localStorage.getItem('users')) || [];
    let name = formUser.name.value
    let age = formUser.age.value
    listUsers.push(new User(name, age));
    localStorage.setItem('users', JSON.stringify(listUsers));
    formUser.reset();
})


showAllUsersButton.addEventListener('click', function () {
    let user = JSON.parse(localStorage.getItem('users'));
    console.log(user);
    if(user){
        showAllUser(user);
    }
});

function showAllUser(data){
    let dataUsersHtml ='';

    data.forEach(function (user) {
        dataUsersHtml += `<li>${user.name} - ${user.age}</li>`
    });

    userShowList.innerHTML = dataUsersHtml;
}

deleteAllButton.addEventListener('click', function () {
    localStorage.clear();
    userShowList.innerHTML = '';
});