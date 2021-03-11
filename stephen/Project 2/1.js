var details = [1,2,3]
details.forEach(detail => {
    console.log(detail)
});

var objects = {
    "login": "mojombo",
    "id": 1,
    "node_id": "MDQ6VXNlcjE="
  }

const entries = Object.entries(objects)
console.log(entries)\




function loadRanking() {
    const request = new XMLHttpRequest();
    request.open("GET", "https://api.github.com/users");
    request.onload = () => {
      try {
        const json = JSON.parse(request.responseText);
        populateRanking(json);
      } catch (err) {
        console.warn("could not load!");
      }
    };
    request.send();
  }