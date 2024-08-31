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
    let groupElement = document.getElementById(`${type.toLowerCase()}-group`);
    
    if (!groupElement) {
        groupElement = document.createElement('li');
        groupElement.id = `${type.toLowerCase()}-group`;
        groupElement.className = 'content-group';
        groupElement.innerHTML = `
            <h2>${type}s</h2>
            <ul class="group-list"></ul>
        `;
        contentList.appendChild(groupElement);
    }

    const groupList = groupElement.querySelector('.group-list');
    const li = document.createElement('li');
    li.className = 'content-item';
    li.innerHTML = `
        <div class="content-info">${title}</div>
        <button class="delete-btn" onclick="deleteContent(this)">Delete</button>
    `;
    groupList.appendChild(li);
}

function deleteContent(btn) {
    const item = btn.parentNode;
    const groupList = item.parentNode;
    item.remove();

    // Remove the group if it's empty
    if (groupList.children.length === 0) {
        groupList.parentNode.remove();
    }
}