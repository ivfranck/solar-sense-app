import React from "react";
import teslasolarpanel from "../data/teslasolarpanel.jpeg";
import {NavLink} from "react-router-dom";
import {
    AiOutlineEuroCircle, AiOutlineInfoCircle,
    AiOutlineShop,
} from "react-icons/ai";
import LineRec from "./Charts/LineRec";

const SolarRec = () => {
    return(
        <div className="m-12">
            <div className="block p-6 ">
                <h5 className="mb-2 text-5xl font-bold tracking-tight text-gray-900 dark:text-white">Your Perfect S<a className="text-green-600">o</a>lar Solution</h5>
                <br/>
                <p className="first-letter:text-8xl first-letter:font-bold first-letter:text-black dark:first-letter:text-gray-100 first-letter:mr-3 first-letter:float-left text-neutral-500">Looking for the ideal solar panel system that perfectly suits your energy needs? Look no further! Our cutting-edge platform
                analyzes your electricity consumption data and provides personalized recommendations for the best solar panel system for your
                home or business. With our tailored approach, you can maximize your energy savings, reduce your carbon footprint, and enjoy a
                    seamless transition to clean, renewable power. Embrace the future of solar energy and let us guide you towards the perfect solar
                    solution that aligns with your unique energy requirements.</p>

            </div>
            <div className="block p-6 ">
                <br/>
            <h5 className="mb-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">SolarSense Pick:</h5>
                <br/>
                <p className="text-neutral-500 text-center">Through our rigorous algorithmic process, we confidently recommend a solar panel system that not only reduces your electricity costs but also ensures a remarkable
                    return on investment (ROI). By generating clean, renewable energy on-site, you'll experience significant savings on your utility bills, making your solar
                    investment truly worthwhile.
                </p>
                <br/>
            </div>
            <div className="flex gap-10 flex-wrap justify-center">

                <div className="flex">
                    <img className="rounded-t-lg max-w-xs border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" src={teslasolarpanel} alt=""/>
                </div>


                <div className="block max-w-xl p-6 bg-white ">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-black dark:text-white">JA SOLAR 500W 3.0 HALF-CUT MC4</h5>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-black dark:text-white">€ 192.39</h5>
                    <p className="font-bold">Description</p>
                    <p className="font-normal text-neutral-500 dark:text-gray-400">Monocrystalline photovoltaic panel Deep Blue 3.0 technology series of 66 half-cut 500W cells, MC4 EVO2s connectors.
                    </p>
                    <p className="font-bold">Details</p>
                    <p className="font-normal text-neutral-500">
                        Panel Power: 500W
                        <br/>
                        Panel Type: Monofacial
                        <br/>
                        Frame Color: Silver
                    </p>


                </div>

            </div>

            <br/>
            <br/>
            <br/>
            <p className="text-neutral-500 text-center">
                Our precise calculations take into account various factors such as your consumption patterns, available sunlight, and local energy rates, enabling us to
                provide tailored recommendations that align with your financial goals. By adopting the above solar panel system, you'll pave the way towards a sustainable
                future while reaping the rewards of substantial long-term savings.
                Below shows how much of a difference using the recommended solar panel brings:
            </p>
            <LineRec/>


            <div className="flex gap-10 flex-wrap justify-center">

                <div className="flex flex-col justify-center items-center">

                    <div className="!z-5 max-w-[378px] max-h-[368px] p-16 relative flex h-full w-full flex-col rounded-[20px] bg-light-gray bg-clip-border p-4 dark:!bg-navy-800 dark:text-white">

                        <div className="mb-auto flex flex-col items-center justify-center">
                            <div
                                className="mt-2 flex items-center justify-center rounded-full bg-lightPrimary p-[26px] text-5xl font-bold text-brand-500 dark:!bg-navy-700 dark:text-white">

                                <AiOutlineEuroCircle/>
                            </div>
                            <h4 className="mb-px mt-3 text-2xl font-bold text-navy-700 dark:text-white">
                                € 589<span className="ml-1 text-sm font-normal text-gray-500">/year</span>
                            </h4>

                            <p className="px-5 text-center text-base font-normal text-gray-600 md:!px-0 xl:!px-8">
                                Saved by using our recommendation
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col justify-center items-center">

                    <div className="!z-5 max-w-[378px] max-h-[368px] p-16 relative flex h-full w-full flex-col rounded-[20px] bg-light-gray bg-clip-border p-4 dark:!bg-navy-800 dark:text-white">

                        <div className="mb-auto flex flex-col items-center justify-center">
                            <div
                                className="mt-2 flex items-center justify-center rounded-full bg-lightPrimary p-[26px] text-5xl font-bold text-brand-500 dark:!bg-navy-700 dark:text-white">

                                <AiOutlineShop/>
                            </div>
                            <h4 className="mb-px mt-3 text-2xl font-bold text-navy-700 dark:text-white">
                                Shop Solar Panel
                            </h4>
                            <p className="px-5 text-center text-base font-normal text-gray-600 md:!px-0 xl:!px-8">
                                Purchase our recommended solar panel from merchant
                            </p>
                            <p className="px-5 text-center text-base font-normal text-green-600 md:!px-0 xl:!px-8 hover:underline">
                                <a href="#">Click to purchase →</a>
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col justify-center items-center">
                    <NavLink to={'/solarinfo'}>
                    <div className="hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 !z-5 max-w-[378px] max-h-[368px] p-16 relative flex h-full w-full flex-col rounded-[20px] bg-light-gray bg-clip-border p-4 dark:!bg-navy-800 dark:text-white ">

                        <div className="mb-auto flex flex-col items-center justify-center">
                            <div
                                className="mt-2 flex items-center justify-center rounded-full bg-lightPrimary p-[26px] text-5xl font-bold text-brand-500 dark:!bg-navy-700 dark:text-white">

                                <AiOutlineInfoCircle/>
                            </div>
                            <h4 className="mb-px mt-3 text-2xl font-bold text-navy-700 dark:text-white">
                                Solar Info
                            </h4>
                            <p className="px-5 text-center text-base font-normal text-gray-600 md:!px-0 xl:!px-8">
                                Click to read more on solar panels
                            </p>
                        </div>
                    </div>
                        </NavLink>
                </div>
            </div>


            </div>
    )
}

export default SolarRec;