const channels = {
        'A': ['ABC USA', 'ACC Network USA', 'Adult Swim', 'Arena Sport 1 BiH', 'Arena Sport 1 Croatia', 'Arena Sport 2 Croatia', 'Arena Sport 3 Croatia', 'Arena Sport 4 Croatia', 'Arena Sport 1 Premium', 'Arena Sport 2 Premium', 'Arena Sport 3 Premium', 'Arena Sport 1 Serbia', 'Arena Sport 2 Serbia', 'Arena Sport 3 Serbia', 'Arena Sport 4 Serbia', 'Alkass One', 'Alkass Two', 'Alkass Three', 'Alkass Four', 'ABS-CBN', 'Abu Dhabi Sports 1 UAE', 'Abu Dhabi Sports 2 UAE', 'Abu Dhabi Sports 1 Premium', 'Abu Dhabi Sports 2 Premium', 'Astro Cricket', 'Antena 3 Spain', 'A&E USA', 'AMC USA', 'Animal Planet', 'Astro SuperSport 1', 'Astro SuperSport 2', 'Astro SuperSport 3', 'Astro SuperSport 4', 'AXN Movies Portugal', 'Arte DE', 'AXS TV USA', 'ABCNY USA'],
        'B': ['BBC News Channel HD', 'BBC One UK', 'BBC Two UK', 'BBC Three UK', 'BBC Four UK', 'BBC 1 DE', 'BIG TEN Network (BTN USA)', 'BBC America (BBCA)', 'BET USA', 'Bravo USA', 'Boomerang', 'BNT 1 Bulgaria', 'BNT 2 Bulgaria', 'BNT 3 Bulgaria', 'BR Fernsehen DE', 'bTV Bulgaria', 'bTV Action Bulgaria', 'bTV Lady Bulgaria'],
        'C': ['Cuatro Spain', 'Channel 4 UK', 'Channel 5 UK', 'CBS Sports Network (CBSSN)', 'Canal+ France', 'Canal+ Sport France', 'Canal+ Foot France', 'Canal+ Sport360', 'Canal 11 Portugal', 'Canal+ Sport Poland', 'Canal+ Sport 2 Poland', 'CANAL+ SPORT 5 Poland', 'Canal+ Premium Poland', 'Canal+ Family Poland', 'Canal+ Seriale Poland', 'Canal+ Sport 1 Afrique', 'Canal+ Sport 2 Afrique', 'Canal+ Sport 3 Afrique', 'Canal+ Sport 4 Afrique', 'Canal+ Sport 5 Afrique', 'CANAL9 Denmark', 'Combate Brasil', 'C More Football Sweden', 'Cosmote Sport 1 HD', 'Cosmote Sport 2 HD', 'Cosmote Sport 3 HD', 'Cosmote Sport 4 HD', 'Cosmote Sport 5 HD', 'Cosmote Sport 6 HD', 'Cosmote Sport 7 HD', 'Cosmote Sport 8 HD', 'Cosmote Sport 9 HD', 'Channel 9 Israel', 'Channel 10 Israel', 'Channel 11 Israel', 'Channel 12 Israel', 'Channel 13 Israel', 'Channel 14 Israel', 'C More Stars Sweden', 'C More First Sweden', 'C More Hits Sweden', 'C More Series Sweden', 'COZI TV USA', 'CMT USA', 'CBS USA', 'CW USA', 'CNBC USA', 'Comedy Central', 'Cartoon Network', 'CNN USA', 'Cinemax USA', 'CTV Canada', 'CTV 2 Canada', 'Crime+ Investigation USA', 'Comet USA', 'Cooking Channel USA', 'Cleo TV', 'C SPAN 1', 'CBSNY USA', 'Citytv', 'CBC CA'],
        'D': ['DAZN 1 Bar DE', 'DAZN 2 Bar DE', 'DAZN 1 Spain', 'DAZN 2 Spain', 'DAZN 3 Spain', 'DAZN 4 Spain', 'DAZN F1 ES', 'DAZN LaLiga', 'DAZN LaLiga 2', 'DR1 Denmark', 'DR2 Denmark', 'Digi Sport 1 Romania', 'Digi Sport 2 Romania', 'Digi Sport 3 Romania', 'Digi Sport 4 Romania', 'Diema Sport Bulgaria', 'Diema Sport 2 Bulgaria', 'Diema Sport 3 Bulgaria', 'Diema Bulgaria', 'Diema Family Bulgaria', 'Dubai Sports 1 UAE', 'Dubai Sports 2 UAE', 'Dubai Sports 3 UAE', 'Dubai Racing 1 UAE', 'Dubai Racing 2 UAE', 'DSTV Mzansi Magic', 'DSTV M-Net', 'DSTV kykNET & kie', 'Discovery Life Channel', 'Disney Channel', 'Discovery Channel', 'Discovery Family', 'Disney XD', 'Destination America', 'Disney JR', 'Dave'],
        'E': ['ESPN USA', 'ESPN2 USA', 'ESPNU USA', 'ESPN 1 NL', 'ESPN 2 NL', 'Eleven Sports 1 Poland', 'Eleven Sports 2 Poland', 'Eleven Sports 3 Poland', 'Eleven Sports 1 Portugal', 'Eleven Sports 2 Portugal', 'Eleven Sports 3 Portugal', 'Eleven Sports 4 Portugal', 'Eleven Sports 5 Portugal', 'EuroSport 1 UK', 'EuroSport 2 UK', 'EuroSport 1 Poland', 'EuroSport 2 Poland', 'EuroSport 1 Spain', 'EuroSport 2 Spain', 'EuroSport 1 Italy', 'EuroSport 2 Italy', 'Eurosport 1 Bulgaria', 'Eurosport 2 Bulgaria', 'ESPN Premium Argentina', 'ESPN Brasil', 'ESPN2 Brasil', 'ESPN3 Brasil', 'ESPN4 Brasil', 'ESPN SUR', 'ESPN2 SUR', 'ESPN Deportes', 'ESPNews', 'E! Entertainment Television', 'E4 Channel'],
        'F': ['Fox Sports 1 USA', 'Fox Sports 2 USA', 'FOX Soccer Plus', 'Fox Cricket', 'FOX Deportes USA', 'FOX Sports 502 AU', 'FOX Sports 503 AU', 'FOX Sports 504 AU', 'FOX Sports 505 AU', 'FOX Sports 506 AU', 'FOX Sports 507 AU', 'Fox Sports Argentina', 'Fox Sports 2 Argentina', 'Fox Sports 3 Argentina', 'Fox Sports Premium MX', 'FilmBox Premium Poland', 'Fight Network', 'Fox Business', 'FOX HD Bulgaria', 'FOX USA', 'FX USA', 'FXX USA', 'Freeform', 'Fox News', 'FX Movie Channel', 'FYI', 'Film4 UK', 'Fashion TV', 'FETV - Family Entertainment Television', 'FOXNY USA', 'Fox Weather Channel'],
        'G': ['GOL PLAY Spain', 'GOLF Channel USA', 'Game Show Network', 'Gol Mundial 1', 'Gold UK', 'Galavisi贸n USA', 'Grit Channel', 'Globo SP', 'Globo RIO', 'Global CA'],
        'H': ['The Hallmark Channel', 'Hallmark Movies & Mysteries', 'HBO USA', 'HBO2 USA', 'HBO Comedy USA', 'HBO Family USA', 'HBO Latino USA', 'HBO Signature USA', 'HBO Zone USA', 'HBO Poland', 'History USA', 'Headline News', 'HGTV', 'HOT3 Israel', 'HR Fernsehen DE'],
        'I': ['ITV 1 UK', 'ITV 2 UK', 'ITV 3 UK', 'ITV 4 UK', 'Italia 1 Italy', 'Investigation Discovery (ID USA)', 'ION USA', 'IFC TV USA'],
        'K': ['Kanal 4 Denmark', 'Kanal 5 Denmark', 'Kabel Eins (Kabel 1) DE'],
        'L': ['LaLiga SmartBank TV', 'LEquipe France', 'La Sexta Spain', 'Liverpool TV (LFC TV)', 'Lifetime Network', 'Lifetime Movies Network', 'Longhorn Network USA', 'La7 Italy', 'LA7d HD+ Italy'],
        'M': ['Match Football 1 Russia', 'Match Football 2 Russia', 'Match Football 3 Russia', 'Match Premier Russia', 'Match TV Russia', 'МАТЧ! БОЕЦ Russia', 'Movistar Laliga', 'Movistar Liga de Campeones', 'Movistar Deportes Spain', 'Movistar Deportes 2 Spain', 'Movistar Deportes 3 Spain', 'Movistar Deportes 4 Spain', 'Movistar Golf Spain', 'Motowizja Poland', 'MSG USA', 'MSNBC', 'Magnolia Network', 'MTV UK', 'MTV USA', 'MUTV UK', 'MAVTV USA', 'Max Sport 1 Croatia', 'Max Sport 2 Croatia', 'Marquee Sports Network', 'Max Sport 1 Bulgaria', 'Max Sport 2 Bulgaria', 'Max Sport 3 Bulgaria', 'Max Sport 4 Bulgaria', 'MLB Network USA', 'MASN USA', 'MY9TV USA', 'Motor Trend', 'METV USA', 'MDR DE', 'Mundotoro TV Spain', 'MTV Denmark'],
        'N': ['NHL Network USA', 'Nova Sport Bulgaria', 'Nova Sport Serbia', 'Nova Sports 1 Greece', 'Nova Sports 2 Greece', 'Nova Sports 3 Greece', 'Nova Sports 4 Greece', 'Nova Sports 5 Greece', 'Nova Sports 6 Greece', 'Nova Sports Premier League Greece', 'Nova Sports Start Greece', 'Nova Sports Prime Greece', 'Nova Sports News Greece', 'NESN USA', 'NBC USA', 'NBA TV USA', 'NBC Sports Chicago', 'NBC Sports Philadelphia', 'NBC Sports Washington', 'NFL Network', 'NBC Sports Bay Area', 'NBC Sports Boston', 'NBC Sports California', 'NBCNY USA', 'Nova TV Bulgaria', 'National Geographic (NGC)', 'NICK JR', 'NICK', 'Nick Music', 'Nicktoons', 'NDR DE', 'NewsNation USA', 'Newsmax USA', 'Nat Geo Wild USA', 'Noovo CA', 'New! CWPIX 11'],
        'O': ['OnTime Sports', 'OnTime Sports 2', 'ONE 1 HD Israel', 'ONE 2 HD Israel', 'Orange Sport 1 Romania', 'Orange Sport 2 Romania', 'Orange Sport 3 Romania', 'Orange Sport 4 Romania', 'Oprah Winfrey Network (OWN)', 'Oxygen True Crime'],
        'P': ['Polsat Poland', 'Polsat Sport Poland', 'Polsat Sport Extra Poland', 'Polsat Sport News Poland', 'Polsat News Poland', 'Polsat Film Poland', 'Porto Canal Portugal', 'ProSieben (PRO7) DE', 'PTV Sports', 'Premier Brasil', 'Prima Sport 1', 'Prima Sport 2', 'Prima Sport 3', 'Prima Sport 4', 'Paramount Network', 'POP TV USA'],
        'R': ['RTE 1', 'RTE 2', 'RMC Sport 1 France', 'RMC Sport 2 France', 'RTP 1 Portugal', 'RTP 2 Portugal', 'RTP 3 Portugal', 'Rai 1 Italy', 'Rai 2 Italy', 'Rai 3 Italy', 'Rai Sport Italy', 'Rai Premium Italy', 'Real Madrid TV Spain', 'RDS CA', 'RDS 2 CA', 'RDS Info CA', 'Ring Bulgaria', 'RTL7 Netherland', 'Racing Tv UK', 'Reelz Channel'],
        'S': ['Sky Sports Football UK', 'Sky Sports Arena UK', 'Sky Sports Action UK', 'Sky Sports Main Event', 'Sky sports Premier League', 'Sky Sports F1 UK', 'Sky Sports Cricket', 'Sky Sports Golf UK', 'Sky Sports Golf Italy', 'Sky Sport MotoGP Italy', 'Sky Sport Tennis Italy', 'Sky Sport F1 Italy', 'Sky Sports News UK', 'Sky Sports MIX UK', 'Sky Sport Top Event DE', 'Sky Sport Mix DE', 'Sky Sport Bundesliga 1 HD', 'Sky Sport Austria 1 HD', 'SportsNet New York (SNY)', 'Sky Sport Football Italy', 'Sky Sport UNO Italy', 'Sky Sport Arena Italy', 'Sky Sports Racing UK', 'Sky UNO Italy', 'Sky Sport 1 NZ', 'Sky Sport 2 NZ', 'Sky Sport 3 NZ', 'Sky Sport 4 NZ', 'Sky Sport 5 NZ', 'Sky Sport 6 NZ', 'Sky Sport 7 NZ', 'Sky Sport 8 NZ', 'Sky Sport 9 NZ', 'Sky Sport Select NZ', 'Sport TV1 Portugal', 'Sport TV2 Portugal', 'Sport TV4 Portugal', 'Sport TV3 Portugal', 'Sport TV5 Portugal', 'Sport TV6 Portugal', 'SIC Portugal', 'SEC Network USA', 'SporTV Brasil', 'SporTV2 Brasil', 'SporTV3 Brasil', 'Sport Klub 1 Serbia', 'Sport Klub 2 Serbia', 'Sport Klub 3 Serbia', 'Sport Klub 4 Serbia', 'Sport Klub HD Serbia', 'Sportsnet Ontario', 'Sportsnet One', 'Sportsnet West', 'Sportsnet East', 'Sportsnet 360', 'Sportsnet World', 'SuperSport Grandstand', 'SuperSport PSL', 'SuperSport Premier league', 'SuperSport LaLiga', 'SuperSport Variety 1', 'SuperSport Variety 2', 'SuperSport Variety 3', 'SuperSport Variety 4', 'SuperSport Action', 'SuperSport Rugby', 'SuperSport Golf', 'SuperSport Tennis', 'SuperSport Motorsport', 'Supersport Football', 'SuperSport Cricket', 'SuperSport MaXimo 1', 'Sporting TV Portugal', 'SportDigital Fussball', 'Spectrum Sportsnet LA', 'Sport1+ Germany', 'Sport1 Germany', 'S4C UK', 'SAT.1 DE', 'Sky Cinema Premiere UK', 'Sky Cinema Select UK', 'Sky Cinema Hits UK', 'Sky Cinema Greats UK', 'Sky Cinema Animation UK', 'Sky Cinema Family UK', 'Sky Cinema Action UK', 'Sky Cinema Thriller UK', 'Sky Cinema Sci-Fi Horror UK', 'Sky Cinema Collection Italy', 'Sky Cinema Uno Italy', 'Sky Cinema Action Italy', 'Sky Cinema Comedy Italy', 'Sky Cinema Uno +24 Italy', 'Sky Cinema Romance Italy', 'Sky Cinema Family Italy', 'Sky Cinema Due +24 Italy', 'Sky Cinema Drama Italy', 'Sky Cinema Suspense Italy', 'Sky Sport 24 Italy', 'Sky Sport Calcio Italy', 'Sky Calcio 1 (251) Italy', 'Sky Calcio 2 (252) Italy', 'Sky Calcio 3 (253) Italy', 'Sky Calcio 4 (254) Italy', 'Sky Calcio 5 (255) Italy', 'Sky Calcio 6 (256) Italy', 'Sky Calcio 7 (257) Italy', 'Sky Serie Italy', 'StarzPlay CricLife 1 HD', 'StarzPlay CricLife 2 HD', 'StarzPlay CricLife 3 HD', 'Sky Showcase UK', 'Sky Arts UK', 'Sky Comedy UK', 'Sky Crime', 'Sky History', 'SSC Sport 1', 'SSC Sport 2', 'SSC Sport 3', 'SSC Sport 4', 'SSC Sport 5', 'SSC Sport Extra 1', 'SSC Sport Extra 2', 'SSC Sport Extra 3', 'Sport 1 Israel', 'Sport 2 Israel', 'Sport 3 Israel', 'Sport 4 Israel', 'Sport 5 Israel', 'Sport 5 PLUS Israel', 'Sport 5 Live Israel', 'Sport 5 Star Israel', 'Sport 5 Gold Israel', 'Science Channel', 'Showtime USA', 'Showtime SHOxBET USA', 'Starz', 'Sky Witness HD', 'Sixx DE', 'Sky Atlantic', 'SYFY USA', 'Sundance TV', 'SWR DE', 'SUPER RTL DE', 'SR Fernsehen DE', 'Smithsonian Channel'],
        'T': ['TNT Sports 1 UK', 'TNT Sports 2 UK', 'TNT Sports 3 UK', 'TNT Sports 4 UK', 'TSN1', 'TSN2', 'TSN3', 'TSN4', 'TSN5', 'TVN HD Poland', 'TVN24 Poland', 'TVP1 Poland', 'TVP2 Poland', 'Telecinco Spain', 'TVE La 1 Spain', 'TVE La 2 Spain', 'TVI Portugal', 'TVI Reality Portugal', 'Teledeporte Spain (TDP)', 'TYC Sports Argentina', 'TVP Sport Poland', 'TNT Brasil', 'TNT Sports Argentina', 'TNT Sports HD Chile', 'Tennis Channel', 'Ten Sports PK', 'TUDN USA', 'Telemundo', 'TBS USA', 'TLC', 'TNT USA', 'TVA Sports', 'TVA Sports 2', 'Travel Channel', 'TruTV USA', 'TVLAND', 'TCM USA', 'TMC Channel USA', 'The Food Network', 'The Weather Channel', 'TVP INFO', 'TeenNick', 'TV ONE USA', 'TV2 Bornholm Denmark', 'TV2 Sport X Denmark', 'TV3 Sport Denmark', 'TV2 Sport Denmark', 'TV2 Denmark', 'TV2 Zulu', 'TV3+ Denmark', 'TVO CA', 'Tennis+ 1', 'Tennis+ 2', 'Tennis+ 3', 'Tennis+ 4', 'Tennis+ 5', 'Tennis+ 6', 'Tennis+ 7', 'Tennis+ 8', 'Tennis+ 9', 'Tennis+ 10', 'Tennis+ 11', 'Tennis+ 12', 'Tennis+ 13', 'Tennis+ 14', 'Tennis+ 15'],
        'U': ['USA Network', 'Universal Kids USA', 'Univision', 'Unimas'],
        'V': ['Viaplay Sports 1 UK', 'Viaplay Sports 2 UK', 'Viaplay Xtra UK', '#Vamos Spain', 'V Film Premiere', 'V Film Family', 'VH1 USA', 'Veronica NL Netherland', 'VTV+ Uruguay', 'VICE TV'],
        'W': ['Willow Cricket', 'Willow XTRA', 'WWE Network', 'Win Sports+ Columbia', 'WETV USA', 'WDR DE'],
        'Y': ['YES Network USA', 'Yes Movies Action Israel', 'Yes Movies Kids Israel', 'Yes Movies Comedy Israel', 'Yas TV UAE', 'Yes TV CA'],
        'Z': ['Ziggo Sport Docu NL', 'Ziggo Sport Select NL', 'Ziggo Sport Racing NL', 'Ziggo Sport Voetbal NL', 'ZDF Info DE'],
        '#': ['18+ (Player-01)', '18+ (Player-02)', '18+ (Player-03)', '18+ (Player-04)', '18+ (Player-05)', '18+ (Player-06)', '18+ (Player-07)', '18+ (Player-08)', '18+ (Player-09)', '18+ (Player-10)', '18+ (Player-11)', '18+ (Player-12)', '18+ (Player-13)', '18+ (Player-14)', '18+ (Player-15)']
    };
    
    function generateLetterNavigation() {
        const letters = ['Full List', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '#'];
        const letterNav = document.getElementById('letterNav');
        
        letters.forEach(letter => {
            if (channels[letter] || letter === 'Full List') {
                const button = document.createElement('button');
                button.innerText = letter;
                button.onclick = () => filterChannels(letter);
                letterNav.appendChild(button);
            }
        });
    }
    
    function filterChannels(letter) {
        const channelsContainer = document.getElementById('channelsContainer');
        channelsContainer.innerHTML = '';
    
        let filteredChannels;
        if (letter === 'Full List') {
            filteredChannels = Object.values(channels).flat();
        } else {
            filteredChannels = channels[letter] || [];
        }
    
        filteredChannels.forEach(channel => {
            const cell = document.createElement('div');
            cell.classList.add('channel-cell');
            
            const anchor = document.createElement('a');
            anchor.href = `https://v3.sportsurge.uno/#${encodeURIComponent(channel)}`;
            anchor.target = '_blank';
            anchor.rel = 'noopener';
            anchor.textContent = channel;
            
            cell.appendChild(anchor);
            channelsContainer.appendChild(cell);
        });
    }
    
    function toggleMobileMenu() {
        const navLinks = document.querySelector('.nav-links');
        navLinks.classList.toggle('show');
    }
    
    // Initialize the page
    document.addEventListener('DOMContentLoaded', () => {
        generateLetterNavigation();
        filterChannels('Full List');
    });
