const user = {
  id: 1,
  name: "John",
  age: 25,
};


function loadStor() {
  const userlocal = localStorage.setItem("user", JSON.stringify(user));
  console.log(userlocal);
}

loadStor();

