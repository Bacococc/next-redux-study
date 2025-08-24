import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "./index";

// dispatch 타입 안전하게
export const useAppDispatch: () => AppDispatch = useDispatch;

// selector 타입 안전하게
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;