const logoutButton = document.getElementById("logout-button");

logoutButton.addEventListener("click", () => {
  fetch("/logout", {
    method: "DELETE",
  }).then(() => {
    window.location.href = "http://localhost:3000";
  });
});
