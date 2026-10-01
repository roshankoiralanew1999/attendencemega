/**
 * Class Register · Production Frontend Client
 * No sensitive URLs or credentials in frontend code.
 */

// ================= CONSTANTS & ROSTERS =================
const TOTAL_ASSIGNMENTS = 8;

// CSIT A1 Roster (32 Students)
const STUDENTS_CSIT_A1 = [
  { id: "IT-25-1-001", name: "AASHIK HABIB" },
  { id: "IT-25-1-002", name: "AJAY RAY" },
  { id: "IT-25-1-003", name: "AMRIT SWAR" },
  { id: "IT-25-1-004", name: "ANIL BUDHA" },
  { id: "IT-25-1-005", name: "ANJANA NEPALI SARKI" },
  { id: "IT-25-1-006", name: "ANJEELA KHATIWADA" },
  { id: "IT-25-1-007", name: "ASAL PANDIT" },
  { id: "IT-25-1-008", name: "ASHIM THARU" },
  { id: "IT-25-1-067", name: "ASHISH GAUTAM" },
  { id: "IT-25-1-009", name: "BIMOCHAN LIMBU" },
  { id: "IT-25-1-010", name: "MANDIP CHAUDHARY" },
  { id: "IT-25-1-011", name: "MANIRAJ RAY CHAUDHARY" },
  { id: "IT-25-1-012", name: "MANOJ KOHAR" },
  { id: "IT-25-1-013", name: "MOBISHA POKHREL" },
  { id: "IT-25-1-066", name: "MOHAMAD ASLAM" },
  { id: "IT-25-1-064", name: "MUKUNDA JOSHI" },
  { id: "IT-25-1-015", name: "NISHANT RANA" },
  { id: "IT-25-1-063", name: "PAMFA DEVI KARKI" },
  { id: "IT-25-1-016", name: "PRAFUL THAKUR" },
  { id: "IT-25-1-017", name: "PRASHANT DHAKAL" },
  { id: "IT-25-1-018", name: "PRASHANT KARKI" },
  { id: "IT-25-1-019", name: "PRASHIL KHATRI" },
  { id: "IT-25-1-020", name: "RAJESH KUMAR BOHARA" },
  { id: "IT-25-1-021", name: "RAM NARAYAN CHAUDHARY" },
  { id: "IT-25-1-022", name: "ROSHIKA RIMAL" },
  { id: "IT-25-1-023", name: "RUSHMA RASAILI" },
  { id: "IT-25-1-024", name: "SABINDRA PARAJULI" },
  { id: "IT-25-1-026", name: "SHITAL BALAMI" },
  { id: "IT-25-1-027", name: "SHYAMBABU PRASAD THARU" },
  { id: "IT-25-1-029", name: "SUJAN GYAWALI" },
  { id: "IT-25-1-030", name: "SWOSTIKA SHRESTHA" },
  { id: "IT-25-1-031", name: "VANSHIKA CHAUHAN" }
];

// CSIT A2 Roster (30 Students)
const STUDENTS_CSIT_A2 = [
  { id: "IT-25-1-032", name: "AMAN JUNG THAPA" },
  { id: "IT-25-1-035", name: "ARMAN MANIHAR" },
  { id: "IT-25-1-036", name: "BINDU SEDAI" },
  { id: "IT-25-1-037", name: "BISHAL NEUPANE" },
  { id: "IT-25-1-038", name: "DEV KUMAR KUSHWAHA" },
  { id: "IT-25-1-039", name: "DIKSHAN NEPALI" },
  { id: "IT-25-1-040", name: "DIPESH KHATRI" },
  { id: "IT-25-1-041", name: "GAYATRI KUMARI SAH" },
  { id: "IT-25-1-042", name: "JANBI THAKUR" },
  { id: "IT-25-1-043", name: "JAY KUMAR MUKHIYA BIN" },
  { id: "IT-25-1-044", name: "JIBAN BHANDARI" },
  { id: "IT-25-1-045", name: "KAPIL KHADKA" },
  { id: "IT-25-1-046", name: "KISHAN THAKUR" },
  { id: "IT-25-1-047", name: "MANOJ CHAND" },
  { id: "IT-25-1-014", name: "MUKESH SINGH" },
  { id: "IT-25-1-048", name: "NIKITA ROKA" },
  { id: "IT-25-1-049", name: "NIRAJAN K.C." },
  { id: "IT-25-1-050", name: "PANKAJ BHATTA" },
  { id: "IT-25-1-051", name: "PRADIP BHATT" },
  { id: "IT-25-1-052", name: "PRINCE YADAV" },
  { id: "IT-25-1-065", name: "PRITHIVI RAJ YADAV" },
  { id: "IT-25-1-053", name: "PUNIT SADA" },
  { id: "IT-25-1-054", name: "PURNIMA POKHERAL" },
  { id: "IT-25-1-055", name: "RANJANA SHRESTHA" },
  { id: "IT-25-1-056", name: "ROJINA POKHERAL" },
  { id: "IT-25-1-057", name: "SAGAR SHRESTHA" },
  { id: "IT-25-1-058", name: "SAKSHAM GHIMIRE" },
  { id: "IT-25-1-059", name: "SAMYAM RIJAL" },
  { id: "IT-25-1-060", name: "SHOBHA SHRESTHA" },
  { id: "IT-25-1-062", name: "UJJWAL SHARMA" }
];

