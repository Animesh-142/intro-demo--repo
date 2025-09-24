// Mental Health After-Care System JavaScript

// Global state
let currentRole = null;
let checklistData = [];

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    // Set today's date as default
    const today = new Date().toISOString().split('T')[0];
    const dateInput = document.getElementById('check-date');
    if (dateInput) {
        dateInput.value = today;
    }
    
    // Load existing data
    loadStoredData();
    
    // Show role selection by default
    showSection('role-selection');
});

// Role selection functionality
function selectRole(role) {
    currentRole = role;
    
    if (role === 'patient') {
        showPatientDashboard();
    } else if (role === 'family') {
        showFamilyDashboard();
    }
}

// Show specific section
function showSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.add('hidden');
    });
    
    // Show target section
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.remove('hidden');
    }
}

// Show patient dashboard
function showPatientDashboard() {
    showSection('patient-dashboard');
    displayPatientSummary();
}

// Show family dashboard
function showFamilyDashboard() {
    showSection('family-dashboard');
}

// Display patient progress summary
function displayPatientSummary() {
    const summaryDiv = document.getElementById('patient-summary');
    const recentData = getRecentChecklistData();
    
    if (recentData.length === 0) {
        summaryDiv.innerHTML = '<p>No recent care reports available. Please ask your family member to complete the daily checklist.</p>';
        return;
    }
    
    const latest = recentData[0];
    const weekData = recentData.slice(0, 7);
    
    let summaryHTML = `
        <div class="latest-report">
            <h4>Latest Report (${formatDate(latest.date)})</h4>
            <div class="summary-grid">
                <div class="summary-item">
                    <span class="summary-label">Sleep:</span>
                    <span class="summary-value ${getStatusClass(latest.sleep)}">${formatValue(latest.sleep)}</span>
                </div>
                <div class="summary-item">
                    <span class="summary-label">Outdoor Activity:</span>
                    <span class="summary-value ${latest.outdoor === 'yes' ? 'good' : 'concerning'}">${latest.outdoor === 'yes' ? 'Yes' : 'No'}</span>
                </div>
                <div class="summary-item">
                    <span class="summary-label">Medication:</span>
                    <span class="summary-value ${getMedicationClass(latest.medication)}">${formatMedication(latest.medication)}</span>
                </div>
                <div class="summary-item">
                    <span class="summary-label">Social Interaction:</span>
                    <span class="summary-value ${getStatusClass(latest.social)}">${formatValue(latest.social)}</span>
                </div>
                <div class="summary-item">
                    <span class="summary-label">Mood:</span>
                    <span class="summary-value ${getMoodClass(latest.mood)}">${formatMood(latest.mood)}</span>
                </div>
            </div>
        </div>
    `;
    
    if (weekData.length > 1) {
        summaryHTML += `
            <div class="week-summary">
                <h4>This Week's Progress</h4>
                <div class="progress-stats">
                    <div class="stat-item">
                        <span class="stat-label">Good Sleep Days:</span>
                        <span class="stat-value">${countGoodDays(weekData, 'sleep')} / ${weekData.length}</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-label">Outdoor Activity Days:</span>
                        <span class="stat-value">${countOutdoorDays(weekData)} / ${weekData.length}</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-label">Medication Compliance:</span>
                        <span class="stat-value">${countMedicationCompliance(weekData)} / ${weekData.length}</span>
                    </div>
                </div>
            </div>
        `;
    }
    
    summaryDiv.innerHTML = summaryHTML;
}

// Submit checklist form
function submitChecklist(event) {
    event.preventDefault();
    
    const form = document.getElementById('daily-checklist');
    const formData = new FormData(form);
    
    // Validate required fields
    const patientName = formData.get('patient-name');
    const checkDate = formData.get('check-date');
    const sleep = formData.get('sleep');
    const outdoor = formData.get('outdoor');
    const medication = formData.get('medication');
    const social = formData.get('social');
    const mood = formData.get('mood');
    
    if (!patientName || !checkDate || !sleep || !outdoor || !medication || !social || !mood) {
        alert('Please fill in all required fields.');
        return;
    }
    
    // Check if report for this date already exists
    if (checklistData.some(item => item.date === checkDate && item.patientName === patientName)) {
        if (!confirm('A report for this date already exists. Do you want to update it?')) {
            return;
        }
        // Remove existing report
        checklistData = checklistData.filter(item => !(item.date === checkDate && item.patientName === patientName));
    }
    
    // Create checklist entry
    const checklistEntry = {
        patientName: patientName,
        date: checkDate,
        sleep: sleep,
        outdoor: outdoor,
        medication: medication,
        social: social,
        mood: mood,
        notes: formData.get('additional-notes') || '',
        timestamp: new Date().toISOString()
    };
    
    // Add to data array
    checklistData.unshift(checklistEntry);
    
    // Store in localStorage
    saveDataToStorage();
    
    // Show success message
    showSection('success-message');
    
    // Reset form
    form.reset();
    
    // Reset date to today
    document.getElementById('check-date').value = new Date().toISOString().split('T')[0];
}

