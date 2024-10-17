
function updateCounter() {
    const counter = document.querySelector('.co2-value');
    const target = +counter.getAttribute('data-count') || 149; 
    let count = 0;

    const updateInterval = setInterval(() => {
        if (count < target) {
            count++;
            counter.innerHTML = `${count} KG`;
        } else {
            clearInterval(updateInterval);
        }
    }, 30);
}


function displayFriendsActivities() {
    const friends = [
        { name: "Jack", score: 40 },
        { name: "Bhoomi", score: 180 },
        { name: "Justin", score: 170 },
        { name: "Sumeer", score: 55 }
    ];

    friends.forEach((friend, index) => {
        document.getElementById(`friend${index + 1}`).innerText = `${friend.name} score: ${friend.score}`;
    });
}
function loadCarbonReducingActivities() {
    const activities = [
        "Use public transportation or carpool",
        "Switch to energy-efficient appliances",
        "Recycle and compost waste",
        "Use renewable energy sources (solar, wind)",
        "Reduce water usage",
        "Buy locally produced products"
    ];

    const activitySection = document.querySelector(".activity");
    activities.forEach(activity => {
        const activityDiv = document.createElement("div");
        activityDiv.classList.add("activity-item");
        activityDiv.innerText = activity;
        activitySection.appendChild(activityDiv);
    });
}

function handleComplaintSubmission() {
    const complainBtn = document.querySelector(".complain-btn");
    const complainText = document.getElementById("complainText");
    const errorMessage = document.getElementById("errorMessage");
    const complainPortal = document.getElementById("complainPortal");
    const complaintList = document.getElementById("complaintList");
    const charCount = document.getElementById("charCount");

    complainText.addEventListener('input', () => {
        const wordCount = complainText.value.split(/\s+/).filter(word => word.length > 0).length;
        charCount.textContent = `${wordCount}/300`;
    });

    complainBtn.addEventListener("click", async () => {
        const complaint = complainText.value.trim();
        const wordCount = complaint.split(/\s+/).filter(word => word.length > 0).length;

        if (wordCount < 30 || wordCount > 300) {
            errorMessage.style.display = 'block'; 
            return;
        } else {
            errorMessage.style.display = 'none';
        }

        const portal = complainPortal.value;
        const data = {
            complaint: complaint,
            username: "Carbon Ninja SOHAM",
            portal: portal
        };

        try {
            const response = await fetch(`https://example.com/api/complaints/${portal}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            if (response.ok) {
                await response.json();
                alert("Your complaint has been submitted successfully!");

               
                const listItem = document.createElement("li");
                listItem.textContent = `${complaint} (Portal: ${portal})`;
                complaintList.appendChild(listItem);

              
                complainText.value = "";
                charCount.textContent = `0/300`;
            } else {
                alert("There was a problem submitting your complaint. Please try again.");
            }
        } catch (error) {
            alert("Error: Unable to connect to the server.");
            console.error("Error submitting complaint:", error);
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    handleComplaintSubmission();
});

document.addEventListener('DOMContentLoaded', () => {
    updateCounter();
    displayFriendsActivities();
    loadCarbonReducingActivities();
    handleComplaintSubmission();
});
