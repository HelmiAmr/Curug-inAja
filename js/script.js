// Data curug Bandung dari CSV
const waterfalls = [
    {
        id: 1,
        name: "Curug Dago",
        location: [-6.8655225, 107.6181878],
        description: "Air terjun di taman yang rimbun dengan pemandangan lembah & gua. Terdapat dua prasasti peninggalan Raja Thailand. Merupakan salah satu air terjun populer di Bandung.",
        type: "popular",
        rating: 4.1,
        difficulty: "Mudah",
        facilities: ["parking", "toilet", "restaurant"],
        images: [
            "https://assets.pikiran-rakyat.com/crop/0x0:0x0/720x0/webp/photo/2022/10/28/1427314798.jpeg"
        ],
        distance: 5,
        popularity: 1074,
        categories: ["Rekreasi", "Wisata Budaya"]
    },
    {
        id: 2,
        name: "Curug Sigay",
        location: [-6.8582499, 107.5880897],
        description: "Curug ini terletak di kawasan pegunungan, menawarkan suasana alami yang asri dan sejuk. Akses menuju curug ini memerlukan sedikit usaha trekking.",
        type: "challenging",
        rating: 3.9,
        difficulty: "Sulit",
        facilities: ["parking"],
        images: [
            "https://pbs.twimg.com/media/DGwf5gDUAAEUaCy.jpg"
        ],
        distance: 10,
        popularity: 173,
        categories: ["Wisata Alam"]
    },
    {
        id: 3,
        name: "Curug Layung & Camping Ground",
        location: [-6.7768125, 107.5778125],
        description: "Air terjun yang indah dengan area perkemahan di sekitarnya. Cocok untuk aktivitas rekreasi alam, berkemah, dan menikmati ketenangan hutan pinus.",
        type: "popular",
        rating: 4.6,
        difficulty: "Sedang",
        facilities: ["parking", "toilet", "camping"],
        images: [
            "https://telusuri.id/wp-content/uploads/2020/12/CURUG-LAYUNG-1.jpg"
        ],
        distance: 15,
        popularity: 1479,
        categories: ["Petualangan"]
    },
    {
        id: 4,
        name: "Curug Pelangi",
        location: [-6.7987011, 107.5760352],
        description: "Dikenal juga sebagai Curug Cimahi. Daya tarik utamanya adalah lampu sorot warna-warni yang menerangi air terjun di malam hari, menciptakan efek pelangi.",
        type: "popular",
        rating: 4.7,
        difficulty: "Mudah",
        facilities: ["parking", "toilet", "restaurant"],
        images: [
            "https://assets.pikiran-rakyat.com/crop/0x0:0x0/720x0/webp/photo/2023/08/10/3328014650.jpg"
        ],
        distance: 12,
        popularity: 844,
        categories: ["Rekreasi", "Fotografi"]
    },
    {
        id: 5,
        name: "Curug Tilu Leuwi Opat",
        location: [-6.7907749, 107.5820095],
        description: "Wisata air terjun dengan beberapa tingkatan (tilu leuwi) dan kolam alami (opat). Menawarkan pemandangan alam yang asri dan cocok untuk berenang atau bermain air.",
        type: "family",
        rating: 4.4,
        difficulty: "Sedang",
        facilities: ["parking", "toilet"],
        images: [
            "https://wisatalova.com/wp-content/uploads/2016/11/curug-tilu-leuwi-opat.jpg"
        ],
        distance: 14,
        popularity: 1717,
        categories: ["Rekreasi", "Petualangan"]
    },
    {
        id: 6,
        name: "Curug Bugbrug",
        location: [-6.7921116, 107.5800837],
        description: "Air terjun dengan bentuk yang unik menyerupai tirai lebar, memberikan kesan megah. Lingkungan sekitar masih alami dan hijau.",
        type: "challenging",
        rating: 4.7,
        difficulty: "Sulit",
        facilities: ["parking"],
        images: [
            "https://tourbandung.id/wp-content/uploads/2018/11/34.-Curug-Bugbrug-Bandung-750x450.jpeg"
        ],
        distance: 14,
        popularity: 296,
        categories: ["Wisata Alam", "Fotografi"]
    },
    {
        id: 7,
        name: "Curug Lalay Padaasih",
        location: [-6.8380488, 107.5657248],
        description: "Dinamai 'lalay' (kelelawar) karena konon terdapat kelelawar di sekitar gua atau tebing curug ini. Menawarkan suasana alami dan belum terlalu ramai.",
        type: "challenging",
        rating: 4.4,
        difficulty: "Sulit",
        facilities: ["parking"],
        images: [
            "https://blue.kumparan.com/image/upload/fl_progressive,fl_lossy,c_fill,f_auto,q_auto:best,w_640/v1634025439/01j54f5fpgyaz9mc8qgvrq9jky.jpg"
        ],
        distance: 18,
        popularity: 47,
        categories: ["Wisata Alam"]
    },
    {
        id: 8,
        name: "Curug Barongsai",
        location: [-6.8620064, 107.5737148],
        description: "Nama 'Barongsai' diambil dari bentuk batuan atau aliran airnya yang menyerupai naga atau barongsai. Sebuah curug tersembunyi yang menawarkan ketenangan.",
        type: "challenging",
        rating: 4.1,
        difficulty: "Sulit",
        facilities: ["parking"],
        images: [
            "https://assets.promediateknologi.id/crop/0x338:720x930/750x500/webp/photo/2023/08/12/Screenshot_20230812-171446_Maps-799502532.jpg"
        ],
        distance: 8,
        popularity: 24,
        categories: ["Wisata Alam"]
    },
    {
        id: 9,
        name: "Curug Senja",
        location: [-6.845595, 107.564594],
        description: "Air terjun yang menawarkan pemandangan indah saat senja, dengan cahaya matahari terbenam yang memantul pada air terjun.",
        type: "popular",
        rating: 4.6,
        difficulty: "Sulit",
        facilities: ["parking"],
        images: [
            "https://i.pinimg.com/736x/ad/dd/a3/addda301f031fbbd5536b9e1dfa6f4c2.jpg"
        ],
        distance: 12,
        popularity: 281,
        categories: ["Wisata Alam", "Fotografi"]
    },
    {
        id: 10,
        name: "Curug Batu Templek Cisanggarung",
        location: [-6.8747659, 107.6845319],
        description: "Air terjun yang mengalir di atas formasi batuan besar yang menyerupai lempengan-lempengan (templek). Lokasi ini menawarkan pemandangan alam yang unik.",
        type: "popular",
        rating: 4.5,
        difficulty: "Sedang",
        facilities: ["parking", "toilet"],
        images: [
            "https://static.republika.co.id/uploads/images/xlarge/039832500-1684073284-1280-856.jpg"
        ],
        distance: 20,
        popularity: 564,
        categories: ["Wisata Alam", "Fotografi", "Wisata Edukasi"]
    },

    {
        id: 11,
        name: "Curug Jompong",
        location: [-6.9379446, 107.5294872],
        description: "Curug ini memiliki aliran air yang relatif pendek namun lebar, atau memiliki kolam di bawahnya. Cocok untuk rekreasi singkat.",
        type: "easy",
        rating: 4.2,
        difficulty: "Sedang",
        facilities: ["parking", "toilet"],
        images: [
            "https://tourbandung.id/wp-content/uploads/2019/05/Curug-Jompong.jpg"
        ],
        distance: 25,
        popularity: 579,
        categories: ["Wisata Alam"]
    },
    {
        id: 12,
        name: "Curug Cilengkrang",
        location: [-6.8906021, 107.7308262],
        description: "Salah satu curug yang cukup mudah diakses di sekitar Bandung. Menawarkan suasana yang asri dengan aliran air yang tidak terlalu deras.",
        type: "easy",
        rating: 4.1,
        difficulty: "Sedang",
        facilities: ["parking", "toilet"],
        images: [
            "https://assets.promediateknologi.id/crop/0x0:0x0/750x500/webp/photo/p1/849/2023/09/06/cilengkrang-2080396390.jpg"
        ],
        distance: 30,
        popularity: 736,
        categories: ["Rekreasi"]
    },
    {
        id: 13,
        name: "Curug Cipanas",
        location: [-6.8018806, 107.5915295],
        description: "Air terjun yang unik karena airnya bersumber dari mata air panas alami. Pengunjung bisa menikmati kehangatan air di kolam alami di bawah air terjun.",
        type: "popular",
        rating: 4.0,
        difficulty: "Mudah",
        facilities: ["parking", "toilet", "restaurant"],
        images: [
            "https://assets.pikiran-rakyat.com/crop/0x0:0x0/750x500/photo/2023/10/07/149984431.jpg"
        ],
        distance: 15,
        popularity: 5738,
        categories: ["Rekreasi"]
    },
    {
        id: 14,
        name: "Air Terjun Anom",
        location: [-6.8131166, 107.5687624],
        description: "Curug ini memiliki ukuran yang tidak terlalu besar ('anom' berarti muda/kecil), namun tetap menawarkan keindahan alam yang asri dan menyegarkan.",
        type: "challenging",
        rating: 4.6,
        difficulty: "Sulit",
        facilities: ["parking"],
        images: [
            "https://static.promediateknologi.id/crop/0x0:0x0/0x0/webp/photo/p2/11/2024/01/28/WhatsApp-Image-2024-01-28-at-190114-279931703.jpeg"
        ],
        distance: 16,
        popularity: 273,
        categories: ["Wisata Alam"]
    },
    {
        id: 15,
        name: "Curug Maribaya",
        location: [-6.8301382, 107.6549448],
        description: "Kompleks wisata alam yang luas dengan beberapa air terjun (Curug Cikawari, Curug Cigulung, dll.), pemandian air panas, dan berbagai fasilitas.",
        type: "family",
        rating: 4.2,
        difficulty: "Mudah",
        facilities: ["parking", "toilet", "restaurant", "camping"],
        images: [
            "https://cnc-magazine.oramiland.com/parenting/images/curug-maribaya.width-800.format-webp.webp"
        ],
        distance: 18,
        popularity: 5129,
        categories: ["Rekreasi"]
    },
    {
        id: 16,
        name: "Curug Penganten",
        location: [-6.8356288, 107.5656592],
        description: "Nama 'penganten' (pengantin) diambil dari dua aliran air yang berdampingan, menyerupai sepasang pengantin. Menawarkan keindahan alam yang romantis.",
        type: "challenging",
        rating: 4.2,
        difficulty: "Sulit",
        facilities: ["parking"],
        images: [
            "https://cdn.idntimes.com/content-images/community/2021/12/239752508-4670768159634824-7604271202362122992-n-bfb992da3e868dc126514a39313affd2-e1b389ccd2770edc612e5e639e26dab3.jpg"
        ],
        distance: 17,
        popularity: 360,
        categories: ["Rekreasi"]
    },
    {
        id: 17,
        name: "Curug Aseupan",
        location: [-6.7875652, 107.5822844],
        description: "Curug ini dikenal dengan formasi batuan yang unik, menyerupai alat menanak nasi tradisional 'aseupan'.",
        type: "challenging",
        rating: 4.7,
        difficulty: "Sulit",
        facilities: ["parking"],
        images: [
            "https://assets.promediateknologi.id/crop/0x0:0x0/750x500/webp/photo/p3/27/2024/02/13/_Curug-Aseupan-di-Bandung-2081082263.jpg"
        ],
        distance: 19,
        popularity: 301,
        categories: ["Wisata Alam", "Fotografi"]
    },
    {
        id: 18,
        name: "Curug Sawer Kacapi",
        location: [-6.8308796, 107.5671802],
        description: "Nama 'sawer' seringkali menunjukkan aliran air yang menyebar. 'Kacapi' merujuk pada bentuk batuan atau suara air yang menyerupai alat musik kacapi.",
        type: "challenging",
        rating: 4.4,
        difficulty: "Sulit",
        facilities: ["parking"],
        images: [
            "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjF4AANKViCdzXpN7-sYCRY-EHEexxrVaY_nly9ry8GzeGy4pT1dra0w4EaZT3gZH3eHiDxRwTMqFOZnFSPM3TYM5qoEsKr_1PJQqvpJYSddTYzsEeBHb8Xij0atUdN5oQI62qocH3PXHi4_0GhZ8smQCPVA63mkiYzjcpa3VTLbXGoNb9Ra-1_tToUaQ/w0/WhatsApp%20Image%202022-09-11%20at%2022.17.26%20(1).jpeg"
        ],
        distance: 17,
        popularity: 27,
        categories: ["Wisata Alam"]
    },
    {
        id: 19,
        name: "Curug Cipalasari",
        location: [-6.7821708, 107.559588],
        description: "Curug yang masih alami dan belum banyak tersentuh. Menawarkan keindahan alam yang tenang.",
        type: "challenging",
        rating: 4.6,
        difficulty: "Sulit",
        facilities: ["parking"],
        images: [
            "https://static.promediateknologi.id/crop/0x0:0x0/750x500/webp/photo/p1/593/2025/02/17/cipalasari-3678823216.jpg"
        ],
        distance: 20,
        popularity: 123,
        categories: ["Wisata Alam"]
    },
    {
        id: 20,
        name: "Prasasti Curug Omas",
        location: [-6.834892, 107.6582199],
        description: "Bukan curug itu sendiri, melainkan sebuah prasasti yang terletak di dekat Curug Omas, salah satu air terjun di kompleks Maribaya. Prasasti ini memiliki nilai sejarah.",
        type: "popular",
        rating: 4.2,
        difficulty: "Sulit",
        facilities: ["parking", "toilet"],
        images: [
            "https://pbs.twimg.com/media/B8RrtyGCEAAwMlK?format=jpg&name=large"
        ],
        distance: 18,
        popularity: 473,
        categories: ["Wisata Budaya"]
    },
   
    {
        id: 21,
        name: "Curug Luhur Cibodas",
        location: [-6.8047605, 107.7121325],
        description: "Air terjun tinggi dengan debit air yang cukup besar, menawarkan pemandangan yang megah dan kolam alami yang dalam di bawahnya.",
        type: "challenging",
        rating: 4.2,
        difficulty: "Sulit",
        facilities: ["parking"],
        images: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS0PDyNPQfZs-0xQbG7aerQv2gPcJTVfp3cg&s"
        ],
        distance: 25,
        popularity: 237,
        categories: ["Fotografi"]
    },
    {
        id: 22,
        name: "Curug Putri",
        location: [-6.7795359, 107.582205],
        description: "Curug yang dinamai 'putri' karena keindahannya yang mempesona atau karena bentuknya yang anggun. Sering menjadi tujuan wisata keluarga.",
        type: "family",
        rating: 4.6,
        difficulty: "Mudah",
        facilities: ["parking", "toilet"],
        images: [
            "https://blue.kumparan.com/image/upload/fl_progressive,fl_lossy,c_fill,f_auto,q_auto:best,w_640/v1634025439/01hx3r174zn61021ks9qtq901q.jpg"
        ],
        distance: 19,
        popularity: 127,
        categories: ["Rekreasi"]
    },
    {
        id: 23,
        name: "Curug Cimanggu",
        location: [-6.8219799, 107.5109424],
        description: "Curug ini terletak di kawasan yang sejuk dan asri, cocok untuk rekreasi dan menikmati alam.",
        type: "easy",
        rating: 4.2,
        difficulty: "Mudah",
        facilities: ["parking", "toilet"],
        images: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe4DCtMi6B_nROz7drh591cSgu0iIrAFuc_Q&s"
        ],
        distance: 22,
        popularity: 107,
        categories: ["Rekreasi"]
    },
    {
        id: 24,
        name: "Curug Batu Templek Atas",
        location: [-6.8684936, 107.6845316],
        description: "Merupakan bagian atas dari kompleks Curug Batu Templek, menawarkan pemandangan yang berbeda dan akses yang lebih menantang.",
        type: "challenging",
        rating: 4.7,
        difficulty: "Sulit",
        facilities: ["parking"],
        images: [
            "https://assets.pikiran-rakyat.com/crop/0x0:0x0/750x500/photo/2023/05/04/3051717354.png"
        ],
        distance: 21,
        popularity: 57,
        categories: ["Wisata Alam", "Wisata Edukasi"]
    },
    {
        id: 25,
        name: "Curug Aleh",
        location: [-6.8782856, 107.5728581],
        description: "Curug yang tidak terlalu besar, namun menawarkan keindahan alami dan ketenangan.",
        type: "challenging",
        rating: 4.3,
        difficulty: "Sulit",
        facilities: ["parking"],
        images: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS1gw3IgGSXwWfjRLB5E06IBod6VOVRfSgLw&s"
        ],
        distance: 9,
        popularity: 4,
        categories: ["Wisata Alam"]
    },
 
    {
        id: 26,
        name: "Curug Batu",
        location: [-6.8512757, 107.654743],
        description: "Dinamai 'Batu' karena dominasi formasi batuan di sekitar air terjun. Menawarkan pemandangan yang unik.",
        type: "challenging",
        rating: 3.3,
        difficulty: "Sulit",
        facilities: ["parking"],
        images: [
            "https://thumb.viva.id/vivabandung/1265x711/2022/07/08/62c7de292f571-wisata-curug-batu-templek-bandung_bandung.jpg"
        ],
        distance: 18,
        popularity: 3,
        categories: ["Wisata Alam"]
    },
    {
        id: 27,
        name: "Curug Citunggul",
        location: [-6.802181, 107.708577],
        description: "Curug ini memiliki aliran air yang jatuh dari ketinggian dan membentuk kolam di bawahnya.",
        type: "challenging",
        rating: 4.6,
        difficulty: "Sulit",
        facilities: ["parking"],
        images: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_jluiPOKxbacDWbulAkgaISrx1tWZHujlZQ&s"
        ],
        distance: 24,
        popularity: 25,
        categories: ["Wisata Alam"]
    },
    {
        id: 28,
        name: "Curug Cigorowong",
        location: [-6.8432007, 107.612654],
        description: "Curug yang memiliki karakteristik aliran air atau lingkungan yang khas.",
        type: "challenging",
        rating: 3.0,
        difficulty: "Sulit",
        facilities: ["parking"],
        images: [
            "https://images.unsplash.com/photo-1506929562872-bb421503ef21?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        ],
        distance: 15,
        popularity: 1,
        categories: ["Wisata Alam"]
    },
    {
        id: 29,
        name: "Curug Sawer Cililin",
        location: [-6.9588517, 107.4615187],
        description: "'Sawer' menunjukkan aliran air yang menyebar. Curug ini menawarkan keindahan alam di daerah Cililin.",
        type: "challenging",
        rating: 4.1,
        difficulty: "Sulit",
        facilities: ["parking"],
        images: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvnwAiV4NCv-M7KD2wzfJHhQFRKTxj2VDJmw&s"
        ],
        distance: 35,
        popularity: 376,
        categories: ["Rekreasi"]
    },
    {
        id: 30,
        name: "Curug Malela",
        location: [-7.0114098, 107.2055937],
        description: "Dikenal sebagai 'Niagara Mini' Jawa Barat karena bentuknya yang lebar menyerupai Niagara. Menawarkan pemandangan yang sangat indah dan megah.",
        type: "popular",
        rating: 4.6,
        difficulty: "Sedang",
        facilities: ["parking", "toilet"],
        images: [
            "https://ipol.id/wp-content/uploads/2024/01/B800141-Cover-Wisata-Curug-Malela.jpg"
        ],
        distance: 45,
        popularity: 419,
        categories: ["Wisata Alam", "Fotografi"]
    },
   
    {
        id: 31,
        name: "Curug Kadaka",
        location: [-6.7837948, 107.6518622],
        description: "Curug yang memiliki tumbuhan kadaka di sekitarnya. Menawarkan suasana alami dan tenang.",
        type: "challenging",
        rating: 4.3,
        difficulty: "Sulit",
        facilities: ["parking"],
        images: [
            "https://www.gemasulawesi.com/storage/photos/mengintip-wisata-curug-kadaka-bandung-dengan-keindahannya-yang-tersembunyi-cocok-untuk-piknik-bareng-keluarga.jpeg"
        ],
        distance: 22,
        popularity: 15,
        categories: ["Wisata Alam"]
    },
    {
        id: 32,
        name: "Curug Tipu River Camp",
        location: [-6.7945557, 107.5787243],
        description: "Tidak hanya curug, tetapi juga area perkemahan di tepi sungai. Cocok untuk petualangan alam dan berkemah.",
        type: "challenging",
        rating: 5.0,
        difficulty: "Sulit",
        facilities: ["parking", "camping"],
        images: [
            "https://images.unsplash.com/photo-1505228395891-9a51e7e86bf6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        ],
        distance: 16,
        popularity: 1,
        categories: ["Petualangan"]
    },
    {
        id: 33,
        name: "Curug Cinulang",
        location: [-6.9628607, 107.8815424],
        description: "Curug yang populer dengan aliran air yang cukup deras dan kolam alami yang jernih.",
        type: "easy",
        rating: 4.3,
        difficulty: "Mudah",
        facilities: ["parking", "toilet"],
        images: [
            "https://ik.imagekit.io/tvlk/blog/2024/08/shutterstock_2494946311.jpg?tr=q-70,c-at_max,w-500,h-300,dpr-2"
        ],
        distance: 50,
        popularity: 2387,
        categories: ["Rekreasi"]
    },
    {
        id: 34,
        name: "Curug Bukit Tunggul",
        location: [-6.8335144, 107.7341564],
        description: "Air terjun yang terletak di lereng gunung, menawarkan udara sejuk dan pemandangan hutan.",
        type: "challenging",
        rating: 3.3,
        difficulty: "Sulit",
        facilities: ["parking"],
        images: [
            "https://blue.kumparan.com/image/upload/fl_progressive,fl_lossy,c_fill,f_auto,q_auto:best,w_640/v1634025439/01hra89bdwxq7gz7h7gz530s5h.jpg"
        ],
        distance: 30,
        popularity: 7,
        categories: ["Wisata Alam"]
    },
    {
        id: 35,
        name: "Curug Ciraja",
        location: [-6.7676221, 107.4509863],
        description: "Curug yang memiliki karakteristik khusus pada aliran air atau formasi batuan.",
        type: "challenging",
        rating: 4.2,
        difficulty: "Sulit",
        facilities: ["parking"],
        images: [
            "https://i.ytimg.com/vi/0Rt5YyRrIo8/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDpQtoDHxKD3Dc2qS_-_qn9TDti_Q"
        ],
        distance: 40,
        popularity: 16,
        categories: ["Wisata Alam"]
    },
    
    {
        id: 36,
        name: "Curug Sawer",
        location: [-7.0238894, 107.467684],
        description: "Aliran air yang menyebar. Menawarkan keindahan alam yang asri.",
        type: "challenging",
        rating: 4.5,
        difficulty: "Sulit",
        facilities: ["parking"],
        images: [
            "https://www.radarbandung.id/wp-content/uploads/2022/10/curug-sawer.png"
        ],
        distance: 55,
        popularity: 12,
        categories: ["Wisata Alam"]
    },
    {
        id: 37,
        name: "Curug Buntung",
        location: [-6.7858083, 107.4730632],
        description: "Nama 'buntung' mengacu pada bagian air terjun yang terputus atau tidak terlalu panjang.",
        type: "challenging",
        rating: 4.5,
        difficulty: "Sulit",
        facilities: ["parking"],
        images: [
            "https://www.bandungbaratpos.com/wp-content/uploads/2021/02/PSX_20210217_202603.jpg"
        ],
        distance: 38,
        popularity: 8,
        categories: ["Wisata Alam"]
    },
    {
        id: 38,
        name: "Curug Siliwangi",
        location: [-7.1338532, 107.6243364],
        description: "Dinamai dari nama raja Sunda Prabu Siliwangi, karena keagungan atau nilai sejarahnya.",
        type: "challenging",
        rating: 4.5,
        difficulty: "Sulit",
        facilities: ["parking"],
        images: [
            "https://tourbandung.id/wp-content/uploads/2019/05/Curug-Siliwangi-1030x541.jpg"
        ],
        distance: 60,
        popularity: 57,
        categories: ["Wisata Alam", "Wisata Budaya"]
    },
    {
        id: 39,
        name: "Curug Jawa",
        location: [-6.8690829, 107.3552817],
        description: "Curug yang memiliki karakteristik tertentu yang membedakannya.",
        type: "challenging",
        rating: 5.0,
        difficulty: "Sulit",
        facilities: ["parking"],
        images: [
            "https://images.unsplash.com/photo-1506929562872-bb421503ef21?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        ],
        distance: 35,
        popularity: 3,
        categories: ["Wisata Alam"]
    },
    {
        id: 40,
        name: "Curug Mandala",
        location: [-6.7340223, 107.6325585],
        description: "Curug yang menawarkan keindahan alam dan suasana yang menenangkan.",
        type: "challenging",
        rating: 4.5,
        difficulty: "Sulit",
        facilities: ["parking"],
        images: [
            "https://atourin.obs.ap-southeast-3.myhuaweicloud.com/images/destination/subang/curug-mandala-profile1695638365.jpeg?x-image-process=image/resize,p_100,limit_1/imageslim"
        ],
        distance: 28,
        popularity: 371,
        categories: ["Wisata Alam"]
    },
   
    {
        id: 41,
        name: "Curug Agin",
        location: [-6.8923904, 107.6918769],
        description: "Curug yang memiliki karakteristik aliran air atau lingkungan yang khas.",
        type: "challenging",
        rating: 1.0,
        difficulty: "Sulit",
        facilities: ["parking"],
        images: [
            "https://images.unsplash.com/photo-1506929562872-bb421503ef21?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        ],
        distance: 30,
        popularity: 1,
        categories: ["Wisata Alam"]
    },
    {
        id: 42,
        name: "Curug Pangragajian",
        location: [-6.814856, 107.6343988],
        description: "Curug yang memiliki nama yang unik karena karakteristik alamnya.",
        type: "challenging",
        rating: 1.0,
        difficulty: "Sulit",
        facilities: ["parking"],
        images: [
            "https://images.unsplash.com/photo-1505228395891-9a51e7e86bf6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        ],
        distance: 20,
        popularity: 1,
        categories: ["Wisata Alam"]
    },
    {
        id: 43,
        name: "Curug Golosor",
        location: [-6.7795336, 107.5821899],
        description: "Nama 'golosor' berarti meluncur, karena aliran airnya yang meluncur di atas batuan.",
        type: "challenging",
        rating: 3.0,
        difficulty: "Sulit",
        facilities: ["parking"],
        images: [
            "https://images.unsplash.com/photo-1506929562872-bb421503ef21?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        ],
        distance: 19,
        popularity: 1,
        categories: ["Wisata Alam"]
    },
    {
        id: 44,
        name: "Curug Cipeureu",
        location: [-6.7478937, 107.6570986],
        description: "Curug yang menawarkan keindahan alam yang tenang.",
        type: "challenging",
        rating: 4.4,
        difficulty: "Sulit",
        facilities: ["parking"],
        images: [
            "https://wisato.id/wp-content/uploads/2023/12/Curug-Cipeureu_1a.jpg"
        ],
        distance: 26,
        popularity: 403,
        categories: ["Wisata Alam"]
    },
    {
        id: 45,
        name: "Curug Gawang",
        location: [-7.0301586, 107.4151493],
        description: "Nama 'gawang' merujuk pada bentuk batuan atau aliran air yang menyerupai gawang.",
        type: "challenging",
        rating: 4.2,
        difficulty: "Sulit",
        facilities: ["parking"],
        images: [
            "https://lh5.googleusercontent.com/p/AF1QipO4IBYKLggbvNvGV-SRRBwzhavC7-4q5W0Np2fB=w408-h544-k-no"
        ],
        distance: 50,
        popularity: 172,
        categories: ["Wisata Alam"]
    },
    
    {
        id: 46,
        name: "Wisata Curug Bandi Cipangeran",
        location: [-6.8755051, 107.3865762],
        description: "Lokasi wisata yang berpusat pada air terjun Bandi, menawarkan suasana alam yang asri.",
        type: "challenging",
        rating: 5.0,
        difficulty: "Sulit",
        facilities: ["parking"],
        images: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVuEZpT-LXxQMLtPZImc0BtclsA_FdNEEbwQ&s"
        ],
        distance: 32,
        popularity: 2,
        categories: ["Rekreasi"]
    },
    {
        id: 47,
        name: "Air Terjun Sipatahunan Curug Luhur",
        location: [-7.0166788, 107.6242332],
        description: "Merupakan bagian dari kompleks Curug Luhur, dikenal dengan aliran air yang indah.",
        type: "challenging",
        rating: 5.0,
        difficulty: "Sulit",
        facilities: ["parking"],
        images: [
            "https://asset-2.tstatic.net/jabar/foto/bank/images/curug-luhur_20170110_181844.jpg"
        ],
        distance: 55,
        popularity: 1,
        categories: ["Wisata Alam"]
    },
    {
        id: 48,
        name: "Curug Ekong",
        location: [-7.0380744, 107.6319824],
        description: "Curug yang tersembunyi dan menawarkan keindahan alam yang masih alami.",
        type: "challenging",
        rating: 4.2,
        difficulty: "Sulit",
        facilities: ["parking"],
        images: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLz_jm6FgIV15-7ASgqUUN7HtnKiXtzy6jcQ&s"
        ],
        distance: 56,
        popularity: 5,
        categories: ["Wisata Alam"]
    },
    {
        id: 49,
        name: "Curug Cibanban",
        location: [-6.798553, 107.697009],
        description: "Curug yang memiliki karakteristik aliran air atau lingkungan yang khas.",
        type: "challenging",
        rating: 4.8,
        difficulty: "Sulit",
        facilities: ["parking"],
        images: [
            "https://i.ytimg.com/vi/evrolMe_mI8/mqdefault.jpg"
        ],
        distance: 27,
        popularity: 25,
        categories: ["Wisata Alam"]
    },
    {
        id: 50,
        name: "Curug Cukang Rahong",
        location: [-6.8966883, 107.3490476],
        description: "Curug yang berdekatan dengan jembatan bambu atau 'cukang' yang menjadi ciri khasnya.",
        type: "challenging",
        rating: 4.3,
        difficulty: "Sulit",
        facilities: ["parking"],
        images: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa0EJKkS_cV3ARDiuBvL3tYq3zwIUZoy-dRw&s"
        ],
        distance: 34,
        popularity: 54,
        categories: ["Wisata Alam"]
    },
   
    {
        id: 51,
        name: "Curug Leuwi Gugur",
        location: [-7.0129701, 107.4144526],
        description: "Curug yang memiliki kolam alami (leuwi) di bawahnya, dan memiliki aliran air yang jatuh atau 'gugur'.",
        type: "challenging",
        rating: 5.0,
        difficulty: "Sulit",
        facilities: ["parking"],
        images: [
            "https://images.unsplash.com/photo-1506929562872-bb421503ef21?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        ],
        distance: 52,
        popularity: 1,
        categories: ["Wisata Alam"]
    },
    {
        id: 52,
        name: "Curug Orok Palalangon, Cipanjalu",
        location: [-6.8718784, 107.7224956],
        description: "Dinamai 'Orok' (bayi) karena ukurannya yang relatif kecil atau bentuknya yang mungil.",
        type: "challenging",
        rating: 3.0,
        difficulty: "Sulit",
        facilities: ["parking"],
        images: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEuRf50F_Im4Is8VZKQa40OhYZhVdLu0eLiQ&s"
        ],
        distance: 31,
        popularity: 1,
        categories: ["Wisata Alam"]
    },
    {
        id: 53,
        name: "Curug Cipanji",
        location: [-7.145013, 107.4617319],
        description: "Curug yang menawarkan keindahan alam dan cocok untuk rekreasi.",
        type: "challenging",
        rating: 4.5,
        difficulty: "Sulit",
        facilities: ["parking"],
        images: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuq9iv-BwTSzACH_HE-zip12r0qNyQrO6JJg&s"
        ],
        distance: 60,
        popularity: 285,
        categories: ["Wisata Alam"]
    },
    {
        id: 54,
        name: "Curug Malela",
        location: [-7.0182386, 107.2072145],
        description: "Curug yang dikenal sebagai 'Niagara Mini' Jawa Barat karena bentuknya yang lebar dan megah.",
        type: "popular",
        rating: 4.5,
        difficulty: "Sulit",
        facilities: ["parking", "toilet"],
        images: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQV6LGcIaXedvqaz5JbxjIB9QRTosI6WkkKA&s"
        ],
        distance: 45,
        popularity: 1045,
        categories: ["Wisata Alam"]
    },
    {
        id: 55,
        name: "Curug Cibareubeuy",
        location: [-6.7475345, 107.6763497],
        description: "Air terjun yang cukup tinggi dengan aliran air yang deras, menawarkan pemandangan yang menawan.",
        type: "easy",
        rating: 4.6,
        difficulty: "Mudah",
        facilities: ["parking", "toilet"],
        images: [
            "https://subang.go.id/storage/backend/images/wisata/Curug-Cibareubeuy_440392.JPG"
        ],
        distance: 27,
        popularity: 1072,
        categories: ["Fotografi"]
    },
  
    {
        id: 56,
        name: "Curug Kacapi",
        location: [-6.9906192, 107.3819871],
        description: "Nama 'kacapi' merujuk pada bentuk batuan atau suara air yang menyerupai alat musik kacapi.",
        type: "challenging",
        rating: 4.1,
        difficulty: "Sulit",
        facilities: ["parking"],
        images: [
            "https://supono.wordpress.com/wp-content/uploads/2018/02/curug-kacapi.jpg"
        ],
        distance: 48,
        popularity: 7,
        categories: ["Wisata Alam"]
    },
    {
        id: 57,
        name: "Curug Sihung",
        location: [-6.9410431, 107.5000298],
        description: "Curug yang memiliki formasi batuan tajam atau 'sihung' (taring).",
        type: "challenging",
        rating: 4.1,
        difficulty: "Sulit",
        facilities: ["parking"],
        images: [
            "https://i.ytimg.com/vi/ulwcc6TqsTw/maxresdefault.jpg"
        ],
        distance: 42,
        popularity: 7,
        categories: ["Wisata Alam"]
    },
    {
        id: 58,
        name: "Curug Kordon",
        location: [-6.8402892, 107.6540955],
        description: "Curug yang menawarkan keindahan alam yang tenang.",
        type: "challenging",
        rating: 3.0,
        difficulty: "Sulit",
        facilities: ["parking"],
        images: [
            "https://images.unsplash.com/photo-1505228395891-9a51e7e86bf6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        ],
        distance: 18,
        popularity: 1,
        categories: ["Wisata Alam"]
    },
    {
        id: 59,
        name: "Curug Umar",
        location: [-7.0305805, 107.6274206],
        description: "Curug yang memiliki karakteristik unik atau nama yang diambil dari tokoh lokal.",
        type: "challenging",
        rating: 4.5,
        difficulty: "Sulit",
        facilities: ["parking"],
        images: [
            "https://i.ytimg.com/vi/04Mk5fPn0fk/sddefault.jpg"
        ],
        distance: 56,
        popularity: 4,
        categories: ["Wisata Alam"]
    },
    {
        id: 60,
        name: "Curug Ciangin",
        location: [-6.7394834, 107.6790996],
        description: "Dinamai 'Ciangin' (air angin) karena terletak di area yang berangin kencang atau memiliki aliran air yang menyerupai tiupan angin.",
        type: "challenging",
        rating: 4.5,
        difficulty: "Sulit",
        facilities: ["parking"],
        images: [
            "https://subang.go.id/public/storage/backend/images/berita/de3fd-curug-ciangin.jpg"
        ],
        distance: 28,
        popularity: 979,
        categories: ["Wisata Alam"]
    },
    
    {
        id: 61,
        name: "Curug Cileat",
        location: [-6.7812772, 107.7512183],
        description: "Air terjun yang indah dengan lingkungan alam yang asri, cocok untuk pendakian singkat.",
        type: "challenging",
        rating: 4.6,
        difficulty: "Sulit",
        facilities: ["parking"],
        images: [
            "https://subang.go.id/public/storage/backend/images/wisata/Curug-Cileat_105359.jpg"
        ],
        distance: 32,
        popularity: 807,
        categories: ["Wisata Alam"]
    },
    {
        id: 62,
        name: "Curug Cihurang",
        location: [-6.9619843, 107.4790248],
        description: "Curug yang menawarkan keindahan alam yang tenang.",
        type: "challenging",
        rating: 5.0,
        difficulty: "Sulit",
        facilities: ["parking"],
        images: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR35VV9RkbhjevKTuL1T4X75HJgSH2Avxyejw&s"
        ],
        distance: 43,
        popularity: 1,
        categories: ["Wisata Alam"]
    },
    {
        id: 63,
        name: "Curug Batu Palupuh",
        location: [-7.0416844, 107.6657102],
        description: "Curug yang mengalir di atas formasi batuan yang menyerupai 'palupuh' atau alas.",
        type: "challenging",
        rating: 4.9,
        difficulty: "Sulit",
        facilities: ["parking"],
        images: [
            "https://images.unsplash.com/photo-1506929562872-bb421503ef21?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        ],
        distance: 58,
        popularity: 14,
        categories: ["Wisata Alam"]
    },
    {
        id: 64,
        name: "Curug Garut Pasir",
        location: [-7.0137145, 107.4190247],
        description: "Air terjun yang terletak di daerah berpasir atau memiliki karakteristik geologi tertentu.",
        type: "challenging",
        rating: 5.0,
        difficulty: "Sulit",
        facilities: ["parking"],
        images: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNHMPME3cxVj9PJogr24UR0nFejd3dDaCr4w&s"
        ],
        distance: 52,
        popularity: 9,
        categories: ["Wisata Alam"]
    },
    {
        id: 65,
        name: "Curug Lulumpang",
        location: [-6.9473529, 107.3578239],
        description: "Nama 'lulumpang' merujuk pada cekungan atau lubang seperti lumpang yang terbentuk oleh kikisan air.",
        type: "challenging",
        rating: 5.0,
        difficulty: "Sulit",
        facilities: ["parking"],
        images: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1YhuaFuSlWcRagHy9egg-I9v5TZzeJBArUw&s"
        ],
        distance: 38,
        popularity: 4,
        categories: ["Wisata Alam"]
    },
   
    {
        id: 66,
        name: "Curug Bedil Ciater",
        location: [-6.7333155, 107.7012297],
        description: "Nama 'bedil' (senapan) diambil dari suara gemuruh air yang menyerupai tembakan.",
        type: "challenging",
        rating: 4.8,
        difficulty: "Sulit",
        facilities: ["parking"],
        images: [
            "https://cdn.wisata.app/diary/6cd745b1-c390-4e2d-932a-b724e1152904.jpg"
        ],
        distance: 29,
        popularity: 14,
        categories: ["Wisata Alam"]
    },
    {
        id: 67,
        name: "Curug Akub",
        location: [-7.0401531, 107.6679852],
        description: "Curug yang menawarkan keindahan alam yang tersembunyi.",
        type: "challenging",
        rating: 4.2,
        difficulty: "Sulit",
        facilities: ["parking"],
        images: [
            "https://assets.promediateknologi.id/crop/0x0:0x0/750x500/webp/photo/ayobandung/bank_image/medium/curug-akub-potensi-wisata-tersembunyi-di-baleendah.jpg"
        ],
        distance: 58,
        popularity: 124,
        categories: ["Wisata Alam"]
    },
    {
        id: 68,
        name: "Curug Cikahuripan",
        location: [-7.12025, 107.605053],
        description: "Curug yang menawarkan keindahan alam yang asri dan sejuk.",
        type: "challenging",
        rating: 4.4,
        difficulty: "Sulit",
        facilities: ["parking"],
        images: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZMc2BzEewA3WoYpMuV8z9BoyCEse6hK2W9w&s"
        ],
        distance: 62,
        popularity: 45,
        categories: ["Wisata Alam"]
    },
    {
        id: 69,
        name: "Curug Panganten Kembar",
        location: [-7.1603022, 107.6252229],
        description: "Mirip dengan Curug Penganten, namun dengan dua aliran air yang lebih jelas terpisah, menyerupai pasangan pengantin.",
        type: "challenging",
        rating: 4.4,
        difficulty: "Sulit",
        facilities: ["parking"],
        images: [
            "https://www.daaruttauhiid.org/wp-content/uploads/2020/04/Berwisata-Asik-ke-Curug-Panganten-Kembar_Daarut-Tauhiid.jpg"
        ],
        distance: 65,
        popularity: 103,
        categories: ["Fotografi"]
    },
    {
        id: 70,
        name: "Curug Jodo Sariater",
        location: [-6.7383748, 107.6551788],
        description: "Nama 'jodo' (jodoh) mengacu pada dua aliran air yang berdampingan atau karena sering menjadi tempat romantis.",
        type: "easy",
        rating: 4.4,
        difficulty: "Mudah",
        facilities: ["parking", "toilet"],
        images: [
            "https://static.promediateknologi.id/crop/0x0:0x0/750x500/webp/photo/p1/945/2023/12/23/curug-jodo-2360528325.jpg"
        ],
        distance: 26,
        popularity: 248,
        categories: ["Fotografi"]
    },
    
    {
        id: 71,
        name: "Curug Munding Cipongkor",
        location: [-6.8945878, 107.3444792],
        description: "Nama 'munding' (kerbau) merujuk pada bentuk batuan atau aliran airnya.",
        type: "challenging",
        rating: 4.4,
        difficulty: "Sulit",
        facilities: ["parking"],
        images: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkLissc9leiZZGT8QK06KSjrzTYd7Z0vSNbQ&s"
        ],
        distance: 36,
        popularity: 21,
        categories: ["Wisata Alam"]
    },
    {
        id: 72,
        name: "Curug Cimerak",
        location: [-6.9909274, 107.3854867],
        description: "Curug yang menawarkan keindahan alam yang asri.",
        type: "challenging",
        rating: 5.0,
        difficulty: "Sulit",
        facilities: ["parking"],
        images: [
            "https://images.unsplash.com/photo-1506929562872-bb421503ef21?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        ],
        distance: 48,
        popularity: 1,
        categories: ["Wisata Alam"]
    },
    {
        id: 73,
        name: "Curug Kujang",
        location: [-6.9925091, 107.3375238],
        description: "Dinamai 'kujang' (senjata tradisional Sunda) karena bentuk tebing atau alirannya yang menyerupai kujang.",
        type: "challenging",
        rating: 5.0,
        difficulty: "Sulit",
        facilities: ["parking"],
        images: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVO2Np7uNWvydCnfSehJD9f5aUcI5kbXvIew&s"
        ],
        distance: 46,
        popularity: 2,
        categories: ["Wisata Alam"]
    },
    {
        id: 74,
        name: "Curug Panyandaan",
        location: [-7.0304477, 107.3749802],
        description: "Curug yang menawarkan keindahan alam yang tenang dan menyegarkan.",
        type: "challenging",
        rating: 4.3,
        difficulty: "Sulit",
        facilities: ["parking"],
        images: [
            "https://asset-2.tstatic.net/priangan/foto/bank/images/Curug-Panyandaan-Bandung-Barat.jpg"
        ],
        distance: 50,
        popularity: 108,
        categories: ["Wisata Alam"]
    },
    {
        id: 75,
        name: "Curug Geulis Bandung",
        location: [-7.0383609, 107.4945719],
        description: "Dinamai 'geulis' (cantik) karena keindahan alaminya.",
        type: "easy",
        rating: 3.0,
        difficulty: "Mudah",
        facilities: ["parking", "toilet"],
        images: [
            "https://disporapar.cilacapkab.go.id/wp-content/uploads/2020/09/curug_geulis_01.jpg"
        ],
        distance: 45,
        popularity: 1,
        categories: ["Rekreasi"]
    },
    
    {
        id: 76,
        name: "Curug Cikerti",
        location: [-6.8295933, 107.3249563],
        description: "Curug yang menawarkan keindahan alam yang asri.",
        type: "challenging",
        rating: 4.4,
        difficulty: "Sulit",
        facilities: ["parking"],
        images: [
            "https://assets.promediateknologi.id/crop/0x0:0x0/750x500/webp/photo/2022/09/30/323779129.jpeg"
        ],
        distance: 35,
        popularity: 5,
        categories: ["Wisata Alam"]
    },
    {
        id: 77,
        name: "Curug Ciletik",
        location: [-7.0511958, 107.5283263],
        description: "Curug yang memiliki karakteristik aliran air yang unik.",
        type: "challenging",
        rating: 5.0,
        difficulty: "Sulit",
        facilities: ["parking"],
        images: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZSBzd_XuO6mYEoinYfyF4MD4HmETkxaoNXg&s"
        ],
        distance: 53,
        popularity: 1,
        categories: ["Wisata Alam"]
    },
    {
        id: 78,
        name: "Curug Bungsu",
        location: [-6.8677251, 107.5527168],
        description: "Dinamai 'bungsu' (anak bungsu) karena merupakan curug terakhir di suatu deretan, atau ukurannya yang paling kecil.",
        type: "challenging",
        rating: 3.0,
        difficulty: "Sulit",
        facilities: ["parking"],
        images: [
            "https://images.unsplash.com/photo-1506929562872-bb421503ef21?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        ],
        distance: 10,
        popularity: 1,
        categories: ["Wisata Alam"]
    },
    {
        id: 79,
        name: "Lava Curug Ciomas",
        location: [-6.8346982, 107.6582851],
        description: "Bukan air terjun biasa, melainkan formasi batuan yang unik menyerupai aliran lava, disertai dengan aliran air.",
        type: "popular",
        rating: 3.0,
        difficulty: "Sulit",
        facilities: ["parking", "toilet"],
        images: [
            "https://www.kelasgarasi.com/wp-content/uploads/2024/04/curug-omas-maribaya-kelas-garasi.jpg"
        ],
        distance: 18,
        popularity: 1,
        categories: ["Wisata Alam", "Fotografi", "Wisata Edukasi"]
    },
    {
        id: 80,
        name: "Curug Bidadari",
        location: [-6.739379, 107.651204],
        description: "Dinamai 'bidadari' karena keindahan dan keasrian tempatnya yang konon seperti tempat mandi bidadari.",
        type: "popular",
        rating: 4.1,
        difficulty: "Sedang",
        facilities: ["parking", "toilet"],
        images: [
            "https://images.unsplash.com/photo-1506929562872-bb421503ef21?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        ],
        distance: 26,
        popularity: 164,
        categories: ["Fotografi"]
    },
    
    {
        id: 81,
        name: "Curug Halimun",
        location: [-6.8916233, 107.3456717],
        description: "Dinamai 'halimun' (kabut) karena sering diselimuti kabut, menciptakan suasana yang misterius dan sejuk.",
        type: "challenging",
        rating: 3.8,
        difficulty: "Sulit",
        facilities: ["parking"],
        images: [
            "https://assets.promediateknologi.id/crop/0x0:0x0/750x500/webp/photo/2023/05/24/halimun-599182897.jpg"
        ],
        distance: 36,
        popularity: 4,
        categories: ["Wisata Alam"]
    },
    {
        id: 82,
        name: "Curug Ciung",
        location: [-7.0185256, 107.3979721],
        description: "Curug yang menawarkan keindahan alam yang asri.",
        type: "challenging",
        rating: 5.0,
        difficulty: "Sulit",
        facilities: ["parking"],
        images: [
            "https://images.unsplash.com/photo-1506929562872-bb421503ef21?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        ],
        distance: 52,
        popularity: 3,
        categories: ["Wisata Alam"]
    },
    {
        id: 83,
        name: "Curug Sumpel",
        location: [-6.9864715, 107.2961953],
        description: "Curug yang memiliki karakteristik unik pada aliran air atau formasi batuan.",
        type: "challenging",
        rating: 3.4,
        difficulty: "Sulit",
        facilities: ["parking"],
        images: [
            "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhcTPrRa8dH-5UZyHEzj8Vy0goT7Db9t-SzjGWHBQxaLzBmNEtpRXIKOKe2f0kVwU3J-zv5PfnTbJEDuYgDhoiuu_AyDnQm4jRNe3VKH3WTIDDIk9RUea_J1UfWO7s_a2eUwUzaT2Z2EjOlbd138wNS4rMqavxJfq7WJOv0VhZw4vWUZfuvIyVSdyOYuQ/w0/mdadans.jpg"
        ],
        distance: 45,
        popularity: 14,
        categories: ["Wisata Alam"]
    },
    {
        id: 84,
        name: "Curug Cijamur",
        location: [-6.6961037, 107.395664],
        description: "Curug yang menawarkan keindahan alam yang alami.",
        type: "challenging",
        rating: 4.1,
        difficulty: "Sulit",
        facilities: ["parking"],
        images: [
            "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhJCp41PLKZ9EpcC2PcurnA0088F65iMPmWFh8YJ7fH-J2SXtqoQncViDw-OUBIqUPHgxCJuO1_cyIzLr0Hmsi5gUSZtAw3IyocrOuVQFrK9KkAztAgn4retLF_7OS5zJuHWaVCEQv2eiT9h_bVkIPYnDUayi_j7IZquQAe2qBLVs9hs1ESvOa7X775hA/s1080/WhatsApp%20Image%202022-09-20%20at%2021.07.30%20(6).jpeg"
        ],
        distance: 42,
        popularity: 95,
        categories: ["Wisata Alam"]
    },
    {
        id: 85,
        name: "Curug Buni Agung",
        location: [-7.0520061, 107.5106158],
        description: "Curug yang tersembunyi ('buni' berarti tersembunyi) namun menawarkan keindahan yang 'agung'.",
        type: "challenging",
        rating: 4.1,
        difficulty: "Sulit",
        facilities: ["parking"],
        images: [
            "https://live.staticflickr.com/65535/49315991156_3db4ea2717_b.jpg"
        ],
        distance: 53,
        popularity: 52,
        categories: ["Wisata Alam"]
    },
  
    {
        id: 86,
        name: "Wisata Terpadu Curug Ngebul Cisitu",
        location: [-7.0094903, 107.2007573],
        description: "Kompleks wisata yang berpusat pada Curug Ngebul, menawarkan fasilitas terpadu dan keindahan alam. 'Ngebul' bisa berarti beruap/berkabut.",
        type: "popular",
        rating: 4.6,
        difficulty: "Sedang",
        facilities: ["parking", "toilet", "restaurant"],
        images: [
            "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEghYaVZm0mQebmbefnbXKYzoGv73ymKA8A9Iv6g9bz7nTXa692bwqK2bOALhPm7Ci9u-i7fyheir0elDngSO_lzj_x162MpMzUJa6-uqMSz0_7EjohV122JOsXgabljlJWHqheKZulnPQSM-FWq5WRpN7sMBSxRLo6vQDQu6Uqwy9d-6cx1emBlrtrOHw/w0/rraph7%20.jpg"
        ],
        distance: 45,
        popularity: 82,
        categories: ["Rekreasi"]
    },
    {
        id: 87,
        name: "Wisata Air Curug Tilu Rancabali",
        location: [-7.1497411, 107.3759025],
        description: "Mirip dengan Curug Tilu Leuwi Opat, menawarkan beberapa tingkatan air terjun di kawasan Rancabali yang sejuk.",
        type: "popular",
        rating: 4.4,
        difficulty: "Sedang",
        facilities: ["parking", "toilet"],
        images: [
            "https://cdn.rri.co.id/berita/Bandung/o/1719308342438-ciwidey_ecopark/uc2z6ebzeods0c6.jpeg"
        ],
        distance: 60,
        popularity: 1417,
        categories: ["Rekreasi"]
    },
    {
        id: 88,
        name: "Curug Cijanari",
        location: [-6.9730789, 107.4488563],
        description: "Curug yang menawarkan keindahan alam yang asri.",
        type: "challenging",
        rating: 5.0,
        difficulty: "Sulit",
        facilities: ["parking"],
        images: [
            "https://images.unsplash.com/photo-1506929562872-bb421503ef21?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        ],
        distance: 44,
        popularity: 1,
        categories: ["Wisata Alam"]
    },
    {
        id: 89,
        name: "Curug Orok",
        location: [-6.8267323, 107.3249493],
        description: "Dinamai 'Orok' (bayi) karena bentuknya yang kecil atau suara airnya yang menyerupai tangisan bayi.",
        type: "challenging",
        rating: 4.8,
        difficulty: "Sulit",
        facilities: ["parking"],
        images: [
            "https://images.unsplash.com/photo-1506929562872-bb421503ef21?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        ],
        distance: 35,
        popularity: 5,
        categories: ["Wisata Alam"]
    },
    {
        id: 90,
        name: "Curug Panganten",
        location: [-6.9987969, 107.5830623],
        description: "Air terjun yang memiliki dua aliran air yang berdampingan, menyerupai sepasang pengantin.",
        type: "popular",
        rating: 4.0,
        difficulty: "Sedang",
        facilities: ["parking"],
        images: [
            "https://images.unsplash.com/photo-1506929562872-bb421503ef21?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        ],
        distance: 50,
        popularity: 1,
        categories: ["Wisata Alam"]
    },

    {
        id: 91,
        name: "Curug Bentang Padjadjaran",
        location: [-7.1481043, 107.417913],
        description: "Dinamai 'Bentang Padjadjaran' (bintang Pajajaran) karena keindahannya yang luar biasa atau nilai sejarahnya.",
        type: "challenging",
        rating: 4.8,
        difficulty: "Sulit",
        facilities: ["parking"],
        images: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrtHlxdQNCdboR0C6xFBA6GnqXWUmZXADoSg&s"
        ],
        distance: 62,
        popularity: 58,
        categories: ["Wisata Alam"]
    },
    {
        id: 92,
        name: "Curug Awi Langit",
        location: [-7.139912, 107.400429],
        description: "Nama 'awi langit' (bambu langit) merujuk pada bambu-bambu tinggi di sekitar curug atau kesan tingginya.",
        type: "challenging",
        rating: 4.4,
        difficulty: "Sulit",
        facilities: ["parking"],
        images: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHECf7F5EhoONU4mh5_roD2u18sPXh0H_fgw&s"
        ],
        distance: 61,
        popularity: 132,
        categories: ["Wisata Alam"]
    },
    {
        id: 93,
        name: "Curug Kembar",
        location: [-6.7465625, 107.6585625],
        description: "Air terjun dengan dua aliran air yang terpisah dan hampir sama tingginya, memberikan kesan kembar.",
        type: "popular",
        rating: 4.6,
        difficulty: "Sulit",
        facilities: ["parking", "toilet"],
        images: [
            "https://asset.kompas.com/crops/EW5MOf7LfZlWhaFMnHU4cHcgZbU=/0x0:1080x720/1200x800/data/photo/2024/02/01/65bb0bcc70640.jpg"
        ],
        distance: 26,
        popularity: 19,
        categories: ["Wisata Alam"]
    },
    {
        id: 94,
        name: "Curug Kihujan",
        location: [-7.1407648, 107.4217151],
        description: "Nama 'kihujan' (air hujan) karena aliran airnya yang menyerupai guyuran hujan atau karena airnya melimpah saat musim hujan.",
        type: "challenging",
        rating: 5.0,
        difficulty: "Sulit",
        facilities: ["parking"],
        images: [
            "https://i.ytimg.com/vi/vUf7VxvaD8A/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AHUBoAC4AOKAgwIABABGHIgXyhBMA8=&rs=AOn4CLCFApkhwvDSra3TqKacyCPkuw9DrQ"
        ],
        distance: 62,
        popularity: 1,
        categories: ["Wisata Alam"]
    },
    {
        id: 95,
        name: "Air Terjun Curug Cipadarek",
        location: [-7.119896, 107.5798678],
        description: "Curug yang menawarkan keindahan alam yang asri dan menyegarkan.",
        type: "challenging",
        rating: 4.0,
        difficulty: "Sulit",
        facilities: ["parking"],
        images: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXwP_u2fefwaRGNtHAZkFItnIMNil-d04zMg&s"
        ],
        distance: 60,
        popularity: 9,
        categories: ["Wisata Alam"]
    },
    
    {
        id: 96,
        name: "Wisata Curug Luhur Cihideung",
        location: [-7.139011, 107.554677],
        description: "Wisata yang berpusat pada Curug Luhur (tinggi) di daerah Cihideung, menawarkan pemandangan yang indah.",
        type: "challenging",
        rating: 4.3,
        difficulty: "Sulit",
        facilities: ["parking"],
        images: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0OkLXlu7EHXHGWASLtqcQVT0KQG17M1mUaa7He3fptw3Dn_fRRd8SAAXAA2BGM0c_t_g&usqp=CAU"
        ],
        distance: 62,
        popularity: 17,
        categories: ["Rekreasi"]
    },
    {
        id: 97,
        name: "Curug Roda Mekarjaya",
        location: [-7.117315, 107.6720338],
        description: "Curug yang memiliki formasi batuan melingkar seperti roda atau karena lokasinya yang strategis.",
        type: "challenging",
        rating: 4.7,
        difficulty: "Sulit",
        facilities: ["parking"],
        images: [
            "https://static.promediateknologi.id/crop/0x0:0x0/750x500/webp/photo/p1/79/2024/01/22/Screenshot_2024-01-21-22-12-59-572_comgoogleandroidyoutube-1436769942.jpg"
        ],
        distance: 60,
        popularity: 19,
        categories: ["Wisata Alam"]
    },
    {
        id: 98,
        name: "Curug Dewa, PLTA Plengan",
        location: [-7.1644286, 107.5530568],
        description: "Curug yang dianggap sakral atau memiliki nilai historis, terletak di dekat Pembangkit Listrik Tenaga Air (PLTA) Plengan.",
        type: "popular",
        rating: 4.6,
        difficulty: "Sulit",
        facilities: ["parking", "toilet"],
        images: [
            "https://serbabandung.com/wp-content/uploads/2018/03/curug-dewa.jpg"
        ],
        distance: 65,
        popularity: 22,
        categories: ["Wisata Budaya"]
    },
    {
        id: 99,
        name: "Curug Eti",
        location: [-7.0860352, 107.7987632],
        description: "Curug yang menawarkan keindahan alam yang tenang.",
        type: "challenging",
        rating: 4.0,
        difficulty: "Sulit",
        facilities: ["parking"],
        images: [
            "https://cdn.wisata.app/diary/11401120-5039-803d-be8f-de4045595071.jpg"
        ],
        distance: 70,
        popularity: 26,
        categories: ["Wisata Alam"]
    },
    {
        id: 100,
        name: "Curug Cigoong",
        location: [-7.1105625, 107.7598125],
        description: "Curug yang memiliki karakteristik aliran air atau lingkungan yang khas.",
        type: "challenging",
        rating: 4.3,
        difficulty: "Sulit",
        facilities: ["parking"],
        images: [
            "https://awsimages.detik.net.id/community/media/visual/2022/02/23/curug-cigoong-cianjur-1_43.jpeg?w=1200"
        ],
        distance: 68,
        popularity: 6,
        categories: ["Wisata Alam"]
    },
    {
        id: 101,
        name: "Curug Madi Kamojang",
        location: [-7.1280153, 107.7797275],
        description: "Curug yang terletak di kawasan Kamojang, dikenal dengan keindahan alam vulkaniknya.",
        type: "challenging",
        rating: 4.6,
        difficulty: "Sulit",
        facilities: ["parking"],
        images: [
            "https://awsimages.detik.net.id/community/media/visual/2024/04/07/curug-madi_169.jpeg?w=1200"
        ],
        distance: 70,
        popularity: 94,
        categories: ["Wisata Alam"]
    }
];

// Get all unique categories for filter dropdown
const allCategories = [...new Set(waterfalls.flatMap(waterfall => waterfall.categories))];

// Data curug Bandung dari CSV (tetap sama seperti sebelumnya)
// ... [data waterfalls tetap sama] ...

// Inisialisasi peta
const map = L.map('map').setView([-6.9039, 107.6186], 11);

// Tambahkan tile layer dengan beberapa opsi basemap
const baseLayers = {
    "OpenStreetMap": L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }),
    "Satellite": L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
        attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
    }),
    "Terrain": L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}', {
        attribution: 'Tiles &copy; Esri &mdash; Source: USGS, Esri, TANA, DeLorme'
    }),
    "Dark": L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; CartoDB, OpenStreetMap contributors'
    }),
};

