/* ============================================
   ДАННЫЕ ПРОЕКТА И ОТРЯДА
   ============================================ */

const squadData = {
    name: 'Стражи Вечности',
    level: 'S-Rank',
    members: 12,
    rating: 95,
    description: 'Элитный отряд, специализирующийся на опасных миссиях. Состоит из самых опытных и преданных воинов проекта. Известны своей дисциплиной, мастерством и преданностью идеалам Eternal Paradise.',
    contact: {
        discord: 'discord.gg/eternalparadise',
        telegram: '@EternalParadiseSquad',
        email: 'squad@eternalparadise.com'
    }
};

// Примеры участников отряда
const members = [
    {
        name: 'Альфа',
        role: 'Командир отряда',
        emoji: '👑'
    },
    {
        name: 'Берта',
        role: '副командир',
        emoji: '⚔️'
    },
    {
        name: 'Виктор',
        role: 'Разведчик',
        emoji: '🗡️'
    },
    {
        name: 'Грейс',
        role: 'Маг',
        emoji: '✨'
    },
    {
        name: 'Дельта',
        role: 'Защитник',
        emoji: '🛡️'
    },
    {
        name: 'Ева',
        role: 'Целитель',
        emoji: '💚'
    },
    {
        name: 'Феникс',
        role: 'Тактик',
        emoji: '🔥'
    },
    {
        name: 'Гарна',
        role: 'Воин',
        emoji: '💪'
    }
];

/* ============================================
   ИНИЦИАЛИЗАЦИЯ
   ============================================ */

document.addEventListener('DOMContentLoaded', function() {
    loadSquadData();
    loadMembers();
    setupEventListeners();
});

/* ============================================
   ЗАГРУЗКА ДАННЫХ ОТРЯДА
   ============================================ */

function loadSquadData() {
    document.getElementById('squadName').textContent = squadData.name;
    document.getElementById('squadLevel').textContent = squadData.level;
    document.getElementById('squadSize').textContent = squadData.members;
    document.getElementById('squadRating').textContent = squadData.rating + ' / 100';
    document.getElementById('squadDesc').textContent = squadData.description;
    
    // Загрузка контактов
    document.getElementById('discordContact').textContent = squadData.contact.discord;
    document.getElementById('telegramContact').textContent = squadData.contact.telegram;
    document.getElementById('emailContact').textContent = squadData.contact.email;
}

/* ============================================
   ЗАГРУЗКА УЧАСТНИКОВ
   ============================================ */

function loadMembers() {
    const membersGrid = document.getElementById('membersGrid');
    membersGrid.innerHTML = '';
    
    members.forEach(member => {
        const memberCard = createMemberCard(member);
        membersGrid.appendChild(memberCard);
    });
}

function createMemberCard(member) {
    const card = document.createElement('div');
    card.className = 'member-card';
    card.innerHTML = `
        <div class="member-avatar">${member.emoji}</div>
        <div class="member-content">
            <div class="member-name">${member.name}</div>
            <div class="member-role">${member.role}</div>
            <div class="member-description">
                Опытный боец отряда, специализирующийся на своем направлении. 
                Полностью посвящен целям Eternal Paradise.
            </div>
        </div>
    `;
    return card;
}

/* ============================================
   НАВИГАЦИЯ И СОБЫТИЯ
   ============================================ */

function setupEventListeners() {
    // Мобильное меню
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }
    
    // Закрытие меню при клике на ссылку
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
    
    // Форма контактов
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', handleFormSubmit);
    }
}

function handleFormSubmit(e) {
    e.preventDefault();
    
    const name = e.target[0].value;
    const email = e.target[1].value;
    const message = e.target[2].value;
    
    // Имитация отправки
    console.log('Сообщение отправлено:', { name, email, message });
    
    // Показываем уведомление
    showNotification('Спасибо! Ваше сообщение отправлено.');
    
    // Очищаем форму
    e.target.reset();
}

/* ============================================
   ВСПОМОГАТЕЛЬНЫЕ ФУНКЦИИ
   ============================================ */

function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

function showNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background-color: #00b894;
        color: white;
        padding: 15px 25px;
        border-radius: 4px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        z-index: 1000;
        animation: slideInRight 0.3s ease;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideInLeft 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

/* ============================================
   ДОПОЛНИТЕЛЬНЫЕ ФУНКЦИИ ДЛЯ РЕДАКТИРОВАНИЯ
   ============================================ */

// Функция для обновления информации об отряде
function updateSquadData(newData) {
    Object.assign(squadData, newData);
    loadSquadData();
}

// Функция для добавления нового участника
function addMember(member) {
    members.push(member);
    loadMembers();
}

// Функция для удаления участника
function removeMember(memberName) {
    const index = members.findIndex(m => m.name === memberName);
    if (index > -1) {
        members.splice(index, 1);
        loadMembers();
    }
}

// Функция для обновления контактов
function updateContacts(newContacts) {
    Object.assign(squadData.contact, newContacts);
    loadSquadData();
}

/* ============================================
   ПРИМЕРЫ ИСПОЛЬЗОВАНИЯ (раскомментируйте для тестирования):

   updateSquadData({
       name: 'Новое имя отряда',
       level: 'A-Rank',
       rating: 85
   });

   addMember({
       name: 'Новый участник',
       role: 'Новая роль',
       emoji: '🌟'
   });

   removeMember('Альфа');

   updateContacts({
       discord: 'new.discord.link',
       telegram: '@NewTelegram'
   });
   
   ============================================ */
