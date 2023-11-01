document.getElementById('generateStory').addEventListener('click', function() {
    const noun = document.getElementById('noun').value;
    const adjective = document.getElementById('adjective').value;
    const verb = document.getElementById('verb').value;
    const adverb = document.getElementById('adverb').value;

    const story = `Once upon a time, there was a ${adjective} ${noun} who loved to ${verb} ${adverb}.`;

    document.getElementById('story').innerHTML = `<p>${story}</p>`;
});
