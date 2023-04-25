import Head from "next/head";
import {Button, FormControl, FormLabel, Input,} from '@chakra-ui/react'
import Link from "next/link";

const Signin = () => {
    return (
        <div className="bg-blue-950 h-screen">
            <Head>
                <title>Login</title>
            </Head>
            <main className={'p-20'}>
                <div className="bg-white p-4 w-[300px] p-4 mx-auto my-10 rounded shadow-green-600">
                    <h1 className={"font-black text-2xl"}>Sign in to your account</h1>
                    <p>Don&apos;t have an account? <Link href={"/auth/signup"}><strong>Sign Up!</strong></Link></p>
                    <form className="flex flex-col gap-2 w-full py-4 ">
                        <FormControl isRequired>
                            <FormLabel>Email</FormLabel>
                            <Input type={"email"}/>
                        </FormControl>
                        <FormControl isRequired>
                            <FormLabel>Password</FormLabel>
                            <Input type={"password"}/>
                        </FormControl>
                        <Button colorScheme={"blue"}>
                            Sign In
                        </Button>
                    </form>
                </div>

            </main>

        </div>
    )
}

export default Signin