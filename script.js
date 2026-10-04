const GOOGLE_SCRIPT_URL =
"https://script.google.com/macros/s/AKfycbx5EP51iEM19a93Ei5CN486kvZ9TP1bRIGwDHjk9btQ4JWzzIfJX3fXT45cW1HNIfJO/exec";

const EN = {
"اطلب مشروعك":"Request your project","اطلب مشروعك ←":"Request your project →","شوف أعمالنا":"See our work",
"خـلـي مـشـروعـك":"Take your project","يطلع للـ Apex.":"to the Apex.",
"بنصمم ونطوّر مواقع، متاجر إلكترونية وأنظمة ويب تشتغل كويس على الموبايل قبل الكمبيوتر، ونفضل معاك بعد التسليم نطوّر فيها.":"We design and build websites, online stores and web systems that work great on mobile first, and we keep improving them with you after launch.",
"مشاريع شغالة":"live projects","أولاً في التصميم":"first in design","دعم فني":"support",
"إحنا بنعمل":"What we","إيه؟":"do.",
"من صفحة هبوط بسيطة لحد نظام ويب متكامل، بنبني الحل على قد احتياج مشروعك.":"From a simple landing page to a full web system, we build what your project actually needs.",
"صفحات هبوط للحملات الإعلانية، سريعة وواضحة وهدفها العميل يتواصل معاك.":"Landing pages for ad campaigns: fast, clear, and built to get customers to contact you.",
"مواقع تعريفية":"Business websites","مواقع للشركات والعيادات والبراندات، متجاوبة مع كل الشاشات وتدعم عربي وإنجليزي.":"Websites for companies, clinics and brands, responsive on every screen, in Arabic and English.",
"متاجر إلكترونية":"Online stores","منتجات وسلة ودفع ومخزون، من متجر بسيط لمتجر بآلاف المنتجات.":"Products, cart, payment and stock, from a simple shop to thousands of products.",
"أنظمة مخصصة":"Custom systems","أنظمة إدارة وCRM ولوحات تحكم متصممة على شغلك بالظبط.":"Management systems, CRMs and dashboards designed around your business.",
"شوف":"See","أعمالنا.":"our work.","مشاريع حقيقية نفّذناها وشغالة دلوقتي. افتح أي واحد وجرّبه بنفسك.":"Real projects we built and that are live now. Open any of them and try it yourself.",
"نظام إدارة همسة":"Hamsa management system","نظام ويب لإدارة العملاء المحتملين والإقامة والعلاقات العامة من لوحة تحكم واحدة.":"A web system to manage leads, accommodation and PR from a single dashboard.",
"موقع همسة للسياحة":"Hamsa tourism website","موقع تعريفي لشركة سياحة وسفر بيعرض الخدمات ويوصّل العميل للحجز بسهولة.":"A website for a travel company that presents its services and makes booking easy.",
"Connect — نظام إدارة المحل":"Connect — shop management system","نظام لمحلات الموبايلات والإكسسوارات بيتابع المخزون والمبيعات والعملاء بشكل منظم وسريع.":"A system for phone and accessory shops to track stock, sales and customers quickly and neatly.",
"مشروع ويب جديد اتنفّذ بنفس معايير السرعة والتجاوب مع الموبايل.":"A new web project built to the same speed and mobile standards.",
"زيارة الموقع":"Visit site","←":"→",
"بنشتغل":"How we","إزاي؟":"work.","أربع خطوات واضحة من أول الفكرة لحد ما المشروع يشتغل.":"Four clear steps from the first idea until the project is live.",
"نسمعك":"We listen","نفهم نشاطك وعملاءك وإنت عايز توصل لإيه.":"We learn about your business, your customers and your goals.",
"نصمم":"We design","نرسم الشكل بادئين من شاشة الموبايل، وتوافق عليه قبل البرمجة.":"We sketch the look starting from the mobile screen, and you approve it before coding.",
"نبني":"We build","نبرمج ونجرّب على أجهزة مختلفة ونعرض عليك النسخة أول بأول.":"We code, test on different devices and show you progress as we go.",
"نسلّم ونتابع":"We launch and follow up","نرفع المشروع على الإنترنت ونفضل جنبك بعد التسليم.":"We put it online and stay by your side after launch.",
"المشروع مابيقفش":"The project doesn't stop","بعد التسليم.":"after launch.","أي مشروع بيكبر مع الوقت، فبنطوّره معاك على حسب شغلك الفعلي.":"Every project grows over time, so we develop it with you based on how your business actually runs.",
"ميزات جديدة":"New features","نضيف صفحات وأقسام وخدمات لما احتياجك يتغيّر.":"We add pages, sections and services when your needs change.",
"سرعة وأداء":"Speed and performance","نراقب سرعة الموقع ونحسّنها باستمرار.":"We watch your site's speed and keep improving it.",
"لوحة تحكم وتقارير":"Dashboard and reports","تتابع الطلبات والمبيعات والأرقام من مكان واحد.":"Follow orders, sales and numbers from one place.",
"أمان وصيانة":"Security and maintenance","نسخ احتياطي وتحديثات وحل سريع لأي عطل.":"Backups, updates and quick fixes for any issue.",
"جاهز تخلي مشروعك":"Ready to put your project","يظهر؟":"on the map?","ابعت بياناتك في دقيقة، وفريق Apex Digital هيتواصل معاك.":"Send your details in a minute and the Apex Digital team will get in touch.",
"واتساب +20 110 865 2134":"WhatsApp +20 110 865 2134",
"املأ البيانات وهنتواصل معاك.":"Fill in your details and we'll contact you.",
"الاسم بالكامل":"Full name","رقم الهاتف / واتساب":"Phone / WhatsApp","نوع الخدمة":"Service type",
"البريد الإلكتروني (اختياري)":"Email (optional)","تفاصيل المشروع (اختياري)":"Project details (optional)",
"اختر الخدمة":"Choose a service","موقع تعريفي":"Business website","متجر إلكتروني":"Online store","موقع احترافي وديناميكي":"Professional dynamic website","برمجة خاصة / نظام ويب":"Custom development / web system","صيانة ومتابعة":"Maintenance and support",
"إرسال الطلب":"Send request","بنستخدم بياناتك للتواصل معاك بخصوص طلبك بس.":"We use your details only to contact you about your request."
};
const ATTR_EN = {"اكتب اسمك":"Your full name","قولنا محتاج تعمل إيه...":"Tell us what you need..."};
const MSG = {
  sending:["جاري إرسال البيانات...","Sending..."],
  ok:["تم إرسال طلبك ✅ هنتواصل معاك قريباً.","Request sent ✅ We'll contact you soon."],
  err:["حصل خطأ أثناء الإرسال ❌ جرّب تاني أو كلمنا على واتساب.","Something went wrong ❌ Try again or message us on WhatsApp."],
  phone:["اكتب رقم موبايل مصري صحيح (01xxxxxxxxx).","Enter a valid Egyptian mobile number (01xxxxxxxxx)."]
};

