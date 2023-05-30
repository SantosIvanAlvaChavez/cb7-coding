import { GET } from "../utils/http.js";
import { tweetGen } from "../utils/fn.js";

const navItems = document.querySelectorAll(".navItem");
const contentEl = document.querySelector(".content");
let userList = [];
let postList = [];

const remoteData = Promise.all([GET("/posts"), GET("/users")]);

remoteData
  .then( data => {
    postList = data[0].posts;
    userList = data[1].users;
  })
  .then(() => postList.map(post => {
    post.user = userList.find(user => user.id === post.userId)
    return post;
  })
  .forEach( post => contentEl.append(tweetGen(post)))
  );


//Events
navItems.forEach(element => {
  element.addEventListener("click", () => {
    navItems.forEach(item => {
      item.classList.remove("active");
    });
    element.classList.add("active");
  });
});