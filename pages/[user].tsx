import Head from "next/head";
import {Avatar, IconButton, Input} from "@chakra-ui/react";
import {BsFillSendFill} from "react-icons/bs"


function ReceivingMsgCard() {
    return <div className={"bg-blue-700 flex flex-col w-fit max-w-[400px] p-2 text-white rounded-r-lg rounded-b-lg"}>
        <p className={"whitespace-pre-line"}>Hello there loem</p>
        <small className={"self-end text-gray-400"}>02:30</small>
    </div>;
}

function SendingMsgCard() {
    return <div
        className={"bg-blue-500 flex flex-col w-fit max-w-[400px] p-2 text-white rounded-l-lg rounded-b-lg self-end"}>
        <p className={"whitespace-pre-line"}>Hello there loem </p>
        <small className={"self-end text-gray-400"}>02:30</small>
    </div>;
}

const User = () => {
    return (
        <div className="bg-blue-950 min-h-screen">
            <Head>All Chats</Head>
            <main className="min-h-full">
                <header className={"fixed top-0 left-0 z-10 mb-5 w-full bg-white p-2 text-xl font-semibold mb-2"}>
                    <div className={"flex gap-2 items-center"}>
                        <Avatar name={"Litmus Zhang"} size={"sm"}/>
                        <p>Litmus Zhang</p>
                    </div>
                </header>
                <div className={"p-2 py-4 flex flex-col gap-1 mt-10 "}>
                    <ReceivingMsgCard/>
                    <SendingMsgCard/>

                </div>
                <div className={"fixed bottom-0 bg-blue-800 p-3 w-full flex gap-2 text-white"}>
                    <Input variant={"filled"} placeholder={"Type a message"}/>
                    <IconButton colorScheme={"blue"} className={"bg-blue-700 shadow-md"} aria-label={"Send Message"}
                                icon={<BsFillSendFill/>}/>
                </div>
            </main>
        </div>
    )
}

export default User