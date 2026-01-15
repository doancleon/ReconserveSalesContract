function syncAllForPrint() {
  // State (updates all occurrences)
  const stateSelect = document.getElementById("stateSelect");
  if (stateSelect) {
    document.querySelectorAll(".state-print").forEach(el => {
      el.textContent = stateSelect.value;
    });
  }

  // Inputs -> print spans
  const map = [
    // Sold To
    ["soldCompanyInput", "soldCompanyPrint"],
    ["soldAddressInput", "soldAddressPrint"],
    ["soldCityInput", "soldCityPrint"],

    // Contract block
    ["contractDate", "contractDatePrint"],
    ["sellerContractNumber", "sellerContractNumberPrint"],
    ["buyerContractNumber", "buyerContractNumberPrint"],
    ["buyerName", "buyerNamePrint"],

    // Commodity block
    ["commodity", "commodityPrint"],
    ["packing", "packingPrint"],
    ["quantity", "quantityPrint"],
    ["shipmentPeriod", "shipmentPeriodPrint"],
  ];

  map.forEach(([inputId, printId]) => {
    const input = document.getElementById(inputId);
    const span = document.getElementById(printId);
    if (!input || !span) return;
    span.textContent = (input.value || "").trim();
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const stateSelect = document.getElementById("stateSelect");
  if (stateSelect) stateSelect.addEventListener("change", syncAllForPrint);

  // optional: keep print spans updated while typing
  [
    "soldCompanyInput","soldAddressInput","soldCityInput",
    "contractDate","sellerContractNumber","buyerContractNumber","buyerName",
    "commodity","packing","quantity","shipmentPeriod"
  ].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.addEventListener("input", syncAllForPrint);
  });

  syncAllForPrint();
});

window.addEventListener("beforeprint", syncAllForPrint);

// Seller info by state (fill in real addresses/numbers as needed)
const SELLERS = {
  AL: { stateName: "Alabama",   company: "RECONSERVE OF ALABAMA, INC.",   street: "", cityStateZip: "", phone: "", fax: "" },
  AZ: { stateName: "Arizona",   company: "RECONSERVE OF ARIZONA, INC.",   street: "", cityStateZip: "", phone: "", fax: "" },
  CA: { stateName: "California",company: "RECONSERVE OF CALIFORNIA, INC.",street: "", cityStateZip: "", phone: "", fax: "" },
  CO: { stateName: "Colorado",  company: "RECONSERVE OF COLORADO, INC.",  street: "", cityStateZip: "", phone: "", fax: "" },
  GA: { stateName: "Georgia",   company: "RECONSERVE OF GEORGIA, INC.",   street: "", cityStateZip: "", phone: "", fax: "" },
  IL: { stateName: "Illinois",  company: "RECONSERVE OF ILLINOIS, INC.",  street: "", cityStateZip: "", phone: "", fax: "" },
  IN: { stateName: "Indiana",   company: "RECONSERVE OF INDIANA, INC.",   street: "", cityStateZip: "", phone: "", fax: "" },
  IA: { stateName: "Iowa",      company: "RECONSERVE OF IOWA, INC.",      street: "", cityStateZip: "", phone: "", fax: "" },
  KS: { stateName: "Kansas",    company: "RECONSERVE OF KANSAS, INC.",    street: "", cityStateZip: "", phone: "", fax: "" },
  MD: { stateName: "Maryland",  company: "RECONSERVE OF MARYLAND, INC.",  street: "", cityStateZip: "", phone: "", fax: "" },
  MI: { stateName: "Michigan",  company: "RECONSERVE OF MICHIGAN, INC.",  street: "", cityStateZip: "", phone: "", fax: "" },
  MN: { stateName: "Minnesota", company: "RECONSERVE OF MINNESOTA, INC.", street: "", cityStateZip: "", phone: "", fax: "" },
  NJ: {
    stateName: "New Jersey",
    company: "RECONSERVE OF NEW JERSEY, INC.",
    street: "1250 AMBOY AVE.",
    cityStateZip: "PERTH AMBOY, NJ 08861",
    phone: "732-826-4240",
    fax: "732-826-5752"
  },
  OH: { stateName: "Ohio",      company: "RECONSERVE OF OHIO, INC.",      street: "", cityStateZip: "", phone: "", fax: "" },
  TN: { stateName: "Tennessee", company: "RECONSERVE OF TENNESSEE, INC.", street: "", cityStateZip: "", phone: "", fax: "" },
  TX: { stateName: "Texas",     company: "RECONSERVE OF TEXAS, INC.",     street: "", cityStateZip: "", phone: "", fax: "" },
};

function syncSeller() {
  const sel = document.getElementById("sellerStateSelect");
  const key = sel ? sel.value : "NJ";
  const s = SELLERS[key] || SELLERS.NJ;

  const set = (id, val) => {
    const el = document.getElementById(id);
    if (el) el.textContent = val || "";
  };

  set("sellerStatePrint", s.stateName);
  set("sellerCompany", s.company);
  set("sellerStreet", s.street);
  set("sellerCityStateZip", s.cityStateZip);
  set("sellerPhone", s.phone);
  set("sellerFax", s.fax);
}

document.addEventListener("DOMContentLoaded", () => {
  const sel = document.getElementById("sellerStateSelect");
  if (sel) sel.addEventListener("change", syncSeller);
  syncSeller();
});

window.addEventListener("beforeprint", syncSeller);
