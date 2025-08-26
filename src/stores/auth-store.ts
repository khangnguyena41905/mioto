import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";

interface AuthState {
  user: string | null;
  token: string | null;
  login: (user: string, token: string) => Promise<void>;
  logout: () => Promise<void>;
}

export const useAuth = create<AuthState>((set) => ({
  user: null,
  token: null,
  login: async (user, token) => {
    await AsyncStorage.setItem("token", token);
    set({ user, token });
  },
  logout: async () => {
    await AsyncStorage.removeItem("token");
    set({ user: null, token: null });
  },
}));
