document.addEventListener("DOMContentLoaded", function () {
    // Gallery data
    // Lightbox elements
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const lightboxTitle = document.getElementById("lightbox-title");
    const lightboxDescription = document.getElementById("lightbox-description");
    const closeLightbox = document.querySelector(".close-lightbox");
    const prevLightboxBtn = document.querySelector(".prev-lightbox");
    const nextLightboxBtn = document.querySelector(".next-lightbox");
    const galleryData = [
        {
            id: 1,
            title: "Presentazione Portfolio",
            description:
                "In questo portfolio includo alcuni dei progetti ed esercitazioni che ho svolto negli ultimi anni. È anche possibile visionare uno Showreel delle animazioni renderizzate su Blender, la mia gallerie Sketchfab con alcuni dei miei rilievi 3D e una sezione dedicata alla visualizzazione web di modelli Gaussian Splatting sulla pagina del mio profilo.",
            url: "images/00a.jpg",
        },

        {
            id: 2,
            title: "Indice",
            description: "Indice del portfolio diviso in sezioni a tema.",
            url: "images/00b.jpg",
        },
        {
            id: 3,
            title: "Fotogrammetria Close Range",
            description:
                "Esercitazione di rilievo fotogrammetrico close range eseguito tramite Agisoft Metashape.",
            url: "images/01.jpg",
        },
        {
            id: 4,
            title: "Ottimizzazione su Blender",
            description:
                "Importato il modello su Blender dopo la generazione della mesh, ne è stata realizzata una versione low poly su cui è stato poi fatto un bake delle texture per mantenere i dettagli visivi dell'originale.",
            url: "images/02.jpg",
        },
        {
            id: 5,
            title: "Stampa 3D",
            description:
                "Il modello in alta definizione è stato pulito e preparato per la stampa 3D attraverso il software Cura, e poi stampato con una stampante a filamento.",
            url: "images/03.jpg",
        },
        {
            id: 6,
            title: "Fotogrammetria Close Range",
            description:
                "Un altro rilievo fotogrammetrico realizzato con Photoscan (vecchia versione di Agisoft Metashape), importato poi su Blender per la renderizzazione.",
            url: "images/04.jpg",
        },
        {
            id: 7,
            title: "Ottimizzazione su 3D Coat",
            description:
                "In alternativa a Blender è stato testato l'efficente software 3D-Coat per l'ottimizzazione del modello ottenuto. Grazie a un remeshing semi automatico e un rimapping delle UV sono stati trasferiti i dettagli del modello HP sul nuovo modello LP.",
            url: "images/05.jpg",
        },
        {
            id: 8,
            title: "Comparazione dei modelli",
            description:
                "Il modello High Poly a sinistra e il modello Low Poly ottimizzato con 3D Coat a destra.",
            url: "images/06.jpg",
        },
        {
            id: 9,
            title: "Fotogrammetria Close Range",
            description:
                "Un'altra esercitazione realizzata questa volta tramite il software 3D Flow Zephyr.",
            url: "images/07.jpg",
        },
        {
            id: 10,
            title: "Il modello su Blender",
            description:
                "Il modello è stato esportato su Blender e pulito per un veloce render all'interno della scena.",
            url: "images/08.jpg",
        },
        {
            id: 11,
            title: "Fotogrammetria Close Range",
            description:
                "Secondo rilievo ottenuto con 3DF Zephyr, pulito poi su Blender.",
            url: "images/09.jpg",
        },
        {
            id: 12,
            title: "Texturing su Quixel Mixer",
            description:
                "Una prova di texturizzazione di un modello 3D all'interno del software Quixel Mixer.",
            url: "images/10.jpg",
        },
        {
            id: 13,
            title: "Texture Map",
            description:
                "Visualizzazione di alcune delle texture map realizzate sul programma.",
            url: "images/11.jpg",
        },
        {
            id: 14,
            title: "Materiali su Quixel Mixer",
            description:
                "Un esempio di materiale PBR realizzato su Quixel Mixer partendo da un semplice piano 3D e una alpha texture.",
            url: "images/12.jpg",
        },
        {
            id: 15,
            title: "Hard Surface Modeling su Blender",
            description:
                "Un recente lavoro di hard surface modeling svolto su Blender e texturizzato su Adobe Substance Painter.",
            url: "images/13.jpg",
        },
        {
            id: 16,
            title: "Hard Surface Modeling su Blender",
            description:
                "Un recente lavoro di hard surface modeling svolto su Blender e texturizzato su Adobe Substance Painter.",
            url: "images/14.jpg",
        },
        {
            id: 17,
            title: "Texturing in Substance Painter",
            description:
                "Alcuni esempi di modelli texturizzati su Substance Painter.",
            url: "images/15.jpg",
        },
        {
            id: 18,
            title: "Texturing in Substance Painter",
            description:
                "Modello creato su Blender e texturizzato su Substance Painter.",
            url: "images/16.jpg",
        },
        {
            id: 19,
            title: "Materiali su Materialize",
            description:
                "Creazione di un set di texture PBR su Materialize a partire da una foto.",
            url: "images/17.jpg",
        },
        {
            id: 20,
            title: "3D Studio Max e V-Ray",
            description:
                "Modellazione e composizione di una scena su 3D Studio Max, renderizzata poi tramite V-Ray.",
            url: "images/18.jpg",
        },
        {
            id: 21,
            title: "3D Studio Max e V-Ray",
            description:
                "Un altro esempio di modellazione architettonica e composizione di una scena su 3D Studio Max, renderizzata poi tramite V-Ray.",
            url: "images/19.jpg",
        },
        {
            id: 22,
            title: "Interior Visualization",
            description:
                "Composizione di una scena su Blender e rendering tramite Cycles.",
            url: "images/20.jpg",
        },
        {
            id: 23,
            title: "Modellazione Architettonica su Blender",
            description:
                "Modello, composizione e materiali realizzati su Blender.",
            url: "images/21.jpg",
        },
        {
            id: 24,
            title: "Hard Surface Modeling e Animazione",
            description: "Modello creato, animato e renderizzato su Blender.",
            url: "images/22.jpg",
        },
        {
            id: 25,
            title: "Hard Surface Modeling e Animazione",
            description:
                "Modello creato, animato e renderizzato su Blender. Sono stati usati degli Shape Key durante l'animazione per ricreare un'animazione più dinamica e d'impatto.",
            url: "images/23.jpg",
        },
        {
            id: 26,
            title: "Animazione e Particellari",
            description: "Animazione di un modello realizzato su Blender.",
            url: "images/24.jpg",
        },
        {
            id: 27,
            title: "Hard Surface Modeling e Animazione",
            description:
                "Modello creato, animato e renderizzato su Blender. Sono stati usati degli Shape Key durante l'animazione per ricreare un'animazione più dinamica e d'impatto.",
            url: "images/25.jpg",
        },
        {
            id: 28,
            title: "Hard Surface Modeling e Animazione",
            description:
                "Modello creato, animato e renderizzato su Blender. Sono stati usati degli Shape Key durante l'animazione per ricreare un'animazione più dinamica e d'impatto.",
            url: "images/26.jpg",
        },
        {
            id: 29,
            title: "Modellazione e Rendering",
            description: "Modellazione e Rendering su Blender.",
            url: "images/27.jpg",
        },
        {
            id: 30,
            title: "Hard Surface Modeling",
            description: "Esercizio di modellazione su Blender.",
            url: "images/28.jpg",
        },
        {
            id: 31,
            title: "Hard Surface Modeling e Rendering",
            description: "Modello creato, animato e renderizzato su Blender.",
            url: "images/29.jpg",
        },
        {
            id: 32,
            title: "Modellazione Parametrica non Distruttiva",
            description:
                "Modello realizzato su Blender attraverso tecniche di modellazione non distruttive (modificatori).",
            url: "images/30.jpg",
        },
        {
            id: 33,
            title: "Modellazione Parametrica non Distruttiva",
            description:
                "Modello realizzato su Blender attraverso tecniche di modellazione non distruttive (modificatori).",
            url: "images/31.jpg",
        },
        {
            id: 34,
            title: "Modellazione Organica",
            description:
                "Modellazione organica su Blender, texturing, illuminazione della scena e rendering in Cycles.",
            url: "images/32.jpg",
        },
        {
            id: 35,
            title: "Modellazione Organica",
            description:
                "Preview della scena.",
            url: "images/33.jpg",
        },
        {
            id: 36,
            title: "Illuminazione Volumetrica e Compositing",
            description:
                "Modellazione e texturing della spada, composizione della scena con asset gratuiti e rendering realizzato con Cycles. Sono state utilizzate delle luci volumetriche ed è stato fatto uso dell'editor di Blender per il compositing finale del render.",
            url: "images/34.jpg",
        },
        {
            id: 37,
            title: "Compositing",
            description:
                "Setup dei nodi nel compositor di Blender.",
            url: "images/35.jpg",
        },
        {
            id: 38,
            title: "Rigging e Simulazione Fisica",
            description:
                "Breve animazione realizzata animando tramite rigging un modello 3D con simulazione fisica.",
            url: "images/36.jpg",
        },
        {
            id: 39,
            title: "Cloth Simulation",
            description:
                "Rendering di un'animazione che sfrutta la cloth simulation.",
            url: "images/37.jpg",
        },
        {
            id: 40,
            title: "Giochi Punta e Clicca con Fungus",
            description:
                "Un esempio di gioco punta e clicca realizzato su Unity con l'addon di Funfus, che integra un sistema di visual scripting per la gestione dei dialoghi.",
            url: "images/38.jpg",
        },
        {
            id: 41,
            title: "Giochi Punta e Clicca con Fungus",
            description:
                "Un esempio di gioco punta e clicca realizzato su Unity con l'addon di Funfus, che integra un sistema di visual scripting per la gestione dei dialoghi.",
            url: "images/39.jpg",
        },
        {
            id: 42,
            title: "Giochi a Scorrimento Laterale",
            description:
                "Tra i vari progetti 2D realizzati su Unity ecco alcuni esempi di endless runner a scorrimento laterale.",
            url: "images/40.jpg",
        },
        {
            id: 43,
            title: "Giochi a Scorrimento Laterale",
            description:
                "Tra i vari progetti 2D realizzati su Unity ecco alcuni esempi di endless runner a scorrimento laterale.",
            url: "images/41.jpg",
        },
        {
            id: 44,
            title: "Giochi Top Down Shooter",
            description:
                "Tra i vari progetti 2D realizzati su Unity ecco alcuni esempi di top down shooter.",
            url: "images/42.jpg",
        },
        {
            id: 45,
            title: "Giochi Top Down Shooter",
            description:
                "Tra i vari progetti 2D realizzati su Unity ecco alcuni esempi di top down shooter.",
            url: "images/43.jpg",
        },
        {
            id: 46,
            title: "Giochi Shooter in Prima Persona",
            description:
                "Alcuni esempi di shooter in prima persona realizzati su Unity.",
            url: "images/44.jpg",
        },
        {
            id: 47,
            title: "Giochi Shooter in Prima Persona",
            description:
                "Alcuni esempi di shooter in prima persona realizzati su Unity.",
            url: "images/45.jpg",
        },
        {
            id: 48,
            title: "Giochi di Volo in Terza Persona",
            description:
                "Progetto sviluppato su Unity di un gioco di volo.",
            url: "images/46.jpg",
        },
        {
            id: 49,
            title: "Giochi di Volo in Terza Persona",
            description:
                "Progetto sviluppato su Unity di un gioco di volo.",
            url: "images/47.jpg",
        },
        {
            id: 50,
            title: "Applicazioni Mobile e Mixed Reality",
            description:
                "Un esempio di applicativo mobile sviluppato su unity che implementa un visualizzatore 3D AR.",
            url: "images/48.jpg",
        },
        {
            id: 51,
            title: "Applicazioni Mobile e Mixed Reality",
            description:
                "Un esempio di applicativo mobile sviluppato su unity che implementa un visualizzatore 3D AR.",
            url: "images/49.jpg",
        },
        {
            id: 52,
            title: "Giochi Platform su Unreal Engine",
            description:
                "Un altro Engine utilizzato per la realizzazione dei miei progetti e Unreal Engine, e qui un esempio di un gioco platform 3D realizzato nell'engine.",
            url: "images/50.jpg",
        },
        {
            id: 53,
            title: "Blueprint programming su Unreal Engine",
            description:
                "Un altro Engine utilizzato per la realizzazione dei miei progetti e Unreal Engine, e qui un esempio di un gioco platform 3D realizzato nell'engine.",
            url: "images/51.jpg",
        },
        {
            id: 54,
            title: "Giochi 2D su Godot",
            description:
                "Alcuni esempi di giochi 2D sviluppati su Godot.",
            url: "images/52.jpg",
        },
        {
            id: 55,
            title: "Giochi 2D su Godot",
            description:
                "Alcuni esempi di giochi 2D sviluppati su Godot.",
            url: "images/53.jpg",
        },
    ];

    // DOM elements
    const mainImage = document.getElementById("main-image");
    const imageTitle = document.getElementById("image-title");
    const imageDescription = document.getElementById("image-description");
    const thumbnailsContainer = document.querySelector(".thumbnails-container");
    const prevArrow = document.querySelector(".prev-arrow");
    const nextArrow = document.querySelector(".next-arrow");

    // Current image index
    let currentIndex = 0;

    // Function to load and display an image
    function loadImage(index) {
        // Update current index
        currentIndex = index;

        // Update main image
        mainImage.classList.remove("fade-in");
        // Trigger a reflow
        void mainImage.offsetWidth;
        mainImage.classList.add("fade-in");

        mainImage.src = galleryData[index].url;
        mainImage.alt = galleryData[index].title;

        // Update title and description
        imageTitle.textContent = galleryData[index].title;
        imageDescription.textContent = galleryData[index].description;

        // Update active thumbnail
        const thumbnails = document.querySelectorAll(".thumbnail");
        thumbnails.forEach((thumb, i) => {
            if (i === index) {
                thumb.classList.add("active");
            } else {
                thumb.classList.remove("active");
            }
        });
    }

    // Function to open lightbox
    function openLightbox(index) {
        // Set the lightbox content
        lightboxImg.src = galleryData[index].url;
        lightboxTitle.textContent = galleryData[index].title;
        lightboxDescription.textContent = galleryData[index].description;

        // Show the lightbox
        lightbox.classList.add("active");

        // Prevent body scrolling when lightbox is active
        document.body.style.overflow = "hidden";
    }

    // Function to close lightbox
    function closeLightboxHandler() {
        lightbox.classList.remove("active");

        // Re-enable body scrolling
        document.body.style.overflow = "";
    }

    // Lightbox navigation functions
    function prevLightboxImage() {
        let index = currentIndex - 1;
        if (index < 0) {
            index = galleryData.length - 1;
        }
        loadImage(index);
        // Update lightbox content
        lightboxImg.src = galleryData[index].url;
        lightboxTitle.textContent = galleryData[index].title;
        lightboxDescription.textContent = galleryData[index].description;
    }

    function nextLightboxImage() {
        let index = currentIndex + 1;
        if (index >= galleryData.length) {
            index = 0;
        }
        loadImage(index);
        // Update lightbox content
        lightboxImg.src = galleryData[index].url;
        lightboxTitle.textContent = galleryData[index].title;
        lightboxDescription.textContent = galleryData[index].description;
    }

    // Function to navigate to previous image
    function prevImage() {
        let index = currentIndex - 1;
        if (index < 0) {
            index = galleryData.length - 1;
        }
        loadImage(index);
    }

    // Function to navigate to next image
    function nextImage() {
        let index = currentIndex + 1;
        if (index >= galleryData.length) {
            index = 0;
        }
        loadImage(index);
    }

    // Add event listeners for navigation arrows
    prevArrow.addEventListener("click", prevImage);
    nextArrow.addEventListener("click", nextImage);

    // Add keyboard navigation
    document.addEventListener("keydown", function (event) {
        if (lightbox.classList.contains("active")) {
            // Lightbox keyboard navigation
            if (event.key === "ArrowLeft") {
                prevLightboxImage();
            } else if (event.key === "ArrowRight") {
                nextLightboxImage();
            } else if (event.key === "Escape") {
                closeLightboxHandler();
            }
        } else {
            // Gallery keyboard navigation
            if (event.key === "ArrowLeft") {
                prevImage();
            } else if (event.key === "ArrowRight") {
                nextImage();
            }
        }
    });

    // Add event listeners for lightbox controls
    closeLightbox.addEventListener("click", closeLightboxHandler);
    prevLightboxBtn.addEventListener("click", prevLightboxImage);
    nextLightboxBtn.addEventListener("click", nextLightboxImage);

    // Close lightbox when clicking outside the image
    lightbox.addEventListener("click", function (event) {
        if (event.target === lightbox) {
            closeLightboxHandler();
        }
    });

    // Create thumbnails
    galleryData.forEach((item, index) => {
        const thumbnail = document.createElement("div");
        thumbnail.className = "thumbnail";
        if (index === currentIndex) {
            thumbnail.classList.add("active");
        }

        const thumbImg = document.createElement("img");
        thumbImg.dataset.src = item.url;
        thumbImg.alt = `Thumbnail for ${item.title}`;
        thumbImg.className = "lazyload";

        thumbnail.appendChild(thumbImg);
        thumbnailsContainer.appendChild(thumbnail);

        // Add click event to thumbnail
        thumbnail.addEventListener("click", () => {
            loadImage(index);
        });

        // Add double-click event to thumbnail to open in lightbox
        thumbnail.addEventListener("dblclick", () => {
            loadImage(index);
            openLightbox(index);
        });
    });

    // Add click event to main image to open lightbox
    mainImage.addEventListener("click", function () {
        openLightbox(currentIndex);
    });

    // Load initial image
    loadImage(0);

    // Function to check if element is in viewport for lazy loading
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <=
                (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <=
                (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Initialize Lazysizes
    document.addEventListener("lazyloaded", function (e) {
        // Add a class to fade in the image nicely when loaded
        e.target.parentNode.classList.add("loaded");
    });

    // Swipe functionality for mobile
    let touchStartX = 0;
    let touchEndX = 0;

    const mainImageContainer = document.querySelector(".main-image-container");

    // Listen for touch events
    mainImageContainer.addEventListener(
        "touchstart",
        (e) => {
            touchStartX = e.changedTouches[0].screenX;
        },
        false,
    );

    mainImageContainer.addEventListener(
        "touchend",
        (e) => {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipe();
        },
        false,
    );

    // Handle swipe direction
    function handleSwipe() {
        const swipeThreshold = 50; // Minimum distance for a swipe

        if (touchEndX < touchStartX - swipeThreshold) {
            // Swipe left - next image
            nextImage();
        } else if (touchEndX > touchStartX + swipeThreshold) {
            // Swipe right - previous image
            prevImage();
        }
    }

    // Resize handling for responsive adjustments
    window.addEventListener("resize", () => {
        // You can add specific handling here if needed for resizing
    });
});
