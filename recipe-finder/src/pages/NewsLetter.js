import React, { useState } from 'react';


const Newsletters = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error'

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!validateEmail(email)) {
      setStatus('error');
      return;
    }

    setStatus('loading');

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setStatus('success');
        setEmail('');
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <div className="h-100vh flex flex-col">
      <div className="max-w-lg mx-auto p-10 mt-12 mx-auto mb-25 bg-white shadow-lg rounded-lg border border-gray-200 flex-grow">
        <h2 className="text-3xl font-semibold mb-6 text-gray-900">Subscribe to our Newsletter</h2>
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <label htmlFor="email" className="text-lg font-medium text-gray-700">Email Address</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
            required
          />
          <button
            type="submit"
            className={`${
              status === 'loading' ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
            } text-white font-semibold py-3 rounded-lg transition duration-300`}
            disabled={status === 'loading'}
          >
            {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
          </button>
        </form>

        <div aria-live="polite" className="mt-4">
          {status === 'error' && (
            <div className="p-4 bg-red-100 text-red-700 border border-red-300 rounded-lg">
              {validateEmail(email) ? 'An error occurred. Please try again later.' : 'Please enter a valid email address.'}
            </div>
          )}

          {status === 'success' && (
            <div className="p-4 bg-green-100 text-green-700 border border-green-300 rounded-lg">
              You have successfully subscribed to our newsletter!
            </div>
          )}
        </div>
      </div>
      
      
    </div>
  );
};

export default Newsletters;
