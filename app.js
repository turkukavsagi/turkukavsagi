// İlçe Veritabanı
//
// Yeni ilçe eklemek için aynı yapıda bir blok eklemek yeterli; anahtar (ör. "tonya")
// haritadaki ilçenin adıyla aynı olmalı, harita o ilçeyi kendiliğinden oynanabilir yapar.
//   turkuAdi : başarıda ekranda yazan türkü adı
//   turkuTuru: (isteğe bağlı) türkünün türü, adın yanında parantez içinde görünür
//   turku    : ses dosyasının yolu -> "ses" klasörüne koy (ör. ses/macka.mp3)
//   sorular  : en fazla 4 soru (4 çıkış). ipucu = kutuda yazan soru, cevap = sürüklenen kelime
//   gorsel   : (her soruda) kelimenin görseli, "gorsel" klasöründe durur. Kendi fotoğrafını koymak için
//              dosyayı klasöre at ve buradaki yolu değiştir (png, jpg, svg olur). Sırayla yeşil alanlara yerleşir.
const database = {
    "surmene": {
        title: "Sürmene İlçesi Kültür Bulmacası",
        turkuAdi: "Oy çalamadım gitti Sürmene havasını",
        turku: "ses/surmene.mp3",
        sorular: [
            { id: 0, ipucu: "Sürmene'de ustalar tarafından yapılan meşhur kesici alet?", cevap: "Sürmene Bıçağı", gorsel: "foto/surmene-bicagi.jpg" },
            { id: 1, ipucu: "Karadeniz'in en meşhur küçük balığı?", cevap: "Hamsi", gorsel: "foto/hamsi.jpg" },
            { id: 2, ipucu: "Yörede “uğursuz” anlamına gelen kelime?", cevap: "Ander", gorsel: "foto/ander.jpg" },
            { id: 3, ipucu: "Yörede “karalahana yemeği” anlamına gelen kelime?", cevap: "Ğuliya", gorsel: "foto/guliya.jpg" }
        ]
    },
    "macka": {
        title: "Maçka İlçesi Kültür Bulmacası",
        turkuAdi: "Maçka yolları taşlı",
        turku: "ses/macka.mp3",
        sorular: [
            { id: 0, ipucu: "Maçka'da kayalıklara kurulu, tarihi manastır?", cevap: "Sümela", gorsel: "foto/sumela.jpg" },
            { id: 1, ipucu: "Pirinç ve sütle yapılan meşhur tatlı?", cevap: "Sütlaç", gorsel: "foto/sutlac.jpg" },
            { id: 2, ipucu: "Yörede “kara lastik” anlamına gelen kelime?", cevap: "Çapula", gorsel: "foto/capula.jpg" },
            { id: 3, ipucu: "Yörede “dantel” anlamına gelen kelime?", cevap: "Tentene", gorsel: "foto/tentene.jpg" }
        ]
    },
    "akcaabat": {
        title: "Akçaabat İlçesi Kültür Bulmacası",
        turkuAdi: "Oynayın gız oynayın",
        turku: "ses/akcaabat.mp3",
        sorular: [
            { id: 0, ipucu: "Izgarası ve lezzetiyle tüm ülkeye yayılan köfte?", cevap: "Akçaabat Köftesi", gorsel: "foto/akcaabat-koftesi.jpg" },
            { id: 1, ipucu: "Karadeniz'in üç telli, kemanı andıran müzik aleti?", cevap: "Kemençe", gorsel: "foto/kemence.jpg" },
            { id: 2, ipucu: "Yörede “küçük çocuk” anlamına gelen kelime?", cevap: "Uşak", gorsel: "foto/usak.jpg" },
            { id: 3, ipucu: "Yörede “ağaç dallarını eğmeye yarayan çengelli dal” anlamına gelen kelime?", cevap: "Gugar", gorsel: "foto/gugar.jpg" }
        ]
    },
    "merkez": {
        title: "Trabzon Merkez Kültür Bulmacası",
        turkuAdi: "Tarlaya ektim soğan",
        turku: "ses/merkez.mp3",
        sorular: [
            { id: 0, ipucu: "Altın ve gümüş tellerin ince işçilikle örülmesiyle yapılan, Trabzon'a özgü geleneksel takı sanatı?", cevap: "Trabzon Hasırı", gorsel: "foto/trabzon-hasiri.jpg" },
            { id: 1, ipucu: "Yörede “mısır” anlamına gelen kelime?", cevap: "Lazut", gorsel: "foto/lazut.jpg" },
            { id: 2, ipucu: "Ekşi mayayla yapılan, kalın kabuklu, günlerce bayatlamayan, büyük somunlarıyla meşhur ekmek?", cevap: "Vakfıkebir Ekmeği", gorsel: "foto/vakfikebir-ekmegi.jpg" },
            { id: 3, ipucu: "Yörede “bakırdan yapılmış süt veya yoğurt kabı” anlamına gelen kelime?", cevap: "Bakraç", gorsel: "foto/bakrac.jpg" }
        ]
    },
    "salpazari": {
        title: "Şalpazarı İlçesi Kültür Bulmacası",
        turkuAdi: "Tasa koydum yoğurdu",
        turkuTuru: "Atma türkü",
        turku: "ses/salpazari.mp3",
        sorular: [
            { id: 0, ipucu: "Şalpazarı'nda eskiden çeyizin vazgeçilmez parçası olan, yöresel motiflerle işlenen ayak giysisi?", cevap: "Şalpazarı Çorabı", gorsel: "foto/salpazari-corabi.jpg" },
            { id: 1, ipucu: "Mısır unu, tereyağı ve kolot peyniriyle yapılan meşhur yemek?", cevap: "Kuymak", gorsel: "foto/kuymak.jpg" },
            { id: 2, ipucu: "Yörede “elbise” anlamına gelen kelime?", cevap: "Fistan", gorsel: "foto/fistan.jpg" },
            { id: 3, ipucu: "Yörede “patates” anlamına gelen kelime?", cevap: "Gortubu", gorsel: "foto/gortubu.jpg" }
        ]
    }
};

