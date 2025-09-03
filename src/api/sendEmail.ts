/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";

export default async function sendEmail(formData: object) {
  try {
    const response = await axios.post("/api/emails", formData);

    if (response.status !== 200) {
      throw new Error(response.data?.message || "Errore durante l'invio dell'email");
    }

    return response.data;
  } catch (error: any) {
    // Gestione migliorata del messaggio di errore
    let errorMsg = "Errore durante l'invio dell'email. Riprova più tardi.";
    if (error.response?.data?.message) {
      errorMsg = error.response.data.message;
    } else if (error.message) {
      errorMsg = error.message;
    }
    // Log lato client per debug
    if (typeof window !== "undefined") {
      console.error("Errore invio email:", errorMsg);
    }
    throw new Error(errorMsg);
  }
}