// Add default basemap
baseLayers["OpenStreetMap"].addTo(map);

// Add layer control
L.control.layers(baseLayers, null, {position: 'topright'}).addTo(map);

// Buat legenda berdasarkan kesulitan
const legend = L.control({ position: 'bottomright' });
legend.onAdd = function(map) {
    const div = L.DomUtil.create('div', 'legend');
    div.innerHTML = `
        <h4>Tingkat Kesulitan:</h4>
        <div><i style="background: #2ecc71"></i> Mudah</div>
        <div><i style="background: #f39c12"></i> Sedang</div>
        <div><i style="background: #e74c3c"></i> Sulit</div>
    `;
    return div;
};
legend.addTo(map);

// Variabel global
let currentPosition = null;
let markers = {};
let filteredWaterfalls = [...waterfalls];

// Fungsi untuk mendapatkan warna berdasarkan tingkat kesulitan
function getDifficultyColor(difficulty) {
    switch (difficulty.toLowerCase()) {
        case 'mudah': return '#2ecc71';
        case 'sedang': return '#f39c12';
        case 'sulit': return '#e74c3c';
        default: return '#9b59b6';
    }
}

// Fungsi untuk membuat marker curug
function createWaterfallMarkers(waterfallsToShow) {
    // Hapus marker yang ada
    Object.values(markers).forEach(marker => map.removeLayer(marker));
    markers = {};

    // Tambahkan marker baru
    waterfallsToShow.forEach(waterfall => {
        const marker = L.circleMarker(waterfall.location, {
            radius: 8,
            fillColor: getDifficultyColor(waterfall.difficulty),
            color: '#fff',
            weight: 1,
            opacity: 1,
            fillOpacity: 0.8
        }).addTo(map);

        marker.bindPopup(`
            <b>${waterfall.name}</b><br>
            <small>${waterfall.description}</small><br>
            <div style="margin-top: 5px;">
                <i class="fas fa-star" style="color: #f39c12;"></i> ${waterfall.rating}/5.0
                <span style="margin-left: 10px;">
                    <i class="fas fa-users" style="color: #3498db;"></i> ${waterfall.popularity} ulasan
                </span>
            </div>
            <div>Tingkat Kesulitan: ${waterfall.difficulty}</div>
        `);

        marker.on('click', () => {
            showWaterfallDetails(waterfall.id);
        });

        markers[waterfall.id] = marker;
    });
}

