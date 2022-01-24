//Time: O(n);
//Space: O(n)
function tournamentWinner(competitions, results) {
    let teams = {};
    for (let i = 0; i < competitions.length; i++) {

        let homeTeam = competitions[i][0];
        let awayTeam = competitions[i][1];

        if (!teams[homeTeam]) teams[homeTeam] = 0;
        if (!teams[awayTeam]) teams[awayTeam] = 0;
    }
    for (let i = 0; i < competitions.length; i++) {
        let homeTeam = competitions[i][0];
        let awayTeam = competitions[i][1];
        if (results[i] === 0) teams[awayTeam] += 3;
        else if (results[i] === 1) teams[homeTeam] += 3;
    }
    let max = 0;
    for (let team in teams) {
        max = Math.max(max, teams[team]);
    }

    for (let key in teams) {
        if (teams[key] === max) return key;
    }
}

console.log(tournamentWinner([
    ["HTML", "C#"],
    ["C#", "Python"],
    ["Python", "HTML"]
],
    [0, 0, 1]
))