
// "use client";
// import React, { FormEvent, useState, ChangeEvent } from 'react';

// interface FormData {
//   firstName: string;
//   lastName: string;
//   email: string;
//   phone: string;
//   comments: string;
// }

// const PartnerSection: React.FC = () => {
//   const [formData, setFormData] = useState<FormData>({
//     firstName: '',
//     lastName: '',
//     email: '',
//     phone: '',
//     comments: ''
//   });

//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     const { id, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [id]: value
//     }));
//   };

//   const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     setIsSubmitting(true);
    
//     try {
//       const response = await fetch('/api/partner', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         // Success - show success message
//         alert(data.message || 'Thank you for partnering with us! We will contact you soon.');
        
//         // Reset form after successful submission
//         setFormData({
//           firstName: '',
//           lastName: '',
//           email: '',
//           phone: '',
//           comments: ''
//         });
//       } else {
//         // Error from API
//         alert(data.error || 'Something went wrong. Please try again.');
//       }
//     } catch (error) {
//       // Network or other errors
//       console.error('Error submitting form:', error);
//       alert('Failed to submit form. Please check your internet connection and try again.');
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <section className="relative flex flex-col items-center bg-white py-16 px-8">
//       <h2 className="text-5xl font-bold text-[#021954] mb-16 text-center">Let's Partner Up.</h2>
      
//       <div className="flex flex-col md:flex-row items-center justify-between w-full">
//         {/* Left side with image and text */}
//         <div className="w-full md:w-1/2 p-8">
//           <div className="relative aspect-square w-full max-w-[500px] mx-auto rounded-xl overflow-hidden">
//             {/* Background image container */}
//             <div
//               className="absolute inset-0 flex flex-col justify-center p-8 z-10 text-white"
//               style={{
//                 backgroundImage: "url('/image/bgimage_partersection.png')",
//                 backgroundSize: "cover",
//                 backgroundPosition: "center",
//               }}
//             >
//               {/* Dark overlay */}
//               <div className="absolute inset-0 bg-black bg-opacity-60 z-0"></div>

//               {/* Text on top */}
//               <h3 className="text-3xl font-bold relative z-20">
//                 Do you have an <span className="underline">idea</span>? We have the tools to make it a reality.
//               </h3>
//             </div>
//           </div>
//         </div>

//         {/* Right side with form */}
//         <div className="w-full md:w-1/2 p-8">
//           <form onSubmit={handleSubmit} className="space-y-4 max-w-xl mx-auto" autoComplete="off">
//             <div>
//               <label htmlFor="firstName" className="block text-[#021954] mb-1">Name</label>
//               <input
//                 id="firstName"
//                 type="text"
//                 value={formData.firstName}
//                 onChange={handleChange}
//                 placeholder="Enter your name"
//                 className="w-full p-2.5 rounded-lg bg-gray-100 border border-gray-300 text-[#021954] placeholder-[#B0B0B0] focus:border-[#0a3070] focus:outline-none"
//                 required
//                 disabled={isSubmitting}
//               />
//             </div>

//             <div>
//               <label htmlFor="email" className="block text-[#021954] mb-1">Email</label>
//               <input
//                 id="email"
//                 type="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 placeholder="Enter your email"
//                 className="w-full p-2.5 rounded-lg bg-gray-100 border border-gray-300 text-[#021954] placeholder-[#B0B0B0] focus:border-[#0a3070] focus:outline-none"
//                 required
//                 disabled={isSubmitting}
//               />
//             </div>

//             <div>
//               <label htmlFor="phone" className="block text-[#021954] mb-1">Phone No.</label>
//               <input
//                 id="phone"
//                 type="tel"
//                 value={formData.phone}
//                 onChange={handleChange}
//                 placeholder="Enter your contact no."
//                 className="w-full p-2.5 rounded-lg bg-gray-100 border border-gray-300 text-[#021954] placeholder-[#B0B0B0] focus:border-[#0a3070] focus:outline-none"
//                 required
//                 disabled={isSubmitting}
//               />
//             </div>

//             <div>
//               <label htmlFor="comments" className="block text-[#021954] mb-1">Comment</label>
//               <textarea
//                 id="comments"
//                 value={formData.comments}
//                 onChange={handleChange}
//                 placeholder="How can we help you?"
//                 rows={4}
//                 className="w-full p-2.5 rounded-lg bg-gray-100 border border-gray-300 text-[#021954] placeholder-[#B0B0B0] focus:border-[#0a3070] focus:outline-none resize-none"
//                 disabled={isSubmitting}
//               ></textarea>
//             </div>

//             <button
//               type="submit"
//               disabled={isSubmitting}
//               className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 px-6 rounded-lg transition duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed disabled:opacity-60"
//             >
//               {isSubmitting ? 'Submitting...' : 'Submit'}
//             </button>

//             <p className="text-[#021954] text-sm text-center mt-2">
//               (Your idea is 100% protected by our NDA)
//             </p>
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default PartnerSection;