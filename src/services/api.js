import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:7777",
});

/* 🔐 Attach BASIC AUTH automatically */
API.interceptors.request.use((config) => {
  const auth = JSON.parse(localStorage.getItem("auth"));

  if (auth) {
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
