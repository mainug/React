document.addEventListener('DOMContentLoaded', function() {
    const feedButton = document.getElementById('feed-button');
    const hungerStatus = document.getElementById('hunger');
    
    let hunger = 5;

    feedButton.addEventListener('click', function() {
        if(hunger > 0) {
            hunger--;
            hungerStatus.innerText = hunger;
        } else {
            alert('애완동물이 이미 배불러요!');
        }
    });
});
