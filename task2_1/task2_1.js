function importData() {
    const input = document.getElementById('jsonFile');
    const productDisplay = document.getElementById('product-display');

    const file = input.files[0];
    if (!file) {
        alert('Please select a JSON file.');
        return;
    }

    const reader = new FileReader();
    reader.onload = function (e) {
        const jsonData = JSON.parse(e.target.result);

        // Assuming jsonData is an array of products with Subcategory, Title, Price, and Popularity

        // Clear previous data
        productDisplay.innerHTML = '';

        // Create a table and display the data
        const table = document.createElement('table');
        const headerRow = table.insertRow(0);
        const headers = ['Subcategory', 'Title', 'Price', 'Popularity'];

        headers.forEach(header => {
            const th = document.createElement('th');
            th.textContent = header;
            headerRow.appendChild(th);
        });

        jsonData.forEach(product => {
            const row = table.insertRow();
            Object.values(product).forEach(value => {
                const cell = row.insertCell();
                cell.textContent = value;
            });
        });

        productDisplay.appendChild(table);
    };

    reader.readAsText(file);
}