// BCA RJU Direct Roster (28 Students: Rolls 1–28)
const STUDENTS_BCA = [
  { id: "BCA-25-001", name: "AADITYA SHARMA" },
  { id: "BCA-25-002", name: "AAYUSH POUDYAL" },
  { id: "BCA-25-003", name: "ABHISHEK KARKI" },
  { id: "BCA-25-004", name: "ALOK CHAUDHARY" },
  { id: "BCA-25-005", name: "ANUP SUBEDI" },
  { id: "BCA-25-006", name: "AYUSHMAN JOSHI" },
  { id: "BCA-25-007", name: "BIBEK ADHIKARI" },
  { id: "BCA-25-008", name: "BIKASH REGMI" },
  { id: "BCA-25-009", name: "DEEPAK BASNET" },
  { id: "BCA-25-010", name: "DIPEN SHRESTHA" },
  { id: "BCA-25-011", name: "GAURAV THAPA" },
  { id: "BCA-25-012", name: "HEMANT BOHARA" },
  { id: "BCA-25-013", name: "KRISHNA PRASAD SAH" },
  { id: "BCA-25-014", name: "MADHAV ACHARYA" },
  { id: "BCA-25-015", name: "MANISH TAMANG" },
  { id: "BCA-25-016", name: "NIMESH PANDEY" },
  { id: "BCA-25-017", name: "PRAKASH MAHARJAN" },
  { id: "BCA-25-018", name: "PRASHANT SILWAL" },
  { id: "BCA-25-019", name: "RABIN GYAWALI" },
  { id: "BCA-25-020", name: "RAHUL YADAV" },
  { id: "BCA-25-021", name: "ROHAN TIMILSINA" },
  { id: "BCA-25-022", name: "SANDESH KHATRI" },
  { id: "BCA-25-023", name: "SAROJ BHANDARI" },
  { id: "BCA-25-024", name: "SAURABH DEVKOTA" },
  { id: "BCA-25-025", name: "SHREEYA BHATTARAI" },
  { id: "BCA-25-026", name: "SULAV TIWARI" },
  { id: "BCA-25-027", name: "SUSMITA DAHAL" },
  { id: "BCA-25-028", name: "YUBRAJ BASNET" }
];

// Class XI Section B1 Roster (26 Students: Rolls 1–26)
const STUDENTS_XI_B1 = [
  { id: "XI-B1-01", name: "AADARSH SHARMA" },
  { id: "XI-B1-02", name: "AAYUSHI POUDEL" },
  { id: "XI-B1-03", name: "ABHINAV THAPA" },
  { id: "XI-B1-04", name: "AMAN CHAUDHARY" },
  { id: "XI-B1-05", name: "ANITA SHRESTHA" },
  { id: "XI-B1-06", name: "ANKIT SUBEDI" },
  { id: "XI-B1-07", name: "ANUSHKA KARKI" },
  { id: "XI-B1-08", name: "ARJUN BASNET" },
  { id: "XI-B1-09", name: "AYUSH RAYAMAJHI" },
  { id: "XI-B1-10", name: "BIBEK BHATTARAI" },
  { id: "XI-B1-11", name: "BIKRAM ADHIKARI" },
  { id: "XI-B1-12", name: "CHIRAG REGMI" },
  { id: "XI-B1-13", name: "DEEPIKA KHATRI" },
  { id: "XI-B1-14", name: "DIPESH PANGENI" },
  { id: "XI-B1-15", name: "DIVYA MAHARJAN" },
  { id: "XI-B1-16", name: "GAURAV PANDEY" },
  { id: "XI-B1-17", name: "ISHAN JOSHI" },
  { id: "XI-B1-18", name: "KABITA CHHETRI" },
  { id: "XI-B1-19", name: "MANISH GIRI" },
  { id: "XI-B1-20", name: "NISHA TAMANG" },
  { id: "XI-B1-21", name: "PRAKASH DAHAL" },
  { id: "XI-B1-22", name: "PUJA ACHARYA" },
  { id: "XI-B1-23", name: "ROSHAN SAPKOTA" },
  { id: "XI-B1-24", name: "SAMIR RIJAL" },
  { id: "XI-B1-25", name: "SANDHYA RAWAT" },
  { id: "XI-B1-26", name: "SUJAN TIWARI" }
];