let currentDistrictData = null;

// İlçeye tıklandığında oyun ekranını aç
function openPuzzle(districtKey) {
    currentDistrictData = database[districtKey];
    if (!currentDistrictData) return;

    document.getElementById('district-title').innerText = currentDistrictData.title;
    resetTurku();
    placeSpots();
    
    // İpuçlarını yerleştir
    const slots = document.querySelectorAll('.road-slot');
    slots.forEach((slot, index) => {
        const hintText = slot.querySelector('.hint-text');
        const dropZone = slot.querySelector('.drop-zone');
        
        // Önceki bırakılan cevapları temizle
        dropZone.innerText = "Cevabı Buraya Bırak";
        dropZone.style.background = "";
        dropZone.style.borderColor = "";
        dropZone.classList.remove('filled');

        if (currentDistrictData.sorular[index]) {
            hintText.innerText = currentDistrictData.sorular[index].ipucu;
            slot.style.display = 'flex';
        } else {
            slot.style.display = 'none';
        }
    });

    // Cevap kartlarını karıştırıp üst alana yükle
    loadAnswers();

    // Ekran değiştir
    document.getElementById('map-screen').classList.remove('active');
    document.getElementById('puzzle-screen').classList.add('active');

    // Ekran görünür olduktan sonra kavşağı ekrana sığdır
    fitBoard();
}

// Kavşağın etrafındaki 4 yeşil alana kelimelerin görsellerini koy
function placeSpots() {
    document.getElementById('board').classList.remove('solved');

    document.querySelectorAll('.green-spot').forEach((spot, index) => {
        const soru = currentDistrictData.sorular[index];
        const img = spot.querySelector('img');
        const caption = spot.querySelector('.spot-caption');

        if (soru && soru.gorsel) {
            // Görsel dosyası bulunamazsa boş bir daire görünmesin
            img.onerror = () => { spot.style.display = 'none'; };
            img.src = soru.gorsel;
                spot.style.setProperty('--bg', `url("${soru.gorsel}")`);
            caption.innerText = soru.cevap;
            spot.style.display = 'flex';
        } else {
            spot.style.display = 'none';
        }
    });
}

