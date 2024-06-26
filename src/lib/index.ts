// place files you want to import through the `$lib` alias in this folder.

export let expirations: {[key:string] :() => Date} = {
    'In an hour': () => new Date(Date.now() + 60 * 60 * 1000),
    'In a day': () => new Date(Date.now() + 24 * 60 * 60 * 1000),
    'In a week': () => new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
    'In a month': () => new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
    'In a year': () => new Date(Date.now() + 365 * 24 * 60 * 60 * 1000),
    'Custom': () => new Date() // no-op
}

