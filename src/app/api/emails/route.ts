import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const { nome, email, messaggio } = await request.json();

    if (!nome || !email || !messaggio) {
      return NextResponse.json({ message: "Tutti i campi sono obbligatori." }, { status: 400 });
    }

    const sendResult = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['francivillani06@gmail.com'],
      subject: `Messaggio da ${nome}`,
      html: `<p><b>Nome:</b> ${nome}<br/><b>Email:</b> ${email}<br/><b>Messaggio:</b><br/>${messaggio}</p>`,
    });

    if (sendResult.error) {
      // Log errore lato server
      console.error('Errore invio email:', sendResult.error);
      return NextResponse.json({ message: "Errore nell'invio email", error: sendResult.error }, { status: 500 });
    }

    return NextResponse.json({ message: "Email inviata con successo" });
  } catch (error) {
    // Log errore lato server
    console.error('Errore API /api/emails:', error);
    const errorMessage = error instanceof Error ? error.message : String(error);
    return NextResponse.json({ message: "Errore inatteso nell'invio email", error: errorMessage }, { status: 500 });
  }
}
