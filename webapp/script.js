function selectMood(mood) {
    const response = document.getElementById('response');
    const about = document.getElementById('about');
    let message = "";

    switch (mood) {
        case 'anxious':
            message = "Ты не один. Тревожность — нормальное состояние. Я рядом, если хочешь поговорить.";
            break;
        case 'tired':
            message = "Иногда лучшее, что мы можем — отдохнуть. Позволь себе это.";
            break;
        case 'lonely':
            message = "Ты не один. Я здесь, чтобы поддержать тебя.";
            break;
        case 'okay':
            message = "Здорово, что ты в порядке. Береги это состояние ❤️";
            break;
    }

    response.innerHTML = `<p>${message}</p>`;
    response.classList.remove('hidden');
    about.classList.remove('hidden');
}