// Fungsi untuk menampilkan daftar curug di sidebar
function renderWaterfallList(waterfallsToShow) {
    const waterfallList = document.getElementById('beach-list');
    waterfallList.innerHTML = '';

    if (waterfallsToShow.length === 0) {
        waterfallList.innerHTML = '<div class="no-result">Tidak ada curug yang sesuai dengan kriteria pencarian</div>';
        return;
    }

    waterfallsToShow.forEach(waterfall => {
        const waterfallItem = document.createElement('div');
        waterfallItem.className = 'beach-item';
        waterfallItem.innerHTML = `
            <h3>${waterfall.name} 
                <span class="rating">
                    <i class="fas fa-star"></i> ${waterfall.rating}
                    <span class="review-count"><i class="fas fa-users"></i> ${waterfall.popularity}</span>
                </span>
            </h3>
            <p>${waterfall.description}</p>
            <div class="details">
                <span class="difficulty ${waterfall.difficulty.toLowerCase()}">${waterfall.difficulty}</span>
            </div>
            <div class="categories">Kategori: ${waterfall.categories.join(', ')}</div>
        `;

        waterfallItem.addEventListener('click', () => {
            map.setView(waterfall.location, 15);
            highlightMarker(waterfall.id);
            showWaterfallDetails(waterfall.id);
        });

        waterfallList.appendChild(waterfallItem);
    });

    document.getElementById('beach-count').textContent = 
        `Menampilkan ${waterfallsToShow.length} dari ${waterfalls.length} curug`;
}

