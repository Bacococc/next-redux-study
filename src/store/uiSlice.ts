import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UIState {
  selectedRegion: string;
  selectedCategory: string;
  searchKeyword: string;
};

const initialState = {
  selectedRegion: '서울',
  selectedCategory: '메거진',
  searchKeyword: '',
};

//ui의 state 저장소라고 생각
export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setRegion: (state, action: PayloadAction<string>) => {
      state.selectedRegion = action.payload;
    },
    setCategory: (state, action: PayloadAction<string>) => {
      state.selectedCategory = action.payload;
    },
    setSearchKeyword: (state, action: PayloadAction<string>) => {
      state.searchKeyword = action.payload;
    },
  },
});

//위의 ui 상태 저장소의 갑을 바꾸는 액션
export const { setRegion, setCategory, setSearchKeyword } = uiSlice.actions;
export default uiSlice.reducer;