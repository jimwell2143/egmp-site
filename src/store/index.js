import dropdownReducer from "../slices/dropdown"
import loadingReducer from "../slices/loading"
import loginReducer from "../slices/login"
import manpowerReducer from "../slices/manpower"
import profileReducer from "../slices/profile"
import { configureStore } from "@reduxjs/toolkit"

export const store = configureStore({
    reducer: {
        loading: loadingReducer,
        login: loginReducer,
        profile: profileReducer,
        dropdown: dropdownReducer,
        manpower: manpowerReducer
    },
    devTools: true
})

export default store