// Class XI Section B2 Roster (26 Students: Rolls 1–26)
const STUDENTS_XI_B2 = [
  { id: "XI-B2-01", name: "AAKASH BOHARA" },
  { id: "XI-B2-02", name: "AARAV MAGAR" },
  { id: "XI-B2-03", name: "ALISHA SILWAL" },
  { id: "XI-B2-04", name: "AMIR NEUPANE" },
  { id: "XI-B2-05", name: "ANISH OLI" },
  { id: "XI-B2-06", name: "ANJU TIMILSINA" },
  { id: "XI-B2-07", name: "ASHMITA LAMICHHANE" },
  { id: "XI-B2-08", name: "BIPIN GHIMIRE" },
  { id: "XI-B2-09", name: "CHANDAN DEVKOTA" },
  { id: "XI-B2-10", name: "DEEPA REGMI" },
  { id: "XI-B2-11", name: "DINESH RAWAL" },
  { id: "XI-B2-12", name: "GANESH KHADKA" },
  { id: "XI-B2-13", name: "ISHWOR BHANDARI" },
  { id: "XI-B2-14", name: "JYOTI GYAWALI" },
  { id: "XI-B2-15", name: "KAMAL DANGOL" },
  { id: "XI-B2-16", name: "KRITIKA GAUTAM" },
  { id: "XI-B2-17", name: "MADHAV BURLAKOTI" },
  { id: "XI-B2-18", name: "NABIN SHAH" },
  { id: "XI-B2-19", name: "PRABHAT KANDEL" },
  { id: "XI-B2-20", name: "PREM PRASAD SAH" },
  { id: "XI-B2-21", name: "RITIKA POUDYAL" },
  { id: "XI-B2-22", name: "SAGAR CHAUDHARY" },
  { id: "XI-B2-23", name: "SANGITA BARAL" },
  { id: "XI-B2-24", name: "SHARAD MAINALI" },
  { id: "XI-B2-25", name: "SUDIP MARASINI" },
  { id: "XI-B2-26", name: "YOGESH KARKI" }
];

// Class XI Section B3 Roster (26 Students: Rolls 1–26)
const STUDENTS_XI_B3 = [
  { id: "XI-B3-01", name: "ABHISHEK ADHIKARI" },
  { id: "XI-B3-02", name: "ALOK PARAJULI" },
  { id: "XI-B3-03", name: "ANITA SAPKOTA" },
  { id: "XI-B3-04", name: "ARCHANA BHATT" },
  { id: "XI-B3-05", name: "ASHISH PURI" },
  { id: "XI-B3-06", name: "BINAYA BASNET" },
  { id: "XI-B3-07", name: "BIPANA THAPA" },
  { id: "XI-B3-08", name: "CHETAN DAHAL" },
  { id: "XI-B3-09", name: "DEBENDRA MALLA" },
  { id: "XI-B3-10", name: "DIPENDRA KC" },
  { id: "XI-B3-11", name: "GARIMA SHRESTHA" },
  { id: "XI-B3-12", name: "HEMANT ACHARYA" },
  { id: "XI-B3-13", name: "JANAK PRASAD PANDEY" },
  { id: "XI-B3-14", name: "KALPANA NEPAL" },
  { id: "XI-B3-15", name: "KISHOR BHATTARAI" },
  { id: "XI-B3-16", name: "LAXMAN BHANDARI" },
  { id: "XI-B3-17", name: "MANISHA POUDEL" },
  { id: "XI-B3-18", name: "NIKHIL POUDYAL" },
  { id: "XI-B3-19", name: "PRADIP SHARMA" },
  { id: "XI-B3-20", name: "PRIYA KHADKA" },
  { id: "XI-B3-21", name: "ROHIT GUPTA" },
  { id: "XI-B3-22", name: "SALINA GHALE" },
  { id: "XI-B3-23", name: "SANJEEV THARU" },
  { id: "XI-B3-24", name: "SAROJ DHAKAL" },
  { id: "XI-B3-25", name: "SIMRAN RAY" },
  { id: "XI-B3-26", name: "UTTAM RANA" }
];

// Class XI Section B4 Roster (26 Students: Rolls 1–26)
const STUDENTS_XI_B4 = [
  { id: "XI-B4-01", name: "AAYUSH SHARMA" },
  { id: "XI-B4-02", name: "AJAY KHATRI" },
  { id: "XI-B4-03", name: "AMRITA JOSHI" },
  { id: "XI-B4-04", name: "ANUP PANDIT" },
  { id: "XI-B4-05", name: "ASHWINI POKHREL" },
  { id: "XI-B4-06", name: "BINIT CHHETRI" },
  { id: "XI-B4-07", name: "BRINDA THAPA" },
  { id: "XI-B4-08", name: "DIPTI ACHARYA" },
  { id: "XI-B4-09", name: "GOVINDA SUBEDI" },
  { id: "XI-B4-10", name: "HARISH ADHIKARI" },
  { id: "XI-B4-11", name: "INDIRA DAHAL" },
  { id: "XI-B4-12", name: "JEEVAN TAMANG" },
  { id: "XI-B4-13", name: "KESHAV REGMI" },
  { id: "XI-B4-14", name: "KOPILA KARKI" },
  { id: "XI-B4-15", name: "MADAN TIMILSINA" },
  { id: "XI-B4-16", name: "MEENA GAUTAM" },
  { id: "XI-B4-17", name: "NIRAJ NEUPANE" },
  { id: "XI-B4-18", name: "PARAS KHADKA" },
  { id: "XI-B4-19", name: "PRATIMA SHRESTHA" },
  { id: "XI-B4-20", name: "RAJAN DEVKOTA" },
  { id: "XI-B4-21", name: "RESHMA RIJAL" },
  { id: "XI-B4-22", name: "SABIN BASNET" },
  { id: "XI-B4-23", name: "SAKSHI POUDYAL" },
  { id: "XI-B4-24", name: "SHAMBHU THAPA" },
  { id: "XI-B4-25", name: "SUNIL CHAUDHARY" },
  { id: "XI-B4-26", name: "YASHODA BHANDARI" }
];

