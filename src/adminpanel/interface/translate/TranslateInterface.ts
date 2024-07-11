export interface TranslationDto {
  id?: number;
  englishWord: string;
  russianWord: string;
  azDescription: string;
  ruDescription: string;
  source: string;
}

interface TagType {
  id: number;
  name: string;
}
export interface TranslationUpdateDto {
  id: number;
  englishWord: string;
  russianWord: string;
  azDescription: string;
  ruDescription: string;
  source: string;
  tags: TagType[];
}

export interface TranslationInterface {
  translateDto: TranslationDto;
  tagIds: number[];
}

export interface TranslationInterfacePayload{
  translateDto:{
    englishWord: string;
  russianWord: string;
  azDescription: string;
  ruDescription: string;
  source: string;
  }
  tagIds: number[];
}