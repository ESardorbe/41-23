const searchInput = document.getElementById('search');
const studentList = document.getElementById('student-list');

searchInput.addEventListener('input', function() {
    const filter = searchInput.value.toLowerCase();
    const students = studentList.getElementsByTagName('li');

    for (let i = 0; i < students.length; i++) {
        const student = students[i];
        if (student.textContent.toLowerCase().includes(filter)) {
            student.style.display = '';
        } else {
            student.style.display = 'none';
        }
    }
});
