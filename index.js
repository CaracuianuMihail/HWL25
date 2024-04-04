// creati cate un exemplu de GET //
fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((posts) => {
    const userPosts = posts.filter((post) => post.userId);
    console.log("Postările utilizatorului:");
    console.log(userPosts);
  })
  .catch((error) => console.error("Error fetching posts:", error));

// creati cate un exemplu de POST //
const newUser = {
  name: "Mihail",
  Surname: "Caracuianu",
  Age: 20,
  isStudent: true,
};
fetch("https://jsonplaceholder.typicode.com/users", {
  method: "POST",
  body: JSON.stringify(newUser),
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
})
  .then((res) => res.json())
  .then((data) => console.log(data));

// creati cate un exemplu de PUT //
fetch("https://jsonplaceholder.typicode.com/users/1", {
  method: "PUT",
  body: JSON.stringify(newUser),
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
})
  .then((res) => res.json())
  .then((data) => console.log(data));

// creati cate un exemplu de DELETE //
fetch("https://jsonplaceholder.typicode.com/users/1", {
  method: "DELETE",
})
  .then((res) => res.json())
  .then((data) => console.log(data));

// creati un obiect cu fiecare utilizator ( atribuiti cate un nume pentru fiecareId)
// ex: const obj = {'1': 'Alex'} adresarea catre valoare : obj['1'] apoi creati o lista(ordonata sau neordonata, la alegerea voastra) pentru fiecare utilizator si
// atribuitii titlurile postarilor //

document.addEventListener("DOMContentLoaded", function () {
  const users = {
    1: "Alex",
    2: "Maria",
    3: "Andrei",
    4: "Elena",
    5: "Ion",
    6: "Ana",
    7: "Vlad",
    8: "Diana",
    9: "George",
    10: "Laura",
  };

  const postsByUser = {
    1: ["Titles Post 1", "Titles Post 2", "Titles Post 3"],
    2: ["Titles Post 4", "Titles Post 5"],
    3: ["Titles Post 6", "Titles Post 7", "Titles Post 8"],
    4: ["Titles Post 9"],
    5: ["Titles Post 10", "Titles Post 11", "Titles Post 12"],
    6: ["Titles Post 13", "Titles Post 14"],
    7: ["Titles Post 15", "Titles Post 16", "Titles Post 17"],
    8: ["Titles Post 18"],
    9: ["Titles Post 19", "Titles Post 20"],
    10: ["Titles Post 21"],
  };

  const postsList = document.getElementById("posts-list");
  for (let userId in users) {
    const userName = users[userId];
    const userPosts = postsByUser[userId];

    const userItem = document.createElement("li");
    userItem.textContent = `${userName}'s Postări:`;
    const userPostList = document.createElement("ol");

    userPosts.forEach((postTitle) => {
      const postItem = document.createElement("li");
      postItem.textContent = postTitle;
      userPostList.appendChild(postItem);
    });
    userItem.appendChild(userPostList);
    postsList.appendChild(userItem);
  }
});
