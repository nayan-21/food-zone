import { useState } from 'react';
import { useNavigate } from 'react-router';

const Login = () => {
  const navigate = useNavigate();
  const [mobile, setMobile] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Demo-only: Just store a flag and redirect
    localStorage.setItem('isLoggedIn', 'true');
    navigate('/');
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-white shadow-sm py-4 px-6 flex justify-between items-center">
        <h1 className="text-orange-500 font-bold text-xl">Food Zone</h1>
        {/* <div className="flex space-x-4 text-gray-600">
          <span>Home</span>
          <span>About</span>
          <span>Cart - 0</span>
        </div> */}
      </div>

      {/* Login Card */}
      <div className="max-w-md mx-auto mt-12 bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center mb-6">Login to Food Zone</h2>
        
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-gray-700 mb-2">Mobile Number</label>
            <input
              type="tel"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              placeholder="Enter 10-digit mobile number"
              pattern="[0-9]{10}"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 px-4 rounded font-medium transition-colors"
          >
            Continue
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-gray-500">
          <p>By continuing, you agree to our Terms of Service</p>
          <p className="mt-2">Just enter 10-digit number</p>
        </div>
      </div>
    </div>
  );
};

export default Login;