
async function searchCharacter() {

    const name = document.getElementById("searchInput").value.toLowerCase();
    const result = document.getElementById("result");

    if (!name) {
        document.getElementById("result").innerHTML = "Please enter a name.";
        return;
    }

    try {
        const response = await fetch(`https://swapi.dev/api/people/?search=${name}`);
            const data = await response.json();

            if (data.results.length == 0) {
                document.getElementById("result").innerHTML = "Character not found.";
                return;
            }

    // If get matching character

    const person = data.results[0];

// Display character info
    result.style.display = "block";
    
    document.getElementById("result").innerHTML = `
        <h3>${person.name}</h3>
              <p><strong>Height:</strong> ${person.height} cm </p>
            <p><strong>Mass:</strong> ${person.mass} kg</p>
            <p><strong>Hair Color:</strong> ${person.hair_color}</p>
            <p><strong>Skin Color:</strong> ${person.skin_color}</p>
            <p><strong>Eye Color:</strong> ${person.eye_color}</p>
            <p><strong>Birth Year:</strong> ${person.birth_year}</p>
            <p><strong>Gender:</strong> ${person.gender}</p>
            <p><strong>Homeworld URL:</strong> ${person.homeworld}</p>
            <p><strong>Films:</strong> ${person.films.join("<br>")}</p>
            <p><strong>Starships:</strong> ${person.starships.join("<br>")}</p>
            `;
    }
        catch (error) {
            document.getElementById("result").innerHTML = "Error loading data.";

        }
    }