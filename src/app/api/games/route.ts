import { NextResponse } from 'next/server';

export async function GET() {
  const games = [
    {
      title: "BORDERLAND",
      status: "Open"
    },
    {
      title: "SURVIVOR",
      status: "LOCKED"
    },
    {
      title: "SQUID GAME",
      status: "LOCKED"
    },
    {
      title: "AMAZING RACE",
      status: "LOCKED"
    }
  ];

  return NextResponse.json({
    success: true,
    data: games
  });
}

