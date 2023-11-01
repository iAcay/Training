let leads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const leadsEl = document.getElementById("leads-el")

inputBtn.addEventListener("click", function() {
  leads.push(inputEl.value)
  inputEl.value = ""
  renderLeads()
})

function renderLeads() {
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
