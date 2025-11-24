async function searchCharacter() {
    
    const name = document.getElementById("searchInput").value.toLowerCase();
    
    const result = document.getElementById("result");

    if (!name) {
        result.innerHTML = "Please enter a name.";
        return;
    }

    try {
        // --- Fetch character from SWAPI ---
        const response = await fetch(`https://swapi.dev/api/people/?search=${encodeURIComponent(name)}`);
        const data = await response.json();

        if (!data.results || data.results.length === 0) {
            result.innerHTML = "Character not found.";
            return;
        }

        const person = data.results[0];

        // --- Fetch Homeworld Name ---
        let homeworldName = "Unknown";
        if (person.homeworld) {
            const hwRes = await fetch(person.homeworld);
            const hwJson = await hwRes.json();
            homeworldName = hwJson.name;
        }

        // --- Fetch Starship Names ---
        const starshipNames = await Promise.all(
            (person.starships || []).map(async (url) => {
                const res = await fetch(url);
                const ship = await res.json();
                return ship.name;
            })
        );
        const starships = starshipNames.length ? starshipNames.join("<br>") : "None";

        // --- Fetch Film Titles ---
        const filmTitles = await Promise.all(
            (person.films || []).map(async (url) => {
                const res = await fetch(url);
                const film = await res.json();
                return film.title;
            })
        );
        const films = filmTitles.join("<br>");

        // --- Display Character Info ---
        result.style.display = "block";
        result.innerHTML = `
            <h3>${person.name}</h3>
            <p><strong>Height:</strong> ${person.height} cm</p>
            <p><strong>Mass:</strong> ${person.mass} kg</p>
            <p><strong>Hair Color:</strong> ${person.hair_color}</p>
            <p><strong>Skin Color:</strong> ${person.skin_color}</p>
            <p><strong>Eye Color:</strong> ${person.eye_color}</p>
            <p><strong>Birth Year:</strong> ${person.birth_year}</p>
            <p><strong>Gender:</strong> ${person.gender}</p>
            <p><strong>Homeworld:</strong> ${homeworldName}</p>
            <p><strong>Starships:</strong><br>${starships}</p>
            <p><strong>Films:</strong><br>${films}</p>
        `;

    } catch (error) {
        console.error(error);
        result.innerHTML = "Error loading data.";
    }
}

