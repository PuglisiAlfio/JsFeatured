const user = {
  id: 1,
  name: "John",
  age: 25,
};


function loadStor() {
  localStorage.setItem("user", JSON.stringify(user));
  //riga 11 e 12 non sono sicuro siano necessarie
  const data = localStorage.getItem("user");
  console.log("data: ", JSON.parse(data));
}

loadStor();

