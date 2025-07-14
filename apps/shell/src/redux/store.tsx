import { configureStore } from "@reduxjs/toolkit";
import { Provider, useSelector, useDispatch } from "react-redux";

import MenuSlice from "./menuSlice";
import { updateSelectedMenu } from "./menuSlice";
import { ReactElement } from "react";

export const rootReducer = {
  menuData: MenuSlice,
};

export const store = configureStore({
  reducer: rootReducer,
});

export function StoreProvider({ children }: any) : ReactElement{
  return <Provider store={store}>{children}</Provider>;
}

export function useStore() {
  const menuData = useSelector((state: any) => state.menuData);
  const dispatch = useDispatch();
  return {
    menuData,
    setMenuSelected: (menuItem : any) => dispatch(updateSelectedMenu(menuItem)),
  };
}
