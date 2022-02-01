import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type AppInfo = {
  time: string;
  city: string;
  currentTab: number;
  modalVisible: boolean;
  modalContent: string;
};

const initialState: AppInfo = {
  time: "00:00",
  city: "Москва",
  currentTab: 0,
  modalVisible: false,
  modalContent: "",
};

export const appInfoSlice = createSlice({
  name: "app_info",
  initialState,
  reducers: {
    updateTime(state, action: PayloadAction<string>) {
      state.time = action.payload;
    },
    changeCity(state, action: PayloadAction<string>) {
      state.city = action.payload;
    },
    switchTab(state, action: PayloadAction<number>) {
      state.currentTab = action.payload;
    },
    showModal(state, action: PayloadAction<string>) {
      state.modalContent = action.payload;
      state.modalVisible = true;
    },
    hideModal(state) {
      state.modalVisible = false;
    },
  },
});

export default appInfoSlice.reducer;
