// ===> Tag Interface <===
export interface TagProps {
  id: number;
  name: string;
}

export interface UpdateTagProps {
  tagId: number |string;
  translateId: number |string;
}
