export interface IItem {
  type: string;
  name: string;
  children?: IItem[];
}