// Fungsi untuk memfilter curug berdasarkan kriteria
function filterWaterfalls() {
    const searchTerm = document.getElementById('search').value.toLowerCase();
    const categoryFilter = document.getElementById('category-filter').value;
    const sortBy = document.getElementById('sort-by').value;

    // Filter berdasarkan pencarian
    let results = waterfalls.filter(waterfall => 
        waterfall.name.toLowerCase().includes(searchTerm) || 
        waterfall.description.toLowerCase().includes(searchTerm)
    );

    // Filter berdasarkan kategori
    if (categoryFilter !== 'all') {
        results = results.filter(waterfall => 
            waterfall.categories.includes(categoryFilter)
        );
    }

    // Urutkan hasil
    switch (sortBy) {
        case 'name-asc':
            results.sort((a, b) => a.name.localeCompare(b.name));
            break;
        case 'name-desc':
            results.sort((a, b) => b.name.localeCompare(a.name));
            break;
        case 'rating':
            results.sort((a, b) => b.rating - a.rating);
            break;
        case 'popularity':
            results.sort((a, b) => b.popularity - a.popularity);
            break;
    }

    filteredWaterfalls = results;
    renderWaterfallList(filteredWaterfalls);
    createWaterfallMarkers(filteredWaterfalls);
}

// Fungsi untuk menampilkan detail curug di modal
function showWaterfallDetails(waterfallId) {
    const waterfall = waterfalls.find(w => w.id === waterfallId);
    if (!waterfall) return;

    const modal = document.getElementById('info-modal');
    const modalContent = document.getElementById('modal-content');
    
    modalContent.innerHTML = `
        <div class="beach-detail">
            <div class="image-gallery">
                ${waterfall.images.map(img => `<img src="${img}" alt="${waterfall.name}">`).join('')}
            </div>
            
            <div class="detail-row">
                <div class="detail-col">
                    <h3>Deskripsi</h3>
                    <p>${waterfall.description}</p>
                    
                    <div class="rating-container">
                        <h3>Rating & Ulasan</h3>
                        <div class="rating-value">
                            <div class="stars">
                                ${'<i class="fas fa-star"></i>'.repeat(Math.floor(waterfall.rating))}
                                ${waterfall.rating % 1 >= 0.5 ? '<i class="fas fa-star-half-alt"></i>' : ''}
                                <span>${waterfall.rating}/5.0</span>
                            </div>
                            <div class="reviews">
                                <i class="fas fa-users"></i> ${waterfall.popularity} ulasan
                            </div>
                        </div>
                    </div>
                    
                    <h3>Tingkat Kesulitan</h3>
                    <span class="difficulty ${waterfall.difficulty.toLowerCase()}">${waterfall.difficulty}</span>
                    
                    
                </div>
                
                <div class="detail-col">
                    <h3>Kategori</h3>
                    <div class="categories">
                        ${waterfall.categories.map(cat => `<span class="category-tag">${cat}</span>`).join('')}
                    </div>
                    
                    
                    <div id="detail-map" style="height: 200px; margin-top: 15px;"></div>
                </div>
            </div>
        </div>
    `;

    // Initialize mini map
    const detailMap = L.map('detail-map').setView(waterfall.location, 14);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(detailMap);
    
    L.marker(waterfall.location).addTo(detailMap)
        .bindPopup(`<b>${waterfall.name}</b>`)
        .openPopup();

    document.getElementById('modal-title').textContent = waterfall.name;
    modal.style.display = 'block';
}