// Class XI Section B5 Roster (26 Students: Rolls 1–26)
const STUDENTS_XI_B5 = [
  { id: "XI-B5-01", name: "ADITYA SAPKOTA" },
  { id: "XI-B5-02", name: "ANAMIKA BHATTARAI" },
  { id: "XI-B5-03", name: "ARPAN GIRI" },
  { id: "XI-B5-04", name: "ASMITA CHAUDHARY" },
  { id: "XI-B5-05", name: "BIKASH SHARMA" },
  { id: "XI-B5-06", name: "BINOD PANDEY" },
  { id: "XI-B5-07", name: "CHHAYA ADHIKARI" },
  { id: "XI-B5-08", name: "DIPAK GHIMIRE" },
  { id: "XI-B5-09", name: "GANGA THAPA" },
  { id: "XI-B5-10", name: "HIMAL POUDEL" },
  { id: "XI-B5-11", name: "ISHITA NEPAL" },
  { id: "XI-B5-12", name: "KARAN KARKI" },
  { id: "XI-B5-13", name: "KRISHNA DAHAL" },
  { id: "XI-B5-14", name: "LOKESH RAWAT" },
  { id: "XI-B5-15", name: "MAMTA JOSHI" },
  { id: "XI-B5-16", name: "NARESH KHATRI" },
  { id: "XI-B5-17", name: "PRABIN ACHARYA" },
  { id: "XI-B5-18", name: "PRAMOD SHRESTHA" },
  { id: "XI-B5-19", name: "RABINA REGMI" },
  { id: "XI-B5-20", name: "RAJESH MAHATO" },
  { id: "XI-B5-21", name: "ROJINA BASNET" },
  { id: "XI-B5-22", name: "SACHIN SUBEDI" },
  { id: "XI-B5-23", name: "SAMJHANA SILWAL" },
  { id: "XI-B5-24", name: "SANTOSH OLI" },
  { id: "XI-B5-25", name: "SUSHIL TIWARI" },
  { id: "XI-B5-26", name: "TARA PRASAD BHATT" }
];

// Class registry definitions
const CLASSES_CONFIG = {
  csit: {
    key: "csit",
    name: "Bsc Csit RJU",
    dept: "Computer Science & IT",
    hasSections: true,
    sections: {
      A1: { name: "Section A1", roster: STUDENTS_CSIT_A1 },
      A2: { name: "Section A2", roster: STUDENTS_CSIT_A2 }
    }
  },
  bca: {
    key: "bca",
    name: "BCA RJU",
    dept: "Bachelor of Computer Application",
    hasSections: false,
    defaultSection: "Main",
    roster: STUDENTS_BCA
  },
  xi: {
    key: "xi",
    name: "Class XI",
    dept: "Higher Secondary Program",
    hasSections: true,
    sections: {
      B1: { name: "Section B1", roster: STUDENTS_XI_B1 },
      B2: { name: "Section B2", roster: STUDENTS_XI_B2 },
      B3: { name: "Section B3", roster: STUDENTS_XI_B3 },
      B4: { name: "Section B4", roster: STUDENTS_XI_B4 },
      B5: { name: "Section B5", roster: STUDENTS_XI_B5 }
    }
  }
};

// ================= STATE =================
let sessionToken = null;
let currentClassKey = "";
let currentSection = "";
let currentMode = ""; // 'attendance' | 'assignment'
let roster = [];
let todayEnglishDate = "";

// Attendance state
let attIndex = 0;
let attRecords = [];
let targetCol = 0;
let nextCol = 1;

// Assignment state
let currentRoll = 0;
let recordOriginal = { marks: [], notes: [] };
let editedRows = new Set();

// ================= INITIALIZATION =================
document.addEventListener("DOMContentLoaded", () => {
  const t = new Date();
  todayEnglishDate =
    String(t.getDate()).padStart(2, "0") + "/" +
    String(t.getMonth() + 1).padStart(2, "0") + "/" +
    t.getFullYear();
  document.getElementById("dateChip").innerText = todayEnglishDate;

  // Restore session if available
  const storedToken = sessionStorage.getItem("register_session_token");
  if (storedToken) {
    sessionToken = storedToken;
    document.getElementById("userSettingsBtn").classList.remove("hidden");
    go("scr-classes");
  } else {
    go("scr-login");
  }

  // Keybindings
  onEnter("passcode", checkCode);
  onEnter("customDayInput", () => startAttendance("custom"));
  onEnter("rollInput", openRoll);
  onEnter("newPasscodeInput", submitResetPassword);
});

function onEnter(id, fn) {
  const el = document.getElementById(id);
  if (el) {
    el.addEventListener("keydown", e => {
      if (e.key === "Enter") {
        e.preventDefault();
        fn();
      }
    });
  }
}

// ================= NAVIGATION =================
const SCREENS = [
  "scr-login",
  "scr-classes",
  "scr-section",
  "scr-home",
  "scr-day",
  "scr-att",
  "scr-note",
  "scr-roll",
  "scr-record",
  "scr-done"
];

function go(id) {
  SCREENS.forEach(s => {
    const el = document.getElementById(s);
    if (el) el.classList.remove("active");
  });
  const target = document.getElementById(id);
  if (target) target.classList.add("active");
  updateCrumbs(id);
  window.scrollTo(0, 0);
}

