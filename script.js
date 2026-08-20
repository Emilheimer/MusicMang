// Deine Playlist: Trage hier Titel, Künstler und den genauen Dateinamen ein
const songs = [
    { title: "Let's Groove", artist: "", file: "Let's Groove.mp3" },
    { title: "a-ha - Take On Me", artist: "", file: "a-ha - Take On Me.m4a" },
{ title: "Everybody Needs Somebody", artist: "Haddaway", file: "Haddaway - Everybody Needs Somebody....mp3" },
{ title: "36 Grad", artist: "2RAUMWOHNUNG", file: "2RAUMWOHNUNG - 36grad.mp3" },
{ title: "Happy Nation", artist: "Ace of Base", file: "07. Happy Nation.mp3" },
{ title: "Get Down", artist: "Backstreet Boys", file: "10 Backstreet Boys - Get Down.mp3" },
{ title: "Walk This Way", artist: "Aerosmith", file: "Aerosmith - Walk This Way (Audio).mp3" },
{ title: "All That She Wants", artist: "Ace of Base", file: "AllThatSheWants.mp3" },
{ title: "Barbie Girl", artist: "Aqua", file: "Aqua - Barbie Girl (Lyrics).mp3" },
{ title: "I Like the Way You Kiss Me", artist: "Artemas", file: "Artemas - I like the way you kiss me (Lyrics).mp3" },
{ title: "Everybody", artist: "Backstreet Boys", file: "Backstreet Boys - Everybody (Backstreet's B...).mp3" },
{ title: "Beat It", artist: "Michael Jackson", file: "Beat It - Michael Jackson (Lyrics).mp3" },
{ title: "Stayin' Alive", artist: "Bee Gees", file: "Bee Gees Stayin Alive lyrics.mp3" },
{ title: "Crazy in Love", artist: "Beyoncé", file: "Beyonce - Crazy in Love ft. JAY Z (Lyrics).mp3" },
{ title: "Heart of Glass", artist: "Blondie", file: "Blondie - Heart of Glass (Lyrics).mp3" },

{ title: "Livin' on a Prayer", artist: "Bon Jovi", file: "Bon Jovi - Livin' On A Prayer.mp3" },
{ title: "Can't Take My Eyes Off You", artist: "Boys Town Gang", file: "Boys Town Gang - Can't Take My Eyes Off You.mp3" },
{ title: "Toxic", artist: "Britney Spears", file: "Britney Spears - Toxic (Lyrics).mp3" },
{ title: "Summer of '69", artist: "Bryan Adams", file: "Bryan Adams - Summer Of '69 (Official Music V...).mp3" },
{ title: "Captain Jack", artist: "Captain Jack", file: "Captain Jack - Captain Jack (HQ).mp3" },
{ title: "Prada", artist: "cassö, RAYE, D-Block Europe", file: "cassö, RAYE, D-Block Europe - Prada (Lyrics).mp3" },
{ title: "Let's Twist Again", artist: "Chubby Checker", file: "Chubby Checker - Let's Twist Again With Lyrics.mp3" },
{ title: "Johnny B. Goode", artist: "Chuck Berry", file: "Chuck Berry - Johnny B. Goode - Lyrics.mp3" },
{ title: "Come On Eileen", artist: "Dexys Midnight Runners", file: "Come On Eileen (Chris Thor & Benfrandsco Re...).mp3" },
{ title: "Mr. Vain", artist: "Culture Beat", file: "Culture Beat - Mr Vain (Official Video).mp3" },
{ title: "Girls Just Want to Have Fun", artist: "Cyndi Lauper", file: "Cyndi Lauper - Girls Just Wanna Have Fun (Lyrics...).mp3" },
{ title: "Time After Time", artist: "Cyndi Lauper", file: "Cyndi Lauper - Time After Time (Audio).mp3" },
{ title: "Around the World", artist: "Daft Punk", file: "Daft Punk - Around The World (Official Music V...).mp3" },
{ title: "Get Lucky", artist: "Daft Punk", file: "Daft Punk - Get Lucky (Lyrics).mp3" },

{ title: "Computerliebe", artist: "Das Modul", file: "Das Modul - Computerliebe.mp3" },
{ title: "Let's Dance", artist: "David Bowie", file: "David Bowie - Let's Dance (Official Video).mp3" },
{ title: "Memories", artist: "David Guetta feat. Kid Cudi", file: "David Guetta - Memories feat Kid Cudi.mp3" },
{ title: "Groove Is in the Heart", artist: "Deee-Lite", file: "Deee-Lite - Groove Is In The Heart (Official Video).mp3" },
{ title: "Enjoy the Silence", artist: "Depeche Mode", file: "Depeche Mode - Enjoy The Silence (Official Video).mp3" },
{ title: "Just Can't Get Enough", artist: "Depeche Mode", file: "Depeche Mode - Just Can't Get Enough (Official...).mp3" },
{ title: "Mit freundlichen Grüßen", artist: "Die Fantastischen Vier", file: "Die Fantastischen Vier - Mit freundlichen G....mp3" },
{ title: "Alles nur geklaut", artist: "Die Prinzen", file: "Die Prinzen - Alles nur geklaut (Offizielles Musi...).mp3" },
{ title: "Zehn kleine Jägermeister", artist: "Die Toten Hosen", file: "Die Toten Hosen - Zehn Kleine Jägermeister....mp3" },
{ title: "Codo", artist: "DÖF", file: "DÖF - 1983 - Codo.mp3" },
{ title: "Dreams (Will Come Alive)", artist: "2 Brothers on the 4th Floor", file: "Dreams (Will Come Alive).mp3" },
{ title: "September", artist: "Earth, Wind & Fire", file: "Earth, Wind & Fire - September (Lyrics).mp3" },
{ title: "Blue (Da Ba Dee)", artist: "Eiffel 65", file: "Eiffel 65 - Blue (Da Ba Dee).mp3" },
{ title: "I'm Still Standing", artist: "Elton John", file: "Elton John - I'm Still Standing (Lyrics).mp3" },

{ title: "The Final Countdown", artist: "Europe", file: "Europe - The Final Countdown (Lyrics).mp3" },
{ title: "Can't Take My Eyes Off You", artist: "Frankie Valli", file: "Frankie Valli - Can't Take My Eyes Off You (Vi...).mp3" },
{ title: "Living on My Own", artist: "Freddie Mercury", file: "Freddie Mercury - Living On My Own (1993 Remix Re...).mp3" },
{ title: "Freed From Desire", artist: "Gala", file: "Gala - Freed From Desire (1996).mp3" },
{ title: "Freed From Desire", artist: "Gala", file: "Gala - Freed From Desire (1997).mp3" },
{ title: "Careless Whisper", artist: "George Michael", file: "George Michael - Careless Whisper (Official Video).mp3" },
{ title: "Get A Way", artist: "Maxx", file: "Get A Way (Club Mix).mp3" },
{ title: "I Will Survive", artist: "Gloria Gaynor", file: "Gloria Gaynor - I Will Survive (Lyrics).mp3" },
{ title: "What Is Love", artist: "Haddaway", file: "Haddaway - What Is Love (Lyrics).mp3" },
{ title: "Jump Around", artist: "House of Pain", file: "House of Pain - Jump Around (Lyrics).mp3" },
{ title: "In the Air Tonight", artist: "Phil Collins", file: "In The Air Tonight (Remastered).mp3" },
{ title: "Great Balls of Fire", artist: "Jerry Lee Lewis", file: "Jerry Lee Lewis - Great Balls of Fire (Lyric Video).mp3" },
{ title: "Can't Stop the Feeling!", artist: "Justin Timberlake", file: "Justin Timberlake - Can't Stop The Feeling! (Lyrics).mp3" },
{ title: "Lambada", artist: "Kaoma", file: "Kaoma - Lambada.mp3" },

{ title: "Firework", artist: "Katy Perry", file: "Katy Perry - Firework (Lyrics).mp3" },
{ title: "Celebration", artist: "Kool & The Gang", file: "Kool & The Gang - Celebration.mp3" },
{ title: "Be My Lover", artist: "La Bouche", file: "La Bouche - Be My Lover (Lyrics).mp3" },
{ title: "Poker Face", artist: "Lady Gaga", file: "Lady Gaga - Poker Face (Lyrics).mp3" },
{ title: "Tutti Frutti", artist: "Little Richard", file: "Little Richard - Tutti Frutti (Lyrics).mp3" },
{ title: "Party Rock Anthem", artist: "LMFAO", file: "LMFAO - Party Rock Anthem (Lyrics).mp3" },
{ title: "Macarena", artist: "Los Del Rio", file: "Los Del Rio - Macarena (Lyrics).mp3" },
{ title: "Despacito", artist: "Luis Fonsi", file: "Luis Fonsi - Despacito (Lyrics - Lyric Video) ft. D....mp3" },
{ title: "I Follow Rivers", artist: "Lykke Li", file: "Lykke Li - I Follow Rivers (Lyrics).mp3" },
{ title: "Like a Prayer", artist: "Madonna", file: "Madonna - Like A Prayer (Official Video).mp3" },
{ title: "Major Tom (Völlig losgelöst)", artist: "Peter Schilling", file: "Major Tom (Völlig losgelöst).mp3" },
{ title: "Party Rock Anthem", artist: "Manny", file: "manny - Party rock anthem.mp3" },
{ title: "Uptown Funk", artist: "Mark Ronson ft. Bruno Mars", file: "Mark Ronson - Uptown Funk (Lyrics) ft Bruno....mp3" },
{ title: "Like the Way I Do", artist: "Melissa Etheridge", file: "Melissa Etheridge - Like The Way I Do (Official Music V...).mp3" },

{ title: "Beat It", artist: "Michael Jackson", file: "Michael Jackson - Beat It (Official 4K Video).mp3" },
{ title: "Billie Jean", artist: "Michael Jackson", file: "Michael Jackson - Billie Jean (Official Video).mp3" },
{ title: "Dirty Diana", artist: "Michael Jackson", file: "Michael Jackson - Dirty Diana (Lyrics).mp3" },
{ title: "Girl You Know It's True", artist: "Milli Vanilli", file: "Milli Vanilli - Girl You Know It's True.mp3" },
{ title: "Girl You Know It's True", artist: "Milli Vanilli", file: "Milli Vanilli - Girl You Know It's True (Lyrics).mp3" },
{ title: "Maneater", artist: "Nelly Furtado", file: "Nelly Furtado - Maneater (Lyrics).mp3" },
{ title: "Say It Right", artist: "Nelly Furtado", file: "Nelly Furtado - Say It Right.mp3" },
{ title: "Irgendwie, irgendwo, irgendwann", artist: "NENA", file: "NENA - Irgendwie irgendwo irgendwann (19...).mp3" },
{ title: "Ohne Dich (schlaf ich heut Nacht nicht ein)", artist: "Münchener Freiheit", file: "Ohne Dich (schlaf ich heut Nacht nicht ein)....mp3" },
{ title: "Dragostea Din Tei", artist: "O-Zone", file: "OZoneDragosteaDinTei.mp3" },
{ title: "Bailando", artist: "Paradisio", file: "Paradisio - Bailando.mp3" },
{ title: "Another Brick in the Wall", artist: "Pink Floyd", file: "Pink Floyd - another brick in the wall.mp3" },
{ title: "Abenteuerland", artist: "PUR", file: "PUR - Abenteuerland.mp3" },
{ title: "Never Gonna Give You Up", artist: "Rick Astley", file: "Rick Astley - Never Gonna Give You Up (Official Mus...).mp3" },

{ title: "We Found Love", artist: "Rihanna", file: "Rihanna - We Found Love (Lyrics) ft. Calvin....mp3" },
{ title: "Butterfly", artist: "Sash!", file: "Sash! - Butterfly (Official Music Video).mp3" },
{ title: "Rhythm Is a Dancer", artist: "Snap!", file: "SNAP! - Rhythm Is A Dancer (Lyrics).mp3" },
{ title: "Somebody's Watching Me", artist: "Rockwell", file: "Somebodywatchi ngme.mp3" },
{ title: "Wannabe", artist: "Spice Girls", file: "Spice Girls - Wannabe (Lyrics).mp3" },
{ title: "Stereo Love", artist: "Edward Maya & Vika Jigulina", file: "Stereo Love.mp3" },
{ title: "Everybody Wants to Rule the World", artist: "Tears for Fears", file: "Tears For Fears - Everybody Wants To Rule The Wor....mp3" },
{ title: "I Gotta Feeling", artist: "The Black Eyed Peas", file: "The Black Eyed Peas - I Gotta Feeling (Lyrics).mp3" },
{ title: "Shout", artist: "The Isley Brothers", file: "The Isley Brothers - Shout.mp3" },
{ title: "I'm So Excited", artist: "The Pointer Sisters", file: "The Pointer Sisters - I'm So Excited (Lyrics).mp3" },
{ title: "Rock This Town", artist: "Stray Cats", file: "The Stray Cats - Rock This Town.mp3" },
{ title: "It's Raining Men", artist: "The Weather Girls", file: "The Weather Girls - It's Raining Men (Lyrics).mp3" },
{ title: "Think About the Way", artist: "Ice MC", file: "think_about_the_way.mp3" },
{ title: "Africa", artist: "Toto", file: "Toto - Africa (Lyrics).mp3" }

];

