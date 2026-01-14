function syncStateForPrint() {
  const stateSelect = document.getElementById("stateSelect");
  if (!stateSelect) return;

  document.querySelectorAll(".state-print").forEach(el => {
    el.textContent = stateSelect.value;
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const stateSelect = document.getElementById("stateSelect");
  if (!stateSelect) return;

  // update immediately when dropdown changes
  stateSelect.addEventListener("change", syncStateForPrint);

  // initial fill
  syncStateForPrint();
});

window.addEventListener("beforeprint", syncStateForPrint);



  function syncSoldToPrint() {
    const map = [
      ["soldCompanyInput", "soldCompanyPrint"],
      ["soldAddressInput", "soldAddressPrint"],
      ["soldCityInput", "soldCityPrint"],
    ];

    map.forEach(([inputId, printId]) => {
      const input = document.getElementById(inputId);
      const span  = document.getElementById(printId);
      if (input && span) {
        span.textContent = input.value.trim();
      }
    });
  }

  window.addEventListener("beforeprint", syncSoldToPrint);
