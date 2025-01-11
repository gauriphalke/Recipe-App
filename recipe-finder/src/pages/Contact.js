const Contact = () => {
    return (
        <div className="bg-gray-50 py-12">
            <div className="max-w-7xl mx-auto px-6 text-center">
                <h2 className="text-3xl font-extrabold text-gray-900">Contact Us</h2>
                <p className="mt-2 text-lg text-gray-600">Have questions or suggestions? Get in touch!</p>
                <form className="mt-8 max-w-2xl mx-auto space-y-6 text-left">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300"
                        />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            rows="4"
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300"
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="w-50vw py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Contact;
