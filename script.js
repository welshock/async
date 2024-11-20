const requestURL = "https://jsonplaceholder.typicode.com/users";

async function fetchUsers() {
  fetch(requestURL, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then((users) => {
      const userList = document.getElementById("userList");

      users.forEach((user) => {
        const listItem = document.createElement("li");
        listItem.textContent = `User ID - ${user.id} --> ${user.name} - ${user.email}`;
        userList.appendChild(listItem);
      });
    })
    .catch ((error) => {
      console.error(`HTTP error: ${error.message}`);
    });
}
fetchUsers();
