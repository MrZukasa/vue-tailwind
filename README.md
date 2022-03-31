# Setup di un Progetto con Vue3 CLI e TailwindCSS 🚸
Inizio ad approcciare a qualcosa di più serio e professionale, questa volta cercando di combinare un progetto Vue3 ed il framework CSS Tailwind.

## Setup dell'ambiente 🎇
- La prima cosa da fare è installere Vue3 CLI sul sistema con il comando:
```
npm install -g @vue/cli
```
- Controlliamo che tutto sia OK con:
```
vue --version
```
## Creiamo il progetto Vue3 CLI 🏙️
- Lanciamo il comando per creare il progetto:
```
vue create 'projectName'
```
- Dopo di ciò apparirà una schermata come questa, dove selezionare la versione di Vue da usare.

![Choose](https://i.ibb.co/jhqf4rT/Capture.png)

- Poi scegliamo che componenti aggiuntivi vogliamo aggiungere al nostro progetto Vue3 CLI, nel mio caso solo Vue e Babel.

![Linter](https://i.ibb.co/M2sSy6v/choose.png)

- Scegliamo nuovamente la versione da usare, nel mio caso la 3.x.

![version3](https://i.ibb.co/j8XH7CT/vue3.png)

- Scegliamo dove piazzare i settaggi di configurazione, nel mio caso in file di configurazione dedicati.

![dedicated](https://i.ibb.co/344LNkx/dedicated.png)

- Possiamo poi scegliere se vogliamo salvare questo preset per usi futuri.

![preset](https://i.ibb.co/KG8WS8z/preset.png)

## Installazione TailwindCSS 🎐
- Adesso occupiamoci di TailwindCSS, fortunatamente ci basta fare:
```
vue add tailwind
```
come tipo di installazione ho scelto la *minimal* et voilà! tutto è settato e pronto a partire!

#### Comando per compilare durante la fase di sviluppo ♨️
```
npm run serve
```
#### Comando per compilare e impacchettare le librerie in fase di produzione 🥧
```
npm run build
```

## Links utili 🔗
- [Documentazione Vue 3](https://vuejs.org/guide/components/registration.html)
- [Qui](https://www.kreaweb.be/laragon-add-postgresql/) è possibile trovare le istruzioni per preparare un DB MySql.
- Altrettanto utile la [Guida Vue CLI](https://cli.vuejs.org/guide/)
- [Qui](https://cli.vuejs.org/guide/installation.html) le info per controlalre se Vue è correttamente installato ed aggiornato.
- Qui è possibile vedere le [configurazioni delle References](https://cli.vuejs.org/config/)

## Status Tutorial 🤓

#### Attualmente ho visto:

- Struttura di un file.vue
- Props
- Slot e Template
- v-if
- Event Modifiers
- Emissione evento custom (Emit)
- Teleport
