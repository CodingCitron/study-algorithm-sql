function solution(s) {        
    return change(s).join(" ");
}

function change(spells) {    
    return spells.split(' ').map(spell => {
        const first = spell.charAt(0).toUpperCase()
        return first + spell.slice(1).toLowerCase()
    })
}