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
        name: "Blizzard Clone",
        description: "A clone of the official Blizzard website homepage. Built with React",
        gitLink: "https://github.com/tarvs01/game-hub",
        externalLink: "https://gamehub-xlyq.onrender.com",
        toolsUsed: ["React", "CSS", "Framer Motion"]
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
        toolsUsed: ["React", "CSS", "SCSS"]
    }
]