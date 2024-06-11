const app = document.querySelector("#app");
if (app === null) {
  throw Error("Failed to find #app element");
}
app.textContent = "Hello World!";
