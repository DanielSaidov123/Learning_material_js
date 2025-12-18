import fs from "fs/promises";

async function writeToFile(fileName, data) {
  try {
    await fs.writeFile(fileName, JSON.stringify(data, null, 2), "utf8");
    console.log("הקובץ נכתב בהצלחה");
  } catch (err) {
    console.error("שגיאה בכתיבה לקובץ:", err);
  }
}


writeToFile("data.json", { name: "Daniel", age: 17 });