import { create } from "zustand";
import { IZoomStore } from "./types";

const useZoom = create<IZoomStore>((set) => ({
  zoom: 100,
  setZoom: (zoomNumber: number) => set(() => ({ zoom: zoomNumber })),
}));

export default useZoom;
