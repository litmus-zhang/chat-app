import Head from "next/head";
import {useForm, SubmitHandler} from "react-hook-form";
import {Button, FormControl, FormLabel, Input, useToast} from '@chakra-ui/react'
import Link from "next/link";
import axios from "axios";
import {useRouter} from "next/router";
import (useRouter) from "next/router"

export interface Inputs {
    password: string
    username: string
}

const Index = () => {
    const route = useRouter()
    const toast = useToast()
    const {register, handleSubmit, watch, formState: {errors}} = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        try {

            const res = await axios.post( process.env.HTTP_BASE_URL+ "/login", data)
            toast({
                title: 'Login Successful.',
                description: "Login successful",
                status: 'success',
                duration: 9000,
                isClosable: true,
            })
            console.log(res.data)
        } catch (e) {
            toast({
                title: 'Error logging in.',
                description: "There is an error login in to your account",
                status: 'error',
                duration: 9000,
                isClosable: true,
            })

        }
    };

    return (
        <div className="bg-blue-950 h-screen">
            <Head>
                <title>Login</title>
            </Head>
            <main className={'p-20'}>
                <div className="bg-white p-4 w-[300px] p-4 mx-auto my-10 rounded shadow-green-600">
                    <h1 className={"font-black text-2xl my-4"}>Login to your account</h1>
                    <p>Don&apos;t have an account? <Link href={"/auth/signup"}><strong>Sign Up!</strong></Link></p>
                    <form onSubmit={handleSubmit(onSubmit)}
                          className="flex flex-col gap-2 w-full py-4 ">
                        <FormControl isRequired>
                            <FormLabel>Username</FormLabel>
                            <Input data-cy={"username"} {...register("username")} type={"text"}/>
                        </FormControl>
                        <FormControl isRequired>
                            <FormLabel>Password</FormLabel>
                            <Input data-cy={"password"} {...register("password")} type={"password"}/>
                        </FormControl>
                        <Button type={"submit"} colorScheme={"blue"}>
                            Sign In
                        </Button>
                    </form>
                </div>

            </main>

        </div>
    )
}

export default Index