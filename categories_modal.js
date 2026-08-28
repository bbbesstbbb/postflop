const PRESET_CATEGORIES = [
    '\u041C\u0443\u0441\u043E\u0440',
    'TX5',
    'TX4',
    'TX3',
    'TX2',
    'TX1',
    'TX1-2',
    'TX1-3',
    '\u0413\u0430\u0442\u0448\u043E\u0442',
    '\u0413\u0430\u0442\u0448\u043E\u0442 TX5',
    '\u0413\u0430\u0442\u0448\u043E\u0442 TX4',
    '\u0413\u0430\u0442\u0448\u043E\u0442 TX3',
    '\u0413\u0430\u0442\u0448\u043E\u0442 TX2',
    '\u0413\u0430\u0442\u0448\u043E\u0442 TX1',
    '\u0414\u0440\u043E',
    '\u0414\u0440\u043E TX5',
    '\u0414\u0440\u043E TX4',
    '\u0414\u0440\u043E TX3',
    '\u0414\u0440\u043E TX2',
    '\u0414\u0440\u043E TX1',
    '\u0410\u043d\u0434\u0435\u0440 \u043a \u041b\u041a',
    '\u0410\u043d\u0434\u0435\u0440 \u043a \u041b\u041a \u0442\u043e\u043f7',
    '\u0410\u043d\u0434\u0435\u0440 \u043a \u041b\u041a \u0442\u043e\u043f6',
    '\u0410\u043d\u0434\u0435\u0440 \u043a \u041b\u041a \u0442\u043e\u043f5',
    '\u0410\u043d\u0434\u0435\u0440 \u043a \u041b\u041a \u0442\u043e\u043f4',
    '\u0410\u043d\u0434\u0435\u0440 \u043a \u041b\u041a \u0442\u043e\u043f3',
    '\u0410\u043d\u0434\u0435\u0440 \u043a \u041b\u041a \u0442\u043e\u043f2',
    '\u0410\u043d\u0434\u0435\u0440 \u043a \u041b\u041a \u0442\u043e\u043f1',
    '\u0410\u043d\u0434\u0435\u0440 \u043a \u041b\u041a \u0442\u043e\u043f1-4',
    '\u0410\u043d\u0434\u0435\u0440 66-',
    '\u041B\u043E\u0443',
    '\u041B\u043E\u0443 \u0442\u043E\u043F5',
    '\u041B\u043E\u0443 \u0442\u043E\u043F4',
    '\u041B\u043E\u0443 \u0442\u043E\u043F3',
    '\u041B\u043E\u0443 \u0442\u043E\u043F2',
    '\u041B\u043E\u0443 \u0442\u043E\u043F1',
    '\u041B\u043E\u0443 \u0442\u043E\u043F1-3',
    '\u0410\u043d\u0434\u0435\u0440 \u043a 3\u041a',
    '\u0410\u043d\u0434\u0435\u0440 \u043a 3\u041a \u0442\u043e\u043f7',
    '\u0410\u043d\u0434\u0435\u0440 \u043a 3\u041a \u0442\u043e\u043f6',
    '\u0410\u043d\u0434\u0435\u0440 \u043a 3\u041a \u0442\u043e\u043f5',
    '\u0410\u043d\u0434\u0435\u0440 \u043a 3\u041a \u0442\u043e\u043f4',
    '\u0410\u043d\u0434\u0435\u0440 \u043a 3\u041a \u0442\u043e\u043f3',
    '\u0410\u043d\u0434\u0435\u0440 \u043a 3\u041a \u0442\u043e\u043f2',
    '\u0410\u043d\u0434\u0435\u0440 \u043a 3\u041a \u0442\u043e\u043f1',
    '\u0410\u043d\u0434\u0435\u0440 \u043a 3\u041a \u0442\u043e\u043f1-4',
    '\u0410\u043d\u0434\u0435\u0440 \u043a \u041c\u041a',
    '\u0410\u043d\u0434\u0435\u0440 \u043a \u041c\u041a \u0442\u043e\u043f7',
    '\u0410\u043d\u0434\u0435\u0440 \u043a \u041c\u041a \u0442\u043e\u043f6',
    '\u0410\u043d\u0434\u0435\u0440 \u043a \u041c\u041a \u0442\u043e\u043f5',
    '\u0410\u043d\u0434\u0435\u0440 \u043a \u041c\u041a \u0442\u043e\u043f4',
    '\u0410\u043d\u0434\u0435\u0440 \u043a \u041c\u041a \u0442\u043e\u043f3',
    '\u0410\u043d\u0434\u0435\u0440 \u043a \u041c\u041a \u0442\u043e\u043f2',
    '\u0410\u043d\u0434\u0435\u0440 \u043a \u041c\u041a \u0442\u043e\u043f1',
    '\u0410\u043d\u0434\u0435\u0440 \u043a \u041c\u041a \u0442\u043e\u043f1-4',
    '\u0410\u043d\u0434\u0435\u0440 77+',
    '\u041C\u0438\u0434\u043B',
    '\u041C\u0438\u0434\u043B \u0442\u043E\u043F6',
    '\u041C\u0438\u0434\u043B \u0442\u043E\u043F5',
    '\u041C\u0438\u0434\u043B \u0442\u043E\u043F4',
    '\u041C\u0438\u0434\u043B \u0442\u043E\u043F3',
    '\u041C\u0438\u0434\u043B \u0442\u043E\u043F2',
    '\u041C\u0438\u0434\u043B \u0442\u043E\u043F1',
    '\u041C\u0438\u0434\u043B \u0442\u043E\u043F1-4',
    '\u0410\u043d\u0434\u0435\u0440 \u043a \u0422\u041a',
    '\u0410\u043d\u0434\u0435\u0440 \u043a \u0422\u041a \u0442\u043e\u043f7',
    '\u0410\u043d\u0434\u0435\u0440 \u043a \u0422\u041a \u0442\u043e\u043f6',
    '\u0410\u043d\u0434\u0435\u0440 \u043a \u0422\u041a \u0442\u043e\u043f5',
    '\u0410\u043d\u0434\u0435\u0440 \u043a \u0422\u041a \u0442\u043e\u043f4',
    '\u0410\u043d\u0434\u0435\u0440 \u043a \u0422\u041a \u0442\u043e\u043f3',
    '\u0410\u043d\u0434\u0435\u0440 \u043a \u0422\u041a \u0442\u043e\u043f2',
    '\u0410\u043d\u0434\u0435\u0440 \u043a \u0422\u041a \u0442\u043e\u043f1',
    '\u0410\u043d\u0434\u0435\u0440 \u043a \u0422\u041a \u0442\u043e\u043f1-4',
    '\u0422\u043E\u043F',
    '\u0422\u041F \u0442\u043E\u043F6',
    '\u0422\u041F \u0442\u043E\u043F5',
    '\u0422\u041F \u0442\u043E\u043F4',
    '\u0422\u041F \u0442\u043E\u043F3',
    '\u0422\u041F \u0442\u043E\u043F2',
    '\u0422\u041F \u0442\u043E\u043F1',
    '\u0422\u041F \u0442\u043E\u043F1-4',
    '\u0422\u041F \u0442\u043E\u043F1-5',
    '\u041E\u0432\u0435\u0440',
    '\u041E\u0432\u0435\u0440 \u0442\u043E\u043F5',
    '\u041E\u0432\u0435\u0440 \u0442\u043E\u043F4',
    '\u041E\u0432\u0435\u0440 \u0442\u043E\u043F3',
    '\u041E\u0432\u0435\u0440 \u0442\u043E\u043F2',
    '\u041E\u0432\u0435\u0440 \u0442\u043E\u043F1',
    '\u041E\u0432\u0435\u0440 \u0442\u043E\u043F1-2',
    '\u0414\u0432\u0435 \u043f\u0430\u0440\u044b',
    '\u0422\u0440\u043e\u0439\u043a\u0430',
    '\u0421\u0442\u0440\u0438\u0442',
    '\u0424\u043b\u0435\u0448',
    '\u0424\u0443\u043b\u043b-\u0425\u0430\u0443\u0441+'
];

