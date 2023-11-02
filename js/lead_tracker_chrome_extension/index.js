let leads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const deleteBtn = document.getElementById("delete-btn")
const leadsEl = document.getElementById("leads-el")
const tabBtn = document.getElementById("tab-btn")

const leadsFromLocalStorage = JSON.parse(localStorage.getItem("leads"))

if(leadsFromLocalStorage) {
  leads = leadsFromLocalStorage
  renderLeads(leads)
}

inputBtn.addEventListener("click", function() {
  if(inputEl.value.length > 0) {
    saveLead(inputEl.value)
    inputEl.value = ""
  }
  renderLeads(leads)
})

tabBtn.addEventListener("click", function() {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    saveLead(tabs[0].url);
    renderLeads(leads);
  })
})

deleteBtn.addEventListener("click", function() {
  if(confirm("Delete all leads?")) {
    localStorage.clear();
    leads = []
  }
  renderLeads(leads);
})

function renderLeads(leads) {
  let listItems = ""
  for (let i = 0; i < leads.length; i++) {
    listItems += `
                <li>
                  <a target='_blank' href='${leads[i]}'>
                    ${leads[i]}
                  </a>
                </li>`
  }

  leadsEl.innerHTML = listItems
}

function saveLead(lead) {
  leads.push(lead)
  localStorage.setItem('leads', JSON.stringify(leads))
}
