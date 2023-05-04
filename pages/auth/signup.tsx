import Head from "next/head";
import {Button, FormControl, FormLabel, useToast, Input,} from '@chakra-ui/react'
import Link from "next/link";
import {useForm, SubmitHandler} from "react-hook-form";
import axios from "axios";
import {Inputs} from "./index";
import {useRouter} from "next/router";

const Signin = () => {
    const toast = useToast()
    const route = useRouter()
    const {register, handleSubmit, watch, formState: {errors}} = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        try {
            const res = await axios.post(`${process.env.HTTP_BASE_URL}/register`, data)
            console.log(process.env.HTTP_BASE_URL)
            toast({
                title: 'Account created.',
                description: res.data.message,
                status: 'success',
                duration: 9000,
                isClosable: true,
            })
            await route.push("/auth/")
            console.log(res)
        } catch (e) {
            toast({
                title: 'Error creating account.',
                description: "error",
                status: 'error',
                duration: 9000,
                isClosable: true,
            })

        }
    };

    return (
        <div className="bg-blue-950 h-screen">
            <Head>
                <title>Create Account</title>
            </Head>
            <main className={'p-20'}>
                <div className="bg-white p-4 w-[300px] p-4 mx-auto my-10 rounded shadow-green-600">
                    <h1 className={"font-black text-2xl"}>Sign up for an account</h1>
                    <p>Already have an account? <Link href={"/auth/"}><strong>Login</strong></Link></p>
                    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2 w-full py-4 ">


                        <FormControl isRequired>
                            <FormLabel>Username</FormLabel>
                            <Input data-cy={"username"} {...register("username")} type={"text"}/>
                        </FormControl>
                        <FormControl isRequired>
                            <FormLabel>Password</FormLabel>
                            <Input data-cy={"password"} {...register("password")} type={"password"}/>
                        </FormControl>
                        <FormControl isRequired>
                            <FormLabel>Confirm Password</FormLabel>
                            <Input data-cy={"confirm-password"} {...register("password")} type={"password"}/>
                        </FormControl>
                        <Button data-cy={"signup"} type={"submit"} colorScheme={"blue"}>
                            Create Account
                        </Button>
                    </form>
                </div>

            </main>

        </div>
    )
}

export default Signin