const dialog = document.getElementById("leadDialog");
const form = document.getElementById("leadForm");
const status = document.getElementById("formStatus");
const langBtn = document.getElementById("langBtn");
let lang = "ar";
const t = function (k) { return MSG[k][lang === "ar" ? 0 : 1]; };

// ---- اللغة ----
document.querySelectorAll("option").forEach(function (o) {
  if (!o.hasAttribute("value")) o.value = o.textContent.trim(); // نخزن القيمة بالعربي دايماً
});
const nodes = [];
const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
while (walker.nextNode()) {
  const n = walker.currentNode;
  if (n.parentElement.closest("script,style")) continue;
  const key = n.nodeValue.trim();
  if (EN[key]) nodes.push({ n: n, key: key, lead: n.nodeValue.match(/^\s*/)[0], trail: n.nodeValue.match(/\s*$/)[0] });
}
function setLang(l) {
  lang = l;
  nodes.forEach(function (o) { o.n.nodeValue = o.lead + (l === "en" ? EN[o.key] : o.key) + o.trail; });
  document.querySelectorAll("[placeholder]").forEach(function (el) {
    if (!el.dataset.ar) el.dataset.ar = el.placeholder;
    if (ATTR_EN[el.dataset.ar]) el.placeholder = l === "en" ? ATTR_EN[el.dataset.ar] : el.dataset.ar;
  });
  document.documentElement.lang = l;
  document.documentElement.dir = l === "en" ? "ltr" : "rtl";
  langBtn.textContent = l === "en" ? "عربي" : "EN";
  try { localStorage.setItem("lang", l); } catch (e) {}
}
langBtn.addEventListener("click", function () { setLang(lang === "ar" ? "en" : "ar"); });
try { if (localStorage.getItem("lang") === "en") setLang("en"); } catch (e) {}

// ---- النافذة ----
document.querySelectorAll("[data-open]").forEach(function (b) {
  b.addEventListener("click", function () { status.textContent = ""; dialog.showModal(); });
});
document.querySelectorAll("[data-close]").forEach(function (b) {
  b.addEventListener("click", function () { dialog.close(); });
});
dialog.addEventListener("click", function (e) { if (e.target === dialog) dialog.close(); });

// ---- الإرسال ----
function normalizePhone(v) {
  v = v.replace(/[\s\-()]/g, "").replace(/[٠-٩]/g, function (d) { return "٠١٢٣٤٥٦٧٨٩".indexOf(d); });
  if (v.indexOf("+20") === 0) v = "0" + v.slice(3);
  else if (v.indexOf("0020") === 0) v = "0" + v.slice(4);
  return v;
}
form.addEventListener("submit", async function (e) {
  e.preventDefault();
  const phone = normalizePhone(form.phone.value);
  if (!/^01[0125][0-9]{8}$/.test(phone)) {
    status.textContent = t("phone"); status.style.color = "#ff8f8f"; form.phone.focus(); return;
  }
  const btn = form.querySelector(".submit");
  btn.disabled = true;
  status.textContent = t("sending"); status.style.color = "#63d4ff";
  const data = new URLSearchParams(new FormData(form));
  data.set("phone", phone);
  data.append("source", "Apex Digital Website (" + lang + ")");
  try {
    await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST", mode: "no-cors",
      headers: { "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8" },
      body: data.toString()
    });
    status.textContent = t("ok"); status.style.color = "#63e6a0";
    form.reset();
    setTimeout(function () { if (dialog.open) dialog.close(); }, 2200);
  } catch (err) {
    console.error(err);
    status.textContent = t("err"); status.style.color = "#ff8f8f";
  } finally { btn.disabled = false; }
});
