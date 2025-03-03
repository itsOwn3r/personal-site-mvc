import { NextResponse } from "next/server";

export async function POST(req: Request) {

    try {
        
        const data = await req.json();

        const { name, email, message } = data;

        if (!name || !email || !message) {
            return NextResponse.json({ success: false, message: "You must enter all required inputs!" });
        }
        
        if (name.length < 3) {
            return NextResponse.json({ success: false, message: "Something is up with your name..." });
        }
        
        if (email.length < 10 || !email.includes("@") || !email.includes(".")) {
            return NextResponse.json({ success: false, message: "Something is up with your email..." });
        }

        if (message.length < 20) {
            return NextResponse.json({ success: false, message: "Tell me more..." })
        }


        // Sending message to Telegram 

        const botToken = process.env.botToken;
        const chatId = process.env.chatId;

        if (!botToken || !chatId) {
            return NextResponse.json({ success: false, message: "Sending message to owner of this website is not configured yet!" })
        }
  
        const request = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
            method: 'POST',
            headers: {'Content-Type':'application/json'},
                body: JSON.stringify({ chat_id: chatId, text: `New message from Contact Form of Personal Website! \n\n\nName: ${name}\n\nEmail: ${email}\n\nMessage:\n ${message}` })
            });
    
        const response = await request.json();

        if (response.ok) {
            return NextResponse.json({ success: true, message: "Sending message was successful!" })
        } else {
          return NextResponse.json({ success: false, message: "Sending message was not successful!" })
        }
        
    } catch (error) {
        console.log(error);
        return NextResponse.json({ success: false, message: "Something went wrong!" });
    }
}