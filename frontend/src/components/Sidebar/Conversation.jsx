const Conversation = ()=>{
return(
    <div>


        <div className={"flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer"}>

            <div className={"avatar online"}>
                <div className={"w-12 rounded-full"}>
                    <img src="https://images.ottplay.com/images/raayan-1708604044.jpg?impolicy=ottplay-20210210&width=1200&height=675" alt=""/>
                </div>
            </div>



            <div className={"flex flex-col flex-1"}>
            <div className={"flex gap-3 justify-between"}>
                <p className={"font-bold text-gray-200"}>Jogn Doe</p>
                <span className={"text-xl"}>emo</span>
            </div>
            </div>

        </div>





        <div className={"divider my-0 py-0 h-1"}>

        </div>

    </div>

)
}
export default Conversation;