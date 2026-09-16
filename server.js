import express from "express";
import path from "path";
const app = express();
const __dirname = path.resolve();

app.use(express.static(__dirname));
app.listen(process.env.PORT || 3000, () => {
  console.log("Site en ligne sur Render !");
});
