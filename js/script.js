
// VARIABILI
const name = prompt('come ti chiami?')
const lastname = prompt('qual è il tuo cognome?')
const color = prompt('qual è il tuo colore preferito?')

// MESSAGGIO DI OUTPUT
const output = `
<div class="container">
    <h1>Ciao ${name} ${lastname} il tuo colore preferito è il ${color} 23</h1>
</div>
`
// COLLEGAMENTO DEL MESSAGGIO DI OUTPUT ALL ID
document.getElementById('message').innerHTML = output