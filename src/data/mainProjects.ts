import { MainProjectData } from "../types/types"

export const mainProjects: MainProjectData[] = [
    {
        id: 1,
        title: "GameHub",
        description: "Game hub is a gamer centered website where gamers can get gaming news and get access to new and old games through stores.",
        img: "game-hub.png",
        tools: ["React", "CSS", "Javascript"],
        gitLink: "https://github.com/Tarvs01/Game-Hub",
        externalLink: "https://gamehub-xlyq.onrender.com/"
    },
    {
        id: 2,
        title: "Save Them All",
        description: "This website is aimed at drawing attention to the plights of endangered animals and efforts being put by both government and non government organizations to ensure their conservation.",
        img: "save-them-all.png",
        tools: ["React", "jQuery", "Javascript", "CSS", "Node"],
        gitLink: "/",
        externalLink: "https://save-them-all.onrender.com/"
    },
    {
        id: 3,
        title: "GetReponse Clone",
        description: "This project is a clone of the official getResponse Homepage. This was my first ever major project and it contained many styling and responsiveness challenges that made the project worthwhile. The official website updates frequently and I try to implement changes whenever I notice them. ",
        img: "get-response.png",
        tools: ["HTML","CSS", "Javascript"],
        gitLink: "/",
        externalLink: "https://get-response-clone.onrender.com"
    }
]