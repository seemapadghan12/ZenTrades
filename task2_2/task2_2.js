const jsonDataUrl = "https://s3.amazonaws.com/open-to-cors/assignment.json";

async function fetchData() {
    try {
        const response = await fetch(jsonDataUrl);
        const data = await response.json();
        return data.products;
    } catch (error) {
        console.error("Error fetching data:", error);
        return [];
    }
}

function displayData(selectedOptions, data) {
    const productDisplay = document.getElementById('product-display');
    
    // Clear previous data
    productDisplay.innerHTML = '';

    // Create a table and display the data
    const table = document.createElement('table');
    const headerRow = table.insertRow(0);

    selectedOptions.forEach(option => {
        const th = document.createElement('th');
        th.textContent = option;
        headerRow.appendChild(th);
    });

    data.forEach(item => {
        const row = table.insertRow();
        selectedOptions.forEach(option => {
            const cell = row.insertCell();
            cell.textContent = item[option];
        });
    });

    productDisplay.appendChild(table);
}

function moveSelectedOptions(sourceId, targetId, isSelected) {
    const sourceSelect = document.getElementById(sourceId);
    const targetSelect = document.getElementById(targetId);

    Array.from(sourceSelect.options).forEach(option => {
        if (option.selected === isSelected) {
            targetSelect.appendChild(option.cloneNode(true));
            option.remove();
        }
    });
}

document.addEventListener('DOMContentLoaded', async () => {
    const data = await fetchData();
    const displayOptions = document.getElementById('displayOptions');

    displayData(Array.from(displayOptions.selectedOptions, option => option.value), data);

    displayOptions.addEventListener('change', () => {
        displayData(Array.from(displayOptions.selectedOptions, option => option.value), data);
    });
});