// Fungsi untuk highlight marker
function highlightMarker(waterfallId) {
    Object.values(markers).forEach(marker => {
        marker.setRadius(8);
    });

    if (markers[waterfallId]) {
        markers[waterfallId].setRadius(12);
    }
}

// Fungsi untuk mendapatkan lokasi pengguna
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            position => {
                currentPosition = [position.coords.latitude, position.coords.longitude];
                map.setView(currentPosition, 13);
                
                // Tambahkan marker lokasi pengguna
                L.marker(currentPosition, {
                    icon: L.divIcon({
                        className: 'user-location-marker',
                        html: '<i class="fas fa-location-dot" style="color: #e74c3c; font-size: 24px;"></i>',
                        iconSize: [24, 24],
                        iconAnchor: [12, 12]
                    })
                }).addTo(map).bindPopup('Lokasi Anda').openPopup();
            },
            error => {
                console.error("Error getting location:", error);
                alert("Tidak dapat mendapatkan lokasi Anda. Pastikan GPS aktif dan izin diberikan.");
            }
        );
    } else {
        alert("Browser tidak mendukung geolokasi.");
    }
}

// Inisialisasi filter dropdown kategori
function initCategoryFilter() {
    const categoryFilter = document.getElementById('category-filter');
    
    // Dapatkan semua kategori unik
    const allCategories = [...new Set(waterfalls.flatMap(waterfall => waterfall.categories))];
    
    // Tambahkan opsi default
    const defaultOption = document.createElement('option');
    defaultOption.value = 'all';
    defaultOption.textContent = 'Semua Kategori';
    categoryFilter.appendChild(defaultOption);
    
    // Tambahkan semua kategori unik
    allCategories.forEach(category => {
        const option = document.createElement('option');
        option.value = category;
        option.textContent = category;
        categoryFilter.appendChild(option);
    });
}

