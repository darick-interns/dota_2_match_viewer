const matchHistory = document.getElementById('match-history')

fetch('https://api.opendota.com/api/proMatches')
   .then(response => response.json())
   .then(data => {
           data.forEach(post => {
                   const matchId = document.createElement('td')
                   const duration = document.createElement('td')
                   const radiantTeam = document.createElement('td')
                   const direTeam = document.createElement('td')
                   const tr = document.createElement('tr')
                   
                   function padTo2Digits(num) {
                    return num.toString().padStart(2, 0)
                   }

                   matchId.innerText = post.match_id 
                   duration.innerText = `${padTo2Digits(Math.floor(post.duration / 60))}:${padTo2Digits(post.duration % 60)}` 
                   radiantTeam.innerText = post.radiant_name
                   direTeam.innerText = post.dire_name 

                   tr.appendChild(matchId)
                   tr.appendChild(duration)
                   tr.appendChild(radiantTeam)
                   tr.appendChild(direTeam)
                   
                   matchHistory.appendChild(tr)
           })
   })

   document.getElementById('match-history').addEventListener('click', function() {
    document.getElementById('content').style.display = 'block'
    document.getElementById('viewer').style.display = 'none'
   })
   document.getElementById('back').addEventListener('click', function() {
    document.getElementById('viewer').style.display = 'block'
    document.getElementById('content').style.display = 'none'
   })