// Kavşak tahtasını (900x540) pencereye sığacak şekilde küçült
function fitBoard() {
    const wrap = document.getElementById('board-wrap');
    const board = document.getElementById('board');
    if (!wrap || !board) return;

    const top = wrap.getBoundingClientRect().top + window.scrollY;
    const footer = document.querySelector('.action-footer');
    const reserve = (footer ? footer.offsetHeight + 14 : 60) + 24;
    const availH = window.innerHeight - top - reserve; // alttaki buton için pay
    const availW = window.innerWidth - 40;
    const scale = Math.max(0.3, Math.min(1, availH / 540, availW / 900));

    board.style.transform = `scale(${scale})`;
    wrap.style.width = (900 * scale) + 'px';
    wrap.style.height = (540 * scale) + 'px';
}

window.addEventListener('resize', fitBoard);
document.addEventListener('DOMContentLoaded', () => {
    setupDropZones();
    initMap();
    initTurkuAudio();
});

// Haritadaki ilçeleri tıklanabilir yap.
// database içinde verisi olan ilçe "oynanabilir" olur; yeni ilçe eklemek için
// database'e aynı anahtarla (örn. "tonya") veri eklemek yeterli.
function initMap() {
    const svg = document.getElementById('trabzon-map');
    if (!svg) return;

    svg.querySelectorAll('.district').forEach(group => {
        const key = group.dataset.key;
        const name = group.dataset.name;
        const title = group.querySelector('title');

        if (database[key]) {
            group.classList.add('playable');
            group.setAttribute('tabindex', '0');
            if (title) title.textContent = name + ' - oynamak için tıkla';
            group.addEventListener('click', () => openPuzzle(key));
            group.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    openPuzzle(key);
                }
            });
            // Oynanabilir ilçeler en üstte çizilsin ki vurgu çizgisi komşuların altında kalmasın
            svg.appendChild(group);
        } else {
            if (title) title.textContent = name + ' (çok yakında)';
            group.addEventListener('click', () => showToast(name + ' bulmacası çok yakında! 🚧'));
        }
    });
}

let toastTimer = null;
function showToast(message) {
    const toast = document.getElementById('toast');
    if (!toast) return;
    toast.innerText = message;
    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove('show'), 2200);
}

// ---- Türkü ses çubuğu ----
// Ses dosyaları index.html ile aynı yerdeki "ses" klasöründe durmalı (ör. ses/macka.mp3).
function playTurku() {
    const audio = document.getElementById('turku-audio');
    const bar = document.getElementById('now-playing');
    const label = document.getElementById('now-playing-text');

    let text = '🎵 ' + currentDistrictData.turkuAdi;
    if (currentDistrictData.turkuTuru) text += ' (' + currentDistrictData.turkuTuru + ')';
    label.innerText = text;
    bar.classList.remove('missing');
    bar.classList.add('show');

    audio.src = currentDistrictData.turku;
    // Tarayıcı otomatik oynatmayı engellerse çubuktaki oynat tuşu kullanılabilir.
    audio.play().catch(() => {});
}

function resetTurku() {
    const audio = document.getElementById('turku-audio');
    const bar = document.getElementById('now-playing');
    audio.pause();
    audio.removeAttribute('src');
    bar.classList.remove('show', 'missing');
}

function initTurkuAudio() {
    const audio = document.getElementById('turku-audio');
    const bar = document.getElementById('now-playing');
    const label = document.getElementById('now-playing-text');

    // Ses dosyası klasörde yoksa çocuklar boş bir çubuk görmesin, nedenini yazalım
    audio.addEventListener('error', () => {
        if (!audio.getAttribute('src') || !currentDistrictData) return;
        label.innerText = '⚠️ ' + currentDistrictData.turkuAdi + ' – ses dosyası bulunamadı (' + currentDistrictData.turku + ')';
        bar.classList.add('missing');
    });
}

