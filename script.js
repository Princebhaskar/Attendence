// Select elements
const loginBtn = document.getElementById('login-btn');
const registerBtn = document.getElementById('register-btn');
const loginSection = document.getElementById('login-section');
const registerSection = document.getElementById('register-section');
const classesSection = document.getElementById('classes-section');
const attendanceSection = document.getElementById('attendance-section');
const loginForm = document.getElementById('login-form');
const registerForm = document.getElementById('register-form');
const attendancePercentage = document.getElementById('attendance-percentage');
const markAttendanceButton = document.getElementById('mark-attendance');

let loggedIn = false; // Track login status
let attendanceCount = 0;
let totalClasses = 5; // Example: Assume 5 classes in total

// Mock classes data
const classes = [
    { id: 1, name: "Advanced Combat Training", date: "2024-11-10" },
    { id: 2, name: "Strategic Planning", date: "2024-11-15" },
    { id: 3, name: "Leadership & Team Building", date: "2024-11-20" }
];

// Toggle Login Form
loginBtn.addEventListener('click', () => {
    loginSection.classList.toggle('hidden');
    registerSection.classList.add('hidden'); // Hide register form if visible
});

// Toggle Register Form
registerBtn.addEventListener('click', () => {
    registerSection.classList.toggle('hidden');
    loginSection.classList.add('hidden'); // Hide login form if visible
});

// Handle Login Form Submission
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === "tony" && password === "stark") {
        alert("Welcome, Tony Stark!");
        loggedIn = true;
        loginSection.classList.add('hidden');
        showTrainingSections();
        loadClasses();
    } else {
        alert("Invalid login credentials.");
    }
});

// Handle Register Form Submission
registerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const regUsername = document.getElementById('reg-username').value;
    const regPassword = document.getElementById('reg-password').value;

    alert("Registration successful. Please log in.");
    registerSection.classList.add('hidden');
});

// Show Training Sections After Login
function showTrainingSections() {
    if (loggedIn) {
        classesSection.classList.remove('hidden');
        attendanceSection.classList.remove('hidden');
    }
}

// Load Classes
function loadClasses() {
    const classesDiv = document.getElementById('classes');
    classesDiv.innerHTML = ''; // Clear previous entries
    classes.forEach(c => {
        const classDiv = document.createElement('div');
        classDiv.classList.add('class-item');
        classDiv.innerHTML = `<h3>${c.name}</h3><p>Date: ${c.date}</p>`;
        classesDiv.appendChild(classDiv);
    });
}

// Mark Attendance
markAttendanceButton.addEventListener('click', () => {
    if (!loggedIn) {
        alert("Please log in to mark attendance!");
        return;
    }

    attendanceCount++;
    updateAttendancePercentage();
});

// Update Attendance Percentage
function updateAttendancePercentage() {
    const percentage = (attendanceCount / totalClasses) * 100;
    attendancePercentage.textContent = `${Math.round(percentage)}%`;
}
