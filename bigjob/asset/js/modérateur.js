document.addEventListener("DOMContentLoaded", function() {
    const users = [
        {
            name: "Emma Dupont",
            requestReceived: "2 avril 2024 à 09:24:37"
        },
        {
            name: "Liam Martin",
            requestReceived: "1 avril 2024 à 14:56:18"
        },
        {
            name: "Olivia Garcia",
            requestReceived: "4 avril 2024 à 20:12:45"
        },
        {
            name: "Noah Rodriguez",
            requestReceived: "3 avril 2024 à 03:08:59"
        },
        {
            name: "Sophia Lee",
            requestReceived: "5 avril 2024 à 17:33:22"
        }
    ];

    for (let i = 0; i < users.length; i++) {
        const userCard = document.getElementById("user" + (i + 1));
        const userName = userCard.querySelector(".card-title");
        const userRequest = userCard.querySelector(".card-text");

        userName.textContent = users[i].name;
        userRequest.textContent = "Demande reçue le " + users[i].requestReceived;
    }
});



