export interface Judge {
    id: string; // уникальный идентификатор судьи
    name: string; // имя судьи
    region: string; // регион, который судья представляет
    category: string; // категория судьи, например "BK", "1K", "2K", "3K"
}

export interface CompetitionEvent {
    ageGroup: string;
    discipline: string;
    date: string;
    time: string;
    stage: string;
    numberOfTargets: number;
    numberOfParticipants: number;
}

export interface JudgeProtocol {
    name: string;
    region: string;
    scores: number[];
    totalPoints: number;
    rank: number;
}