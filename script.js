const quizData = [
    {
        question: "Какой модельер представил коллекцию «New Look», ставшую символом послевоенной моды 1947 года?",
        options: ["Кристиан Диор", "Коко Шанель", "Юбер Живанши", "Эльза Скиапарелли"],
        correct: 0,
        fact: "12 февраля 1947 года Кристиан Диор показал коллекцию Corolle. Коллекцию назвали New Look — «новый взгляд»."
    },
    {
        question: "В каком десятилетии мини-юбка стала массовым трендом и символом свободы?",
        options: ["1950-е", "1960-е", "1970-е", "1980-е"],
        correct: 1,
        fact: "Мини-юбка стала символом 1960-х и молодежной свободы."
    },
    {
        question: "Кто из дизайнеров ввел понятие «power dressing» для женщин в 1980-х?",
        options: ["Джорджио Армани", "Тьерри Мюглер", "Джанни Версаче", "Клод Монтана"],
        correct: 0,
        fact: "Армани сделал женский деловой костюм символом уверенности и статуса."
    },
    {
        question: "Какой стиль доминировал в моде 1990-х годов?",
        options: ["Гранж и минимализм", "Диско и глэм", "Хиппи-шик", "Космическая тема"],
        correct: 0,
        fact: "В 1990-х доминировали гранж и минимализм."
    },
    {
        question: "Когда Коко Шанель представила маленькое черное платье?",
        options: ["1910-е", "1920-е", "1930-е", "1950-е"],
        correct: 1,
        fact: "Маленькое черное платье стало известным после публикации в Vogue в 1926 году."
    },
    {
        question: "Какой предмет одежды Ив Сен-Лоран ввел в женскую моду в 1966 году?",
        options: ["Женский смокинг", "Мини-юбку", "Брючный костюм", "Платье-футляр"],
        correct: 0,
        fact: "Le Smoking стал одной из самых известных революций в женской моде."
    },
    {
        question: "Кто был креативным директором Gucci в 1990-х, вернувший бренду культовый статус?",
        options: ["Том Форд", "Алессандро Микеле", "Фрида Джаннини", "Марк Джейкобс"],
        correct: 0,
        fact: "Том Форд радикально обновил образ Gucci в 1990-х."
    },
    {
        question: "Какой тренд стал главным в 2010-е годы, связанным с экологией?",
        options: ["Slow fashion", "Athleisure", "Normcore", "Y2K"],
        correct: 0,
        fact: "Slow fashion связан с осознанным потреблением и отказом от перепроизводства."
    },
    {
        question: "Какая модель прославилась как IT-girl 1960-х?",
        options: ["Твигги", "Кейт Мосс", "Синди Кроуфорд", "Наоми Кэмпбелл"],
        correct: 0,
        fact: "Твигги стала символом Swinging London."
    },
    {
        question: "Кто придумал концепцию pret-a-porter и открыл первый бутик?",
        options: ["Ив Сен-Лоран", "Пьер Карден", "Соня Рикель", "Кензо Такада"],
        correct: 0,
        fact: "Бутик Rive Gauche Ива Сен-Лорана открылся в 1966 году."
    },
    {
        question: "Какой материал стал символом футуристической моды 1960-х у Пако Рабана?",
        options: ["Металл и пластик", "Латекс", "Полиэстер", "Винил"],
        correct: 0,
        fact: "Пако Рабан прославился платьями из металла и пластика."
    },
    {
        question: "Какой цвет был самым модным в 2020 году по версии Pantone?",
        options: ["Classic Blue", "Living Coral", "Ultimate Gray", "Illuminating"],
        correct: 0,
        fact: "Pantone выбрал Classic Blue как цвет 2020 года."
    },
    {
        question: "Кто создал платье-бандаж, ставшее культовым в 2000-х?",
        options: ["Эрве Леже", "Роберто Кавалли", "Донателла Версаче", "Джон Гальяно"],
        correct: 0,
        fact: "Платья Hervé Léger стали символом облегающей моды."
    },
    {
        question: "Какой аксессуар стал символом 1920-х?",
        options: ["Клешёная юбка", "Перья и боа", "Длинные перчатки", "Ободок с перьями"],
        correct: 3,
        fact: "Ободок с перьями ассоциируется с эпохой джаза и стилем flapper."
    },
    {
        question: "Кто первым активно применил молнию в женской одежде?",
        options: ["Эльза Скиапарелли", "Коко Шанель", "Жанна Ланвен", "Мадлен Вионне"],
        correct: 0,
        fact: "Скиапарелли использовала молнию не только как функциональный, но и как декоративный элемент."
    },
    {
        question: "В каком году был основан Vogue?",
        options: ["1892", "1909", "1920", "1935"],
        correct: 0,
        fact: "Vogue был основан в 1892 году."
    },
    {
        question: "Кто возглавил Dior после смерти Кристиана Диора в 1957 году?",
        options: ["Ив Сен-Лоран", "Марк Боан", "Джанфранко Ферре", "Джон Гальяно"],
        correct: 0,
        fact: "Ив Сен-Лоран возглавил дом Dior в 21 год."
    },
    {
        question: "Какой стиль появился в Японии в 1990-х и повлиял на мировую уличную моду?",
        options: ["Харадзюку", "Готическая лолита", "Кодексы", "Visual kei"],
        correct: 0,
        fact: "Харадзюку стал мировым символом эклектичной уличной моды."
    },
    {
        question: "Какая супермодель 1990-х получила прозвище «Черная пантера»?",
        options: ["Наоми Кэмпбелл", "Тайра Бэнкс", "Иман", "Вероника Уэбб"],
        correct: 0,
        fact: "Это прозвище закрепилось за Наоми Кэмпбелл."
    },
    {
        question: "Какой тренд доминирует в начале 2020-х?",
        options: ["Кибер-готика", "Y2K возвращение", "Гранж", "Old money"],
        correct: 1,
        fact: "Возвращение эстетики Y2K стало одним из самых заметных трендов начала 2020-х."
    }
];

