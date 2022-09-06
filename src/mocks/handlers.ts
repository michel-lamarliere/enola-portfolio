import { rest } from "msw";

export const handlers = [
  rest.post(`${process.env.REACT_APP_FORM_BACKEND}/`, () => {}),
  rest.get("/user", () => {}),
];