function goBackToMap() {
    // Müziği durdur
    resetTurku();

    document.getElementById('puzzle-screen').classList.remove('active');
    document.getElementById('map-screen').classList.add('active');
}

// Sürüklenebilir cevapları yükle
function loadAnswers() {
    const container = document.getElementById('draggable-answers');
    container.innerHTML = '';

    let answers = currentDistrictData.sorular.map(q => q.cevap);
    answers.sort(() => Math.random() - 0.5); // Kartları karıştır

    answers.forEach(ans => {
        const item = document.createElement('div');
        item.className = 'draggable-item';
        item.innerText = ans;
        item.setAttribute('draggable', 'true');
        
        // Masaüstü sürükleme
        item.addEventListener('dragstart', (e) => {
            e.dataTransfer.setData('text/plain', ans);
        });

        // Dokunmatik ekran (telefon/tablet) ve tıklama: önce kartı seç, sonra kutucuğa dokun
        item.addEventListener('click', () => {
            const same = selectedCard === item;
            document.querySelectorAll('.draggable-item.selected').forEach(el => el.classList.remove('selected'));
            selectedCard = same ? null : item;
            if (selectedCard) item.classList.add('selected');
        });

        container.appendChild(item);
    });
    selectedCard = null;
}

let selectedCard = null;
function placeAnswer(zone, text) {
    zone.innerText = text;
    zone.classList.add('filled');
}

// Drop zone (Bırakma alanları) olayları
function setupDropZones() {
    const dropZones = document.querySelectorAll('.drop-zone');

    dropZones.forEach(zone => {
        zone.addEventListener('dragover', (e) => {
            e.preventDefault();
            zone.classList.add('drag-over');
        });

        zone.addEventListener('dragleave', () => {
            zone.classList.remove('drag-over');
        });

        zone.addEventListener('drop', (e) => {
            e.preventDefault();
            zone.classList.remove('drag-over');
            placeAnswer(zone, e.dataTransfer.getData('text/plain'));
        });

        zone.addEventListener('click', () => {
            if (!selectedCard) return;
            placeAnswer(zone, selectedCard.innerText);
            selectedCard.classList.remove('selected');
            selectedCard = null;
        });
    });
}

// Cevapları Kontrol Et
function checkAnswers() {
    const dropZones = document.querySelectorAll('.drop-zone');
    let allCorrect = true;
    let answeredCount = 0;

    dropZones.forEach((zone, index) => {
        const slot = zone.closest('.road-slot');
        if (slot.style.display !== 'none' && currentDistrictData.sorular[index]) {
            const userAns = zone.innerText.trim();
            const correctAns = currentDistrictData.sorular[index].cevap;
            
            if (userAns !== "Cevabı Buraya Bırak" && userAns !== "") {
                answeredCount++;
                if (userAns !== correctAns) {
                    allCorrect = false;
                }
            } else {
                allCorrect = false;
            }
        }
    });

    if (allCorrect) {
        // 🎉 Tebrikler Kutlaması (Konfeti)
        // Konfeti kütüphanesi (internetten yüklenir) yüklenemediyse oyun yine de devam etsin
        if (typeof confetti === 'function') confetti({
            particleCount: 120,
            spread: 80,
            origin: { y: 0.6 }
        });

        // Türküyü çal (alert'ten önce, tıklama izni hâlâ geçerliyken)
        // Yeşil alanlardaki görsellerin altında kelimelerin adı görünsün
        document.getElementById('board').classList.add('solved');
        playTurku();

        alert("🎉 Harikasın! Tüm bilmeceleri doğru çözdün. Yöresel türkü çalmaya başlıyor!");
        
    } else {
        alert("❌ Eksik veya yanlış eşleştirme var. Kutucukları kontrol edip tekrar dene!");
    }
}