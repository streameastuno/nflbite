function toggleMobileMenu() {
      const navLinks = document.querySelector('.nav-links');
      navLinks.classList.toggle('show');
    }
    
    async function main() {
      const response = await fetch("https://boxingschedule.co/");
      const src = await response.text();
      const soup = new DOMParser().parseFromString(src, 'text/html');
    
      const entryContentDiv = soup.querySelector('div.entry-content');
      const elements = entryContentDiv.querySelectorAll('p, ul, h3');
    
      const scheduleContainer = document.getElementById('boxing');
    
      const today = new Date();
      const todayFormatted = `${today.toLocaleString('default', { month: 'long' })} ${today.getDate()}, ${today.getFullYear()}`;
    
      let currentFormattedDate = null;
    
      for (let element of elements) {
        if (element.tagName === 'P') {
          const strongElement = element.querySelector('strong');
          if (strongElement) {
            let dateStr = strongElement.textContent.split('|')[0].trim().replace(/[,:]/g, '');
            let dateParts = dateStr.split(' ');
            currentFormattedDate = `${dateParts[0]} ${dateParts[1]}, ${dateParts[2]}`;
          }
        } else if (element.tagName === 'UL' && currentFormattedDate) {
          const fights = element.querySelectorAll('li');
          for (let fight of fights) {
            if (fight.textContent.includes("TBA")) continue;
            const fighterNames = fight.textContent.split(',')[0];
            const teamContainer = document.createElement('div');
            teamContainer.classList.add('row');
            teamContainer.innerHTML = `
              <div class="row">
                <div id='matchcard' class="col column mt-1">
                  <div class="row">
                    <div class="col-3"><span id='leaguenames'>Boxing</span></div>
                    <div id='afterleaguename' class="col-1"></div>
                    <div class="col-5">${fighterNames}</div>
                    <div id='timeofthematch' class="col-3">${currentFormattedDate}</div>
                  </div>
                </div>
              </div>`;
            const listItem = teamContainer.querySelector('.row');
    
            let url = `https://boxing.streameastlive.uno/#${fighterNames}`;
            let newUrl = url.replace(/🏆\s*|🥇\s*/g, '');
    
            listItem.onclick = () => window.open(newUrl, '_blank');
    
            if (currentFormattedDate === todayFormatted) {
              teamContainer.querySelector('#timeofthematch').innerHTML = '<span class="live">LIVE NOW!</span>';
            }
            scheduleContainer.appendChild(teamContainer);
          }
        } else if (element.tagName === 'H3') {
          const nextUL = element.nextElementSibling;
          if (nextUL && nextUL.tagName === 'UL') {
            const h3Text = element.textContent;
            const dateMatch = h3Text.match(/^[A-Za-z]+ \d+/);
            let extractedDate = dateMatch ? dateMatch[0] : null;
    
            const currentYear = today.getFullYear();
            if (extractedDate) {
              extractedDate = extractedDate + ", " + currentYear;
            }
    
            const fights = nextUL.querySelectorAll('li');
            for (let fight of fights) {
              if (fight.textContent.includes("TBA")) continue;
              const fighterNames = fight.textContent.split(',')[0];
              const teamContainer = document.createElement('div');
              teamContainer.classList.add('row');
              teamContainer.innerHTML = `
                <div class="row">
                  <div id='matchcard' class="col column mt-1">
                    <div class="row">
                      <div class="col-3"><span id='leaguenames'>Boxing</span></div>
                      <div id='afterleaguename' class="col-1"></div>
                      <div class="col-5">${fighterNames}</div>
                      <div id='timeofthematch' class="col-3">${extractedDate || h3Text}</div>
                    </div>
                  </div>
                </div>`;
              const listItem = teamContainer.querySelector('.row');
    
              let url = `https://boxing.streameastlive.uno/#${fighterNames}`;
              let newUrl = url.replace(/🏆\s*|🥇\s*/g, '');
    
              listItem.onclick = () => window.open(newUrl, '_blank');
    
              if (extractedDate === todayFormatted) {
                teamContainer.querySelector('#timeofthematch').innerHTML = '<span class="live">LIVE NOW!</span>';
              }
    
              scheduleContainer.appendChild(teamContainer);
            }
          }
        }
      }
    }
    
    document.addEventListener('DOMContentLoaded', function() {
      main();
    });
