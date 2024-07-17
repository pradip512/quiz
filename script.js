function calculateScore() {
    let score = 0;
    const form = document.getElementById('quiz-form');
    const resultDiv = document.getElementById('result');
    const totalQuestions = 5;

    for (let i = 1; i <= totalQuestions; i++) {
        const answer = form.elements['q' + i].value;
        if (answer === 'yes') {
            score++;
        }
    }

    let resultText;
    if (score >= 4) {
        resultText = "Excellent immunity! You are doing great in maintaining a strong immune system.";
    } else if (score >= 3) {
        resultText = "Good immunity! You are on the right track but there may be a few areas to improve.";
    } else {
        resultText = "Poor immunity. Consider making some lifestyle changes to boost your immune system.";
    }

    resultDiv.textContent = `You scored ${score} out of ${totalQuestions}. ${resultText}`;
}
