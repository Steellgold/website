import { NextResponse } from "next/server";

export const GET = async(): Promise<NextResponse> => {
  const response = await fetch(
    "https://proxy.royaleapi.dev/v1/players/%23VVJRRC2J", {
      headers: {
        "Authorization": `Bearer ${process.env.CLASHROYALE_API_KEY}`
      }
    }
  )

  const response2 = await fetch(
    "https://proxy.royaleapi.dev/v1/clans/%238V8PYQQ", {
      headers: {
        "Authorization": `Bearer ${process.env.CLASHROYALE_API_KEY}`
      }
    }
  )

  const data = await response.json();
  // console.log(data);
  const clanData = await response2.json();
  console.log(clanData);
  return NextResponse.json(data);
}