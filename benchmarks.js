const radiantBenchmarks = document.getElementById('radiant-benchmarks')

fetch('https://api.opendota.com/api/matches/7107494588')
   .then(response => response.json())
   .then(data => {
           data.forEach(post => {
                   const goldPerMin = document.createElement('td')
                   const xpPerMin = document.createElement('td')
                   const killsPerMin = document.createElement('td')
                   const lastHitsPerMin = document.createElement('td')
                   const heroDamagePerMin = document.createElement('td')
                   const heroHealingPerMin = document.createElement('td')
                   const towerDamage = document.createElement('td')
                   const stunsPerMin = document.createElement('td')
                   const lhten = document.createElement('td')
                   const tr = document.createElement('tr')

                   goldPerMin.innerText = post.gold_per_min              
                   xpPerMin.innerText = post.xp_per_min
                   killsPerMin.innerText = post.kills_per_min
                   lastHitsPerMin.innerText = post.last_hits_per_min
                   heroDamagePerMin.innerText = post.hero_damage_per_min
                   heroHealingPerMin.innerText = post.hero_healing_per_min
                   towerDamage.innerText = post.tower_damage
                   stunsPerMin.innerText = post.stuns_per_min
                   lhTen.innerText = post.lhten

                   tr.appendChild(goldPerMin)
                   tr.appendChild(xpPerMin)
                   tr.appendChild(killsPerMin)
                   tr.appendChild(lastHitsPerMin)
                   tr.appendChild(heroDamagePerMin)
                   tr.appendChild(heroHealingPerMin)
                   tr.appendChild(towerDamage)
                   tr.appendChild(stunsPerMin)
                   tr.appendChild(lhTen)

                   radiantBenchmarks.appendChild(tr)
           })
   })

const direBenchmarks = document.getElementById('dire-benchmarks')

fetch('https://api.opendota.com/api/matches/7107494588')
   .then(response => response.json())
   .then(data => {
             data.forEach(post => {
                   const goldPerMin = document.createElement('td')
                   const xpPerMin = document.createElement('td')
                   const killsPerMin = document.createElement('td')
                   const lastHitsPerMin = document.createElement('td')
                   const heroDamagePerMin = document.createElement('td')
                   const heroHealingPerMin = document.createElement('td')
                   const towerDamage = document.createElement('td')
                   const stunsPerMin = document.createElement('td')
                   const lhten = document.createElement('td')
                   const tr = document.createElement('tr')

                   goldPerMin.innerText = post.gold_per_min              
                   xpPerMin.innerText = post.xp_per_min
                   killsPerMin.innerText = post.kills_per_min
                   lastHitsPerMin.innerText = post.last_hits_per_min
                   heroDamagePerMin.innerText = post.hero_damage_per_min
                   heroHealingPerMin.innerText = post.hero_healing_per_min
                   towerDamage.innerText = post.tower_damage
                   stunsPerMin.innerText = post.stuns_per_min
                   lhTen.innerText = post.lhten

                   tr.appendChild(goldPerMin)
                   tr.appendChild(xpPerMin)
                   tr.appendChild(killsPerMin)
                   tr.appendChild(lastHitsPerMin)
                   tr.appendChild(heroDamagePerMin)
                   tr.appendChild(heroHealingPerMin)
                   tr.appendChild(towerDamage)
                   tr.appendChild(stunsPerMin)
                   tr.appendChild(lhTen)

                   direBenchmarks.appendChild(tr)
           })
   })


                   

                   

                   
                