function updateCrumbs(id) {
  const c = document.getElementById("crumbs");
  if (!c) return;

  if (id === "scr-login" || id === "scr-classes") {
    c.innerText = "";
    return;
  }

  const parts = [];
  if (currentClassKey && CLASSES_CONFIG[currentClassKey]) {
    parts.push(CLASSES_CONFIG[currentClassKey].name.toUpperCase());
  }

  if (currentSection && id !== "scr-section") {
    parts.push("SEC " + currentSection);
  }

  if (currentMode) {
    parts.push(currentMode === "attendance" ? "ATTENDANCE" : "ASSIGNMENTS");
  }

  if (id === "scr-att" || id === "scr-note") {
    parts.push("COL " + targetCol);
  }

  if (id === "scr-record") {
    parts.push("ROLL " + currentRoll);
  }

  c.innerText = parts.join("  ·  ");
}

function goHome() {
  currentMode = "";
  attIndex = 0;
  attRecords = [];
  targetCol = 0;
  nextCol = 1;
  currentRoll = 0;
  editedRows.clear();
  go("scr-home");
}

function goClasses() {
  currentClassKey = "";
  currentSection = "";
  currentMode = "";
  roster = [];
  go("scr-classes");
}

// ================= UI HELPERS =================
function busy(show, title, sub) {
  const b = document.getElementById("busy");
  if (show) {
    document.getElementById("busyTitle").innerText = title || "Working…";
    document.getElementById("busySub").innerText = sub || "Please wait.";
    b.classList.remove("hidden");
  } else {
    b.classList.add("hidden");
  }
}

let toastTimer = null;
function toast(msg) {
  const t = document.getElementById("toast");
  t.innerText = msg;
  t.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove("show"), 2800);
}

function showErr(id, msg) {
  const el = document.getElementById(id);
  if (!el) return;
  if (msg !== undefined) el.innerText = msg;
  el.classList.remove("hidden");
}

function hideErr(id) {
  const el = document.getElementById(id);
  if (el) el.classList.add("hidden");
}

// ================= AUTHENTICATION =================
async function checkCode() {
  hideErr("loginErr");
  const passcode = document.getElementById("passcode").value.trim();
  if (!passcode) {
    showErr("loginErr", "Please enter your passcode.");
    return;
  }

  busy(true, "Authenticating…", "Verifying passcode.");

  try {
    const res = await fetch("/api/auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ passcode })
    });

    const data = await res.json();
    busy(false);

    if (res.ok && data.success && data.token) {
      sessionToken = data.token;
      sessionStorage.setItem("register_session_token", sessionToken);
      document.getElementById("passcode").value = "";
      document.getElementById("userSettingsBtn").classList.remove("hidden");
      toast("✓ Unlocked successfully");
      go("scr-classes");
    } else {
      showErr("loginErr", data.error || "Incorrect passcode. Try again.");
    }
  } catch (err) {
    busy(false);
    showErr("loginErr", "Connection error. Unable to reach authentication server.");
  }
}

function logout() {
  sessionToken = null;
  sessionStorage.removeItem("register_session_token");
  document.getElementById("userSettingsBtn").classList.add("hidden");
  closePasscodeModal();
  toast("Logged out");
  go("scr-login");
}

// ================= PASSCODE RESET MODAL =================
function openPasscodeModal() {
  hideErr("resetModalErr");
  document.getElementById("oldPasscodeInput").value = "";
  document.getElementById("newPasscodeInput").value = "";
  document.getElementById("passcodeModal").classList.remove("hidden");
}

function closePasscodeModal() {
  document.getElementById("passcodeModal").classList.add("hidden");
}

