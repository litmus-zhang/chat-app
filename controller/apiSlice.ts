import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

export const apiSlice = createApi({
    reducerPath: "authAPi",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:8080"
    }),
    endpoints : (builder) => ({
        login : builder.mutation({
            query: (credentials) =>({
                url: "login",
                method: "POST",
                body: credentials
            })
        }),
        register : builder.mutation({
            query : (credentials) =>({
                url: "register",
                method: "POST",
                body: credentials
            })
        })
    })
})

export  const {
    useLoginMutation,
    useRegisterMutation
} = apiSlice