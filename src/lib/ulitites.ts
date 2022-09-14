export function copyToClipboard(text: string) {
    if (text) {
        console.log('Copied...')
        navigator.clipboard.writeText(text)
        alert('Copied to clipboard 📋')
    }
}