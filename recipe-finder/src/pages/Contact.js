const Contact = () => {
    return (
      <div className="container mx-auto p-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Get In Touch</h2>
  
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="mb-4 text-xl font-semibold">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 mr-2 text-blue-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.982 18.723A10.001 10.001 0 0018 8c0-4.418-2.987-8-7-8S3 3.582 3 8c0 4.419 2.987 8 7 8m15-3V9l-2-2m0 0L20 9m1-4a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
                  />
                </svg>
                <span className="text-gray-700">123 Main St, Anytown</span>
              </div>
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 mr-2 text-blue-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 00-5.516 5.517l-1.13-2.257a1 1 0 01-1.21-.502l-4.493 1.498a1 1 0 01-.684.948V19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3.28a1 1 0 01-.948-.684l-1.498-4.493a1 1 0 01.502-1.21l2.257-1.13a11.042 11.042 0 005.516-5.517l1.13 2.257a1 1 0 011.21.502l4.493-1.498a1 1 0 01.684-.948V5a2 2 0 012-2z"
                  />
                </svg>
                <span className="text-gray-700">recipefinder@example.com</span>
              </div>
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 mr-2 text-blue-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0-2.25 1.8-4.05 4.05-4.05h15.75a2.25 2.25 0 012.25 2.25v10.5a2.25 2.25 0 01-2.25 2.25H6.75a2.25 2.25 0 01-2.25-2.25V6.75z"
                  />
                </svg>
                <span className="text-gray-700">+1 (555) 123-4567</span>
              </div>
            </div>
          </div>
          <div>
            <h3 className="mb-4 text-xl font-semibold">Send Us a Message</h3>
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Your Name"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Your Email"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  };
  
  export default Contact;
  
