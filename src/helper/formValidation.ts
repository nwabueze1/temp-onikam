export function formValidation(obj: { [key: string]: string }) {
    if (!obj) return;

    const empty = []
    for (let key in obj) {
        if (key !== 'description' && !obj[key as string]) {
            empty.push(key)
        }
    }
    return empty;
}
