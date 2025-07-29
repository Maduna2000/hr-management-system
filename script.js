// Mock data for Eswatini employees
const employees = [
    {
        id: 1,
        name: "Nomsa Dlamini",
        position: "HR Manager",
        department: "Administration",
        salary: 18500,
        location: "Mbabane",
        status: "active",
        email: "nomsa.dlamini@company.sz"
    },
    {
        id: 2,
        name: "Sipho Nkambule",
        position: "Finance Director",
        department: "Finance",
        salary: 25000,
        location: "Mbabane",
        status: "active",
        email: "sipho.nkambule@company.sz"
    },
    {
        id: 3,
        name: "Thandi Mthembu",
        position: "Operations Manager",
        department: "Operations",
        salary: 16800,
        location: "Manzini",
        status: "active",
        email: "thandi.mthembu@company.sz"
    },
    {
        id: 4,
        name: "Mandla Zwane",
        position: "Sales Representative",
        department: "Sales",
        salary: 12500,
        location: "Manzini",
        status: "active",
        email: "mandla.zwane@company.sz"
    },
    {
        id: 5,
        name: "Busisiwe Mabuza",
        position: "Accountant",
        department: "Finance",
        salary: 14200,
        location: "Mbabane",
        status: "active",
        email: "busisiwe.mabuza@company.sz"
    },
    {
        id: 6,
        name: "Themba Shongwe",
        position: "IT Specialist",
        department: "Administration",
        salary: 15600,
        location: "Lobamba",
        status: "active",
        email: "themba.shongwe@company.sz"
    },
    {
        id: 7,
        name: "Nokuthula Fakudze",
        position: "Marketing Coordinator",
        department: "Sales",
        salary: 11800,
        location: "Siteki",
        status: "leave",
        email: "nokuthula.fakudze@company.sz"
    },
    {
        id: 8,
        name: "Sabelo Masuku",
        position: "Operations Assistant",
        department: "Operations",
        salary: 9500,
        location: "Manzini",
        status: "active",
        email: "sabelo.masuku@company.sz"
    },
    {
        id: 9,
        name: "Lindiwe Motsa",
        position: "Administrative Assistant",
        department: "Administration",
        salary: 8200,
        location: "Piggs Peak",
        status: "active",
        email: "lindiwe.motsa@company.sz"
    },
    {
        id: 10,
        name: "Mduduzi Simelane",
        position: "Security Officer",
        department: "Operations",
        salary: 7500,
        location: "Mbabane",
        status: "active",
        email: "mduduzi.simelane@company.sz"
    },
    {
        id: 11,
        name: "Gcina Hlophe",
        position: "Driver",
        department: "Operations",
        salary: 6800,
        location: "Manzini",
        status: "active",
        email: "gcina.hlophe@company.sz"
    },
    {
        id: 12,
        name: "Zanele Kunene",
        position: "Receptionist",
        department: "Administration",
        salary: 7200,
        location: "Mbabane",
        status: "inactive",
        email: "zanele.kunene@company.sz"
    }
];

// Tax calculation functions
function calculatePAYE(grossSalary) {
    const taxFreeThreshold = 3500;
    const payeRate = 0.15;
    
    if (grossSalary <= taxFreeThreshold) {
        return 0;
    }
    
    return (grossSalary - taxFreeThreshold) * payeRate;
}

function calculatePension(grossSalary) {
    const pensionRate = 0.05;
    return grossSalary * pensionRate;
}

function calculateNetPay(grossSalary) {
    const paye = calculatePAYE(grossSalary);
    const pension = calculatePension(grossSalary);
    const otherDeductions = grossSalary * 0.02; // 2% for other deductions
    
    return grossSalary - paye - pension - otherDeductions;
}

// Format currency in SZL
function formatCurrency(amount) {
    return new Intl.NumberFormat('en-SZ', {
        style: 'currency',
        currency: 'SZL',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(amount).replace('SZL', 'SZL');
}

// Navigation functionality
function initializeNavigation() {
    const navItems = document.querySelectorAll('.nav-item');
    const sections = document.querySelectorAll('.content-section');
    const pageTitle = document.querySelector('.page-title');

    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Remove active class from all nav items and sections
            navItems.forEach(nav => nav.classList.remove('active'));
            sections.forEach(section => section.classList.remove('active'));
            
            // Add active class to clicked nav item
            item.classList.add('active');
            
            // Show corresponding section
            const sectionId = item.getAttribute('data-section');
            const targetSection = document.getElementById(sectionId);
            if (targetSection) {
                targetSection.classList.add('active');
                
                // Update page title
                const sectionName = item.querySelector('span').textContent;
                pageTitle.textContent = sectionName;
            }
        });
    });
}

// Dropdown functionality
function toggleDropdown(dropdownId) {
    const dropdown = document.getElementById(dropdownId);
    if (dropdown) {
        dropdown.classList.toggle('active');
    }
}

// Mobile menu toggle
function initializeMobileMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const sidebar = document.querySelector('.sidebar');
    
    if (menuToggle && sidebar) {
        menuToggle.addEventListener('click', () => {
            sidebar.classList.toggle('open');
        });
        
        // Close sidebar when clicking outside
        document.addEventListener('click', (e) => {
            if (!sidebar.contains(e.target) && !menuToggle.contains(e.target)) {
                sidebar.classList.remove('open');
            }
        });
    }
}

