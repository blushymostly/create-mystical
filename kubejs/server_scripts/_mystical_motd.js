PlayerEvents.loggedIn(event => {
    event.player.tell(["Welcome to ", Text.gold("Create: "), Text.lightPurple("Mystical "), "on 1.20"]);
    event.player.tell(["Report pack issues to ", Text.lightPurple("the Github").underlined().clickOpenUrl("https://github.com/blushymostly/create-mystical").hover("Click to open"), "."]);
})