import parseTemplateToToken from './parseTemplateToToken'

window.templateEngine = {
    render (templateStr) {
        let tokens = parseTemplateToToken(templateStr)
        console.log('tokens', tokens)
    }
}
