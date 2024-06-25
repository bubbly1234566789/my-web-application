document.addEventListener('DOMContentLoaded', () => {
    const viewContainer = document.getElementById('viewContainer');
    
    const homeView = `
        <section>
            <h2>Home</h2>
            <p>Welcome to the Home view!</p>
            <button id="saveDataBtn">Save Data</button>
        </section>
    `;

    const aboutView = `
        <section>
            <h2>About</h2>
            <p>This is the About view.</p>
        </section>
    `;


    viewContainer.innerHTML = homeView;

    document.getElementById('homeViewBtn').addEventListener('click', () => {
        viewContainer.innerHTML = homeView;
        attachHomeViewEvents();
    });

    document.getElementById('aboutViewBtn').addEventListener('click', () => {
        viewContainer.innerHTML = aboutView;
    });

    function attachHomeViewEvents() {
        document.getElementById('saveDataBtn').addEventListener('click', () => {
            localStorage.setItem('myData', 'This is some saved data.');
            alert('Data saved to local storage!');
        });
    }

    attachHomeViewEvents();
});
