import moment from 'moment'

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

                   matchId.innerText = post.match_id                   
                   duration.innerText = post.duration
                   radiantTeam.innerText = post.radiant_name
                   direTeam.innerText = post.dire_name

                   tr.appendChild(matchId)
                   tr.appendChild(duration)
                   tr.appendChild(radiantTeam)
                   tr.appendChild(direTeam)
                   
                   matchHistory.appendChild(tr)
           })
   })






