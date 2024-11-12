export enum ApiStatus {
  "loading",
  "ideal",
  "error",
  "SUCCESS",
}
export interface Iuser {
  id: number;
  name: string;
  email: String;
}
export interface IuserState {
  list: Iuser[];
  listStatus: ApiStatus;
}
export const users: Iuser[] = [
  { id: 1, name: "Alice Johnson", email: "alice.johnson@example.com" },
  { id: 2, name: "Bob Smith", email: "bob.smith@example.com" },
  { id: 3, name: "Charlie Brown", email: "charlie.brown@example.com" },
  { id: 4, name: "Diana Prince", email: "diana.prince@example.com" },
  { id: 5, name: "Edward Norton", email: "edward.norton@example.com" },
  { id: 6, name: "Fiona Glenanne", email: "fiona.glenanne@example.com" },
  { id: 7, name: "George Michael", email: "george.michael@example.com" },
  { id: 8, name: "Helen Mirren", email: "helen.mirren@example.com" },
  { id: 9, name: "Isaac Newton", email: "isaac.newton@example.com" },
  { id: 10, name: "Jane Austen", email: "jane.austen@example.com" },
];
