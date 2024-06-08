var siteName = document.getElementById("name")
var siteURL = document.getElementById("url")
var sitesTable = document.querySelector("table")
var site = [];
if(localStorage.getItem("site") != null) {
  site = JSON.parse(localStorage.getItem("site"))
  displayRow(site);
}



function addSite() {
  var siteData = {
    name: siteName.value,
    url: siteURL.value
  }

  if(  siteName.value != "" || siteURL.value != "") {
    site.push(siteData)
    displayRow(site)
    clear()
  }
  else {
    window.prompt("Kindly fill the form out")
  }
}

function displayRow(list) {
  var tableRow = `        
  <tr class="text-center fw-bold border-bottom">
  <td class="py-2">Index</td>
  <td>Website Name</td>
  <td>Visit</td>
  <td>Delete</td>
</tr>`
  for(var i=0; i<list.length; i++){
    tableRow+= (` 
    <tr class="text-center border-bottom">
    <td class="py-3">${i+1}</td>
    <td>${list[i].name}</td>
    <td>
      <a class="btn btn-visit rounded-2 py-1 px-3" href="${list[i].url}" target="_blank"><i class="fa-regular fa-eye me-1"></i>  Visit</a>
    </td>
    <td>
      <button onclick="deleteSite(${i})" class="btn btn-danger rounded-2 py-1 px-3"><i class="fa-solid fa-trash-can me-1"></i>  Delet</button>
    </td>
    </tr>`)
  }
  sitesTable.innerHTML = tableRow;

  localStorage.setItem("site", JSON.stringify(site));

}

function clear() {
  siteName.value = null;
  siteURL.value = null
}

function deleteSite(index) {
  site.splice(index,1);
  localStorage.setItem("site", JSON.stringify(site));
  displayRow(site)
}