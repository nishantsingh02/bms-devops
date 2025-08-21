const express = require("express");
const { client } = require("@repo/db/client");

const app = express();

app.use(express.json());

//@ts-ignore
app.get("/", (req, res) => {
  res.json({
    msg: "hi nishu",
  });
});

//@ts-ignore
app.post("/signup", async (req, res) => {
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

app.listen(3002, () => {
  console.log("Server running on http://localhost:3002");
});