// View history
function viewHistory() {
    showSection('history-view');
    displayHistory();
}

// Display history
function displayHistory() {
    const historyDiv = document.getElementById('history-content');
    
    if (checklistData.length === 0) {
        historyDiv.innerHTML = '<p>No care reports available yet.</p>';
        return;
    }
    
    let historyHTML = '';
    
    checklistData.forEach(entry => {
        historyHTML += `
            <div class="history-item">
                <div class="history-date">${entry.patientName} - ${formatDate(entry.date)}</div>
                <div class="history-details">
                    <div class="history-param">
                        <span class="param-name">Sleep Quality:</span>
                        <span class="param-value ${getStatusClass(entry.sleep)}">${formatValue(entry.sleep)}</span>
                    </div>
                    <div class="history-param">
                        <span class="param-name">Outdoor Activity:</span>
                        <span class="param-value ${entry.outdoor === 'yes' ? 'good' : 'concerning'}">${entry.outdoor === 'yes' ? 'Yes' : 'No'}</span>
                    </div>
                    <div class="history-param">
                        <span class="param-name">Medication:</span>
                        <span class="param-value ${getMedicationClass(entry.medication)}">${formatMedication(entry.medication)}</span>
                    </div>
                    <div class="history-param">
                        <span class="param-name">Social Interaction:</span>
                        <span class="param-value ${getStatusClass(entry.social)}">${formatValue(entry.social)}</span>
                    </div>
                    <div class="history-param">
                        <span class="param-name">Mood:</span>
                        <span class="param-value ${getMoodClass(entry.mood)}">${formatMood(entry.mood)}</span>
                    </div>
                </div>
                ${entry.notes ? `<div class="history-notes"><strong>Notes:</strong> ${entry.notes}</div>` : ''}
            </div>
        `;
    });
    
    historyDiv.innerHTML = historyHTML;
}

// Go back to role selection
function goBack() {
    currentRole = null;
    showSection('role-selection');
}

// Storage functions
function saveDataToStorage() {
    localStorage.setItem('mentalHealthCareData', JSON.stringify(checklistData));
}

function loadStoredData() {
    const stored = localStorage.getItem('mentalHealthCareData');
    if (stored) {
        try {
            checklistData = JSON.parse(stored);
        } catch (e) {
            console.error('Error loading stored data:', e);
            checklistData = [];
        }
    }
}

// Helper functions
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
        weekday: 'short', 
        year: 'numeric', 
        month: 'short', 
        day: 'numeric' 
    });
}

function formatValue(value) {
    const valueMap = {
        'good': 'Good',
        'fair': 'Fair',
        'poor': 'Poor',
        'minimal': 'Minimal',
        'none': 'None'
    };
    return valueMap[value] || value;
}

function formatMedication(value) {
    const valueMap = {
        'taken': 'All Taken',
        'missed': 'Some Missed',
        'none': 'None Taken'
    };
    return valueMap[value] || value;
}

function formatMood(value) {
    const valueMap = {
        'positive': 'Positive/Stable',
        'neutral': 'Neutral',
        'concerning': 'Concerning/Low'
    };
    return valueMap[value] || value;
}

function getStatusClass(value) {
    if (value === 'good') return 'good';
    if (value === 'poor' || value === 'none') return 'concerning';
    return '';
}

function getMedicationClass(value) {
    if (value === 'taken') return 'good';
    if (value === 'none') return 'concerning';
    return '';
}

function getMoodClass(value) {
    if (value === 'positive') return 'good';
    if (value === 'concerning') return 'concerning';
    return '';
}

function getRecentChecklistData() {
    return checklistData.sort((a, b) => new Date(b.date) - new Date(a.date));
}

function countGoodDays(data, parameter) {
    return data.filter(item => item[parameter] === 'good').length;
}

function countOutdoorDays(data) {
    return data.filter(item => item.outdoor === 'yes').length;
}

function countMedicationCompliance(data) {
    return data.filter(item => item.medication === 'taken').length;
}