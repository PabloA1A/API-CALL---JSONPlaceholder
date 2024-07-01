async function fetchUser() {
    const userIdInput = document.getElementById('userId').value.trim()
    const resultDiv = document.getElementById('result')
    resultDiv.innerHTML = ''

    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userIdInput}`)
        const user = await response.json()

        const name = user.name
        const phone = user.phone

        const resultHTML = `
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Phone:</strong> ${phone}</p>
        `;
        resultDiv.innerHTML = resultHTML
    } catch (error) {
        console.error('Error fetching user:', error)
        resultDiv.innerHTML = `<p>Error fetching user.</p>`
    }
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('searchButton').addEventListener('click', fetchUser)
})