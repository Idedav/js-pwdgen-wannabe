
// VARIABILI
const name = prompt('come ti chiami?')
const lastname = prompt('qual è il tuo cognome?')
const color = prompt('qual è il tuo colore preferito?')
const password = name + lastname + color + '23'

// MESSAGGIO DI OUTPUT
const output = `
<div class="container">
    <h1>la tua password è ${password}</h1>
</div>
`
// COLLEGAMENTO DEL MESSAGGIO DI OUTPUT ALL ID
document.getElementById('message').innerHTML = output