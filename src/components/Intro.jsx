import { TbBackground } from "react-icons/tb"



const Intro = () => {
    return (
        <>


            <div className="w-full h-screen overflow-hidden relative">
                <img src='/Pics/main_cover.jpg' alt="cover" className="  filter brightness-50" />
                <div className="absolute w-full h-[100%]   top-0">
                    <div className="flex flex-col items-center justify-center h-full">
                        <h1 className="text-4xl font-bold text-white ml-12" style={{ color: "#ffffff" }}>Hi, I'm Mstr Hammad
                        </h1>

                        <h1 className="text-white text-xl mr-14  mt-4 font-bold " style={{ color: "#ffffff " }}>I'm a Designer & Developer</h1>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Intro