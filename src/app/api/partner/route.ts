// import { NextRequest, NextResponse } from 'next/server';

// export async function POST(request: NextRequest) {
//   try {
//     const body = await request.json();
//     const { firstName, email, phone, comments } = body;

//     // Validate required fields
//     if (!firstName || !email || !phone) {
//       return NextResponse.json(
//         { error: 'Missing required fields' },
//         { status: 400 }
//       );
//     }

//     // Email validation
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(email)) {
//       return NextResponse.json(
//         { error: 'Invalid email format' },
//         { status: 400 }
//       );
//     }

//     // Log the submission (for now)
//     console.log('Partner Form Submission:', {
//       firstName,
//       email,
//       phone,
//       comments,
//       submittedAt: new Date().toISOString()
//     });

//     // TODO: You can add here:
//     // 1. Save to database
//     // 2. Send email notification
//     // 3. Store in external service

//     return NextResponse.json(
//       { 
//         success: true, 
//         message: 'Thank you for partnering with us! We will contact you soon.' 
//       },
//       { status: 200 }
//     );

//   } catch (error) {
//     console.error('Partner API Error:', error);
//     return NextResponse.json(
//       { error: 'Internal server error' },
//       { status: 500 }
//     );
//   }
// }