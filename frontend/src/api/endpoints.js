import { api } from "./client";

export const register = (email, password) =>
  api("/auth/register", { method: "POST", body: { email, password } });

export const login = (email, password) =>
  api("/auth/login", { method: "POST", form: { username: email, password } });

export const fetchMe = () => api("/auth/me");

export const fetchEpisodes = () => api("/episodes");