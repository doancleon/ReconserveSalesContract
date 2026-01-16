// ---------- Seller data ----------
const SELLERS = {
  AL: {
    stateName: "Alabama",
    company: "RECONSERVE OF ALABAMA, INC.",
    street: "7240 Jefferson Metro Parkway",
    cityStateZip: "McCalla, AL 35111",
    phone: "205-217-7784",
    fax: ""
  },

  AZ: {
    stateName: "Arizona",
    company: "RECONSERVE OF ARIZONA, INC.",
    street: "1704 W. Broadway Road",
    cityStateZip: "Phoenix, AZ 85041",
    phone: "602-272-7784",
    fax: ""
  },

  "CA-ONT": {
    stateName: "California – Ontario",
    company: "RECONSERVE OF CALIFORNIA – ONTARIO, INC.",
    street: "1163 East Belmont Street",
    cityStateZip: "Ontario, CA 91761",
    phone: "909-923-3314",
    fax: "909-947-2669"
  },

  "CA-LA": {
    stateName: "California – Los Angeles",
    company: "RECONSERVE OF CALIFORNIA – LOS ANGELES, INC.",
    street: "9112 Graham Avenue",
    cityStateZip: "Los Angeles, CA 90002",
    phone: "323-564-5871",
    fax: "323-569-9400"
  },

  "CA-STK": {
    stateName: "California – Stockton",
    company: "RECONSERVE OF CALIFORNIA – STOCKTON, INC.",
    street: "704 Zephyr Street",
    cityStateZip: "Stockton, CA 95206",
    phone: "209-982-5085",
    fax: "209-982-0290"
  },

  CO: {
    stateName: "Colorado",
    company: "RECONSERVE OF COLORADO, INC.",
    street: "5801 Franklin Street",
    cityStateZip: "Denver, CO 80216",
    phone: "303-295-0997",
    fax: ""
  },

  GA: {
    stateName: "Georgia",
    company: "RECONSERVE OF GEORGIA, INC.",
    street: "4695 Radford Road",
    cityStateZip: "Flowery Branch, GA 30542",
    phone: "770-967-7728",
    fax: "770-967-8703"
  },

  IL: {
    stateName: "Illinois",
    company: "RECONSERVE OF ILLINOIS, INC.",
    street: "6160 River Road",
    cityStateZip: "Hodgkins, IL 60525",
    phone: "708-354-5882",
    fax: "708-354-5883"
  },

  IN: {
    stateName: "Indiana",
    company: "RECONSERVE OF INDIANA, INC.",
    street: "3315 Hancel Circle",
    cityStateZip: "Mooresville, IN 46158",
    phone: "812-299-2191",
    fax: ""
  },

  IA: {
    stateName: "Iowa",
    company: "RECONSERVE OF IOWA, INC.",
    street: "3200 64th Avenue SW",
    cityStateZip: "Cedar Rapids, IA 52404",
    phone: "319-462-6161",
    fax: ""
  },

  KS: {
    stateName: "Kansas",
    company: "RECONSERVE OF KANSAS, INC.",
    street: "41 North James St.",
    cityStateZip: "Kansas City, KS 66118",
    phone: "913-621-5619",
    fax: "913-291-2983"
  },

  MD: {
    stateName: "Maryland",
    company: "RECONSERVE OF MARYLAND, INC.",
    street: "3220 Sun Street",
    cityStateZip: "Baltimore, MD 21226",
    phone: "410-354-1417",
    fax: "410-354-1561"
  },

  MI: {
    stateName: "Michigan",
    company: "RECONSERVE OF MICHIGAN, INC.",
    street: "170 Angell St",
    cityStateZip: "Battle Creek, MI 49037",
    phone: "269-965-0427",
    fax: ""
  },

  MN: {
    stateName: "Minnesota",
    company: "RECONSERVE OF MINNESOTA, INC.",
    street: "13420 Courthouse Blvd.",
    cityStateZip: "Rosemount, MN 55068",
    phone: "651-438-3113",
    fax: "651-438-3011"
  },

  NJ: {
    stateName: "New Jersey",
    company: "RECONSERVE OF NEW JERSEY, INC.",
    street: "1250 Amboy Ave.",
    cityStateZip: "Perth Amboy, NJ 08861",
    phone: "732-826-4240",
    fax: "732-826-5752"
  },

  OH: {
    stateName: "Ohio",
    company: "RECONSERVE OF OHIO, INC.",
    street: "2295 Innovation Drive",
    cityStateZip: "Marion, OH 43302",
    phone: "419-294-6370",
    fax: ""
  },

  TN: {
    stateName: "Tennessee",
    company: "RECONSERVE OF TENNESSEE, INC.",
    street: "1495 Harbor Ave",
    cityStateZip: "Memphis, TN 38106",
    phone: "901-324-3621",
    fax: "901-324-3622"
  },

  TX: {
    stateName: "Texas",
    company: "RECONSERVE OF TEXAS, INC.",
    street: "3610 Duncanville Road",
    cityStateZip: "Dallas, TX 75236",
    phone: "214-339-4755",
    fax: "214-339-4247"
  }
};


function syncUI() {
  const stateSel = document.getElementById("stateSelect");
  const statePrint = document.getElementById("statePrint");

  if (stateSel) {
    if (statePrint) statePrint.textContent = stateSel.value;
    document.querySelectorAll(".state-print").forEach(el => (el.textContent = stateSel.value));
  }


  const sellerSel = document.getElementById("sellerStateSelect");
const delivery = document.getElementById("deliveryBasisPrint");
  if (sellerSel) {
    const s = SELLERS[sellerSel.value] || SELLERS.NJ;

    const setText = (id, val) => {
      const el = document.getElementById(id);
      if (el) el.textContent = val || "";
    };

    setText("sellerStatePrint", s.stateName);
    setText("sellerCompany", s.company);
    setText("sellerStreet", s.street);
    setText("sellerCityStateZip", s.cityStateZip);
    setText("sellerPhone", s.phone);
  if (delivery) {
    delivery.textContent = (s.cityStateZip || "").replace(/\s+\d{5}(-\d{4})?$/, "");
  }

    const faxLine = document.getElementById("sellerFaxLine");
    const faxSpan = document.getElementById("sellerFax");
    if (faxLine && faxSpan) {
      if (s.fax) {
        faxSpan.textContent = s.fax;
        faxLine.style.display = "";
      } else {
        faxLine.style.display = "none";
      }
    }



  }

  const pairs = [
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
    ["otherQuality", "otherQualityPrint"],
["priceInput", "pricePrint"],

    // Quality numbers
    ["proteinInput", "proteinPrint"],
    ["fatInput", "fatPrint"],
    ["fiberInput", "fiberPrint"],
  ];

  pairs.forEach(([inputId, printId]) => {
    const input = document.getElementById(inputId);
    const span = document.getElementById(printId);
    if (input && span) span.textContent = (input.value || "").trim();
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const stateSel = document.getElementById("stateSelect");
  if (stateSel) stateSel.addEventListener("change", syncUI);

  const sellerSel = document.getElementById("sellerStateSelect");
  if (sellerSel) sellerSel.addEventListener("change", syncUI);

  document.addEventListener("input", syncUI);

  syncUI();
});

window.addEventListener("beforeprint", syncUI);
