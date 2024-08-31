const form = document.getElementById('content-form');
const titleInput = document.getElementById('content-title');
const typeSelect = document.getElementById('content-type');
const contentList = document.getElementById('content-list');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    addContent(titleInput.value, typeSelect.value);
    titleInput.value = '';
    typeSelect.value = '';
});

function addContent(title, type) {
    const li = document.createElement('li');
    li.className = 'content-item';
    li.innerHTML = `
        <div class="content-info">
            <span class="content-type">${type}:</span> ${title}
        </div>
        <button class="delete-btn" onclick="deleteContent(this)">Delete</button>
    `;
    contentList.appendChild(li);
}

function deleteContent(btn) {
    btn.parentNode.remove();
}