import Head from "next/head";
import {Button, FormControl, FormLabel, HStack, Input,} from '@chakra-ui/react'
import Link from "next/link";

const Signin = () => {
    return (
        <div className="bg-blue-950 h-screen">
            <Head>
                <title>Login</title>
            </Head>
            <main className={'p-20'}>
                <div className="bg-white p-4 w-[300px] p-4 mx-auto my-10 rounded shadow-green-600">
                    <h1 className={"font-black text-2xl"}>Sign up for an account</h1>
                    <p>Already have an account? <Link href={"/auth/signin"}><strong>Login</strong></Link></p>
                    <form className="flex flex-col gap-2 w-full py-4 ">

                        <HStack>
                            <FormControl isRequired>
                                <FormLabel>First Name</FormLabel>
                                <Input type={"text"}/>
                            </FormControl>
                            <FormControl isRequired>
                                <FormLabel>Last Name</FormLabel>
                                <Input type={"text"}/>
                            </FormControl>

                        </HStack>
                        <FormControl isRequired>
                            <FormLabel>Email</FormLabel>
                            <Input type={"email"}/>
                        </FormControl>
                        <FormControl isRequired>
                            <FormLabel>Password</FormLabel>
                            <Input type={"password"}/>
                        </FormControl>
                        <FormControl isRequired>
                            <FormLabel>Confirm Password</FormLabel>
                            <Input type={"password"}/>
                        </FormControl>
                        <Button colorScheme={"blue"}>
                            Create Account
                        </Button>
                    </form>
                </div>

            </main>

        </div>
    )
}

export default Signin