function calculate() {
  const mal = parseInt(document.getElementById("mal").value) || 0;
  const fem = parseInt(document.getElementById("fem").value) || 0;
  const chd = parseInt(document.getElementById("chd").value) || 0;
  const inf = parseInt(document.getElementById("inf").value) || 0;
  const dow = parseInt(document.getElementById("dow").value) || 0;

  const total = (mal * 88) + (fem * 70) + (chd * 35) + (inf * 0) + (dow * 1);
  const breakdown = `(${mal} * 88) + (${fem} * 70) + (${chd} * 35) + (${inf} * 0) + (${dow} * 1) = ${total}`;

  const resultEl = document.getElementById("result");
  const detailsEl = document.getElementById("details");

  resultEl.textContent = `Total: ${total}`;
  detailsEl.textContent = breakdown;

  resultEl.classList.remove("hidden");
  detailsEl.classList.remove("hidden");

  const timestamp = new Date().toLocaleString();
  const entry = `[${timestamp}] Total: ${total} | Inputs: ${mal}, ${fem}, ${chd}, ${inf}, ${dow}`;
  const history = JSON.parse(localStorage.getItem("calc_history") || "[]");
  history.unshift(entry);
  localStorage.setItem("calc_history", JSON.stringify(history.slice(0, 100)));
}

function reset() {
  ["mal", "fem", "chd", "inf", "dow"].forEach(id => {
    document.getElementById(id).value = "";
  });

  document.getElementById("result").classList.add("hidden");
  document.getElementById("details").classList.add("hidden");
  document.getElementById("history").classList.add("hidden");
}

function toggleHistory() {
  const el = document.getElementById("history");
  if (el.classList.contains("hidden")) {
    const history = JSON.parse(localStorage.getItem("calc_history") || "[]");
    el.innerHTML = history.length ? history.map(e => `<div>${e}</div>`).join("<hr/>") : "No history yet.";
    el.classList.remove("hidden");
  } else {
    el.classList.add("hidden");
  }
}
