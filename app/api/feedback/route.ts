import { NextResponse } from "next/server";
import sql from "@/lib/db";

// GET – alle Einträge abrufen
export async function GET() {
  const feedbacks = await sql`SELECT * FROM feedback ORDER BY id DESC`;
  return NextResponse.json(feedbacks);
}

// POST – neuen Eintrag speichern
export async function POST(req: Request) {
  const { name, comment } = await req.json();
  await sql`
    INSERT INTO feedback (name, comment)
    VALUES (${name}, ${comment})
  `;
  return NextResponse.json({ message: "Feedback gespeichert!" });
}