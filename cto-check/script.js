import questions from './questions.js';

let currentQuestionIndex = 0;
let scores = { A: 0, B: 0, C: 0 };
let userData = { companyName: '', userName: '', email: '' };

const questionContainer = document.getElementById('questionContainer');
const formContainer = document.getElementById('formContainer');
const resultContainer = document.getElementById('resultContainer');
const progressFill = document.getElementById('progressFill');
const questionText = document.getElementById('questionText');
const optionsList = document.getElementById('optionsList');
const leadForm = document.getElementById('leadForm');

function init() {
    showQuestion();
}

function updateProgress() {
    const progress = ((currentQuestionIndex) / questions.length) * 100;
    progressFill.style.width = `${progress}%`;
}

function showQuestion() {
    updateProgress();
    const question = questions[currentQuestionIndex];
    questionText.textContent = `Q${question.id}. ${question.text}`;
    optionsList.innerHTML = '';

    question.options.forEach(option => {
        const button = document.createElement('button');
        button.className = 'option-btn';
        button.textContent = option.text;
        button.onclick = () => selectOption(option.scores);
        optionsList.appendChild(button);
    });
}

function selectOption(optionScores) {
    // スコア加算
    for (const key in optionScores) {
        scores[key] += optionScores[key];
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showLeadForm();
    }
}

function showLeadForm() {
    updateProgress();
    progressFill.style.width = '100%';
    questionContainer.classList.remove('active');
    formContainer.classList.add('active');
}

leadForm.onsubmit = (e) => {
    e.preventDefault();
    userData.companyName = document.getElementById('companyName').value;
    userData.userName = document.getElementById('userName').value;
    userData.email = document.getElementById('email').value;

    showResult();
};

function showResult() {
    formContainer.classList.remove('active');
    resultContainer.classList.add('active');

    // メールリンクの更新
    const subject = encodeURIComponent(`【診断結果より相談】外部CTO無料戦略会議の申し込み`);
    const body = encodeURIComponent(`会社名：${userData.companyName}\nお名前：${userData.userName}\n現在の悩み：`);
    document.getElementById('emailBtn').href = `mailto:g@yknr-st.com?subject=${subject}&body=${body}`;

    renderChart();
    renderAdvice();
}

function renderChart() {
    const ctx = document.getElementById('resultChart').getContext('2d');

    // スコアの正規化（最大値を仮定して調整）
    const maxScore = 150;

    new Chart(ctx, {
        type: 'radar',
        data: {
            labels: ['ITコスト', '経営リスク', '業務効率'],
            datasets: [{
                label: '診断結果（スコアが高いほど課題大）',
                data: [scores.A, scores.B, scores.C],
                backgroundColor: 'rgba(52, 152, 219, 0.2)',
                borderColor: 'rgba(52, 152, 219, 1)',
                borderWidth: 2,
                pointBackgroundColor: 'rgba(52, 152, 219, 1)'
            }]
        },
        options: {
            scales: {
                r: {
                    angleLines: { display: true },
                    suggestedMin: 0,
                    suggestedMax: 100
                }
            },
            plugins: {
                legend: { display: false }
            }
        }
    });
}

function renderAdvice() {
    const adviceTitle = document.getElementById('adviceTitle');
    const adviceContent = document.getElementById('adviceContent');

    const total = scores.A + scores.B + scores.C;

    if (total > 150) {
        adviceTitle.textContent = "【警告】IT環境が経営の足を引っ張っています";
        adviceContent.textContent = "コスト・効率・リスクのすべてにおいて早急な対策が必要です。特にブラックボックス化したシステムや不明瞭な保守契約が、将来的な成長を阻害する大きなリスクとなっています。外部CTOの導入を強くお勧めします。";
    } else if (total > 80) {
        adviceTitle.textContent = "【要改善】部分的な最適化で大きな伸び代があります";
        adviceContent.textContent = "いくつかの項目で課題が見受けられます。特に現場の作業効率やITコストの透明性を高めることで、収益性を向上させる余地が十分にあります。一度専門家による棚卸しを検討してみてください。";
    } else {
        adviceTitle.textContent = "【良好】基盤は整っていますが、攻めのIT投資を";
        adviceContent.textContent = "現在のIT環境は比較的安定しています。今後は、生成AIの活用や新規事業の立ち上げなど、利益に直結する「攻めのIT」へシフトしていく段階です。更なる進化に向けた相談をお待ちしております。";
    }
}

init();