let currentQuestionIndex = 0;
let userAnswers = new Array(quizData.length).fill(null);
let quizCompleted = false;
let feedbackText = '';

let tg = null;
if (window.Telegram && window.Telegram.WebApp) {
    tg = window.Telegram.WebApp;
    tg.expand();
    tg.setHeaderColor('#f8f4f0');
    tg.setBackgroundColor('#f8f4f0');
}

function calculateScore() {
    let correct = 0;
    userAnswers.forEach((answer, index) => {
        if (answer === quizData[index].correct) correct++;
    });
    return correct;
}

function getProgressPercent() {
    return ((currentQuestionIndex + 1) / quizData.length) * 100;
}

function updateFooterCounter() {
    const footerCounter = document.getElementById('footerCounter');
    if (footerCounter) {
        footerCounter.textContent = `вопрос ${currentQuestionIndex + 1}/${quizData.length}`;
    }
}

function renderQuiz() {
    const mainEl = document.getElementById('quizMain');
    if (!mainEl) return;

    if (quizCompleted) {
        const score = calculateScore();
        const total = quizData.length;
        const percent = Math.round((score / total) * 100);

        let emoji = '👘';
        let message = 'Начинающий модник';

        if (percent === 100) {
            emoji = '🏆';
            message = 'Икона стиля!';
        } else if (percent >= 80) {
            emoji = '💃';
            message = 'Отличный вкус!';
        } else if (percent >= 60) {
            emoji = '🧥';
            message = 'Неплохо!';
        } else if (percent >= 40) {
            emoji = '📚';
            message = 'Есть куда расти';
        }

        mainEl.innerHTML = `
            <div class="result-screen">
                <div class="result-emoji">${emoji}</div>
                <div class="result-score">${score}/${total}</div>
                <div class="result-message">${message}</div>
                <div class="result-stats">
                    <div>⭐ Правильных ответов: ${score}</div>
                    <div>📊 Точность: ${percent}%</div>
                </div>
                <button class="restart-btn" id="restartQuizBtn">Пройти заново</button>
            </div>
        `;

        document.getElementById('restartQuizBtn').addEventListener('click', restartQuiz);

        if (tg) {
            tg.sendData(JSON.stringify({ score, total, percent }));
        }

        updateFooterCounter();
        return;
    }

    const q = quizData[currentQuestionIndex];
    const isAnswered = userAnswers[currentQuestionIndex] !== null;
    const selectedIdx = userAnswers[currentQuestionIndex];
    const letters = ['A', 'B', 'C', 'D'];

    const optionsHtml = q.options.map((option, idx) => {
        let className = 'option-item';

        if (isAnswered) {
            if (idx === q.correct) className += ' correct-highlight';
            if (selectedIdx === idx && idx === q.correct) className += ' selected-correct';
            else if (selectedIdx === idx && idx !== q.correct) className += ' selected-wrong';
        }

        return `
            <button class="${className}" data-opt-index="${idx}" ${isAnswered ? 'disabled' : ''}>
                <span class="option-prefix">${letters[idx]}</span>
                <span>${option}</span>
            </button>
        `;
    }).join('');

    const factHtml = isAnswered
        ? `<div class="fact-card"><strong>Факт:</strong> ${feedbackText}</div>`
        : '';

    mainEl.innerHTML = `
        <div class="progress-section">
            <div class="progress-label">
                <span>${currentQuestionIndex + 1} из ${quizData.length}</span>
                <span>${Math.round(getProgressPercent())}%</span>
            </div>
            <div class="progress-bar-bg">
                <div class="progress-fill" style="width: ${getProgressPercent()}%;"></div>
            </div>
        </div>

        <div class="question-card">
            <div class="question-number">Вопрос ${currentQuestionIndex + 1}</div>
            <div class="question-text">${q.question}</div>
            <div class="options-container">${optionsHtml}</div>
            ${factHtml}
            <div class="nav-buttons">
                <button class="btn btn-secondary" id="prevBtn" ${currentQuestionIndex === 0 ? 'disabled' : ''}>Назад</button>
                <button class="btn btn-primary" id="nextBtn">
                    ${currentQuestionIndex === quizData.length - 1 ? 'Завершить' : 'Далее'}
                </button>
            </div>
        </div>
    `;

    document.querySelectorAll('.option-item').forEach(button => {
        button.addEventListener('click', () => {
            const optIdx = parseInt(button.dataset.optIndex, 10);
            if (userAnswers[currentQuestionIndex] === null) {
                userAnswers[currentQuestionIndex] = optIdx;
                feedbackText = quizData[currentQuestionIndex].fact;
                renderQuiz();
            }
        });
    });

    document.getElementById('prevBtn')?.addEventListener('click', () => {
        if (currentQuestionIndex > 0) {
            currentQuestionIndex--;
            feedbackText = '';
            renderQuiz();
        }
    });

    document.getElementById('nextBtn')?.addEventListener('click', () => {
        if (userAnswers[currentQuestionIndex] === null) {
            alert('Сначала выбери вариант ответа');
            return;
        }

        if (currentQuestionIndex < quizData.length - 1) {
            currentQuestionIndex++;
            feedbackText = '';
            renderQuiz();
        } else {
            quizCompleted = true;
            renderQuiz();
        }
    });

    updateFooterCounter();
}

function restartQuiz() {
    currentQuestionIndex = 0;
    userAnswers = new Array(quizData.length).fill(null);
    quizCompleted = false;
    feedbackText = '';
    renderQuiz();
}

document.addEventListener('DOMContentLoaded', renderQuiz);
