import React from 'react'

const Upload = () => {
    return (
        <section id="upload" className="relative items-center p-6 text-gray-600 body-font">
            <div className="items-center text-center">
            <h1 className="mb-2 text-5xl font-medium text-gray-900 sm:text-4xl title-font">Image upload</h1>
            <h2 className="mb-4 text-xl font-medium text-gray-900 title-font">A picture of you and your team is required at each piece of art.</h2>


            </div>

            <div className="items-center w-full px-5 mx-auto text-center md:w-96 md:max-w-full">
                <div className="items-center p-6 text-center border border-red-400 shadow-lg rounded-xl sm:rounded-md">
                    <form
                        method="POST"
                        action="https://public.herotofu.com/v1/6bdf4dc0-1ff1-11ee-b0a7-9f000c4c1540"
                        encType="multipart/form-data"
                    >

                        <label className="items-center block mb-6 text-center">
                            <span className="text-gray-700"></span>
                            <input
                                name="receipt"
                                type="file"
                                className="items-center block w-full p-5 mt-1 text-center border-red-600 rounded-md shadow-lg focus:border-red-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            />
                        </label>

                        <div className="mb-6">
                            <button
                                type="submit"
                                className="h-10 px-5 text-indigo-100 transition-colors duration-150 bg-red-600 rounded-lg focus:shadow-outline hover:bg-indigo-800"
                            >
                                Upload
                            </button>
                        </div>
                        <div>
                        </div>
                    </form>
                </div>
            </div>


        </section>
    )
}

export default Upload