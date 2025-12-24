import axios from "axios";

const API = axios.create({
  baseURL: "https://library-backend-2-xuej.onrender.com",
});

/* 🔐 Attach BASIC AUTH only for PROTECTED APIs */
API.interceptors.request.use((config) => {
  const auth = JSON.parse(localStorage.getItem("auth"));

  const isAuthApi = config.url.startsWith("/auth");

  if (auth && !isAuthApi) {
    config.auth = {
      username: auth.username,
      password: auth.password,
    };
  }

  return config;
});

// ---------- AUTH ----------
export const registerUser = (data) => API.post("/auth/register", data);

export const loginUser = (username, password) =>
  API.get("/auth/login", {
    auth: { username, password },
  });

// ---------- STUDENT ----------
export const saveStudent = (data) => API.post("/student/apis/save", data);
export const getAllStudents = () => API.get("/student/apis/findAll");

// ---------- AUTHOR ----------
export const saveAuthor = (data) => API.post("/author/apis/save", data);

// ---------- BOOK ----------
export const saveBook = (data) => API.post("/book/apis/save", data);

// ---------- TRANSACTION ----------
export const saveTransaction = (data) =>
  API.post("/transaction/apis/save", data);

export default API;
