export function copyToClipboard(text: string) {
    if (text) {
        console.log('Copied...')
        navigator.clipboard.writeText(text)
        alert('Copied to clipboard 📋')
    }
}

// Text

export function toProperCase(text: string) {
    return text.charAt(0).toUpperCase() + text.slice(1)
}