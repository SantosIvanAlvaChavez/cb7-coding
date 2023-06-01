import { GET } from "../utils/http.js";
import { tweetGen, followGen } from "../utils/fn.js";

const navItems = document.querySelectorAll(".navItem");
const contentEl = document.querySelector(".content");
const tabsEl = document.querySelectorAll(".tabBar__tab");
const tweetButton = document.getElementById("tweetButton");
const followItemsEl = document.querySelector(".follow__items");
let userList = [];
let postList = [];

const remoteData = Promise.all([GET("/posts"), GET("/users")]);

remoteData
  .then( data => {
    postList = data[0].posts;
    userList = data[1].users;
  })
  .then(() => { postList.map(post => {
    post.user = userList.find(user => user.id === post.userId)
    return post;
  })
  .forEach( post => contentEl.append(tweetGen(post)))
  
  userList.slice(0, 5).map((user) => {
    followItemsEl.append(followGen(user));
  });
  
  });


//Events
navItems.forEach(element => {
  element.addEventListener("click", () => {
    navItems.forEach(item => {
      item.classList.remove("active");
    });
    element.classList.add("active");
  });
});

if(tabsEl) {
  tabsEl.forEach( element => {
    element.addEventListener("click", () => {
      let active = document.querySelector(".tabBar__tab.active");
      active.classList.remove("active");
      element.classList.add("active");
    })
  })
}

const handleTweetSubmit = (title, userId) => {
  fetch("https://dummyjson.com/posts/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      title,
      userId,
    }),
  })
    .then((res) => res.json())
    .then(console.log);
};

tweetButton.addEventListener("click", () => {
  let inputTweet = document.getElementById("inputTweet");
  // id statico
  let userId = 6;
  if (inputTweet) {
    handleTweetSubmit(inputTweet.value, userId);
  }
});