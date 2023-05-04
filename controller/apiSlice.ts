import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

export const apiSlice = createApi({
    reducerPath: "authAPi",
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.HTTP_BASE_URL,
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
