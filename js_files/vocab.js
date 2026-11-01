// Vocabulary for the contribution form, derived from the database itself
// so the options can never drift from what is actually in src/db.

import { apps } from './index.js'
import { formatPriority } from '../util.js'

export const categories = ['synth', 'effect', 'sampler', 'analyzer', 'tool', 'daw', 'tracker']

const tagCounts = new Map()
const categoryTagCounts = new Map()
const allFormats = new Set()
const allLicenses = new Set()

for (const app of apps) {
    const mainTag = (app.tags || [])[0]
    for (const tag of app.tags || []) {
        if (categories.includes(tag)) continue
        tagCounts.set(tag, (tagCounts.get(tag) || 0) + 1)

        if (!mainTag || mainTag === tag) continue
        if (!categoryTagCounts.has(mainTag)) categoryTagCounts.set(mainTag, new Map())
        const counts = categoryTagCounts.get(mainTag)
        counts.set(tag, (counts.get(tag) || 0) + 1)
    }

    for (const format of app.formats || []) {
        allFormats.add(format)
    }
    if (app.license) {
        allLicenses.add(app.license)
    }
}

// Most used first, alphabetical on ties
function sortByUsage(counts) {
    return [...counts.keys()].sort((a, b) => {
        return (counts.get(b) - counts.get(a)) || a.localeCompare(b)
    })
}

export const tags = sortByUsage(tagCounts)

// Tags used by at least one app whose main tag (first tag) is the key
export const tagsByCategory = {}
for (const [category, counts] of categoryTagCounts) {
    tagsByCategory[category] = sortByUsage(counts)
}

const unknownFormat = Object.keys(formatPriority).length
export const formats = [...allFormats].sort((a, b) => {
    const diff = (formatPriority[a] ?? unknownFormat) - (formatPriority[b] ?? unknownFormat)
    return diff || a.localeCompare(b)
})

// Combined values (e.g. 'GPL-2.0, GPL-3.0') are unselectable - the form lets
// you check the individual licenses instead
export const licenses = [...allLicenses]
    .filter(license => !license.includes(',') && license !== 'None')
    .sort((a, b) => a.localeCompare(b))
