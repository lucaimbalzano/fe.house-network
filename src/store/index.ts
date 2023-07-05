"use client";

import { FilteredUser } from "@/lib/types/userTypes";
import { FlowInputScraper } from "@/lib/types/flowInputScraper";
import { create } from "zustand";

type Store = {
  authUser: FilteredUser | null;
  requestLoading: boolean;
  setAuthUser: (user: FilteredUser | null) => void;
  setRequestLoading: (isLoading: boolean) => void;
  reset: () => void;
  FlowInputScraper : FlowInputScraper | null;
  setFlowInputScraper : (flowInputScraper : FlowInputScraper | null) => void;
};

const useStore = create<Store>((set) => ({
  authUser: null,
  requestLoading: false,
  setAuthUser: (user) => set((state) => ({ ...state, authUser: user })),
  setRequestLoading: (isLoading) =>
    set((state) => ({ ...state, requestLoading: isLoading })),
  reset: () => set({ authUser: null, requestLoading: false }),
  FlowInputScraper: null,
  setFlowInputScraper: (flowInputScraper) => set((state) => ({ ...state, flowInputScraper: flowInputScraper}))
}));

export default useStore;
