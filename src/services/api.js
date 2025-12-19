import axios from "axios";
const baseURL = process.env.REACT_APP_BASE_URL;
const API = axios.create({
  baseURL: baseURL,
});

// Student
export const saveStudent = (data) => API.post("/student/apis/save", data);

export const getAllStudents = () => API.get("/student/apis/findAll");

// Author
export const saveAuthor = (data) => API.post("/author/apis/save", data);

// Book
export const saveBook = (data) => API.post("/book/apis/save", data);

// Transaction
export const saveTransaction = (data) =>
  API.post("/transaction/apis/save", data);
