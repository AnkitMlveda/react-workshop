import axios from "axios";

const todoUrl = "http://localhost:3000/posts";

export const addnewtodo = (tasklist) => axios.post("", { tasklist: tasklist }, { baseURL: todoUrl });

export const savetodo = ({id,inputText}) => axios.put(id, {tasklist:inputText} , { baseURL: todoUrl })
.then((res )=> res.data );

export const deletetodo = (id) => axios.delete(id, { baseURL: todoUrl });
