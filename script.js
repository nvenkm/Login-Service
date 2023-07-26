const logoutButton = document.getElementById("logout-button");

logoutButton.addEventListener("click", () => {
  fetch("/logout", {
    method: "DELETE",
  }).then(() => {
    window.location.href = "http://localhost:3000";
  });
});

function getUsername() {
  fetch("/getusername", {
    headers: {
      "content-type": "application/json",
    },
  })
    .then((res) => {
      return res.json();
      // changeUsername(res);
    })
    .then((res) => {
      console.log(JSON.parse(res));
      changeUsername(JSON.parse(res));
    });
}

function changeUsername(username) {
  const greetMessage = document.getElementById("greeting");
  greetMessage.textContent = `Welcome ${username}`;
}

getUsername();
