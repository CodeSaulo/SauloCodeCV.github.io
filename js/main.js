/* =========================================================
   CONFIGURACIÓN: edita solo estos valores
   Si dejas un enlace vacío (""), ese botón se oculta solo.
   ========================================================= */
const CONFIG = {
  email: "sjuarez2290@gmail.com",
  linkedin: "",                 // ej. "https://www.linkedin.com/in/tu-perfil"
  github: "",                   // ej. "https://github.com/tu-usuario"
  repos: {
    web: "",                    // ej. "https://github.com/tu-usuario/playwright-bdd-framework"
    api: ""                     // ej. "https://github.com/tu-usuario/api-testing-postman"
  },
  cv: {
    es: "assets/CV_Saul_Juarez_QA_Engineer_ES.pdf",
    en: ""                      // si tienes CV en inglés, ponlo aquí; si no, se usa el de español
  }
};

/* ===== Traducciones al inglés (el español vive en el HTML) ===== */
const EN = {
  "skip": "Skip to content",
  "nav.about": "About",
  "nav.skills": "Skills",
  "nav.exp": "Experience",
  "nav.projects": "Projects",
  "nav.contact": "Contact",
  "hero.status": "Open to new opportunities · Remote",
  "hero.role": "QA Engineer · Test Automation with Python & Playwright",
  "hero.pitch": "7+ years ensuring the quality of high-stakes financial, government and web platforms. I design test strategies, automate what matters and communicate risk with data.",
  "hero.cv": "Download CV",
  "hero.contact": "Get in touch",
  "hero.location": "Mexico City",
  "rep.1": "years_of_experience >= 7",
  "rep.2": "critical_prod_incidents == 0",
  "rep.3": "test_coverage += 40%",
  "rep.4": "stack: python + playwright + bdd",
  "rep.sum": "4 passed",
  "stat.1": "years in QA",
  "stat.2": "critical production incidents in my releases",
  "stat.3": "test coverage on critical projects",
  "stat.4": "payments platform handling hundreds of daily transactions",
  "about.title": "About me",
  "about.p1": "I'm a QA Engineer who likes finding problems before users do. I've worked on payment platforms and government applications, where a production bug is expensive, so my focus is prevention: I join refinement early, define clear acceptance criteria and design coverage based on risk.",
  "about.p2": "I automate with Python, Playwright and Behave (BDD), validate APIs and data directly in the database, and turn results into reports that both engineers and business stakeholders understand. I also have hands-on security testing experience (OWASP Top 10, PCI DSS).",
  "skills.title": "Skills",
  "skills.auto": "Test automation",
  "skills.api": "API testing",
  "skills.api.rules": "Business rules",
  "skills.qa": "QA & methodology",
  "skills.qa.1": "Test strategy & planning",
  "skills.qa.2": "Test case design",
  "skills.qa.3": "Regression",
  "skills.qa.4": "Integration",
  "skills.mgmt": "Quality management",
  "skills.mgmt.1": "Defect lifecycle",
  "skills.mgmt.2": "Traceability",
  "skills.mgmt.3": "Metrics",
  "skills.mgmt.4": "Risk analysis",
  "skills.db": "Databases",
  "skills.sec": "Security & environments",
  "exp.title": "Experience",
  "exp.1.role": "Senior Tester · Test Engineer",
  "exp.1.ind": "Fintech · Payments",
  "exp.1.date": "Aug 2021 – Jul 2026",
  "exp.1.a": "Releases with zero critical post-deployment defects on a financial platform processing hundreds of daily transactions.",
  "exp.1.b": "Built and grew the automated suite with Python, Playwright and Behave (BDD), with Allure reports for technical and business teams.",
  "exp.1.c": "API validation (Postman, SoapUI) and SQL data checks; controls aligned with PCI DSS.",
  "exp.2.role": "Security Tester · Test Engineer",
  "exp.2.ind": "Government",
  "exp.2.date": "Apr 2018 – Jul 2021",
  "exp.2.a": "Increased test coverage by 40% on critical government applications.",
  "exp.2.b": "Caught vulnerabilities before production using OWASP Top 10, AppScan, Fortify, Burp Suite and OWASP ZAP.",
  "exp.2.c": "Trained junior testers in test design, defect management and application security.",
  "exp.3.role": "Technical Support Analyst",
  "exp.3.date": "Sep 2017 – Feb 2018",
  "exp.3.a": "Resolved level 2 and 3 incidents within SLA and wrote technical documentation for users and developers.",
  "proj.title": "Projects",
  "proj.1.title": "Web test automation framework",
  "proj.1.desc": "Framework for functional and regression scenarios using Page Object Model, reusable steps, separated test data and shareable Allure reports.",
  "proj.2.title": "API & data testing",
  "proj.2.desc": "Service and business-rule validation (status codes, response structure, expected results) and reconciliation of API responses against database records.",
  "proj.code": "View code on GitHub",
  "cert.title": "Certifications & education",
  "cert.sub": "Certifications",
  "cert.katalon": "Test automation",
  "cert.secdev": "Secure development & information security",
  "edu.sub": "Education",
  "edu.degree": "B.S. Computer Systems Engineering",
  "edu.school": "UCUGS University · Mexico City · Coursework completed",
  "lang.sub": "Languages",
  "lang.es": "<strong>Spanish</strong> · native",
  "lang.en": "<strong>English</strong> · basic (A2), reads technical documentation",
  "contact.title": "Looking for someone to own the quality of your product?",
  "contact.text": "I'm open to remote QA Engineer / QA Automation roles. Drop me a line and let's talk.",
  "footer": "Hand-built with HTML, CSS & JS · Hosted on GitHub Pages"
};

