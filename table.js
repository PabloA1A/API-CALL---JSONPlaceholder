async function fetchData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        const tableBody = document.querySelector('#usersTable tbody')

        data.forEach(user => {
            const row = document.createElement('tr')
            row.innerHTML = `
                <td>${user.id}</td>
                <td>${user.name}</td>
                <td>${user.address.city}</td>
            `
            tableBody.appendChild(row)
        })
    } catch (error) {
        console.error('Problem operation API:', error)
    }
}

fetchData()