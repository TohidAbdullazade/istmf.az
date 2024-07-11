export interface ClientTranslateInterface {
    id: number;
    tags: {
        tagId: number;
        translateId: number;
    }[];
    englishWord: string;
    russianWord: string;
    azDescription: string;
    ruDescription: string;
    source: string;
}