async function submitResetPassword() {
  hideErr("resetModalErr");
  const oldPasscode = document.getElementById("oldPasscodeInput").value.trim();
  const newPasscode = document.getElementById("newPasscodeInput").value.trim();

  if (!oldPasscode || !newPasscode) {
    showErr("resetModalErr", "Both current and new passcode are required.");
    return;
  }

  if (newPasscode.length < 4) {
    showErr("resetModalErr", "New passcode must be at least 4 digits.");
    return;
  }

  busy(true, "Updating passcode…", "Applying new security credentials.");

  try {
    const res = await fetch("/api/reset-password", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${sessionToken}`
      },
      body: JSON.stringify({ oldPasscode, newPasscode })
    });

    const data = await res.json();
    busy(false);

    if (res.ok && data.success) {
      if (data.token) {
        sessionToken = data.token;
        sessionStorage.setItem("register_session_token", sessionToken);
      }
      closePasscodeModal();
      toast("✓ Passcode updated successfully");
    } else {
      showErr("resetModalErr", data.error || "Failed to update passcode.");
    }
  } catch (err) {
    busy(false);
    showErr("resetModalErr", "Network error while updating passcode.");
  }
}

// ================= CLASS SELECTION =================
function chooseClass(classKey) {
  currentClassKey = classKey;

  if (classKey === "xi") {
    // Class XI MUST open the Section Selection screen with 5 sections: B1, B2, B3, B4, B5
    currentSection = "";
    roster = [];
    renderSectionSelection(CLASSES_CONFIG.xi);
    go("scr-section");
    return;
  }

  if (classKey === "csit") {
    currentSection = "";
    roster = [];
    renderSectionSelection(CLASSES_CONFIG.csit);
    go("scr-section");
    return;
  }

  if (classKey === "bca") {
    // BCA RJU: No sections, skips directly to Mode Selection
    currentSection = "Main";
    roster = STUDENTS_BCA;
    document.getElementById("modeClassLabel").innerText = CLASSES_CONFIG.bca.name;
    document.getElementById("modeSectionLabel").innerText = STUDENTS_BCA.length + " students enrolled";
    go("scr-home");
    return;
  }
}

function renderSectionSelection(cfg) {
  document.getElementById("sectionClassTitle").innerText = cfg.name;
  const container = document.getElementById("sectionListContainer");
  container.innerHTML = "";

  const sectionKeys = Object.keys(cfg.sections);
  sectionKeys.forEach(secKey => {
    const secData = cfg.sections[secKey];
    const btn = document.createElement("button");
    btn.className = "section-card";
    btn.onclick = () => chooseSection(secKey);

    const b = document.createElement("b");
    b.innerText = secData.name;

    const small = document.createElement("small");
    small.innerText = secData.roster.length + " students";

    btn.appendChild(b);
    btn.appendChild(small);
    container.appendChild(btn);
  });
}

function chooseSection(secKey) {
  currentSection = secKey;

  if (currentClassKey === "xi") {
    // Route each of B1 to B5 to its respective student roster array
    if (secKey === "B1") roster = STUDENTS_XI_B1;
    else if (secKey === "B2") roster = STUDENTS_XI_B2;
    else if (secKey === "B3") roster = STUDENTS_XI_B3;
    else if (secKey === "B4") roster = STUDENTS_XI_B4;
    else if (secKey === "B5") roster = STUDENTS_XI_B5;
    else roster = CLASSES_CONFIG.xi.sections[secKey]?.roster || [];
  } else {
    const cfg = CLASSES_CONFIG[currentClassKey];
    roster = cfg.sections[secKey]?.roster || [];
  }

  const className = CLASSES_CONFIG[currentClassKey]?.name || "Class";
  document.getElementById("modeClassLabel").innerText = className + " · Section " + secKey;
  document.getElementById("modeSectionLabel").innerText = roster.length + " students";
  go("scr-home");
}

// ================= MODE SELECTION =================
function chooseMode(mode) {
  currentMode = mode;

  if (mode === "attendance") {
    attIndex = 0;
    attRecords = [];
    syncAttendanceDay();
  } else {
    openRollScreen();
  }
}

// ================= ATTENDANCE =================
async function syncAttendanceDay() {
  busy(true, "Syncing with sheet…", "Checking the last recorded day.");

  try {
    const query = new URLSearchParams({
      classKey: currentClassKey,
      section: currentSection,
      mode: "attendance",
      t: Date.now().toString()
    });

    const res = await fetch(`/api/sheets?${query.toString()}`, {
      headers: {
        "Authorization": `Bearer ${sessionToken}`
      }
    });

    if (res.status === 401) {
      busy(false);
      toast("Session expired. Please log in again.");
      logout();
      return;
    }

    const data = await res.json();
    busy(false);

    const lastCol = (data && data.lastDay !== undefined) ? Number(data.lastDay) : 0;
    nextCol = lastCol + 1;
    document.getElementById("lastDayNumber").innerText = lastCol > 0 ? lastCol : "--";
    document.getElementById("btnNextDay").innerText = "Start day " + nextCol;
    go("scr-day");
  } catch (err) {
    busy(false);
    toast("Could not sync with sheet. Defaulting to column 1.");
    nextCol = 1;
    document.getElementById("lastDayNumber").innerText = "--";
    document.getElementById("btnNextDay").innerText = "Start day 1";
    go("scr-day");
  }
}

function startAttendance(type) {
  hideErr("dayErr");

  if (type === "next") {
    targetCol = nextCol;
  } else {
    const v = parseInt(document.getElementById("customDayInput").value, 10);
    if (!v || v < 1) {
      showErr("dayErr");
      return;
    }
    targetCol = v;
  }

  document.getElementById("finalDayDisplay").innerText = targetCol;
  attIndex = 0;
  attRecords = [];
  go("scr-att");
  loadAttStudent();
}

function loadAttStudent() {
  if (attIndex < roster.length) {
    const pct = ((attIndex) / roster.length) * 100;
    document.getElementById("progressFill").style.width = pct + "%";
    document.getElementById("progressText").innerText =
      "STUDENT " + (attIndex + 1) + " OF " + roster.length;
    document.getElementById("attStudentId").innerText = roster[attIndex].id;
    document.getElementById("attStudentName").innerText = roster[attIndex].name;
    document.getElementById("btnUndo").disabled = (attIndex === 0);
  } else {
    prepareAttFinal();
  }
}

function recordAttendance(value) {
  attRecords.push(value);
  attIndex++;
  loadAttStudent();
}

function undoAttendance() {
  if (attIndex > 0) {
    attIndex--;
    attRecords.pop();
    loadAttStudent();
  }
}

function prepareAttFinal() {
  document.getElementById("commentBox").value = "Date: " + todayEnglishDate + " AD\n";
  const present = attRecords.filter(s => s === 1).length;
  document.getElementById("dataSummary").innerText =
    "Present: " + present + " / " + roster.length + " students";
  go("scr-note");
}

async function submitAttendance() {
  busy(true, "Saving records…", "Uploading attendance to sheet.");

  const payload = {
    classKey: currentClassKey,
    section: currentSection,
    mode: "attendance",
    targetDay: targetCol,
    attendance: attRecords,
    comment: document.getElementById("commentBox").value
  };

  try {
    const res = await fetch("/api/sheets", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${sessionToken}`
      },
      body: JSON.stringify(payload)
    });

    if (res.status === 401) {
      busy(false);
      toast("Session expired. Please log in again.");
      logout();
      return;
    }

    const data = await res.json();
    busy(false);

    const classLabel = CLASSES_CONFIG[currentClassKey].name;
    const secLabel = currentSection ? ` (${currentSection})` : "";
    document.getElementById("doneMsg").innerText =
      `Attendance for column ${targetCol} ${classLabel}${secLabel} saved to the sheet.`;
    go("scr-done");
  } catch (err) {
    busy(false);
    toast("Network error during submission. Verify sheet entries.");
    document.getElementById("doneMsg").innerText =
      `Submission finished — please verify column ${targetCol} in the sheet.`;
    go("scr-done");
  }
}

