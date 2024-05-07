import { atom } from "recoil";

export enum PageState {
  Home = "Home",
  Form = "Form",
}

export interface IPageState {
  page: PageState;
}

const initialState: IPageState = {
  page: PageState.Home,
};

export const pageStateAtom = atom({
  key: "pageState",
  default: initialState,
});
