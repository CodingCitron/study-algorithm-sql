function solution(s) {        
    var answer = '';
   let result = s.split(' ');

   let result2 = result.map(x=> x.charAt(0).toUpperCase() + x.slice(1).toLowerCase());

   answer = result2.join(" ")
    return answer;
}

function change(spells) {    
    return spells.split(' ').filter(spell => spell !== '').map(spell => {
        const first = spell[0].toUpperCase()
        return first + spell.slice(1).toLowerCase()
    })
}