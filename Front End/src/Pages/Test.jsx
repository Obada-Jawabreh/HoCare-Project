// import React from 'react';
// import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

// function Test() {
//   return (
//     <Router>
//       <div className="flex h-screen bg-gray-100">
//         {/* Sidebar */}
//         <div className="w-64 bg-white shadow-md">
//           <div className="p-6">
//             <h1 className="text-2xl font-semibold text-gray-800">HoCare</h1>
//             <p className="text-sm text-gray-600">Physical Therapist Dashboard</p>
//           </div>
//           <nav className="mt-6">
//             <Link to="/" className="block py-2 px-6 hover:bg-gray-200 text-gray-700">Home</Link>
//             <Link to="/sessions" className="block py-2 px-6 hover:bg-gray-200 text-gray-700">Sessions</Link>
//             <Link to="/clients" className="block py-2 px-6 hover:bg-gray-200 text-gray-700">Clients</Link>
//             <Link to="/messages" className="block py-2 px-6 hover:bg-gray-200 text-gray-700">Messages</Link>
//             <Link to="/advice" className="block py-2 px-6 hover:bg-gray-200 text-gray-700">Therapeutic Advice</Link>
//             <Link to="/profile" className="block py-2 px-6 hover:bg-gray-200 text-gray-700">Profile</Link>
//           </nav>
//         </div>

//         {/* Main Content */}
//         <div className="flex-1 overflow-x-hidden overflow-y-auto">
//           <div className="container mx-auto px-6 py-8">
//             <Routes>
//               <Route exact path="/">
//                 <Home />
//               </Route>
//               <Route path="/sessions">
//                 <Sessions />
//               </Route>
//               <Route path="/clients">
//                 <Clients />
//               </Route>
//               <Route path="/messages">
//                 <Messages />
//               </Route>
//               <Route path="/advice">
//                 <Advice />
//               </Route>
//               <Route path="/profile">
//                 <Profile />
//               </Route>
//             </Routes>
//           </div>
//         </div>
//       </div>
//     </Router>
//   );
// }

// function Home() {
//   return (
//     <div>
//       <h2 className="text-2xl font-semibold text-gray-800 mb-6">Welcome to HoCare</h2>
//       <p className="text-gray-600">Manage your sessions, clients, and provide therapeutic advice all in one place.</p>
//     </div>
//   );
// }

// function Sessions() {
//   return (
//     <div>
//       <h2 className="text-2xl font-semibold text-gray-800 mb-6">Upcoming Sessions</h2>
//       <div className="bg-white shadow overflow-hidden sm:rounded-md">
//         <ul className="divide-y divide-gray-200">
//           <li className="px-6 py-4 hover:bg-gray-50">
//             <div className="flex items-center justify-between">
//               <div>
//                 <h3 className="text-lg font-medium text-gray-900">John Doe</h3>
//                 <p className="text-sm text-gray-500">Back Pain Therapy</p>
//               </div>
//               <div className="text-sm text-gray-500">
//                 <p>Today, 2:00 PM</p>
//                 <p>123 Main St, Anytown, USA</p>
//               </div>
//             </div>
//           </li>
//           {/* Add more session items here */}
//         </ul>
//       </div>
//     </div>
//   );
// }

// function Clients() {
//   return (
//     <div>
//       <h2 className="text-2xl font-semibold text-gray-800 mb-6">Client List</h2>
//       <div className="bg-white shadow overflow-hidden sm:rounded-md">
//         <ul className="divide-y divide-gray-200">
//           <li className="px-6 py-4 hover:bg-gray-50">
//             <div className="flex items-center">
//               <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>
//               <div className="ml-4">
//                 <h3 className="text-lg font-medium text-gray-900">Jane Smith</h3>
//                 <p className="text-sm text-gray-500">Last session: 3 days ago</p>
//               </div>
//             </div>
//           </li>
//           {/* Add more client items here */}
//         </ul>
//       </div>
//     </div>
//   );
// }

// function Messages() {
//   return (
//     <div>
//       <h2 className="text-2xl font-semibold text-gray-800 mb-6">Messages</h2>
//       <div className="bg-white shadow overflow-hidden sm:rounded-md">
//         <ul className="divide-y divide-gray-200">
//           <li className="px-6 py-4 hover:bg-gray-50">
//             <div className="flex items-center">
//               <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>
//               <div className="ml-4">
//                 <h3 className="text-lg font-medium text-gray-900">Alice Johnson</h3>
//                 <p className="text-sm text-gray-500">Question about exercises</p>
//               </div>
//             </div>
//           </li>
//           {/* Add more message items here */}
//         </ul>
//       </div>
//     </div>
//   );
// }

// function Advice() {
//   return (
//     <div>
//       <h2 className="text-2xl font-semibold text-gray-800 mb-6">Therapeutic Advice</h2>
//       <div className="bg-white shadow overflow-hidden sm:rounded-md p-6">
//         <h3 className="text-lg font-medium text-gray-900 mb-4">Create New Advice</h3>
//         <textarea
//           className="w-full p-2 border rounded-md"
//           rows="4"
//           placeholder="Enter your therapeutic advice here..."
//         ></textarea>
//         <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
//           Post Advice
//         </button>
//       </div>
//     </div>
//   );
// }

// function Profile() {
//   return (
//     <div>
//       <h2 className="text-2xl font-semibold text-gray-800 mb-6">Your Profile</h2>
//       <div className="bg-white shadow overflow-hidden sm:rounded-lg">
//         <div className="px-4 py-5 sm:px-6">
//           <h3 className="text-lg leading-6 font-medium text-gray-900">Personal Information</h3>
//         </div>
//         <div className="border-t border-gray-200">
//           <dl>
//             <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
//               <dt className="text-sm font-medium text-gray-500">Full name</dt>
//               <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">Dr. Sarah Connor</dd>
//             </div>
//             <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
//               <dt className="text-sm font-medium text-gray-500">Specialization</dt>
//               <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">Physical Therapy</dd>
//             </div>
//             <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
//               <dt className="text-sm font-medium text-gray-500">Email address</dt>
//               <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">sarah.connor@example.com</dd>
//             </div>
//           </dl>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Test;