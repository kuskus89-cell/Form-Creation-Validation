document.addEventListener('DOMContentLoaded',function () {
    fetchUserData()
});

async function fetchUserData(params) {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';


const dataContainer = document.getElementById('api-data');

try {
    const response = await fetch(apiUrl);
    const users = await response.json();

    dataContainer.innerHTML = " ";

 
const userList = document.createElement('ul');

users.forEach(user => {
    const li = document.createElement('li');
    li.textContent = user.name;
    userList.appendChild(li);   
})

    dataContainer.appendChild(userList);

} catch (error) {
    dataContainer.innerHTML = " ";
 dataContainer.textContent = 'Faile to load user data';
}
}
