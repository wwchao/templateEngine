import lookup from "./lookup"
import renderTemplate from "./renderTemplate";

export default function (token, data) {
    console.log(data, token)
    let v = lookup(data, token[1])
    let resultStr = ''

    for (let i = 0; i < v.length; i++) {
        resultStr += renderTemplate(token[2], {
            ...v[i],
            '.': v[i]
        })
    }
    
    return resultStr
}
