document.addEventListener("DOMContentLoaded", () => {

    const recordGrid = document.getElementById("recordGrid");
    const search = document.getElementById("recordSearch");

    const sections = {};

    for(let row = 1; row <= 2; row++){
        for(let column = 1; column <= 2; column++){

            const section = document.createElement("div");
            section.className = "recordSection";
            section.dataset.row = row;
            section.dataset.column = column;

            recordGrid.appendChild(section);

            sections[`${row}-${column}`] = section;
        }
    }

    Papa.parse("records.csv", {
        download: true,
        header: true,
        complete: function(results){

            results.data.forEach(record => {

                if(!record.row || !record.column){
                    return;
                }

                const key = `${record.row}-${record.column}`;
                const section = sections[key];

                if(!section){
                    return;
                }

                const card = document.createElement("div");
                card.className = "recordCard";

                card.innerHTML = `
					<div class="record"></div>

					<div class="info">
						<div><b>${record.title}</b></div>
						<div>${record.artist}</div>

						<div class="location">
							Row:${record.row} | Column:${record.column} | #${record.slot}
						</div>
					</div>
				`;

                section.appendChild(card);

            });
        }
    });

    search.addEventListener("input", () => {

        const query = search.value.toLowerCase();
        const records = document.querySelectorAll(".recordCard");

        records.forEach(record => {

            const info = record.querySelector(".info");
            const text = info.innerText.toLowerCase();

            if(text.includes(query) && query !== ""){
                record.classList.add("searchHover");
            }
            else{
                record.classList.remove("searchHover");
            }

        });

    });

});