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
  const usersEndpoint = "https://jsonplaceholder.typicode.com/users";
  const postsEndpoint = "https://jsonplaceholder.typicode.com/posts";

  function fetchData(url) {
    return fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      });
  }

  Promise.all([fetchData(usersEndpoint), fetchData(postsEndpoint)])
    .then(([usersData, postsData]) => {
      const users = {};
      const postsByUser = {};

      usersData.forEach(user => {
        users[user.id] = user.name;
      });

      postsData.forEach(post => {
        if (!postsByUser[post.userId]) {
          postsByUser[post.userId] = [];
        }
        postsByUser[post.userId].push(post.title);
      });

      const postsList = document.getElementById("posts-wrapper");

      for (let userId in users) {
        const userName = users[userId];
        const userPosts = postsByUser[userId] || [];

        const userItem = document.createElement("div");
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
});
