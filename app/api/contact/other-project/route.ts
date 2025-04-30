import { NextResponse } from "next/server";



export async function POST(req: Request) {
    try {
        const data = await req.json();

        const { name, phone, message } = data;

        if (!name || !phone || !message) {
            return NextResponse.json({ success: false, message: "You must enter all required inputs!" }, {
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
                    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
                } });
        }

        if (name.length < 3) {
            return NextResponse.json({ success: false, message: "Something is up with your name..." }, {
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
                    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
                } });
        }

        const isPhoneValid = new RegExp(/^09\d{9}$/).test(phone);

        if (!isPhoneValid) {
            return NextResponse.json({ success: false, message: "Something is up with your Phone..." }, {
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
                    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
                } });
        }

        // Sending message to Telegram
        const botToken = process.env.botToken;
        const chatId = process.env.chatId;

        if (!botToken || !chatId) {
            return NextResponse.json({ success: false, message: "Sending message to owner of this website is not configured yet!" }, {
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
                    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
                } });
        }

        const request = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                chat_id: chatId,
                text: `New message from Contact Form of Personal Website with The Other Project! \n\n\nName: ${name}\n\nPhone: ${phone}\n\nMessage:\n ${message}`,
            }),
        });

        const response = await request.json();

        if (response.ok) {
            return NextResponse.json({ success: true, message: "Sending message was successful!" }, {
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
                    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
                } });
        } else {
            return NextResponse.json({ success: false, message: "Sending message was not successful!" }, {
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
                    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
                } });
        }
    } catch (error) {
        console.log(error);
        return NextResponse.json({ success: false, message: "Something went wrong!" }, {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type, Authorization',
            } });
    }
}

export async function OPTIONS() {
    return new Response(null, {
      status: 204,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      },
    });
  }
