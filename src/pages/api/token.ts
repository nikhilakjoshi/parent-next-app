import type { NextApiRequest, NextApiResponse } from "next";
type ResponseData = {
  token?: string;
  message?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>,
) {
  if (req.method !== "POST")
    return res.status(405).send({ message: "Method not allowed" });
  try {
    const resp = await fetch("https://child-next-app.vercel.app/api/token1", {
      method: "POST",
    });
    const { expires, location, token } = (await resp.json()) as {
      token?: string;
      message?: string;
      location?: string;
      expires?: string;
    };
    res.setHeader("Set-Cookie", [
      `token=${token}; domain=child-next-app.vercel.app;Path=/home; SameSite=Lax; Secure; Expires=${expires}`,
      `location=${location}; domain=child-next-app.vercel.app;Path=/home; SameSite=Lax; Secure; Expires=${expires}`,
    ]);
    return res.status(200).send({ message: "Token set" });
  } catch (error) {
    return res.status(500).send({ message: "Internal server error" });
  }
}
