export function copyToClipboard(text: string) {
    if (text) {
        console.log('Copied...')
        navigator.clipboard.writeText(text)
        alert('Copied to clipboard 📋')
    }
}

// Text

export function toProperCase(text: string) {
    return text.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase())
}