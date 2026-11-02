const projects = {
    ReOS: {
        name: "Re:OS",
        description: "A custom webOS inspired by Re:Zero.",
        demo: "https://thatcorley.github.io/Re-OS",
        repo: "https://github.com/thatcorley/Re-OS",
        status: "Complete",
        image: "assets/images/profile_picture.png"
    },
    PersonalWebsite: {
        name: "My Personal Website",
        description: "The website you are currently on!",
        demo: "https://thatcorley.github.io/Personal-Website",
        repo: "https://github.com/thatcorley/Personal-Website",
        status: "Complete",
        image: "assets/images/profile_picture.png"
    },
    RateDriving: {
        name: "Rate Driving",
        description: "A website that allowed you to rate people's driving by submitting their number plate.",
        demo: "https://github.com/thatcorley/Rate-Driving",
        repo: "https://github.com/thatcorley/Rate-Driving",
        status: "Discontinued",
        image: "assets/images/profile_picture.png"
    },
    CustomNewTab: {
        name: "Custom New Tab",
        description: "A VERY simple new tab window that I made",
        demo: "https://thatcorley.github.io/Custom-New-Tab/",
        repo: "https://github.com/thatcorley/Custom-New-Tab",
        status: "Complete",
        image: "assets/images/profile_picture.png"
    },
    TardisDatapack: {
        name: "Minecraft Tardis Datapack",
        description: "A Minecraft datapack that added the Tardis from Doctor Who to the game.",
        demo: "https://github.com/thatcorley/Tardis-Datapack",
        repo: "https://github.com/thatcorley/Tardis-Datapack",
        status: "Incomplete",
        image: "assets/images/profile_picture.png"
    },
    DiscordGiveawayBot: {
        name: "Discord Giveaway Bot",
        description: "A simple giveaway bot written in python.",
        demo: "https://github.com/thatcorley/Discord-Giveaway-Bot",
        repo: "https://github.com/thatcorley/Discord-Giveaway-Bot",
        status: "Complete",
        image: "assets/images/profile_picture.png"
    }
}

const projectsDiv = document.getElementById("projects-content");
for (const project in projects) {
    //console.log(projects[project].name)
    const projectDiv = document.createElement("div")
    projectDiv.classList.add("project")
    projectDiv.innerHTML = `<img src="${projects[project].image}" alt="${projects[project].name}">
                <div style="flex-direction: column; display: flex;">
                    <h1>${projects[project].name}</h1>
                    <p>${projects[project].description}</p>
                    <div class="project-links">
                        <a href="${projects[project].repo}" target="_blank">Repo</a>
                        <p>|</p>
                        <a href="${projects[project].demo}" target="_blank">Demo</a>
                    </div>
                </div>`
    projectsDiv.appendChild(projectDiv)
}
