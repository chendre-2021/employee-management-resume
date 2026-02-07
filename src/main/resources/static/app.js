const API_URL = "/app/api/employees"; // change if your mapping is different

function loadEmployees() {
    fetch(API_URL)
        .then(res => res.json())
        .then(data => {
            const table = document.getElementById("employeeTable");
            table.innerHTML = "";
            data.forEach(emp => {
                const row = document.createElement("tr");
                row.innerHTML = `
                    <td>${emp.id}</td>
                    <td>${emp.name}</td>
                    <td>${emp.department}</td>
                    <td><button onclick="deleteEmployee(${emp.id})">Delete</button></td>
                `;
                table.appendChild(row);
            });
        });
}

function addEmployee() {
    const name = document.getElementById("name").value;
    const department = document.getElementById("department").value;

    if (!name || !department) {
        alert("Please enter name and department");
        return;
    }

    const employee = { name, department };

    fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(employee)
    }).then(() => {
        loadEmployees();
        document.getElementById("name").value = "";
        document.getElementById("department").value = "";
    });
}

function deleteEmployee(id) {
    fetch(`${API_URL}/${id}`, { method: "DELETE" })
        .then(() => loadEmployees());
}

// Load employees when page opens
window.onload = loadEmployees;
