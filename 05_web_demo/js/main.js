const features = [
['palette','Individuelles Webdesign','Keine 08/15-Baukastenlösung.'],
['layout','2 kostenlose Designvorschläge','Erst ansehen, dann entscheiden.'],
['copy','Texte & Bilder inklusive','Wir erstellen überzeugende Inhalte.'],
['cloud','Hosting & Technik','SSL, Domain-Anbindung, schnelle Ladezeiten.'],
['refresh','Wartung & Updates','Sicher, aktuell und betreut.'],
['seo','SEO-Basis','Für bessere Auffindbarkeit bei Google.'],
['responsive','Responsive Design','Perfekt auf Handy, Tablet und Desktop.'],
['headset','Support & kleine Änderungen','Schnell, persönlich, zuverlässig.']
];
const grid=document.querySelector('.features');
if(grid){grid.innerHTML=features.map(f=>`<article class="feature"><img src="../02_brand/icons/svg/${f[0]}.svg" width="52" height="52" alt=""><h3>${f[1]}</h3><p>${f[2]}</p></article>`).join('');}
