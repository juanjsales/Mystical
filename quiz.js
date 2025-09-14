// Quiz functionality for Psilocybe Cubensis educational site

let currentQuestionIndex = 0;
let score = 0;
let totalQuestions = 0;

const quizQuestions = [
    {
        question: "Qual é o principal composto ativo do Psilocybe cubensis?",
        options: ["Psilocibina", "THC", "LSD", "DMT"],
        correct: 0,
        explanation: "A psilocibina é o principal composto psicoativo encontrado no Psilocybe cubensis, que é convertido em psilocina no organismo."
    },
    {
        question: "Em que tipo de ambiente o P. cubensis cresce naturalmente?",
        options: ["Desertos áridos", "Regiões subtropicais úmidas", "Tundra ártica", "Montanhas secas"],
        correct: 1,
        explanation: "O P. cubensis prefere ambientes subtropicais com alta umidade, especialmente em vales de rios e áreas ricas em matéria orgânica."
    },
    {
        question: "Qual variedade é conhecida por ser ideal para iniciantes no cultivo?",
        options: ["Penis Envy", "Golden Teacher", "Albino A+", "Malabar Coast"],
        correct: 1,
        explanation: "O Golden Teacher é amplamente reconhecido como uma das melhores variedades para iniciantes devido à sua resistência e crescimento confiável."
    },
    {
        question: "Quanto tempo geralmente duram os efeitos da psilocibina?",
        options: ["1-2 horas", "4-6 horas", "8-12 horas", "24 horas"],
        correct: 1,
        explanation: "Os efeitos da psilocibina geralmente duram entre 4-6 horas, com o pico ocorrendo entre 1-2 horas após o consumo."
    },
    {
        question: "Qual é a temperatura ideal para o cultivo de P. cubensis?",
        options: ["15-18°C", "20-23°C", "24-27°C", "30-35°C"],
        correct: 2,
        explanation: "A temperatura ideal para o cultivo de P. cubensis está entre 24-27°C, proporcionando condições ótimas para crescimento."
    }
];

function initQuiz() {
    totalQuestions = quizQuestions.length;
    document.getElementById('total').textContent = totalQuestions;
    showQuestion();
}

function showQuestion() {
    if (currentQuestionIndex >= quizQuestions.length) {
        showFinalResults();
        return;
    }

    const question = quizQuestions[currentQuestionIndex];
    const questionContainer = document.getElementById('quiz-question');
    const resultContainer = document.getElementById('quiz-result');
    
    // Hide result and show question
    resultContainer.style.display = 'none';
    questionContainer.style.display = 'block';
    
    // Update question content
    questionContainer.innerHTML = `
        <h3>${question.question}</h3>
        <div class="quiz-options">
            ${question.options.map((option, index) => 
                `<button class="quiz-option" data-answer="${index}" onclick="selectAnswer(${index})">${option}</button>`
            ).join('')}
        </div>
    `;
}

function selectAnswer(selectedIndex) {
    const question = quizQuestions[currentQuestionIndex];
    const options = document.querySelectorAll('.quiz-option');
    const resultContainer = document.getElementById('quiz-result');
    const questionContainer = document.getElementById('quiz-question');
    
    // Disable all options
    options.forEach(option => {
        option.disabled = true;
        const index = parseInt(option.getAttribute('data-answer'));
        
        if (index === question.correct) {
            option.classList.add('correct');
        } else if (index === selectedIndex && selectedIndex !== question.correct) {
            option.classList.add('wrong');
        }
    });
    
    // Update score
    if (selectedIndex === question.correct) {
        score++;
        document.getElementById('score').textContent = score;
    }
    
    // Show result
    setTimeout(() => {
        questionContainer.style.display = 'none';
        resultContainer.style.display = 'block';
        
        const isCorrect = selectedIndex === question.correct;
        const resultText = document.getElementById('result-text');
        
        resultText.innerHTML = `
            <div class="result-status ${isCorrect ? 'correct' : 'wrong'}">
                <i class="fas ${isCorrect ? 'fa-check-circle' : 'fa-times-circle'}"></i>
                ${isCorrect ? 'Correto!' : 'Incorreto!'}
            </div>
            <p class="explanation">${question.explanation}</p>
        `;
    }, 1500);
}

function nextQuestion() {
    currentQuestionIndex++;
    showQuestion();
}

function showFinalResults() {
    const questionContainer = document.getElementById('quiz-question');
    const resultContainer = document.getElementById('quiz-result');
    
    questionContainer.style.display = 'none';
    resultContainer.style.display = 'block';
    
    const percentage = Math.round((score / totalQuestions) * 100);
    let message = '';
    let emoji = '';
    
    if (percentage >= 80) {
        message = 'Excelente! Você tem um ótimo conhecimento sobre Psilocybe cubensis!';
        emoji = '🏆';
    } else if (percentage >= 60) {
        message = 'Bom trabalho! Você tem um conhecimento sólido sobre o assunto.';
        emoji = '👍';
    } else if (percentage >= 40) {
        message = 'Não está mal! Continue estudando para aprender mais.';
        emoji = '📚';
    } else {
        message = 'Continue explorando o site para aprender mais sobre Psilocybe cubensis!';
        emoji = '🌱';
    }
    
    document.getElementById('result-text').innerHTML = `
        <div class="final-result">
            <div class="result-emoji">${emoji}</div>
            <h3>Quiz Concluído!</h3>
            <div class="final-score">
                Sua pontuação: ${score}/${totalQuestions} (${percentage}%)
            </div>
            <p class="final-message">${message}</p>
            <div class="quiz-actions">
                <button class="btn btn-primary" onclick="restartQuiz()">Tentar Novamente</button>
                <button class="btn btn-secondary" onclick="scrollToTop()">Voltar ao Início</button>
            </div>
        </div>
    `;
}

function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    document.getElementById('score').textContent = score;
    showQuestion();
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Initialize quiz when page loads
document.addEventListener('DOMContentLoaded', function() {
    // Add a small delay to ensure all elements are loaded
    setTimeout(initQuiz, 500);
});

// Add CSS styles for quiz results
const quizStyles = `
<style>
.result-status {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    font-size: 1.2rem;
    font-weight: 600;
    margin-bottom: 1rem;
}

.result-status.correct {
    color: #28a745;
}

.result-status.wrong {
    color: #dc3545;
}

.explanation {
    background: var(--gray-light);
    padding: 1rem;
    border-radius: 8px;
    border-left: 4px solid var(--primary-color);
    margin: 1rem 0;
    font-style: italic;
}

.final-result {
    text-align: center;
    padding: 2rem 1rem;
}

.result-emoji {
    font-size: 4rem;
    margin-bottom: 1rem;
}

.final-score {
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--primary-color);
    margin: 1rem 0;
}

.final-message {
    font-size: 1.1rem;
    color: var(--gray-medium);
    margin: 1.5rem 0;
}

.quiz-actions {
    display: flex;
    gap: 1rem;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 2rem;
}

.quiz-option:disabled {
    cursor: not-allowed;
    opacity: 0.8;
}

@media (max-width: 480px) {
    .quiz-actions {
        flex-direction: column;
        align-items: center;
    }
    
    .quiz-actions .btn {
        width: 200px;
    }
}
</style>
`;

document.head.insertAdjacentHTML('beforeend', quizStyles);

