import React from 'react';

const About = () => {
    return (
        <div className="bg-gray-50 p-8 rounded-lg shadow-lg max-w-4xl mx-auto mt-12">
            {/* Main Title Section */}
            <h1 className="text-4xl font-extrabold text-center text-indigo-600 mb-6">
                About Us
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed text-center mb-6">
                We are passionate about bringing you the best recipes to make your cooking experience fun and easy. 
                Whether you're a beginner or a pro, there's something for everyone here!
            </p>

            {/* Mission Section */}
            <div className="mb-10">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                    Our mission is to provide a platform where you can discover new and exciting recipes, 
                    try out various cooking techniques, and bring your culinary creativity to life. 
                    We believe cooking should be accessible, enjoyable, and rewarding for everyone.
                </p>
            </div>

            {/* Features Section */}
            <div className="mb-10">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">What We Offer</h2>
                <ul className="list-disc pl-5 space-y-3 text-lg text-gray-600">
                    <li>Thousands of curated recipes for all levels of expertise.</li>
                    <li>Detailed step-by-step instructions and tips.</li>
                    <li>Advanced search filters to find the perfect recipe for any occasion.</li>
                    <li>Personalized recipe recommendations based on your preferences.</li>
                </ul>
            </div>

            {/* Team Section */}
            <div className="mb-10">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Meet the Team</h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                    Our team is made up of passionate food enthusiasts, chefs, and tech experts who are dedicated 
                    to creating an exceptional cooking experience. We're here to help you discover new recipes and 
                    enhance your cooking skills!
                </p>
            </div>

            {/* Contact Section (Call to Action) */}
            <div className="text-center mt-8">
                <a 
                    href="/contact
                    "
                    className="text-lg font-semibold text-indigo-600 hover:text-indigo-800 transition duration-300"
                >
                    Contact Us for More Information
                </a>
            </div>
        </div>
    );
}

export default About;