function getCategoryWeight(cat) {
    const idx = PRESET_CATEGORIES.indexOf(cat);
    if (idx !== -1) {
        return idx * 100;
    }
    
    for (let i = 0; i < PRESET_CATEGORIES.length; i++) {
        const p = PRESET_CATEGORIES[i];
        if (cat.startsWith(p)) {
            return (i * 100) + 50; 
        }
    }
    
    return 999999;
}

function ensureModalExists() {
    let modal = document.getElementById('categoriesModal');
    if (modal) return modal;

    modal = document.createElement('div');
    modal.id = 'categoriesModal';
    modal.style.cssText = 'display:none; position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.6); z-index:99999; justify-content:center; align-items:center; font-family:sans-serif;';
    
    let cbHtml = '';
    PRESET_CATEGORIES.forEach(cat => {
        cbHtml += `<label style="display:flex; align-items:center; width:31%; margin-bottom:8px; font-size:13px; cursor:pointer; background:#f8f9fa; padding:4px; border-radius:4px;"><input type="checkbox" class="cat-cb" value="${cat}" style="margin-right:6px;"> ${cat}</label>`;
    });

    modal.innerHTML = `
        <div style="background:white; padding:25px; border-radius:8px; max-width:900px; width:95%; max-height:90vh; overflow-y:auto; box-shadow: 0 10px 30px rgba(0,0,0,0.3);">
            <h2 style="margin-top:0; color:#2c3e50; font-size:22px;">Настройка категорий рук</h2>
            <p style="color:#7f8c8d; font-size:14px; margin-bottom:20px;">Отметьте нужные категории. Они будут автоматически отсортированы (от слабой к сильной).</p>
            
            <div style="display:flex; flex-wrap:wrap; gap:2%;">
                ${cbHtml}
            </div>
            
            <div style="margin-top: 20px;">
                <label style="display:block; font-weight:bold; margin-bottom:8px; color:#34495e;">Свои категории (дополнительные, через запятую):</label>
                <input type="text" id="customCategoriesList" style="width: 100%; padding: 10px; border:1px solid #bdc3c7; border-radius:4px; font-size:14px; box-sizing:border-box;" placeholder="Например: Супер Натс, Мега Дро">
            </div>
            
            <div style="margin-top:25px; display:flex; justify-content:flex-end; gap:12px;">
                <button onclick="closeCategoriesModal()" style="padding:10px 20px; border:none; background:#ecf0f1; color:#34495e; border-radius:4px; cursor:pointer; font-weight:bold; font-size:14px; transition:0.2s;">Отмена</button>
                <button onclick="applyCategories()" style="padding:10px 20px; border:none; background:#9b59b6; color:white; border-radius:4px; cursor:pointer; font-weight:bold; font-size:14px; transition:0.2s;">Применить</button>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    return modal;
}

function openCategoriesModal() {
    const modal = ensureModalExists();
    
    const checkboxes = modal.querySelectorAll('.cat-cb');
    checkboxes.forEach(cb => {
        cb.checked = (typeof HAND_CATEGORIES !== 'undefined') && HAND_CATEGORIES.includes(cb.value);
    });
    
    modal.style.display = 'flex';
}

function closeCategoriesModal() {
    const modal = document.getElementById('categoriesModal');
    if (modal) modal.style.display = 'none';
}

function applyCategories() {
    const modal = document.getElementById('categoriesModal');
    if (!modal) return;
    
    const checkboxes = modal.querySelectorAll('.cat-cb');
    const newCategories = [];
    
    checkboxes.forEach(cb => {
        if (cb.checked) {
            newCategories.push(cb.value);
        }
    });
    
    const customInput = modal.querySelector('#customCategoriesList');
    if (customInput && customInput.value.trim() !== '') {
        const customArr = customInput.value.split(',').map(s => s.trim()).filter(s => s);
        newCategories.push(...customArr);
        customInput.value = ''; 
    }
    
    newCategories.sort((a, b) => {
        return getCategoryWeight(a) - getCategoryWeight(b);
    });
    
    let uniqueCategories = [...new Set(newCategories)];
    
    if (typeof HAND_CATEGORIES !== 'undefined') {
        HAND_CATEGORIES.length = 0;
        HAND_CATEGORIES.push(...uniqueCategories);
    }
    
    if (typeof config !== 'undefined' && config.selectedCategories) {
        config.selectedCategories = [...uniqueCategories];
        saveConfig();
        renderCategories(); 
    }
    
    // Do NOT overwrite groups! Just render the table with the new categories.
    if (typeof renderTable === 'function') {
        renderTable();
    }
    if (typeof renderTables === 'function') {
        renderTables();
    }

    if (typeof saveActionsToStorage === 'function') {
        saveActionsToStorage();
    }
    
    closeCategoriesModal();
}

if (typeof window !== 'undefined') {
    window.openCategoriesModal = openCategoriesModal;
    window.closeCategoriesModal = closeCategoriesModal;
    window.applyCategories = applyCategories;
}