// ================= ASSIGNMENTS =================
function openRollScreen() {
  const classLabel = CLASSES_CONFIG[currentClassKey].name;
  const secText = currentSection ? `${currentSection} · ` : "";
  document.getElementById("rollRange").innerText =
    `${classLabel.toUpperCase()} · ${secText}ROLLS 1–${roster.length}`;

  const input = document.getElementById("rollInput");
  input.value = "";
  input.max = roster.length;
  hideErr("rollErr");
  go("scr-roll");
  setTimeout(() => input.focus(), 150);
}

async function openRoll() {
  hideErr("rollErr");
  const roll = parseInt(document.getElementById("rollInput").value, 10);

  if (!roll || roll < 1 || roll > roster.length) {
    showErr("rollErr", `Enter a roll number between 1 and ${roster.length}.`);
    return;
  }

  currentRoll = roll;
  const student = roster[roll - 1];

  busy(true, "Opening record…", `Roll ${roll} · ${student.name}`);

  try {
    const query = new URLSearchParams({
      classKey: currentClassKey,
      section: currentSection,
      mode: "assignment",
      action: "getStudent",
      roll: roll.toString(),
      id: student.id,
      t: Date.now().toString()
    });

    const res = await fetch(`/api/sheets?${query.toString()}`, {
      headers: {
        "Authorization": `Bearer ${sessionToken}`
      }
    });

    if (res.status === 401) {
      busy(false);
      toast("Session expired. Please log in again.");
      logout();
      return;
    }

    const data = await res.json();
    busy(false);

    if (data && data.ok && Array.isArray(data.marks) && Array.isArray(data.notes)) {
      buildRecordScreen(student, data.marks, data.notes);
    } else if (data && Array.isArray(data.comments)) {
      showErr("rollErr", "The sheet is running an older v2 script. Update to assignment-api v3 for notes support.");
    } else {
      showErr("rollErr", (data && data.error) ? data.error : "Could not retrieve student record from sheet.");
    }
  } catch (err) {
    busy(false);
    showErr("rollErr", "Network error — couldn't connect to server.");
  }
}

function buildRecordScreen(student, marks, notes) {
  document.getElementById("recRoll").innerText = currentRoll;
  document.getElementById("recName").innerText = student.name;
  document.getElementById("recId").innerText = student.id;
  hideErr("recordErr");

  recordOriginal = {
    marks: marks.map(m => (m == null ? "" : String(m))),
    notes: notes.map(n => (n == null ? "" : String(n)))
  };
  editedRows = new Set();

  const tbody = document.getElementById("recordRows");
  tbody.innerHTML = "";

  for (let i = 0; i < TOTAL_ASSIGNMENTS; i++) {
    const tr = document.createElement("tr");
    tr.dataset.row = i;

    const tdNo = document.createElement("td");
    tdNo.className = "c-no";
    tdNo.innerText = (i + 1);

    const tdMark = document.createElement("td");
    tdMark.className = "c-mark";
    const mark = document.createElement("input");
    mark.type = "number";
    mark.inputMode = "numeric";
    mark.min = 0;
    mark.max = 100;
    mark.placeholder = "–";
    mark.className = "mark-input";
    mark.value = recordOriginal.marks[i] || "";
    mark.disabled = true;
    tdMark.appendChild(mark);

    const tdNote = document.createElement("td");
    const note = document.createElement("input");
    note.type = "text";
    note.placeholder = "—";
    note.className = "note-input";
    note.value = recordOriginal.notes[i] || "";
    note.disabled = true;
    tdNote.appendChild(note);

    const tdEdit = document.createElement("td");
    tdEdit.className = "c-edit";
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "edit-btn";
    btn.innerText = "Edit";
    btn.onclick = () => toggleEdit(i);
    tdEdit.appendChild(btn);

    tr.appendChild(tdNo);
    tr.appendChild(tdMark);
    tr.appendChild(tdNote);
    tr.appendChild(tdEdit);
    tbody.appendChild(tr);
  }

  updateEditStatus();
  go("scr-record");
}