const META = {
  es: { title: "Saúl Juárez · QA Engineer", desc: document.querySelector('meta[name="description"]').content },
  en: { title: "Saúl Juárez · QA Engineer", desc: "QA Engineer with 7+ years of experience in test automation with Python and Playwright, API testing and quality assurance for financial platforms." }
};

/* ===== Utilidades de almacenamiento seguras ===== */
const store = {
  get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
  set(k, v) { try { localStorage.setItem(k, v); } catch (e) {} }
};

/* ===== Idioma ===== */
const nodes = document.querySelectorAll("[data-i18n]");
const ES = {};
nodes.forEach(n => { ES[n.dataset.i18n] = n.innerHTML; });

function setLang(lang) {
  const dict = lang === "en" ? EN : ES;
  nodes.forEach(n => {
    const v = dict[n.dataset.i18n];
    if (v !== undefined) n.innerHTML = v;
  });
  document.documentElement.lang = lang;
  document.title = META[lang].title;
  document.querySelector('meta[name="description"]').content = META[lang].desc;

  const btn = document.getElementById("langToggle");
  btn.querySelector(".lang-label").textContent = lang === "en" ? "ES" : "EN";
  btn.setAttribute("aria-label", lang === "en" ? "Cambiar idioma a español" : "Change language to English");
  document.getElementById("themeToggle").setAttribute("aria-label", lang === "en" ? "Toggle theme" : "Cambiar tema");

  const cv = (lang === "en" && CONFIG.cv.en) ? CONFIG.cv.en : CONFIG.cv.es;
  ["cvBtn", "cvBtn2"].forEach(id => { document.getElementById(id).href = cv; });

  store.set("lang", lang);
}

const savedLang = store.get("lang");
const initialLang = savedLang || ((navigator.language || "es").toLowerCase().startsWith("es") ? "es" : "en");
setLang(initialLang);

document.getElementById("langToggle").addEventListener("click", () => {
  setLang(document.documentElement.lang === "en" ? "es" : "en");
});

/* ===== Tema claro / oscuro ===== */
const root = document.documentElement;
function currentTheme() {
  const t = root.getAttribute("data-theme");
  if (t) return t;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}
document.getElementById("themeToggle").addEventListener("click", () => {
  const next = currentTheme() === "dark" ? "light" : "dark";
  root.setAttribute("data-theme", next);
  store.set("theme", next);
});

/* ===== Enlaces de contacto y proyectos ===== */
function setLink(id, url) {
  const el = document.getElementById(id);
  if (!el) return;
  if (url) el.href = url; else el.hidden = true;
}
if (CONFIG.email) {
  document.getElementById("emailLink").href = "mailto:" + CONFIG.email;
  document.getElementById("emailText").textContent = CONFIG.email;
} else {
  document.getElementById("emailLink").hidden = true;
}
setLink("linkedinLink", CONFIG.linkedin);
setLink("githubLink", CONFIG.github);
document.querySelectorAll("[data-repo]").forEach(a => {
  const url = CONFIG.repos[a.dataset.repo];
  if (url) a.href = url; else a.hidden = true;
});

/* ===== Detalles ===== */
document.getElementById("year").textContent = new Date().getFullYear();

const nav = document.querySelector(".nav");
const onScroll = () => nav.classList.toggle("is-scrolled", window.scrollY > 8);
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

if ("IntersectionObserver" in window) {
  const targets = document.querySelectorAll(".section__title, .card, .job, .stat, .certs li");
  targets.forEach(t => t.classList.add("reveal"));
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add("is-visible"); io.unobserve(e.target); }
    });
  }, { threshold: 0.12 });
  targets.forEach(t => io.observe(t));
}
