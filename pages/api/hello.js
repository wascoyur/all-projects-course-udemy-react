import path from "path";
import fs from "fs";

export default function handler(req, res) {
  res.status(200).json({ name: "John Doe" });
}