// Mobile sidebar toggle
function setupMobileSidebar() {
    const mobileToggle = document.querySelector('#header .mobile-menu-toggle');
    const sidebar = document.getElementById('sidebar');
    
    if (mobileToggle && sidebar) {
        mobileToggle.addEventListener('click', () => {
            sidebar.classList.toggle('mobile-visible');
            mobileToggle.innerHTML = sidebar.classList.contains('mobile-visible') 
                ? '<i class="fas fa-times"></i>' 
                : '<i class="fas fa-bars"></i>';
        });
    }
}

// Dark mode toggle
function setupDarkModeToggle() {
    const themeToggle = document.getElementById('theme-toggle');
    
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            const icon = themeToggle.querySelector('i');
            if (document.body.classList.contains('dark-mode')) {
                icon.classList.replace('fa-moon', 'fa-sun');
            } else {
                icon.classList.replace('fa-sun', 'fa-moon');
            }
        });
    }
}

// Event Listeners saat DOM siap
document.addEventListener('DOMContentLoaded', () => {
    initCategoryFilter();
    setupMobileSidebar();
    setupDarkModeToggle();
    
    // Filter controls
    document.getElementById('search').addEventListener('input', filterWaterfalls);
    document.getElementById('search-btn').addEventListener('click', filterWaterfalls);
    document.getElementById('category-filter').addEventListener('change', filterWaterfalls);
    document.getElementById('sort-by').addEventListener('change', filterWaterfalls);

    // Map controls
    document.getElementById('locate-btn').addEventListener('click', getLocation);
    document.getElementById('zoom-in-btn').addEventListener('click', () => map.zoomIn());
    document.getElementById('zoom-out-btn').addEventListener('click', () => map.zoomOut());

    // Modal controls
    document.querySelector('.close-modal').addEventListener('click', () => {
        document.getElementById('info-modal').style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === document.getElementById('info-modal')) {
            document.getElementById('info-modal').style.display = 'none';
        }
    });

    // Inisialisasi pertama
    filterWaterfalls();
});

