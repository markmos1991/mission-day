import React from 'react'

const Happy = () => {
    return (
        <section id="food" className="text-gray-600 body-font">
            <div className="container px-4 py-24 mx-auto">
                <div className="flex flex-col w-full mb-20 text-center">
                    <h1 className="mb-2 text-5xl font-medium text-gray-900 sm:text-4xl title-font">Food & Drink</h1>
                    <p className="mx-auto text-base leading-relaxed text-gray-500 lg:w-2/3">As we embrace the street art of the Northern Quarter we will need to refuel and refresh, please find the recommended watering holes and food vendors below. All deals and offers were correct on publication.</p>

                </div>
                <div className="flex flex-wrap -m-4">
                    <div className="w-full p-4 xl:w-1/4 md:w-1/2">
                        <div className="relative flex flex-col h-full p-6 overflow-hidden border-2 border-gray-300 rounded-lg">
                        <h2 className="mb-1 text-sm font-medium tracking-widest title-font">All Day</h2>

                            <h1 className="pb-4 mb-4 text-5xl leading-none text-gray-900 border-b border-gray-200">Common</h1>
                            <p className="flex items-center mb-2 text-gray-600">
                                <span className="inline-flex items-center justify-center flex-shrink-0 w-4 h-4 mr-2 text-white bg-gray-400 rounded-full">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                        <path d="M20 6L9 17l-5-5"></path>
                                    </svg>
                                </span>£4 Pints
                            </p>
                            <p className="flex items-center mb-2 text-gray-600">
                                <span className="inline-flex items-center justify-center flex-shrink-0 w-4 h-4 mr-2 text-white bg-gray-400 rounded-full">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                        <path d="M20 6L9 17l-5-5"></path>
                                    </svg>
                                </span>£5 Cocktails
                            </p>
                            <p className="flex items-center mb-2 text-gray-600">
                                <span className="inline-flex items-center justify-center flex-shrink-0 w-4 h-4 mr-2 text-white bg-gray-400 rounded-full">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                        <path d="M20 6L9 17l-5-5"></path>
                                    </svg>
                                </span>2 for £6 Shots
                            </p>
                            <p className="flex items-center mb-6 text-gray-600">
                                <span className="inline-flex items-center justify-center flex-shrink-0 w-4 h-4 mr-2 text-white bg-gray-400 rounded-full">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                        <path d="M20 6L9 17l-5-5"></path>
                                    </svg>
                                </span>39-41 Edge St, Manchester M4 1HW
                            </p>
                            <a href="https://www.aplacecalledcommon.co.uk/" target="_blank" rel="noopener noreferrer">
                            <button className="flex items-center w-full px-4 py-2 mt-auto text-white bg-blue-400 border-0 rounded focus:outline-none hover:bg-gray-500">Website
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                            </button>
                            </a>
                        </div>
                    </div>

                    <div className="w-full p-4 xl:w-1/4 md:w-1/2">
                        <div className="relative flex flex-col h-full p-6 overflow-hidden border-2 border-gray-300 rounded-lg">
                        <h2 className="mb-1 text-sm font-medium tracking-widest title-font">4-7PM</h2>

                            <h1 className="pb-4 mb-4 text-5xl leading-none text-gray-900 border-b border-gray-200">Arlows</h1>
                            <p className="flex items-center mb-2 text-gray-600">
                                <span className="inline-flex items-center justify-center flex-shrink-0 w-4 h-4 mr-2 text-white bg-gray-400 rounded-full">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                        <path d="M20 6L9 17l-5-5"></path>
                                    </svg>
                                </span>£10 for 2 Wines
                            </p>
                            <p className="flex items-center mb-2 text-gray-600">
                                <span className="inline-flex items-center justify-center flex-shrink-0 w-4 h-4 mr-2 text-white bg-gray-400 rounded-full">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                        <path d="M20 6L9 17l-5-5"></path>
                                    </svg>
                                </span>£7 for two pints
                            </p>
                            <p className="flex items-center mb-6 text-gray-600">
                                <span className="inline-flex items-center justify-center flex-shrink-0 w-4 h-4 mr-2 text-white bg-gray-400 rounded-full">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                        <path d="M20 6L9 17l-5-5"></path>
                                    </svg>
                                </span>15 Hilton St, Manchester M1 1JJ
                            </p>
                            <a href="https://arlosmcr.com/" target="_blank" rel="noopener noreferrer">
                            <button className="flex items-center w-full px-4 py-2 mt-auto text-white bg-blue-400 border-0 rounded focus:outline-none hover:bg-gray-500">Website
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                            </button>
                            </a>
                        </div>
                    </div>

                    <div className="w-full p-4 xl:w-1/4 md:w-1/2">
                        <div className="relative flex flex-col h-full p-6 overflow-hidden border-2 border-gray-300 rounded-lg">
                        <h2 className="mb-1 text-sm font-medium tracking-widest title-font">5-9PM</h2>

                            <h1 className="pb-4 mb-4 text-5xl leading-none text-gray-900 border-b border-gray-200">Crazy Pedros</h1>
                            <p className="flex items-center mb-2 text-gray-600">
                                <span className="inline-flex items-center justify-center flex-shrink-0 w-4 h-4 mr-2 text-white bg-gray-400 rounded-full">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                        <path d="M20 6L9 17l-5-5"></path>
                                    </svg>
                                </span>£10 Pizzas
                            </p>
                            <p className="flex items-center mb-2 text-gray-600">
                                <span className="inline-flex items-center justify-center flex-shrink-0 w-4 h-4 mr-2 text-white bg-gray-400 rounded-full">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                        <path d="M20 6L9 17l-5-5"></path>
                                    </svg>
                                </span>Cocktails 2 for £10
                            </p>
                            <p className="flex items-center mb-2 text-gray-600">
                                <span className="inline-flex items-center justify-center flex-shrink-0 w-4 h-4 mr-2 text-white bg-gray-400 rounded-full">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                        <path d="M20 6L9 17l-5-5"></path>
                                    </svg>
                                </span>£3 Hooch
                            </p>
                            <p className="flex items-center mb-6 text-gray-600">
                                <span className="inline-flex items-center justify-center flex-shrink-0 w-4 h-4 mr-2 text-white bg-gray-400 rounded-full">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                        <path d="M20 6L9 17l-5-5"></path>
                                    </svg>
                                </span>1 Short Street, M4 1AA
                            </p>
                            <a href="https://crazypedros.co.uk/crazy-pedros-pizza-parlour-nq/" target="_blank" rel="noopener noreferrer">
                            <button className="flex items-center w-full px-4 py-2 mt-auto text-white bg-blue-400 border-0 rounded focus:outline-none hover:bg-gray-500">Website
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                            </button>
                            </a>
                        </div>
                    </div>

                    <div className="w-full p-4 xl:w-1/4 md:w-1/2">
                        <div className="relative flex flex-col h-full p-6 overflow-hidden border-2 border-gray-300 rounded-lg">
                        <h2 className="mb-1 text-sm font-medium tracking-widest title-font">4-8PM</h2>

                            <h1 className="pb-4 mb-4 text-5xl leading-none text-gray-900 border-b border-gray-200">Chakalaka</h1>
                            <p className="flex items-center mb-2 text-gray-600">
                                <span className="inline-flex items-center justify-center flex-shrink-0 w-4 h-4 mr-2 text-white bg-gray-400 rounded-full">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                        <path d="M20 6L9 17l-5-5"></path>
                                    </svg>
                                </span>2 for £10 Cocktails
                            </p>
                            <p className="flex items-center mb-2 text-gray-600">
                                <span className="inline-flex items-center justify-center flex-shrink-0 w-4 h-4 mr-2 text-white bg-gray-400 rounded-full">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                        <path d="M20 6L9 17l-5-5"></path>
                                    </svg>
                                </span>50% off Mains
                            </p>
                            <p className="flex items-center mb-6 text-gray-600">
                                <span className="inline-flex items-center justify-center flex-shrink-0 w-4 h-4 mr-2 text-white bg-gray-400 rounded-full">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                        <path d="M20 6L9 17l-5-5"></path>
                                    </svg>
                                </span>105a Oldham St, M4 1LW
                            </p>
                            <a href="https://www.chakalakabar.com/" target="_blank" rel="noopener noreferrer">
                            <button className="flex items-center w-full px-4 py-2 mt-auto text-white bg-blue-400 border-0 rounded focus:outline-none hover:bg-gray-500">Website
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                            </button>
                            </a>
                        </div>
                    </div>

                    <div className="w-full p-4 xl:w-1/4 md:w-1/2">
                        <div className="relative flex flex-col h-full p-6 overflow-hidden border-2 border-gray-300 rounded-lg">
                        <h2 className="mb-1 text-sm font-medium tracking-widest title-font">4-8PM</h2>

                            <h1 className="pb-4 mb-4 text-5xl leading-none text-gray-900 border-b border-gray-200">Bunny Jackson</h1>
                            <p className="flex items-center mb-2 text-gray-600">
                                <span className="inline-flex items-center justify-center flex-shrink-0 w-4 h-4 mr-2 text-white bg-gray-400 rounded-full">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                        <path d="M20 6L9 17l-5-5"></path>
                                    </svg>
                                </span>Pint and Shot £6
                            </p>
                            <p className="flex items-center mb-2 text-gray-600">
                                <span className="inline-flex items-center justify-center flex-shrink-0 w-4 h-4 mr-2 text-white bg-gray-400 rounded-full">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                        <path d="M20 6L9 17l-5-5"></path>
                                    </svg>
                                </span>2 for £10 Cocktails
                            </p>
                            <p className="flex items-center mb-2 text-gray-600">
                                <span className="inline-flex items-center justify-center flex-shrink-0 w-4 h-4 mr-2 text-white bg-gray-400 rounded-full">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                        <path d="M20 6L9 17l-5-5"></path>
                                    </svg>
                                </span>House Pint £3
                            </p>
                            <p className="flex items-center mb-6 text-gray-600">
                                <span className="inline-flex items-center justify-center flex-shrink-0 w-4 h-4 mr-2 text-white bg-gray-400 rounded-full">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                        <path d="M20 6L9 17l-5-5"></path>
                                    </svg>
                                </span>64 Oldham St, M4 1LE
                            </p>
                            <a href="https://www.bunnyjacksons.co.uk/" target="_blank" rel="noopener noreferrer">
                            <button className="flex items-center w-full px-4 py-2 mt-auto text-white bg-blue-400 border-0 rounded focus:outline-none hover:bg-gray-500">Website
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                            </button>
                            </a>
                        </div>
                    </div>

                    <div className="w-full p-4 xl:w-1/4 md:w-1/2">
                        <div className="relative flex flex-col h-full p-6 overflow-hidden border-2 border-gray-300 rounded-lg">
                        <h2 className="mb-1 text-sm font-medium tracking-widest title-font">All Day</h2>

                            <h1 className="pb-4 mb-4 text-5xl leading-none text-gray-900 border-b border-gray-200">Wolf at the Door</h1>
                            <p className="flex items-center mb-2 text-gray-600">
                                <span className="inline-flex items-center justify-center flex-shrink-0 w-4 h-4 mr-2 text-white bg-gray-400 rounded-full">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                        <path d="M20 6L9 17l-5-5"></path>
                                    </svg>
                                </span>Bao Buns and Tacos starting at £1
                            </p>
                            <p className="flex items-center mb-2 text-gray-600">
                                <span className="inline-flex items-center justify-center flex-shrink-0 w-4 h-4 mr-2 text-white bg-gray-400 rounded-full">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                        <path d="M20 6L9 17l-5-5"></path>
                                    </svg>
                                </span>Cheap Cheap Eat Eat
                            </p>
                            <p className="flex items-center mb-2 text-gray-600">
                                <span className="inline-flex items-center justify-center flex-shrink-0 w-4 h-4 mr-2 text-white bg-gray-400 rounded-full">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                        <path d="M20 6L9 17l-5-5"></path>
                                    </svg>
                                </span>One for Drew
                            </p>
                            <p className="flex items-center mb-6 text-gray-600">
                                <span className="inline-flex items-center justify-center flex-shrink-0 w-4 h-4 mr-2 text-white bg-gray-400 rounded-full">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                        <path d="M20 6L9 17l-5-5"></path>
                                    </svg>
                                </span>30-32 Thomas St, M4 1ER
                            </p>
                            <a href="https://www.watd.co.uk/" target="_blank" rel="noopener noreferrer">
                            <button className="flex items-center w-full px-4 py-2 mt-auto text-white bg-blue-400 border-0 rounded focus:outline-none hover:bg-gray-500">Website
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                            </button>
                            </a>
                        </div>
                    </div>


                </div>
            </div>
        </section>
    )
}

export default Happy