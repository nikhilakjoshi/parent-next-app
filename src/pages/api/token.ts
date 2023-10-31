import type { NextApiRequest, NextApiResponse } from "next";
type ResponseData = {
  message: string;
};

function runMiddleware(req: NextApiRequest, res: NextApiResponse, fn: any) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result: any) => {
      if (result instanceof Error) {
        return reject(result);
      }

      return resolve(result);
    });
  });
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>,
) {
  if (req.method !== "GET")
    return res.status(405).json({ message: "Method Not Allowed" });
  try {
    const token = await fetch("http://localhost:3001/api/token");
    const tokenJson = await token.json();
    res.setHeader(
      "Set-Cookie",
      `token=${tokenJson.token}; Domain=localhost; HttpOnly; SameSite=None; Secure; Path=/home;`,
    );
    setTimeout(() => {
      return res.status(200).send({ message: "Token has been set" });
    }, 2000);
  } catch (error) {
    return res.status(500).send({ message: "Internal Server error" });
  }
}