// Populate employees table
function populateEmployeesTable() {
    const tableBody = document.getElementById('employees-table');
    if (!tableBody) return;

    tableBody.innerHTML = employees.map(employee => {
        const initials = employee.name.split(' ').map(n => n[0]).join('');
        const statusClass = `status-${employee.status}`;
        
        return `
            <tr>
                <td>
                    <div class="employee-info">
                        <div class="employee-avatar">${initials}</div>
                        <div class="employee-details">
                            <h4>${employee.name}</h4>
                            <p>${employee.email}</p>
                        </div>
                    </div>
                </td>
                <td>${employee.department}</td>
                <td>${employee.position}</td>
                <td class="currency">${formatCurrency(employee.salary)}</td>
                <td>${employee.location}</td>
                <td>
                    <span class="status-badge ${statusClass}">
                        ${employee.status.charAt(0).toUpperCase() + employee.status.slice(1)}
                    </span>
                </td>
                <td>
                    <button class="action-btn" title="Edit">
                        <i class="fas fa-edit"></i>
                    </button>
                    <button class="action-btn" title="View">
                        <i class="fas fa-eye"></i>
                    </button>
                </td>
            </tr>
        `;
    }).join('');
}

// Populate payroll table
function populatePayrollTable() {
    const tableBody = document.getElementById('payroll-table');
    if (!tableBody) return;

    tableBody.innerHTML = employees.map(employee => {
        const grossPay = employee.salary;
        const paye = calculatePAYE(grossPay);
        const pension = calculatePension(grossPay);
        const otherDeductions = grossPay * 0.02;
        const netPay = calculateNetPay(grossPay);
        const status = employee.status === 'active' ? 'processed' : 'pending';
        
        return `
            <tr>
                <td>
                    <div class="employee-info">
                        <div class="employee-avatar">${employee.name.split(' ').map(n => n[0]).join('')}</div>
                        <div class="employee-details">
                            <h4>${employee.name}</h4>
                            <p>${employee.position}</p>
                        </div>
                    </div>
                </td>
                <td class="currency">${formatCurrency(grossPay)}</td>
                <td class="currency">${formatCurrency(paye)}</td>
                <td class="currency">${formatCurrency(pension)}</td>
                <td class="currency">${formatCurrency(otherDeductions)}</td>
                <td class="currency">${formatCurrency(netPay)}</td>
                <td>
                    <span class="status-badge status-${status}">
                        ${status.charAt(0).toUpperCase() + status.slice(1)}
                    </span>
                </td>
            </tr>
        `;
    }).join('');
}

// Update dashboard stats
function updateDashboardStats() {
    const totalEmployees = employees.length;
    const activeEmployees = employees.filter(emp => emp.status === 'active').length;
    const totalPayroll = employees.reduce((sum, emp) => sum + calculateNetPay(emp.salary), 0);
    
    // Update the stats in the dashboard
    const statNumbers = document.querySelectorAll('.stat-number');
    if (statNumbers.length >= 2) {
        statNumbers[0].textContent = totalEmployees;
        statNumbers[1].textContent = formatCurrency(totalPayroll);
    }
}

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    initializeMobileMenu();
    populateEmployeesTable();
    populatePayrollTable();
    updateDashboardStats();
    
    // Make toggleDropdown function globally available
    window.toggleDropdown = toggleDropdown;
    
    // Add some interactive features
    document.addEventListener('click', function(e) {
        // Close dropdowns when clicking outside
        if (!e.target.closest('.dropdown-panel') && !e.target.closest('[onclick*="toggleDropdown"]')) {
            document.querySelectorAll('.dropdown-panel.active').forEach(panel => {
                panel.classList.remove('active');
            });
        }
    });
    
    // Add loading states for buttons
    document.querySelectorAll('.btn-primary, .btn-secondary').forEach(button => {
        button.addEventListener('click', function(e) {
            if (this.textContent.includes('Process') || this.textContent.includes('Generate') || this.textContent.includes('Export')) {
                const originalText = this.innerHTML;
                this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Processing...';
                this.disabled = true;
                
                setTimeout(() => {
                    this.innerHTML = originalText;
                    this.disabled = false;
                }, 2000);
            }
        });
    });
});

// Additional utility functions
function searchEmployees(query) {
    const filteredEmployees = employees.filter(emp => 
        emp.name.toLowerCase().includes(query.toLowerCase()) ||
        emp.position.toLowerCase().includes(query.toLowerCase()) ||
        emp.department.toLowerCase().includes(query.toLowerCase())
    );
    
    // Update table with filtered results
    // This would be implemented based on the search functionality
}

function exportReport(type, format) {
    // Simulate report generation
    console.log(`Generating ${type} report in ${format} format...`);
    
    // In a real application, this would generate and download the actual report
    setTimeout(() => {
        alert(`${type} report has been generated and downloaded as ${format} file.`);
    }, 1500);
}

// Expose functions globally for HTML onclick handlers
window.searchEmployees = searchEmployees;
window.exportReport = exportReport;