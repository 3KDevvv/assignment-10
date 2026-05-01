fetch('student.json')
.then(response => response.json())
.then(data => {
    const container = document.getElementById('student-container');

    data.forEach(student => {
        const studentDiv = document.createElement('div');

        studentDiv.innerHTML = `
            <h3>${student.name}</h3>
            <p>Major: ${student.major}</p>
            <p>Grade: ${student.grade}</p>
        `;

        container.appendChild(studentDiv);
    });
})
.catch(error => {
    console.error('Error loading JSON:', error);
})