const audio = document.getElementById('audio');
const playBtn = document.getElementById('play');
const playIcon = document.getElementById('play-icon');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const title = document.getElementById('title');
const artist = document.getElementById('artist');
const progress = document.getElementById('progress');
const progressContainer = document.getElementById('progress-container');
const playlist = document.getElementById('playlist');
const searchInput = document.getElementById('search-input');
const coverArt = document.getElementById('cover-art');

// NEU: Zeit-Elemente
const currentTimeEl = document.getElementById('current-time');
const durationEl = document.getElementById('duration');

let songIndex = 0;

// Format für die Zeit (aus Sekunden wird Minuten:Sekunden)
function formatTime(seconds) {
    if (isNaN(seconds)) return "0:00";
    const min = Math.floor(seconds / 60);
    const sec = Math.floor(seconds % 60);
    return `${min}:${sec < 10 ? '0' : ''}${sec}`;
}

// Song laden
function loadSong(song) {
    title.innerText = song.title;
    artist.innerText = song.artist || "Unbekannt";
    audio.src = `music/${song.file}`;
    updatePlaylistHighlight();
}

// NEU: Playlist erstellen (mit eingebauter Suchfunktion)
function buildPlaylist(filterTerm = '') {
    playlist.innerHTML = ''; // Liste leeren
    
    songs.forEach((song, index) => {
        // Suchbegriff mit Titel und Künstler abgleichen
        const songText = `${song.title} ${song.artist}`.toLowerCase();
        
        if (songText.includes(filterTerm.toLowerCase())) {
            const li = document.createElement('li');
            li.setAttribute('data-index', index); // Speichert die echte Song-ID
            
            li.innerHTML = `
                <span class="li-icon">music_note</span>
                <div class="li-text">
                    <span class="li-title-text">${song.title}</span>
                    <span class="li-artist-text">${song.artist || 'Unbekannt'}</span>
                </div>
            `;
            
            li.addEventListener('click', () => {
                songIndex = index;
                loadSong(songs[songIndex]);
                playSong();
            });
            playlist.appendChild(li);
        }
    });
    updatePlaylistHighlight();
}