// Fungsi untuk mendapatkan lokasi pengguna (tetap sama)
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            position => {
                currentPosition = [position.coords.latitude, position.coords.longitude];
                map.setView(currentPosition, 13);
                
                // Tambahkan marker lokasi pengguna
                L.marker(currentPosition, {
                    icon: L.divIcon({
                        className: 'user-location-marker',
                        html: '<i class="fas fa-location-dot" style="color: #e74c3c; font-size: 24px;"></i>',
                        iconSize: [24, 24],
                        iconAnchor: [12, 12]
                    })
                }).addTo(map).bindPopup('Lokasi Anda').openPopup();
            },
            error => {
                console.error("Error getting location:", error);
                alert("Tidak dapat mendapatkan lokasi Anda. Pastikan GPS aktif dan izin diberikan.");
            }
        );
    } else {
        alert("Browser tidak mendukung geolokasi.");
    }
}

// Fungsi untuk highlight marker (tetap sama)
function highlightMarker(waterfallId) {
    Object.values(markers).forEach(marker => {
        marker.setRadius(8);
    });

    if (markers[waterfallId]) {
        markers[waterfallId].setRadius(12);
    }
}

    // Perbesar marker yang dipilih
    if (markers[waterfallId]) {
        markers[waterfallId].setRadius(12);
    }


