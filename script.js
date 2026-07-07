function generateBranding() {

    const idea = document.getElementById("idea").value.trim();

    if (idea === "") {
        alert("Please enter your startup idea.");
        return;
    }

    const desc = idea.toLowerCase();

    const prefixes = [
        "Smart", "Next", "Neo", "Ultra", "Quick",
        "Bright", "Blue", "Future", "Prime", "Cloud"
    ];

    const taglines = [
        "Innovating Your Future",
        "Smart Solutions Simplified",
        "Powered by Innovation",
        "Your Success Starts Here",
        "Technology That Inspires"
    ];

    let colors, logo, audience, marketing;

    if (desc.includes("food")) {
        colors = "Red, Orange";
        logo = "Fork inside a location pin";
        audience = "Food lovers";
        marketing = "Instagram Reels, Swiggy Ads";
    }
    else if (desc.includes("travel")) {
        colors = "Blue, Green";
        logo = "Airplane with globe";
        audience = "Travelers";
        marketing = "Travel Blogs, YouTube";
    }
    else if (desc.includes("health") || desc.includes("medical")) {
        colors = "Blue, White";
        logo = "Medical cross with heart";
        audience = "Patients & Hospitals";
        marketing = "Healthcare Campaigns";
    }
    else if (desc.includes("education") || desc.includes("college")) {
        colors = "Purple, White";
        logo = "Graduation Cap";
        audience = "Students";
        marketing = "Campus Promotions";
    }
    else if (desc.includes("ai")) {
        colors = "Black, Cyan";
        logo = "Brain with circuit";
        audience = "Businesses";
        marketing = "LinkedIn & Tech Blogs";
    }
    else {
        colors = "Blue, White";
        logo = "Modern Abstract Icon";
        audience = "General Users";
        marketing = "Social Media Marketing";
    }

    const words = idea.split(" ");

    const name = prefixes[Math.floor(Math.random() * prefixes.length)] +
        words[0].charAt(0).toUpperCase() + words[0].slice(1);

    const tagline = taglines[Math.floor(Math.random() * taglines.length)];

    document.getElementById("result").innerHTML = `
        <div class="card">
            <h2>${name}</h2>
            <h3>${tagline}</h3>

            <p><b>Idea:</b> ${idea}</p>
            <p><b>Brand Colors:</b> ${colors}</p>
            <p><b>Logo Idea:</b> ${logo}</p>
            <p><b>Target Audience:</b> ${audience}</p>
            <p><b>Marketing Strategy:</b> ${marketing}</p>
        </div>
    `;
}