// Suchleisten-Event
searchInput.addEventListener('input', (e) => {
    buildPlaylist(e.target.value);
});

// Highlight in der Liste updaten
function updatePlaylistHighlight() {
    const allItems = playlist.querySelectorAll('li');
    allItems.forEach(item => {
        item.classList.remove('active');
        if(parseInt(item.getAttribute('data-index')) === songIndex) {
            item.classList.add('active');
            item.scrollIntoView({ behavior: 'smooth', block: 'nearest' }); // Scrollt automatisch zum aktiven Song
        }
    });
}

function playSong() {
    playIcon.innerText = 'pause';
    audio.play();
    coverArt.classList.add('playing'); // Dreht die Schallplatte
}

function pauseSong() {
    playIcon.innerText = 'play_arrow';
    audio.pause();
    coverArt.classList.remove('playing'); // Stoppt die Schallplatte
}

playBtn.addEventListener('click', () => {
    const isPlaying = playIcon.innerText === 'pause';
    if (isPlaying) pauseSong();
    else playSong();
});

function prevSong() {
    songIndex--;
    if (songIndex < 0) songIndex = songs.length - 1;
    loadSong(songs[songIndex]);
    playSong();
}

function nextSong() {
    songIndex++;
    if (songIndex > songs.length - 1) songIndex = 0;
    loadSong(songs[songIndex]);
    playSong();
}

prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);

// Fortschrittsbalken UND Zeiten aktualisieren
audio.addEventListener('timeupdate', (e) => {
    const { duration, currentTime } = e.srcElement;
    if (duration) {
        const progressPercent = (currentTime / duration) * 100;
        progress.style.width = `${progressPercent}%`;
        
        // Zeiten ins HTML schreiben
        currentTimeEl.innerText = formatTime(currentTime);
        durationEl.innerText = formatTime(duration);
    }
});

// Wenn man die Metadaten geladen hat (damit die Gesamtlänge sofort angezeigt wird)
audio.addEventListener('loadedmetadata', () => {
    durationEl.innerText = formatTime(audio.duration);
});

// Klick auf Fortschrittsbalken
progressContainer.addEventListener('click', (e) => {
    const width = progressContainer.clientWidth;
    const clickX = e.offsetX;
    const duration = audio.duration;
    audio.currentTime = (clickX / width) * duration;
});

audio.addEventListener('ended', nextSong);

// Alles beim ersten Laden starten
buildPlaylist();
loadSong(songs[songIndex]);
