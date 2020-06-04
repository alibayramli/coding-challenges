function DNAStrand(dna) {
    let cache = {
        'A': 'T',
        'T': 'A',
        'C': 'G',
        'G': 'C'
    }
    return dna.split('').map(el => cache[el]).join('');
}