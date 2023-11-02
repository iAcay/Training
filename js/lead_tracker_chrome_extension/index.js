let leads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const deleteBtn = document.getElementById("delete-btn")
const leadsEl = document.getElementById("leads-el")

const leadsFromLocalStorage = JSON.parse(localStorage.getItem("leads"))

if(leadsFromLocalStorage) {
  leads = leadsFromLocalStorage
  renderLeads(leads)
}

inputBtn.addEventListener("click", function() {
  if(inputEl.value.length > 0) {
    leads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem('leads', JSON.stringify(leads))
  }
  renderLeads(leads)
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