// Fungsi untuk menampilkan detail curug di modal
function showBeachDetails(waterfallId) {
    const waterfall = waterfalls.find(w => w.id === waterfallId);
    if (!waterfall) return;

    const modal = document.getElementById('info-modal');
    const modalContent = document.getElementById('modal-content');
    
    modalContent.innerHTML = `
        <div class="beach-detail">
            <div class="image-gallery">
                ${waterfall.images.map(img => `<img src="${img}" alt="${waterfall.name}">`).join('')}
            </div>
            
            <div class="detail-row">
                <div class="detail-col">
                    <h3>Deskripsi</h3>
                    <p>${waterfall.description}</p>
                    
                    <h3>Rating</h3>
                    <div style="display: flex; align-items: center; gap: 5px;">
                        <div style="color: #f39c12; font-size: 1.5rem;">
                            ${'<i class="fas fa-star"></i>'.repeat(Math.floor(waterfall.rating))}
                            ${waterfall.rating % 1 >= 0.5 ? '<i class="fas fa-star-half-alt"></i>' : ''}
                        </div>
                        <span>${waterfall.rating}/5.0 (${waterfall.popularity} ulasan)</span>
                    </div>
                    
                    <h3>Tingkat Kesulitan</h3>
                    <span class="difficulty ${waterfall.difficulty.toLowerCase()}">${waterfall.difficulty}</span>
                    
                    <h3>Kategori</h3>
                    <div class="categories">
                        ${waterfall.categories.map(cat => `<span class="category-tag">${cat}</span>`).join('')}
                    </div>
                </div>
                
                <div class="detail-col">
                    <h3>Fasilitas</h3>
                    <div class="facility-list">
                        ${waterfall.facilities.map(facility => `
                            <div class="facility-item">
                                <i class="fas ${facilityIcons[facility].icon}"></i>
                                ${facilityIcons[facility].label}
                            </div>
                        `).join('')}
                    </div>
                    
                    <h3>Lokasi</h3>
                    <p>${waterfall.distance} km dari pusat kota Bandung</p>
                    
                    <div id="detail-map" style="height: 200px; margin-top: 15px;"></div>
                </div>
            </div>
        </div>
    `;

    // Initialize mini map
    const detailMap = L.map('detail-map').setView(waterfall.location, 14);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(detailMap);
    
    L.marker(waterfall.location).addTo(detailMap)
        .bindPopup(`<b>${waterfall.name}</b>`)
        .openPopup();

    document.getElementById('modal-title').textContent = waterfall.name;
    modal.style.display = 'block';
}

// Fungsi untuk memfilter curug berdasarkan kriteria
function filterBeaches() {
    const searchTerm = document.getElementById('search').value.toLowerCase();
    const categoryFilter = document.getElementById('category-filter').value;
    const facilityFilter = document.getElementById('facility-filter').value;
    const sortBy = document.getElementById('sort-by').value;

    // Filter berdasarkan pencarian
    let results = waterfalls.filter(waterfall => 
        waterfall.name.toLowerCase().includes(searchTerm) || 
        waterfall.description.toLowerCase().includes(searchTerm)
    );

    // Filter berdasarkan kategori
    if (categoryFilter !== 'all') {
        results = results.filter(waterfall => waterfall.type === categoryFilter);
    }

    // Filter berdasarkan fasilitas
    if (facilityFilter !== 'all') {
        results = results.filter(waterfall => waterfall.facilities.includes(facilityFilter));
    }

    // Urutkan hasil
    switch (sortBy) {
        case 'name-asc':
            results.sort((a, b) => a.name.localeCompare(b.name));
            break;
        case 'name-desc':
            results.sort((a, b) => b.name.localeCompare(a.name));
            break;
        case 'popularity':
            results.sort((a, b) => b.popularity - a.popularity);
            break;
        case 'distance':
            results.sort((a, b) => a.distance - b.distance);
            break;
    }

    filteredBeaches = results;
    renderBeachList(filteredBeaches);
    createBeachMarkers(filteredBeaches);
}

// Fungsi untuk mendapatkan lokasi pengguna
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            position => {
                currentPosition = [position.coords.latitude, position.coords.longitude];
                map.setView(currentPosition, 13);
                
                // Tambahkan marker lokasi pengguna
                L.marker(currentPosition, {
                    icon: L.divIcon({
                        className: 'user-location-marker',
                        html: '<i class="fas fa-location-dot" style="color: #e74c3c; font-size: 24px;"></i>',
                        iconSize: [24, 24],
                        iconAnchor: [12, 12]
                    })
                }).addTo(map).bindPopup('Lokasi Anda').openPopup();
                
                // Jika sorting by distance diaktifkan, update filter
                if (document.getElementById('sort-by').value === 'distance') {
                    filterBeaches();
                }
            },
            error => {
                console.error("Error getting location:", error);
                alert("Tidak dapat mendapatkan lokasi Anda. Pastikan GPS aktif dan izin diberikan.");
            }
        );
    } else {
        alert("Browser tidak mendukung geolokasi.");
    }
}

// Event Listeners
document.getElementById('search').addEventListener('input', filterBeaches);
document.getElementById('search-btn').addEventListener('click', filterBeaches);
document.getElementById('category-filter').addEventListener('change', filterBeaches);
document.getElementById('facility-filter').addEventListener('change', filterBeaches);
document.getElementById('sort-by').addEventListener('change', filterBeaches);

document.getElementById('locate-btn').addEventListener('click', getLocation);
document.getElementById('zoom-in-btn').addEventListener('click', () => map.zoomIn());
document.getElementById('zoom-out-btn').addEventListener('click', () => map.zoomOut());

document.getElementById('theme-toggle').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const icon = document.querySelector('#theme-toggle i');
    if (document.body.classList.contains('dark-mode')) {
        icon.classList.replace('fa-moon', 'fa-sun');
    } else {
        icon.classList.replace('fa-sun', 'fa-moon');
    }
});

document.getElementById('fullscreen-btn').addEventListener('click', () => {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
    }
});

document.querySelector('.close-modal').addEventListener('click', () => {
    document.getElementById('info-modal').style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target === document.getElementById('info-modal')) {
        document.getElementById('info-modal').style.display = 'none';
    }
});

// Inisialisasi pertama
filterBeaches();

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Mobile menu toggle (will be added when implementing responsive menu)
// You can add this when you implement mobile menu functionality

// Sticky header effect
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.boxShadow = 'none';
    }
});

// Animation on scroll
// You can add this when implementing AOS library

// Current year for footer
document.addEventListener('DOMContentLoaded', function() {
    const yearSpan = document.querySelector('.current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});



// Fungsi untuk render author section
function renderAuthorSection() {
    const authorSection = document.querySelector('.author-card');
    if (authorSection) {
        authorSection.innerHTML = `
            <div class="author-photo-container">
                <img src="${authorData.photo}" alt="${authorData.name}" class="author-photo">
            </div>
            <div class="author-info">
                <h4>${authorData.name}</h4>
                <p class="author-role">${authorData.role} • ${authorData.university}</p>
                <p class="author-desc">${authorData.description}</p>
                <div class="author-social">
                    <a href="${authorData.social.github}" target="_blank" title="GitHub"><i class="fab fa-github"></i></a>
                    <a href="${authorData.social.linkedin}" target="_blank" title="LinkedIn"><i class="fab fa-linkedin"></i></a>
                    <a href="${authorData.social.portfolio}" target="_blank" title="Portfolio"><i class="fas fa-globe"></i></a>
                    <a href="${authorData.social.email}" title="Email"><i class="fas fa-envelope"></i></a>
                </div>
            </div>
        `;
    }
}

// Panggil fungsi saat DOM siap
document.addEventListener('DOMContentLoaded', function() {
    renderAuthorSection();
    
    // Update tahun di footer
    document.querySelector('.current-year').textContent = new Date().getFullYear();
});

// Mobile Menu Toggle
function setupMobileMenu() {
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileMenuToggle && navLinks) {
        mobileMenuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            mobileMenuToggle.innerHTML = navLinks.classList.contains('active') 
                ? '<i class="fas fa-times"></i>' 
                : '<i class="fas fa-bars"></i>';
        });
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeDarkMode();
    setupMobileMenu();
    renderAuthorSection();
    updateCurrentYear();
});

// Di file script.js, tambahkan fungsi ini
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('nav ul');
    
    if (mobileMenuToggle && navLinks) {
        mobileMenuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            mobileMenuToggle.innerHTML = navLinks.classList.contains('active') 
                ? '<i class="fas fa-times"></i>' 
                : '<i class="fas fa-bars"></i>';
        });
        
        // Close menu when clicking on a link
        document.querySelectorAll('nav ul li a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                mobileMenuToggle.innerHTML = '<i class="fas fa-bars"></i>';
            });
        });
    }
});