function rowEls(i) {
  const tr = document.querySelector(`#recordRows tr[data-row="${i}"]`);
  return {
    tr,
    mark: tr.querySelector(".mark-input"),
    note: tr.querySelector(".note-input"),
    btn: tr.querySelector(".edit-btn")
  };
}

function toggleEdit(i) {
  const { tr, mark, note, btn } = rowEls(i);
  hideErr("recordErr");

  if (editedRows.has(i)) {
    // Cancel edit
    editedRows.delete(i);
    mark.value = recordOriginal.marks[i] || "";
    note.value = recordOriginal.notes[i] || "";
    mark.disabled = true;
    note.disabled = true;
    mark.classList.remove("invalid");
    note.placeholder = "—";
    tr.classList.remove("editing");
    btn.innerText = "Edit";
    btn.classList.remove("active");
  } else {
    // Unlock row
    editedRows.add(i);
    mark.disabled = false;
    note.disabled = false;
    note.placeholder = "Add note";
    tr.classList.add("editing");
    btn.innerText = "Cancel";
    btn.classList.add("active");
    mark.focus();
  }

  updateEditStatus();
}

function updateEditStatus() {
  const el = document.getElementById("editStatus");
  const n = editedRows.size;
  if (n === 0) {
    el.innerText = "All rows locked — press Edit to change one.";
    el.classList.remove("has-edits");
  } else {
    const list = [...editedRows].sort((a, b) => a - b).map(i => i + 1).join(", ");
    el.innerText = `${n} assignment${n > 1 ? "s" : ""} will be uploaded: #${list}`;
    el.classList.add("has-edits");
  }
}

function collectUpdates() {
  if (editedRows.size === 0) {
    showErr("recordErr", "Nothing is unlocked. Press Edit on the assignment you want to change first.");
    return null;
  }

  const updates = [];
  let valid = true;

  [...editedRows].sort((a, b) => a - b).forEach(i => {
    const { mark, note } = rowEls(i);
    mark.classList.remove("invalid");

    const raw = mark.value.trim();
    let markValue = "";
    if (raw !== "") {
      const num = Number(raw);
      if (isNaN(num) || num < 0 || num > 100) {
        mark.classList.add("invalid");
        valid = false;
      } else {
        markValue = num;
      }
    }
    updates.push({ index: i + 1, mark: markValue, note: note.value.trim() });
  });

  if (!valid) {
    showErr("recordErr", "Marks must be between 0 and 100 — or left blank.");
    return null;
  }
  hideErr("recordErr");
  return updates;
}

async function saveRecord(nextAction) {
  const updates = collectUpdates();
  if (!updates) return;

  const student = roster[currentRoll - 1];
  busy(true, "Uploading to sheet…", `Roll ${currentRoll} · ${updates.length} assignment(s)`);

  const payload = {
    classKey: currentClassKey,
    section: currentSection,
    mode: "assignment",
    action: "saveStudent",
    roll: currentRoll,
    id: student.id,
    name: student.name,
    updates: updates
  };

  try {
    const res = await fetch("/api/sheets", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${sessionToken}`
      },
      body: JSON.stringify(payload)
    });

    if (res.status === 401) {
      busy(false);
      toast("Session expired. Please log in again.");
      logout();
      return;
    }

    const data = await res.json();
    busy(false);

    if (data && data.ok) {
      toast(`✓ Roll ${currentRoll} — assignment ${updates.map(u => u.index).join(", ")} saved`);
      if (nextAction === "redo") {
        openRollScreen();
      } else {
        goHome();
      }
    } else {
      showErr("recordErr", (data && data.error) ? data.error : "The sheet rejected this save.");
    }
  } catch (err) {
    busy(false);
    showErr("recordErr", "Network error — the save was not confirmed. Check the sheet before retrying.");
  }
}

// Global functions and rosters exposed for HTML click handlers
window.STUDENTS_XI_B1 = STUDENTS_XI_B1;
window.STUDENTS_XI_B2 = STUDENTS_XI_B2;
window.STUDENTS_XI_B3 = STUDENTS_XI_B3;
window.STUDENTS_XI_B4 = STUDENTS_XI_B4;
window.STUDENTS_XI_B5 = STUDENTS_XI_B5;
window.STUDENTS_CSIT_A1 = STUDENTS_CSIT_A1;
window.STUDENTS_CSIT_A2 = STUDENTS_CSIT_A2;
window.STUDENTS_BCA = STUDENTS_BCA;
window.CLASSES_CONFIG = CLASSES_CONFIG;

window.checkCode = checkCode;
window.chooseClass = chooseClass;
window.chooseSection = chooseSection;
window.chooseMode = chooseMode;
window.startAttendance = startAttendance;
window.recordAttendance = recordAttendance;
window.undoAttendance = undoAttendance;
window.submitAttendance = submitAttendance;
window.openRoll = openRoll;
window.toggleEdit = toggleEdit;
window.saveRecord = saveRecord;
window.go = go;
window.goHome = goHome;
window.goClasses = goClasses;
window.logout = logout;
window.openPasscodeModal = openPasscodeModal;
window.closePasscodeModal = closePasscodeModal;
window.submitResetPassword = submitResetPassword;
