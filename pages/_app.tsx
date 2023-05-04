import '../styles/globals.css'
import type {AppProps} from 'next/app'
import {ChakraProvider} from "@chakra-ui/react";
import {ApiProvider} from "@reduxjs/toolkit/src/query/react";
import {apiSlice} from "../controller/apiSlice";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ChakraProvider>
            {/*<ApiProvider api={apiSlice}>*/}
            <Component {...pageProps}/>
            {/*</ApiProvider>*/}
        </ChakraProvider>
    )
}

export default MyApp
