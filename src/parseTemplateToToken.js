import Scanner from './Scanner.js';
import nestTokens from './nestTokens.js';

export default function (templateStr) {
    let scanner = new Scanner(templateStr)
    let token = []
    let word

    while (!scanner.eos()) {
        word = scanner.scanUtil('{{')
        word && token.push(['text', word])
        scanner.scan('{{')

        word = scanner.scanUtil('}}')
        if (word !== '') {
            if (word[0] === '#') {
                token.push(['#', word.substring(1)])
            } else if (word[0] === '/') {
                token.push(['/', word.substring(1)])
            } else {
                token.push(['name', word])
            }
        }
        scanner.scan('}}')
    }
    console.log(token)
    return nestTokens(token)
}
