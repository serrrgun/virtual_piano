
function createKey(data) {
    return `<div class="piano__key piano__key--${data.type === 'white' ? 'white' : 'black'}" data-note="${data.note}">
                <span data-type="letter">${data.note}</span>
            </div>`
}
function createWrapperKeys(keys) {
    return `
        <div class="piano__keys">
            ${keys}
        </div>
    `
}

export function getKeyTemplate(data) {
    const keys = []
    data.forEach(key => {
        keys.push(createKey(key))
    });
    return createWrapperKeys(keys.join('')) 
}