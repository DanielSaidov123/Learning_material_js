import fs from "fs/promises";

async function readFromFile(fileName) {
  try {
    const data = await fs.readFile(fileName, "utf8");
    return JSON.parse(data); // אם זה JSON
  } catch (err) {
    console.error("שגיאה בקריאה מהקובץ:", err);
    return null;
  }
}

const data = await readFromFile("data.json");
console.log(data);