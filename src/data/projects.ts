interface JobCard {
    id: number,
  name: string;
  description: string;
  gitLink?: string;
  externalLink: string;
  toolsUsed: string[];
}

export const projects: JobCard[] = [
    {
        id: 1,
        name: "Game Hub",
        description: "A simple website for gamers to get access to gaming news and access to the latest video games",
        gitLink: "https://github.com/tarvs01/game-hub",
        externalLink: "https://gamehub-xlyq.onrender.com",
        toolsUsed: ["React", "CSS"]
    },
    {
        id: 2,
        name: "Save Them All",
        description: "A site aimed at drawing attention to the plights of endangered animals and preservation steps being taken by organizations for their preservation",
        gitLink: "https://github.com/tarvs01/game-hub",
        externalLink: "https://gamehub-xlyq.onrender.com",
        toolsUsed: ["React", "CSS", "SCSS", "Node"]
    },
    {
        id: 3,
        name: "Rock Paper Scissors",
        description: "The first iteration of RPS. This features the classic rock paper scissors game played against the computer.",
        gitLink: "https://github.com/tarvs01/game-hub",
        externalLink: "https://gamehub-xlyq.onrender.com",
        toolsUsed: ["HTML", "CSS", "Javascript", "SCSS"]
    },
    {
        id: 4,
        name: "Rock Paper Scissors Lizzard Spock",
        description: "The second iteration of RPS. This improves on the basic rock paper scissors game by adding two more elements",
        gitLink: "https://github.com/tarvs01/game-hub",
        externalLink: "https://gamehub-xlyq.onrender.com",
        toolsUsed: ["HTML", "CSS", "Javascript", "SCSS"]
    },
    {
        id: 5,
        name: "Calculator",
        description: "A web based calculator for performing basic arithmetic operations. It comes with themes.",
        gitLink: "https://github.com/tarvs01/game-hub",
        externalLink: "https://gamehub-xlyq.onrender.com",
        toolsUsed: ["HTML", "CSS", "Javascript", "SCSS"]
    },
    {
        id: 6,
        name: "Evasive Submit",
        description: "A form with a submit button that evades the user until all input fields are correctly filled.",
        gitLink: "https://github.com/tarvs01/game-hub",
        externalLink: "https://gamehub-xlyq.onrender.com",
        toolsUsed: ["React", "CSS", "sass"]
    }
]