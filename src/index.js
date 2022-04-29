import parseTemplateToToken from './parseTemplateToToken'
import renderTemplate from './renderTemplate'

window.templateEngine = {
    render (templateStr, data) {
        let tokens = parseTemplateToToken(templateStr)
        console.log('tokens', tokens)
        let domStr = renderTemplate(tokens, data)
        console.log('domStr', domStr)
        return domStr
    }
}
