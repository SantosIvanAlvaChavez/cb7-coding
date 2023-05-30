const cE = (type) => document.createElement(type);

export const tweetGen = (tweetData) => {
    const wrapperEl = cE("div");
    const userImageEl = cE("img");
    const contentEl = cE("div");
    const nameEl = cE("span");
    const userNameEl = cE("span");
    const textContentEl = cE("p");
    const reactionsEl = cE("p");
    const imgPlaceholder = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjVaTSJUxgs5FDX_1F0N97QzFuXosX0pwsvdPGg3Gl24dHGM__0QFiL3swSd1JpxIgOog&usqp=CAU";

    wrapperEl.className = "tweet";
    userImageEl.src = tweetData.user?.image || imgPlaceholder;
    userNameEl.alt = tweetData.user?.username;
    contentEl.className = "tweet__content";
    nameEl.textContent = tweetData.user?.firstName;
    userNameEl.textContent = tweetData.user?.username;
    textContentEl.textContent = tweetData.body;
    reactionsEl.textContent = tweetData.reactions;

    contentEl.append(nameEl, userNameEl, textContentEl, reactionsEl);
    wrapperEl.append(userImageEl, contentEl);

    return wrapperEl;
}