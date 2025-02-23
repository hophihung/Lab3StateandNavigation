import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { useNavigate } from 'react-router-dom';

const Signup = () => {
 const navigate = useNavigate();
 const [fullName, setFullName] = useState('');
 const [email, setEmail] = useState('');
 const [password, setPassword] = useState('');
 const [errors, setErrors] = useState({});

 const validate = () => {
 const newErrors = {};
 if (!fullName.trim()) newErrors.fullName = 'Please enter first and last name.';
 if (!email) {
 newErrors.email = 'Please enter an email address.';
 } else if (!/\S+@\S+\.\S+/.test(email)) {
newErrors.email = 'Invalid email address.';
}
if (!password) {
newErrors.password = 'Please enter a password.';
} else if (password.length < 6) {
newErrors.password = 'Password must be at least 6 characters long.';
}
return newErrors;
};

const handleSubmit = (e) => {
e.preventDefault();
const validationErrors = validate();
if (Object.keys(validationErrors).length > 0) {
setErrors(validationErrors);
} else {
console.log('Registration successful');

}
};

return (
 <div className="flex flex-col items-center justify-center min-h-screen bg-white px-4">
 <h1 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">
 Get more opportunities
 </h1>

 <Button className="w-full max-w-sm flex items-center justify-center gap-2 border border-gray-300 rounded-md py-6 px-4 text-sm font-medium text-gray-700 hover:bg-gray-100 transition">
 <span className="text-blue-600 text-lg">+</span> Sign up with Google
 </Button>

 <div className="flex items-center my-6 w-full max-w-sm">
 <hr className="flex-1 border-gray-300" />
 <span className="mx-4 text-sm text-gray-500">Or sign up with email</span>

<hr className="flex-1 border-gray-300" />
</div>

<form className="flex flex-col w-full max-w-sm space-y-4" onSubmit={handleSubmit}>
<label className="text-sm font-medium text-gray-700">Full Name</label>
<input
type="text"
placeholder="Enter your full name"
className={`p-3 border ${errors.fullName ? 'border-red-500' : 'border-gray-300'} py-4 rounded-md text-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none`}
 value={fullName}
 onChange={(e) => setFullName(e.target.value)}
 />
 {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>}

 <label className="text-sm font-medium text-gray-700">Email Address</label>
 <input
 type="email"
 placeholder="Enter email address"
 className={`p-3 border ${errors.email ? 'border-red-500' : 'border-gray-300'} py-4 rounded-md text-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none`}
 value={email}
 onChange={(e) => setEmail(e.target.value)}
 />
 {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}

 <label className="text-sm font-medium text-gray-700">Password</label>
 <input
 type="password"
 placeholder="Enter password"
 className={`p-3 border ${errors.password ? 'border-red-500' : 'border-gray-300'} py-4 rounded-md text-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none`}
 value={password}
 onChange={(e) => setPassword(e.target.value)}
 />
 {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}

 <Button
 className="w-full bg-indigo-600 text-white py-6 rounded-md text-sm font-medium hover:bg-indigo-700 transition"
 variant="outline"
 type="submit"
 >
 Continue
 </Button>
 </form>

 <p className="mt-4 text-sm text-gray-600">
 Already have an account?{' '}
<a href="/signup" className="text-indigo-600 font-medium hover:underline">

Sign In
</a>
</p>

<p className="mt-2 text-xs text-gray-500 text-center max-w-sm">
By clicking 'Continue', you confirm that you have read and accepted the{' '}
<a href="#" className="underline text-indigo-600">
Terms of Service
</a>{' '}
and{' '}
<a href="#" className="underline text-indigo-600">
Privacy Policy
</a>.
</p>
</div>
);
};

export default Signup;