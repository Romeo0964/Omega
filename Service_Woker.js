const statCache = "statv1";
const dynaCache = "dynav1";

const assests = ["./","./Home.html","./Activities.html","./Ambakka_Kovil_Builder.html","./Ambakka_Kovil_History.html","./Ambakka_Kovil_Kingdom.html","./Ambakka_Kovil.html","./Beaches.html","./Contacts.html","./Heritage_Locations.html","./Polonnaruwa_Vatadhage_Builder.html","./Polonnaruwa_Vatadhage_History.html","./Polonnaruwa_Vatadhage_Kingdom.html","./Polonnaruwa_Vatadhage.html","./Purchase_and_Donate.html","./Wildlife.html","./Fallback.html","./Styles/Activities.css","./Styles/Ambakka_Kovil.css","./Styles/Beaches.css","./Styles/Contacts.css","./Styles/Heritage_Locations.css","./Styles/Home.css","./Styles/Polonnaruwa_Vatadhage.css","./Styles/Purchase_and_Donate.css","./Styles/Wildlife.css","./Styles/Fallback.css","./Scripts/Activities.js","./Scripts/Ambakka_Kovil.js","./Scripts/Beaches.js","./Scripts/Contacts.js","./Scripts/Heritage_Locations.js","./Scripts/Home.js","./Scripts/Main.js","./Scripts/Polonnaruwa_Vatadhage.js","./Scripts/Purchase_and_Donate.js","./Scripts/Wildlife.js","./android-chrome-192x192.png","./android-chrome-512x512.png","./apple-touch-icon.png","./favicon-16x16.png","./favicon-32x32.png","./favicon.ico","./mstile-150x150.png","./safari-pinned-tab.svg","./browserconfig.xml","./manifest.json","./Imagers/Adams_Peak.webp","./Imagers/Ambakka_Kovil.webp","./Imagers/Ancestory.webp","./Imagers/Arrow_Down_Icon.webp","./Imagers/Arrow_Up_Icon.webp","./Imagers/Arumabe_Beach.webp","./Imagers/Avukana_Statue.webp","./Imagers/Bay_Vista.webp","./Imagers/Cap.webp","./Imagers/Ceylon_Spurfowl.webp","./Imagers/Ceylon_Stainwood.webp","./Imagers/Dambulla_Temple.webp","./Imagers/Donations_Icon.webp","./Imagers/Em_1-1.webp","./Imagers/Em_1-2.webp","./Imagers/Em_1-3.webp","./Imagers/Em_2-1.webp","./Imagers/Em_2-2.webp","./Imagers/Em_2-3.webp","./Imagers/Excercises.webp","./Imagers/Facebook_Icon.webp","./Imagers/Fauna_and_Flora.webp","./Imagers/Hiking.webp","./Imagers/Hopea_Cordifolia.webp","./Imagers/Horse_Rider_Wood_Carving.webp","./Imagers/Instagram_Icon.webp","./Imagers/Kumbuk.webp","./Imagers/Kuttam_Pokuna.webp","./Imagers/Leopard.webp","./Imagers/Logo_Icon.webp","./Imagers/Machinery.webp","./Imagers/Malawa_Poraya_Wood_Carving.webp","./Imagers/Marine.webp","./Imagers/Mirissa_Beach.webp","./Imagers/Money.webp","./Imagers/Muragala.webp","./Imagers/Nalagana_Wood_Carving.webp","./Imagers/Nilaveli_Beach_Hotel.webp","./Imagers/Nilaveli_Beach.webp","./Imagers/Pinterest_Icon.webp","./Imagers/Polonnaruwa_Statue.webp","./Imagers/Polonnaruwa_Vatadage.webp","./Imagers/Purchase_Icon.webp","./Imagers/Reddit_Icon.webp","./Imagers/RSS_Icon.webp","./Imagers/Sadhakadapahana.webp","./Imagers/Scenic_Views.webp","./Imagers/Short.webp","./Imagers/Sigiriya.webp","./Imagers/Snapchat_Icon.webp","./Imagers/Somerest_Mirissa_Beach_Hotel.webp","./Imagers/Sri_Lanka_Map.webp","./Imagers/Sri_Lankan_Keelback.webp","./Imagers/Stumbleupon_Icon.webp","./Imagers/Surfing.webp","./Imagers/T-Shirt.webp","./Imagers/Tumblr_Icon.webp","./Imagers/Twitter_Icon.webp","./Imagers/Udawalawe_Reserve.webp","./Imagers/Vehicles.webp","./Imagers/Vimeo_Icon.webp","./Imagers/Whale_Watching.webp","./Imagers/Wilpattu_Reserve.webp","./Imagers/Wonders.webp","./Imagers/Yala_Reserve.webp","./Imagers/Youtube_Icon.webp"]

self.addEventListener("install",(evt)=>{
    evt.waitUntil(
        caches.open(statCache)
    .then((cache)=>{
        console.log("Caching assests....");
        cache.addAll(assests);
        }) 
    );
    console.log("Service worker installed.");
});

self.addEventListener("activate",(evt)=>{
    console.log("Service worker is active.");
    evt.waitUntil(
        caches.keys()
        .then((keys)=>{
            return Promise.all(
                keys.filter(key=>key!==statCache && key!==dynaCache)
                .map(key=>caches.delete(key))
            );
        })
    );
});

self.addEventListener("fetch",(evt)=>{ 
    console.log("Fetch event",evt);
    evt.respondWith(
        caches.match(evt.request)
        .then((cacheRes)=>{
            return cacheRes || fetch(evt.request)
            .then(fetchRes=>{
                return caches.open(dynaCache)
                .then(cache=>{
                    cache.put(evt.request.url,fetchRes.clone());
                    return fetchRes;
                });
            });
        }).catch(()=>{
            if(evt.request.url.indexOf(".html")>-1){
                return caches.match("./Fallback.html")
            }
            })
    );
});