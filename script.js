// To open and close the menu sidebar
const menuBtn = document.querySelector('.menu-btn');
const sidebar = document.querySelector('aside');

menuBtn.addEventListener('click', function() {
    sidebar.classList.toggle('open');
});

// Highlight active page on the sidebar
const currentPage = window.location.pathname.split('/').pop();
const navLinks = document.querySelectorAll('aside nav a');

navLinks.forEach(function (link) {
    console.log(link.getAttribute('href'));
    if (link.getAttribute('href') === currentPage) {
        link.classList.add('active');
    }

    link.addEventListener('click', function() {
        sidebar.classList.remove('open');
    });
});

//approve and reject button
const actionButtons = document.querySelectorAll('[data-action]');

actionButtons.forEach(function (button) {
    button.addEventListener('click', function () {
        const row = button.closest('tr');
        const badge = row.querySelector('.badge');
        const cell = button.closest('td');

        if (button.dataset.action === 'approve') {
            badge.textContent = 'Approved';
            badge.className = 'badge approved';
            cell.innerHTML = '<button class="btn btn-approved">View</button>';
        } else if (button.dataset.action === 'reject') {
            badge.textContent = 'Rejected';
            badge.className = 'badge rejected';
            cell.innerHTML = '';
        }
    });
});