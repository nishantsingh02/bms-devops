import express, { Request, Response } from "express";
import { client } from "@repo/db/client";

const app = express();

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.json({
    msg: "hi nishu",
  });
});

app.post("/signup", async (req: Request, res: Response) => {
  const { username, password } = req.body;

  try {
    const user = await client.user.create({
      data: {
        username,
        password,
      },
    });

    res.json({
      msg: "user signup successful",
      id: user.id,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Something went wrong" });
  }
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
