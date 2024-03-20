/**
 * 虚拟dom转dom
 * @param obj
 */

const renderDom = (obj) => {
    const dom = document.createElement(obj.tag)
    for(let key in obj.attrs) {
        dom.setAttribute(key, obj.attrs[key])
    }
    if(obj.children) {
        obj.children.forEach(child => {
            dom.appendChild(renderDom(child))
        })
    }
}


const vNode = {
    tag: 'DIV',
    attrs: {
        id: 'app'
    },
    children: [
        {
            tag: 'SPAN',
            attrs: {
                id: 'span'
            },
            children: [
                {
                    tag: 'A',
                    attrs: {
                        id: 'a'
                    }
                }
            ]
        }
    ]
}


console.log(renderDom(vNode))

