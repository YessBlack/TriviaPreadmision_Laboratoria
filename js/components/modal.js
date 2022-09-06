export const modal = ($app) => {
    const modal = document.createElement('dialog')
    modal.open = true
    modal.innerHTML = 
    `
    <article>
        <header>
            <p>TriviaMovie</p>
        </header>
        <form id="modalform">
            <label for="firstname">
            Nombre del Jugador
            <input type="text" id="firstname" name="firstname" placeholder="Nombre del Jugador" required>
            </label>
            <button type="submit" id="play">Jugar</button>          
        </form>
    </article>
    `

    $app.appendChild(modal)
}