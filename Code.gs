const SHEET_ID = "1FKgZTB3VNapsz3eHT9zkJHAqRg0st1Ux5XLu3-gxtCE";
const SHEET_NAME = "Leads";
const STATUSES = ["جديد", "تم التواصل", "اتفقنا", "اتلغى"];

function doPost(e) {
  try {
    const p = e.parameter;

    // حماية: الخانة المخفية لو اتملت يبقى روبوت، نتجاهل الطلب بهدوء
    if (p.website) return ContentService.createTextOutput("SUCCESS");

    const sheet = SpreadsheetApp.openById(SHEET_ID).getSheetByName(SHEET_NAME);
    if (!sheet) throw new Error("Sheet 'Leads' not found");

    if (sheet.getLastRow() === 0) {
      sheet.appendRow(["التاريخ", "الاسم", "الهاتف", "الإيميل", "الخدمة", "التفاصيل", "المصدر", "الحالة"]);
    }

    sheet.appendRow([
      new Date(), p.name || "", p.phone || "", p.email || "",
      p.service || "", p.details || "", p.source || "Apex Digital Website", STATUSES[0]
    ]);

    // قائمة منسدلة للحالة في آخر صف
    const rule = SpreadsheetApp.newDataValidation().requireValueInList(STATUSES, true).build();
    sheet.getRange(sheet.getLastRow(), 8).setDataValidation(rule);

    // إيميل ليك بالطلب الجديد (لو فشل، الطلب فضل متسجل)
    try {
      MailApp.sendEmail(
        Session.getEffectiveUser().getEmail(),
        "طلب جديد: " + (p.name || "") + " — " + (p.service || ""),
        "الاسم: " + (p.name || "") + "\nالهاتف: " + (p.phone || "") + "\nالإيميل: " + (p.email || "") +
        "\nالخدمة: " + (p.service || "") + "\nالتفاصيل: " + (p.details || "")
      );
    } catch (mailErr) {}

    return ContentService.createTextOutput("SUCCESS");
  } catch (error) {
    return ContentService.createTextOutput("ERROR: " + error.message);
  }
}
