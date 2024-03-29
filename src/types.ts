export interface Judge {
    id: string; // уникальный идентификатор судьи
    name: string; // имя судьи
    region: string; // регион, который судья представляет
    category: string; // категория судьи, например "BK", "1K", "2K", "3K"
}

export interface Competition {
    id: string;
    name: string;
    sportType: string;
    startDate: string;
    endDate: string;
    location: string;
    judges: Judge[];
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

export interface User {
    id: string;
    name: string;
    email: string;
}

export interface ScoreRow {
    changeStand: string;
    athlete: string;
    seriesScores: (number[] | null)[];
    totalPoints: number;
    place: number;
    rankAchieved: string;
}