import Scanner from './Scanner.js';
import nestTokens from './nestTokens.js';
import lookup from './lookup.js';
console.log(lookup({
    a: {
        b: {
            c: {
                d: {
                    w: 123
                }
            }
        }
    }
}, 'a.b.c.d.w'))

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
    return nestTokens(token)
}
