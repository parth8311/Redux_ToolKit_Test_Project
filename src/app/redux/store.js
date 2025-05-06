import usersReducer from "./slice";

const { configureStore } = require("@reduxjs/toolkit");

import todoReducer from "./todoSlice";

export const store = configureStore({
    reducer: {
        usersData:usersReducer,
        todosData:todoReducer
    }
})