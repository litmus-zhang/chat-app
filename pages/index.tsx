import type {NextPage} from 'next'
import Head from "next/head";
import {Avatar} from "@chakra-ui/react";


function ProfileCard() {
    return <div
        className={"flex cursor-pointer gap-2 p-3 items-center justify-between text-white border-b border-gray-700 w-full"}>
        <div className={"flex items-center gap-2"}>
            <Avatar name={"Litmus Zhang"}/>
            <p className={"text-md"}>
                Litmus Zhang 🎉
            </p>
        </div>
        <small className={"text-gray-500 font-medium"}>
            11:00
        </small>
    </div>;
}

const Home: NextPage = () => {
    const list = new Array(20).fill(0).map((_, i) => i + 1)
    return (
        <div className="bg-blue-950 min-h-full">
            <Head>All Chats</Head>
            <main className="">
                <header className={"fixed top-0 left-0 z-10 mb-5 w-full bg-white p-2 text-xl font-semibold mb-2"}>
                    💎 Friend Zone
                </header>
                <div className={"p-2 mt-10"}>
                    {
                        list.map(i => <ProfileCard key={i}/>
                        )
                    }
                </div>
            </main>
        </div>
    )
}

export default Home
