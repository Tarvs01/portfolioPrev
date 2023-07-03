export interface JobCard {
  id: number;
  name: string;
  description: string;
  gitLink?: string;
  externalLink: string;
  toolsUsed: string[];
}

export interface MainProjectData{
    id: number,
    title: string,
    description: string,
    img: string,
    tools: string[],
  gitLink?: string,
  externalLink: string
}