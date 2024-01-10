document.addEventListener('DOMContentLoaded', async () => {
    const jsonDataUrl = 'https://s3.amazonaws.com/open-to-cors/assignment.json';

    try {
        const response = await fetch(jsonDataUrl);
        const { products } = await response.json();

        // Order products based on descending popularity
        const sortedProducts = products.sort((a, b) => b.Popularity - a.Popularity);

        const tableBody = document.getElementById('productBody');

        // Display product information in the table
        sortedProducts.forEach(product => {
            const row = tableBody.insertRow();
            const { Subcategory, Title, Price, Popularity } = product;

            const cell1 = row.insertCell(0);
            const cell2 = row.insertCell(1);
            const cell3 = row.insertCell(2);
            const cell4 = row.insertCell(3);

            cell1.textContent = Subcategory;
            cell2.textContent = Title;
            cell3.textContent = Price;
            cell4.textContent = Popularity;
        });
    } catch (error) {
        console.error('Error fetching or displaying data:', error);
    }
});
