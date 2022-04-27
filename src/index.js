import Scanner from './Scanner.js';

window.templateEngine = {
    render (templateStr) {
        let scanner = new Scanner(templateStr)
        let word

        while (!scanner.eos()) {
            word = scanner.scanUtil('{{')
            console.log(word, scanner.pos)
            scanner.scan('{{')

            word = scanner.scanUtil('}}')
            console.log(word)
            scanner.scan('}}')
        }
    }
}
