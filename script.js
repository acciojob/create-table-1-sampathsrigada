function insert_Row() {
    const table = document.getElementById("sampleTable");

    // Insert a new row at the top (index 0)
    const row = table.insertRow(0);

    // Insert two cells
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);

    // Set cell values
    cell1.innerHTML = "New Cell1";
    cell2.innerHTML = "New Cell2";
}