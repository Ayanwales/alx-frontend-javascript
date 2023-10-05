const student1 = {
    firstName: "Zeliq",
    lastName: "Shannon",
    age: 40,
    location: "Nakuru"
};
const student2 = {
    firstName: "John",
    lastName: "Doe",
    age: 37,
    location: "Nairobi"
};
const studentsList = [student1, student2];
const table = document.createElement('table');
const tbody = document.createElement('tbody');
table.style.background = "pink";
table.appendChild(tbody);
studentsList.forEach(function (student) {
const row = document.createElement('tr');
    const nameCell = document.createElement('td');
    const locationCell = document.createElement('td');
    nameCell.textContent = student.firstName;
    locationCell.textContent = student.location;
    nameCell.style.border = "1px solid pink";
    locationCell.style.border = "1px solid pink";
    nameCell.style.padding = "5px";
    locationCell.style.padding = "5px";
    row.appendChild(nameCell);
    row.appendChild(locationCell);
    tbody.appendChild(row);
});
document.body.appendChild(table);