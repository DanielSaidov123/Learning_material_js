import fs from "fs/promises";

async function appendToFile(fileName, data) {
  try {
    await fs.appendFile(fileName, data, "utf8");
    console.log("הנתון נוסף לקובץ בהצלחה");
  } catch (err) {
    console.error("שגיאה בהוספה לקובץ:", err);
  }
}


await appendToFile("log.txt", "שורה חדשה\n");