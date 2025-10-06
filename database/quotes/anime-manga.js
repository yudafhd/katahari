const animeMangaQuotes = [
    {
        code: "OP001",
        content: "I'm gonna be the King of the Pirates!",
        content_id: "Aku akan menjadi Raja Bajak Laut!",
        credit: "Monkey D. Luffy, One Piece",
    },
    {
        code: "NRT002",
        content: "I never go back on my word! That's my nindō!",
        content_id: "Aku tidak pernah menarik kata-kataku! Itulah jalan ninjaku!",
        credit: "Naruto Uzumaki, Naruto",
    },
    {
        code: "AOT003",
        content:
            "If you win, you live. If you lose, you die. If you don't fight, you can't win!",
        content_id:
            "Jika kau menang, kau hidup. Jika kalah, kau mati. Jika tidak bertarung, kau tidak bisa menang!",
        credit: "Eren Yeager, Attack on Titan",
    },
    {
        code: "FMA004",
        content: "A lesson without pain is meaningless.",
        content_id: "Pelajaran tanpa rasa sakit itu tidak ada artinya.",
        credit: "Edward Elric, Fullmetal Alchemist: Brotherhood",
    },
    {
        code: "DBZ005",
        content: "Power comes in response to a need, not a desire.",
        content_id: "Kekuatan muncul sebagai jawaban atas kebutuhan, bukan keinginan.",
        credit: "Goku, Dragon Ball Z",
    },
    {
        code: "DE006",
        content: "I am justice! I protect the innocent and those who fear evil.",
        content_id:
            "Akulah keadilan! Aku melindungi yang tak bersalah dan mereka yang takut akan kejahatan.",
        credit: "Light Yagami, Death Note",
    },
    {
        code: "HNK007",
        content: "You are already dead.",
        content_id: "Kau sudah mati.",
        credit: "Kenshiro, Fist of the North Star (Hokuto no Ken)",
    },
    {
        code: "BC008",
        content: "Surpass your limits. Right here, right now!",
        content_id: "Lampaui batasmu. Di sini, saat ini juga!",
        credit: "Yami Sukehiro, Black Clover",
    },
    {
        code: "TTGL009",
        content: "Believe in the me that believes in you!",
        content_id: "Percayalah pada diriku yang percaya padamu!",
        credit: "Kamina, Tengen Toppa Gurren Lagann",
    },
    {
        code: "HxH010",
        content: "When I say it doesn't hurt, that means I can bear it.",
        content_id: "Saat aku bilang tidak sakit, itu berarti aku bisa menahannya.",
        credit: "Killua Zoldyck, Hunter x Hunter",
    },
    {
        code: "FMAB011",
        content:
            "A lesson without pain is meaningless. That’s because you can’t gain something without sacrificing something else.",
        content_id:
            "Pelajaran tanpa rasa sakit tidak ada artinya. Karena kau tidak bisa mendapatkan sesuatu tanpa mengorbankan hal lain.",
        credit: "Edward Elric, Fullmetal Alchemist: Brotherhood",
    },
    {
        code: "NRT012",
        content:
            "A person grows up when he's able to overcome hardships. Protection is important, but there are some things a person must learn on his own.",
        content_id:
            "Seseorang tumbuh ketika ia mampu mengatasi kesulitan. Perlindungan itu penting, tapi ada hal-hal yang harus dipelajari sendiri.",
        credit: "Jiraiya, Naruto",
    },
    {
        code: "OP013",
        content:
            "When do you think people die? When they are shot with a bullet? No! It’s when they are forgotten.",
        content_id:
            "Kapan menurutmu orang mati? Saat mereka ditembak? Tidak! Saat mereka dilupakan.",
        credit: "Dr. Hiluluk, One Piece",
    },
    {
        code: "AOT014",
        content: "The world is merciless, but it’s also very beautiful.",
        content_id: "Dunia ini kejam, tapi juga sangat indah.",
        credit: "Mikasa Ackerman, Attack on Titan",
    },
    {
        code: "DGM015",
        content: "A lesson without chaos brings no change.",
        content_id: "Pelajaran tanpa kekacauan tidak membawa perubahan.",
        credit: "Allen Walker, D.Gray-man",
    },
    {
        code: "TR016",
        content: "I don’t care if I die, as long as I can change the future.",
        content_id:
            "Aku tak peduli jika harus mati, selama aku bisa mengubah masa depan.",
        credit: "Takemichi Hanagaki, Tokyo Revengers",
    },
    {
        code: "BLE017",
        content:
            "We are all like fireworks. We climb, shine, and always go our separate ways and become further apart.",
        content_id:
            "Kita semua seperti kembang api. Kita naik, bersinar, lalu berpencar dan saling menjauh.",
        credit: "Hitsugaya Toshiro, Bleach",
    },
    {
        code: "CL018",
        content:
            "The world isn’t perfect. But it’s there for us, doing the best it can… that’s what makes it so damn beautiful.",
        content_id:
            "Dunia ini tidak sempurna. Tapi ia tetap ada untuk kita, melakukan yang terbaik… itulah yang membuatnya begitu indah.",
        credit: "Roy Mustang, Fullmetal Alchemist: Brotherhood",
    },
    {
        code: "CF019",
        content:
            "Fear is not evil. It tells you what your weakness is. And once you know your weakness, you can become stronger.",
        content_id:
            "Rasa takut bukanlah kejahatan. Itu memberitahumu apa kelemahanmu. Dan setelah kamu tahu, kamu bisa menjadi lebih kuat.",
        credit: "Gildarts Clive, Fairy Tail",
    },
    {
        code: "HXH020",
        content:
            "An apology is a promise to do things differently next time, and to keep that promise.",
        content_id:
            "Permintaan maaf adalah janji untuk bertindak berbeda di lain waktu, dan menepatinya.",
        credit: "Gon Freecss, Hunter x Hunter",
    },
    {
        code: "KNK021",
        content: "The world is not beautiful, therefore it is.",
        content_id: "Dunia ini tidak indah, dan karena itu justru indah.",
        credit: "Kino, Kino no Tabi",
    },
    {
        code: "NG022",
        content: "The world is full of hope, but also filled with despair.",
        content_id: "Dunia ini penuh harapan, tapi juga penuh keputusasaan.",
        credit: "Makoto Naegi, Danganronpa",
    },
    {
        code: "SAO023",
        content: "I'd rather trust and regret than doubt and regret.",
        content_id:
            "Aku lebih memilih percaya lalu menyesal, daripada ragu lalu menyesal.",
        credit: "Kirito, Sword Art Online",
    },
    {
        code: "YLI024",
        content: "Living is anxiety and pain. But you have to endure it.",
        content_id:
            "Hidup itu penuh kecemasan dan rasa sakit. Tapi kamu harus menjalaninya.",
        credit: "Yuki Sohma, Fruits Basket",
    },
    {
        code: "DN025",
        content:
            "You can't ever win if you're always on the defensive. To win, you have to attack!",
        content_id:
            "Kau tidak akan pernah menang jika terus bertahan. Untuk menang, kau harus menyerang!",
        credit: "L, Death Note",
    },
    {
        code: "KN026",
        content: "The world isn’t just black and white.",
        content_id: "Dunia ini tidak hanya hitam dan putih.",
        credit: "Kaname Kuran, Vampire Knight",
    },
    {
        code: "BRS027",
        content: "Even if it hurts, even if it's painful, don't stop.",
        content_id: "Meski sakit, meski menyakitkan, jangan berhenti.",
        credit: "Black★Rock Shooter",
    },
    {
        code: "REZ028",
        content: "I hate myself. But I want to change.",
        content_id: "Aku membenci diriku sendiri. Tapi aku ingin berubah.",
        credit: "Subaru Natsuki, Re:Zero",
    },
    {
        code: "JJ029",
        content: "A lesson you don’t understand will be repeated until you do.",
        content_id:
            "Pelajaran yang tak kamu pahami akan diulang sampai kamu mengerti.",
        credit: "Satoru Gojo, Jujutsu Kaisen",
    },
    {
        code: "BSD030",
        content: "A lesson learned through pain is remembered forever.",
        content_id:
            "Pelajaran yang didapat lewat rasa sakit akan diingat selamanya.",
        credit: "Dazai Osamu, Bungou Stray Dogs",
    },
    {
        code: "OP031",
        content:
            "Power isn't determined by your size, but the size of your heart and dreams!",
        content_id:
            "Kekuatan tidak ditentukan oleh ukuran tubuhmu, tapi oleh besar hati dan impianmu!",
        credit: "Monkey D. Luffy, One Piece",
    },
    {
        code: "NRT032",
        content:
            "Hard work is worthless for those that don’t believe in themselves.",
        content_id:
            "Kerja keras tidak ada artinya bagi mereka yang tidak percaya pada diri sendiri.",
        credit: "Naruto Uzumaki, Naruto",
    },
    {
        code: "DBZ033",
        content:
            "Power comes in response to a need, not a desire. You have to create that need.",
        content_id:
            "Kekuatan datang karena kebutuhan, bukan karena keinginan. Kamu harus menciptakan kebutuhan itu.",
        credit: "Goku, Dragon Ball Z",
    },
    {
        code: "BC034",
        content: "Surpassing yourself is the strongest thing there is.",
        content_id:
            "Mengalahkan dirimu sendiri adalah hal terkuat yang bisa dilakukan.",
        credit: "Yami Sukehiro, Black Clover",
    },
    {
        code: "AOT035",
        content:
            "If you win, you live. If you lose, you die. If you don’t fight, you can’t win!",
        content_id:
            "Jika kau menang, kau hidup. Jika kau kalah, kau mati. Jika kau tidak bertarung, kau tidak bisa menang!",
        credit: "Eren Yeager, Attack on Titan",
    },
    {
        code: "KN036",
        content:
            "No matter how deep the night, it always turns to day, eventually.",
        content_id:
            "Tak peduli seberapa gelap malam, akhirnya selalu datang siang.",
        credit: "Brook, One Piece",
    },
    {
        code: "DN037",
        content:
            "In this world, there are very few people who actually trust each other.",
        content_id:
            "Di dunia ini, sangat sedikit orang yang benar-benar saling percaya.",
        credit: "Light Yagami, Death Note",
    },
    {
        code: "FT038",
        content: "We don’t die for our friends, we live for them.",
        content_id: "Kita tidak mati demi teman-teman kita, kita hidup untuk mereka.",
        credit: "Erza Scarlet, Fairy Tail",
    },
    {
        code: "TR039",
        content: "You can’t change the past, but you can learn from it.",
        content_id:
            "Kamu tidak bisa mengubah masa lalu, tapi kamu bisa belajar darinya.",
        credit: "Naoto Tachibana, Tokyo Revengers",
    },
    {
        code: "SAO040",
        content:
            "Real strength is not just about physical power. It’s about willpower.",
        content_id:
            "Kekuatan sejati bukan hanya tentang kekuatan fisik. Ini tentang kekuatan kehendak.",
        credit: "Asuna Yuuki, Sword Art Online",
    },
    {
        code: "HXH041",
        content:
            "You should enjoy the little detours. Because that's where you'll find the things more important than what you want.",
        content_id:
            "Nikmatilah jalan memutar. Di sanalah kamu akan menemukan hal yang lebih penting dari yang kamu cari.",
        credit: "Ging Freecss, Hunter x Hunter",
    },
    {
        code: "JJ042",
        content: "When you die, you’ll be alone. So live for yourself.",
        content_id:
            "Ketika kamu mati, kamu akan sendiri. Jadi hiduplah untuk dirimu sendiri.",
        credit: "Toji Fushiguro, Jujutsu Kaisen",
    },
    {
        code: "BSD043",
        content: "The darkness suits me better than the light.",
        content_id: "Kegelapan lebih cocok untukku dibandingkan cahaya.",
        credit: "Chuuya Nakahara, Bungou Stray Dogs",
    },
    {
        code: "OP044",
        content: "I want to live! Take me out to sea with you!",
        content_id: "Aku ingin hidup! Bawa aku pergi ke laut bersamamu!",
        credit: "Nico Robin, One Piece",
    },
    {
        code: "NRT045",
        content: "A smile is the easiest way out of a difficult situation.",
        content_id: "Senyum adalah cara termudah keluar dari situasi sulit.",
        credit: "Sakura Haruno, Naruto",
    },
    {
        code: "BLE046",
        content:
            "We fear because we value life. We should enjoy it while we can.",
        content_id:
            "Kita takut karena kita menghargai hidup. Kita harus menikmatinya selagi bisa.",
        credit: "Kisuke Urahara, Bleach",
    },
    {
        code: "CF047",
        content:
            "You don't die for your friends, you live so that you can protect them.",
        content_id:
            "Kau tidak mati untuk teman-temanmu, kau hidup agar bisa melindungi mereka.",
        credit: "Natsu Dragneel, Fairy Tail",
    },
    {
        code: "RZ048",
        content:
            "Even if you’re weak, there are miracles you can seize with your hands if you fight on to the very end.",
        content_id:
            "Meski kau lemah, ada keajaiban yang bisa kau raih jika terus bertarung sampai akhir.",
        credit: "Rem, Re:Zero",
    },
    {
        code: "JJ049",
        content: "Dying to win and risking death to win are completely different.",
        content_id:
            "Mati demi menang dan mempertaruhkan nyawa untuk menang adalah dua hal yang sangat berbeda.",
        credit: "Kento Nanami, Jujutsu Kaisen",
    },
    {
        code: "CL050",
        content:
            "You should enjoy the little things in life because one day you’ll look back and realize they were the big things.",
        content_id:
            "Nikmatilah hal-hal kecil dalam hidup, karena suatu hari kamu akan sadar bahwa itu adalah hal besar.",
        credit: "Tomoya Okazaki, Clannad",
    },

    // ---- Q variants ----
    {
        code: "OP-Q001",
        content:
            "Power isn't determined by your size, but the size of your heart and dreams.",
        content_id:
            "Kekuatan tidak ditentukan oleh ukuran tubuhmu, tetapi oleh besarnya hati dan impianmu.",
        credit: "Monkey D. Luffy, One Piece",
    },
    {
        code: "NT-Q002",
        content:
            "Hard work is worthless for those that don’t believe in themselves.",
        content_id:
            "Kerja keras tidak berarti bagi mereka yang tidak percaya pada diri sendiri.",
        credit: "Naruto Uzumaki, Naruto",
    },
    {
        code: "AOT-Q003",
        content:
            "If you win, you live. If you lose, you die. If you don't fight, you can't win!",
        content_id:
            "Jika kamu menang, kamu hidup. Jika kamu kalah, kamu mati. Jika kamu tidak bertarung, kamu tidak akan menang!",
        credit: "Eren Yeager, Attack on Titan",
    },
    {
        code: "FMAB-Q004",
        content: "A lesson without pain is meaningless.",
        content_id: "Pelajaran tanpa rasa sakit itu tidak berarti.",
        credit: "Edward Elric, Fullmetal Alchemist: Brotherhood",
    },
    {
        code: "DS-Q005",
        content: "Feelings are nothing without power.",
        content_id: "Perasaan tidak berarti tanpa kekuatan.",
        credit: "Giyu Tomioka, Demon Slayer",
    },
    {
        code: "OP-Q006",
        content: "Dying is not repaying a debt.",
        content_id: "Mati bukanlah cara membayar utang.",
        credit: "Monkey D. Luffy, One Piece",
    },
    {
        code: "BC-Q007",
        content: "Surpass your limits. Right here, right now!",
        content_id: "Lampaui batasmu. Di sini, saat ini juga!",
        credit: "Yami Sukehiro, Black Clover",
    },
    {
        code: "HXH-Q008",
        content: "An apology is a promise to do things differently next time.",
        content_id: "Permintaan maaf adalah janji untuk berbuat berbeda di lain waktu.",
        credit: "Killua Zoldyck, Hunter x Hunter",
    },
    {
        code: "OP-Q009",
        content:
            "I don't want to conquer anything. I just think the guy with the most freedom in this whole ocean is the Pirate King!",
        content_id:
            "Aku tidak ingin menaklukkan apa pun. Aku hanya berpikir orang yang paling bebas di seluruh lautan ini adalah Raja Bajak Laut!",
        credit: "Monkey D. Luffy, One Piece",
    },
    {
        code: "NT-Q010",
        content: "A person grows up when he's able to overcome hardships.",
        content_id:
            "Seseorang tumbuh dewasa ketika dia mampu mengatasi kesulitan.",
        credit: "Jiraiya, Naruto",
    },
    {
        code: "TR-Q011",
        content: "Even if I could start over, I’d make all the same mistakes.",
        content_id:
            "Bahkan jika aku bisa memulai dari awal, aku akan melakukan semua kesalahan yang sama.",
        credit: "Takemichi Hanagaki, Tokyo Revengers",
    },
    {
        code: "OP-Q012",
        content: "Being alone is more painful than getting hurt.",
        content_id: "Kesepian lebih menyakitkan daripada terluka.",
        credit: "Luffy, One Piece",
    },
    {
        code: "NT-Q013",
        content: "A smile is the easiest way out of a difficult situation.",
        content_id: "Senyuman adalah jalan keluar termudah dari situasi sulit.",
        credit: "Sakura Haruno, Naruto",
    },
    {
        code: "FMAB-Q014",
        content:
            "It’s not wrong to dream. But you have to work hard to make it come true.",
        content_id:
            "Tidak salah untuk bermimpi. Tapi kamu harus bekerja keras untuk mewujudkannya.",
        credit: "Winry Rockbell, Fullmetal Alchemist: Brotherhood",
    },
    {
        code: "OP-Q015",
        content:
            "You can’t bring back what you’ve lost, think about what you have now!",
        content_id:
            "Kamu tidak bisa mengembalikan apa yang sudah hilang, pikirkan apa yang kamu miliki sekarang!",
        credit: "Brook, One Piece",
    },
    {
        code: "DS-Q016",
        content:
            "Those who regret their actions are better than those who do nothing.",
        content_id:
            "Mereka yang menyesali perbuatannya lebih baik daripada yang tidak melakukan apa-apa.",
        credit: "Tanjiro Kamado, Demon Slayer",
    },
    {
        code: "OP-Q017",
        content:
            "Sometimes the best way to make people listen is to punch them in the face.",
        content_id:
            "Terkadang cara terbaik membuat orang mendengarkan adalah meninju wajah mereka.",
        credit: "Monkey D. Luffy, One Piece",
    },
    {
        code: "HXH-Q018",
        content: "When I say it doesn’t hurt, that means I can bear it.",
        content_id: "Saat aku bilang tidak sakit, itu berarti aku bisa menahannya.",
        credit: "Kurapika, Hunter x Hunter",
    },
    {
        code: "NT-Q019",
        content:
            "In this world, wherever there is light — there are also shadows.",
        content_id: "Di dunia ini, di mana ada cahaya — selalu ada bayangan.",
        credit: "Itachi Uchiha, Naruto",
    },
    {
        code: "FMAB-Q020",
        content:
            "Nothing’s perfect, the world’s not perfect. But it’s there for us, trying the best it can.",
        content_id:
            "Tidak ada yang sempurna, dunia juga tidak. Tapi dunia ada untuk kita, melakukan yang terbaik yang bisa ia lakukan.",
        credit: "Roy Mustang, Fullmetal Alchemist: Brotherhood",
    },
    {
        code: "OP-Q021",
        content: "If you don't take risks, you can't create a future.",
        content_id: "Jika kamu tidak mengambil risiko, kamu tidak bisa menciptakan masa depan.",
        credit: "Monkey D. Luffy, One Piece",
    },
    {
        code: "DBZ-Q022",
        content: "Push through the pain. Giving up hurts more.",
        content_id: "Terobos rasa sakit. Menyerah lebih menyakitkan.",
        credit: "Vegeta, Dragon Ball Z",
    },
    {
        code: "OPM-Q023",
        content: "Human strength lies in the ability to change yourself.",
        content_id: "Kekuatan manusia terletak pada kemampuan mengubah diri sendiri.",
        credit: "Saitama, One Punch Man",
    },
    {
        code: "BLE-Q024",
        content:
            "To know sorrow is not terrifying. What is terrifying is to know you can't go back to the happiness you could have.",
        content_id:
            "Mengetahui kesedihan bukanlah hal yang menakutkan. Yang menakutkan adalah mengetahui bahwa kamu tidak bisa kembali ke kebahagiaan yang pernah kamu miliki.",
        credit: "Rangiku Matsumoto, Bleach",
    },
    {
        code: "JJBA-Q025",
        content: "It was me, Dio!",
        content_id: "Itu aku, Dio!",
        credit: "Dio Brando, JoJo's Bizarre Adventure",
    },
    {
        code: "SAIK-Q026",
        content: "Good grief.",
        content_id: "Aduh, merepotkan.",
        credit: "Kusuo Saiki, The Disastrous Life of Saiki K.",
    },
    {
        code: "NT-Q027",
        content: "A lesson without pain is meaningless.",
        content_id: "Pelajaran tanpa rasa sakit itu tidak berarti.",
        credit: "Edward Elric, Fullmetal Alchemist: Brotherhood",
    },
    {
        code: "HXH-Q028",
        content: "A person grows up when he's able to overcome hardships.",
        content_id:
            "Seseorang tumbuh dewasa ketika dia mampu mengatasi kesulitan.",
        credit: "Jiraiya, Naruto",
    },
    {
        code: "TR-Q029",
        content: "Even if I could start over, I’d make all the same mistakes.",
        content_id:
            "Bahkan jika aku bisa memulai dari awal, aku akan melakukan semua kesalahan yang sama.",
        credit: "Takemichi Hanagaki, Tokyo Revengers",
    },
    {
        code: "DS-Q030",
        content:
            "Those who regret their actions are better than those who do nothing.",
        content_id:
            "Mereka yang menyesali perbuatannya lebih baik daripada yang tidak melakukan apa-apa.",
        credit: "Tanjiro Kamado, Demon Slayer",
    },
    {
        code: "AOT-Q031",
        content:
            "If you win, you live. If you lose, you die. If you don’t fight, you can’t win!",
        content_id:
            "Jika kau menang, kau hidup. Jika kau kalah, kau mati. Jika kau tidak bertarung, kau tidak bisa menang!",
        credit: "Eren Yeager, Attack on Titan",
    },
    {
        code: "BC-Q032",
        content: "My magic is never giving up!",
        content_id: "Sihirku adalah tidak pernah menyerah!",
        credit: "Asta, Black Clover",
    },
    {
        code: "BSD-Q033",
        content:
            "A lesson learned from the past is the guiding light of the future.",
        content_id: "Pelajaran dari masa lalu adalah cahaya penuntun masa depan.",
        credit: "Osamu Dazai, Bungou Stray Dogs",
    },
    {
        code: "YYH-Q034",
        content:
            "A lesson without pain is meaningless, that’s because you can’t gain something without sacrificing something else.",
        content_id:
            "Pelajaran tanpa rasa sakit tidak ada artinya, karena kamu tidak bisa mendapatkan sesuatu tanpa mengorbankan hal lain.",
        credit: "Yusuke Urameshi, Yu Yu Hakusho",
    },
    {
        code: "SK8-Q035",
        content:
            "The moment you think of giving up, think of the reason why you started.",
        content_id:
            "Saat kamu berpikir untuk menyerah, pikirkan alasan mengapa kamu memulainya.",
        credit: "Reki Kyan, SK8 the Infinity",
    },
    {
        code: "CL-Q036",
        content: "The world cannot be changed with pretty words alone.",
        content_id: "Dunia tidak bisa diubah hanya dengan kata-kata indah.",
        credit: "Lelouch Lamperouge, Code Geass",
    },
    {
        code: "KNY-Q037",
        content:
            "Feel the rage. The powerful, pure rage of not being able to forgive will become your unswerving drive to take action.",
        content_id:
            "Rasakan amarahnya. Amarah murni yang kuat karena tak bisa memaafkan akan menjadi pendorongmu untuk bertindak.",
        credit: "Giyu Tomioka, Demon Slayer",
    },
    {
        code: "TG-Q038",
        content: "It’s not the world that’s messed up; it’s those of us in it.",
        content_id: "Bukan dunia yang rusak; tapi kita yang ada di dalamnya.",
        credit: "Ken Kaneki, Tokyo Ghoul",
    },
    {
        code: "DGS-Q039",
        content:
            "Life is like a pencil that will surely run out, but will leave the beautiful writing of life behind.",
        content_id:
            "Hidup itu seperti pensil yang pasti habis, tapi akan meninggalkan tulisan indah tentang kehidupan.",
        credit: "Gintoki Sakata, Gintama",
    },
    {
        code: "NAR-Q040",
        content:
            "When you give up, your dreams and everything else—they're gone.",
        content_id:
            "Saat kamu menyerah, impian dan segalanya—semuanya lenyap.",
        credit: "Naruto Uzumaki, Naruto Shippuden",
    },

    // ---- from gemini (AQxxx) ----
    {
        code: "AQ001",
        content: "People die when they are killed.",
        content_id: "Orang akan mati ketika mereka dibunuh.",
        credit: "Shirou Emiya, Fate/stay night",
    },
    {
        code: "AQ002",
        content:
            "To know sorrow is not terrifying. What is terrifying is to know you can't go back to happiness you could have.",
        content_id:
            "Mengetahui kesedihan itu tidak menakutkan. Yang menakutkan adalah mengetahui bahwa kau tidak bisa kembali ke kebahagiaan yang bisa saja kau miliki.",
        credit: "Matsumoto Rangiku, Bleach",
    },
    {
        code: "AQ003",
        content: "If you don’t take risks, you can’t create a future!",
        content_id:
            "Jika kau tidak mengambil risiko, kau tidak bisa menciptakan masa depan!",
        credit: "Monkey D. Luffy, One Piece",
    },
    {
        code: "AQ004",
        content:
            "Hard work is worthless for those that don’t believe in themselves.",
        content_id:
            "Kerja keras tidak ada artinya bagi mereka yang tidak percaya pada diri sendiri.",
        credit: "Naruto Uzumaki, Naruto",
    },
    {
        code: "AQ005",
        content:
            "Fear is not evil. It tells you what your weakness is. And once you know your weakness, you can become stronger as well as kinder.",
        content_id:
            "Rasa takut itu bukanlah kejahatan. Itu memberitahumu apa kelemahanmu. Dan begitu kau tahu kelemahanmu, kau bisa menjadi lebih kuat sekaligus lebih baik hati.",
        credit: "Gildarts Clive, Fairy Tail",
    },
    {
        code: "AQ006",
        content:
            "Whatever you lose, you'll find it again. But what you throw away you'll never get back.",
        content_id:
            "Apa pun yang hilang darimu, kau akan menemukannya lagi. Tapi apa yang kau buang tidak akan pernah kembali.",
        credit: "Kenshin Himura, Rurouni Kenshin",
    },
    {
        code: "AQ007",
        content: "If you can’t do something, then don’t. Focus on what you can.",
        content_id:
            "Jika kau tidak bisa melakukan sesuatu, jangan lakukan. Fokus pada apa yang bisa kau lakukan.",
        credit: "Shiroe, Log Horizon",
    },
    {
        code: "AQ008",
        content:
            "The world isn’t perfect. But it’s there for us, doing the best it can… that’s what makes it so damn beautiful.",
        content_id:
            "Dunia ini tidak sempurna. Tapi ia ada untuk kita, melakukan yang terbaik yang ia bisa... itulah yang membuatnya begitu indah.",
        credit: "Roy Mustang, Fullmetal Alchemist",
    },
    {
        code: "AQ009",
        content:
            "It’s not the face that makes someone a monster, it’s the choices they make with their lives.",
        content_id:
            "Bukan wajah yang membuat seseorang menjadi monster, melainkan pilihan yang mereka buat dalam hidup mereka.",
        credit: "Naruto Uzumaki, Naruto",
    },
    {
        code: "AQ010",
        content:
            "A lesson without pain is meaningless. That's because no one can gain without sacrificing something.",
        content_id:
            "Pelajaran tanpa rasa sakit itu tidak ada artinya. Karena tak ada yang bisa diperoleh tanpa mengorbankan sesuatu.",
        credit: "Edward Elric, Fullmetal Alchemist: Brotherhood",
    },
    {
        code: "AQ011",
        content:
            "Stand up and walk. Keep moving forward. You've got two good legs. So get up and use them. You're strong enough to make your own path.",
        content_id:
            "Berdiri dan berjalanlah. Teruslah maju. Kau punya dua kaki yang sehat. Jadi berdirilah dan gunakan. Kau cukup kuat untuk membuat jalanmu sendiri.",
        credit: "Edward Elric, Fullmetal Alchemist",
    },
    {
        code: "AQ012",
        content:
            "If you don't like your destiny, don't accept it. Instead, have the courage to change it the way you want it to be.",
        content_id:
            "Jika kau tidak menyukai takdirmu, jangan menerimanya. Milikilah keberanian untuk mengubahnya sesuai keinginanmu.",
        credit: "Naruto Uzumaki, Naruto",
    },
    {
        code: "AQ013",
        content:
            "Those who break the rules are scum, but those who abandon their friends are worse than scum.",
        content_id:
            "Mereka yang melanggar aturan adalah sampah, tapi mereka yang meninggalkan teman-temannya lebih buruk dari sampah.",
        credit: "Kakashi Hatake, Naruto",
    },
    {
        code: "AQ014",
        content: "When you give up, that’s when the game is over.",
        content_id: "Saat kau menyerah, saat itulah permainan berakhir.",
        credit: "Mitsuyoshi Anzai, Slam Dunk",
    },
    {
        code: "AQ015",
        content:
            "There's no shame in falling down! True shame is to not stand up again!",
        content_id:
            "Tidak ada yang memalukan dari terjatuh! Rasa malu yang sebenarnya adalah tidak bangkit kembali!",
        credit: "Shintaro Midorima, Kuroko's Basketball",
    },
    {
        code: "AQ016",
        content:
            "Sometimes, the things that matter the most are right in front of you.",
        content_id:
            "Terkadang, hal-hal yang paling penting ada tepat di depanmu.",
        credit: "Gray Fullbuster, Fairy Tail",
    },
    {
        code: "AQ017",
        content: "The ticket to the future is always open.",
        content_id: "Tiket menuju masa depan selalu terbuka.",
        credit: "Vash the Stampede, Trigun",
    },
    {
        code: "AQ018",
        content:
            "I want to be a millionaire not for the money, but for the freedom.",
        content_id:
            "Aku ingin menjadi miliuner bukan karena uangnya, tetapi karena kebebasannya.",
        credit: "Spike Spiegel, Cowboy Bebop",
    },
    {
        code: "AQ019",
        content:
            "If you just submit yourself to fate, then that's the end of it.",
        content_id:
            "Jika kau hanya pasrah pada takdir, maka selesai sudah.",
        credit: "Keiichi Maebara, Higurashi: When They Cry",
    },
    {
        code: "AQ020",
        content:
            "Even if I die, you keep living, okay? Live to see the end of this world, and to see why it was born. Live to see why a weak girl like me ended up here.",
        content_id:
            "Bahkan jika aku mati, kau tetaplah hidup, oke? Hiduplah untuk melihat akhir dunia ini, dan melihat mengapa dunia ini lahir. Hiduplah untuk mengetahui mengapa gadis lemah sepertiku berakhir di sini.",
        credit: "Sachi, Sword Art Online",
    },
    {
        code: "AQ021",
        content:
            "It is at the moment of death that humanity has realized the value of life.",
        content_id:
            "Pada saat kematianlah umat manusia menyadari nilai kehidupan.",
        credit: "Gilgamesh, Fate/Zero",
    },
    {
        code: "AQ022",
        content:
            "The weak are destined to lie beneath the boots of the strong. If that angers you, overcome your deficits.",
        content_id:
            "Yang lemah ditakdirkan berada di bawah sepatu bot yang kuat. Jika itu membuatmu marah, atasi kekuranganmu.",
        credit: "Esdeath, Akame ga Kill!",
    },
    {
        code: "AQ023",
        content: "Simplicity is the easiest path to true beauty.",
        content_id: "Kesederhanaan adalah jalan termudah menuju keindahan sejati.",
        credit: "Seishuu Handa, Barakamon",
    },
    {
        code: "AQ024",
        content:
            "Don’t be so quick to throw away your life. No matter how disgraceful or embarrassing it may be, you need to keep struggling to find your way out until the very end.",
        content_id:
            "Jangan terlalu cepat membuang hidupmu. Tak peduli seberapa memalukan keadaannya, kau harus terus berjuang mencari jalan keluar sampai akhir.",
        credit: "Clare, Claymore",
    },
    {
        code: "AQ025",
        content:
            "A life that lives without doing anything is the same as a slow death.",
        content_id:
            "Hidup yang dijalani tanpa melakukan apa pun sama saja dengan kematian yang lambat.",
        credit: "Lelouch Lamperouge, Code Geass",
    },
    {
        code: "AQ026",
        content:
            "If you keep on hiding your true feelings, who is going to be happy? If you are sad, you should say it out loud!",
        content_id:
            "Jika kau terus menyembunyikan perasaanmu yang sebenarnya, siapa yang akan bahagia? Jika kau sedih, katakanlah dengan lantang!",
        credit: "Haruhi Fujioka, Ouran High School Host Club",
    },
    {
        code: "AQ027",
        content:
            "No matter how deep the night, it always turns to day, eventually.",
        content_id:
            "Tak peduli seberapa larut malam, akhirnya akan menjadi siang.",
        credit: "Brook, One Piece",
    },
    {
        code: "AQ028",
        content:
            "The moment you think of giving up, think of the reason why you held on so long.",
        content_id:
            "Saat kau berpikir untuk menyerah, pikirkan alasan mengapa kau bertahan selama ini.",
        credit: "Natsu Dragneel, Fairy Tail",
    },
    {
        code: "AQ029",
        content:
            "If you have time to think of a beautiful end, then live beautifully until the end.",
        content_id:
            "Jika kau punya waktu memikirkan akhir yang indah, hiduplah dengan indah sampai akhir.",
        credit: "Gintoki Sakata, Gintama",
    },
    {
        code: "AQ030",
        content: "Revenge just breeds more revenge.",
        content_id: "Balas dendam hanya melahirkan balas dendam yang lebih banyak.",
        credit: "Jiraiya, Naruto",
    },
    {
        code: "AQ031",
        content:
            "Power comes in response to a need, not a desire. You have to create that need.",
        content_id:
            "Kekuatan datang sebagai respons terhadap kebutuhan, bukan keinginan. Kau harus menciptakan kebutuhan itu.",
        credit: "Goku, Dragon Ball Z",
    },
    {
        code: "AQ032",
        content:
            "I am not a hero because I want to be. I am a hero because I have to be.",
        content_id:
            "Aku bukan pahlawan karena aku ingin. Aku pahlawan karena aku harus.",
        credit: "Saitama, One-Punch Man",
    },
    {
        code: "AQ033",
        content: "How can you move forward if you keep regretting the past?",
        content_id:
            "Bagaimana kau bisa maju jika terus menyesali masa lalu?",
        credit: "Edward Elric, Fullmetal Alchemist",
    },
    {
        code: "AQ034",
        content:
            "You can't always hold on to the things that are important. By letting them go we gain something else.",
        content_id:
            "Kau tidak bisa selalu berpegang pada hal-hal penting. Dengan melepaskannya, kita mendapatkan hal lain.",
        credit: "Eikichi Onizuka, Great Teacher Onizuka",
    },
    {
        code: "AQ035",
        content:
            "People’s lives don’t end when they die. It ends when they lose faith.",
        content_id:
            "Hidup manusia tidak berakhir saat mereka mati. Hidup berakhir ketika mereka kehilangan keyakinan.",
        credit: "Itachi Uchiha, Naruto",
    },
    {
        code: "AQ036",
        content: "Even the strongest of opponents always has a weakness.",
        content_id:
            "Bahkan lawan terkuat sekalipun selalu punya kelemahan.",
        credit: "L Lawliet, Death Note",
    },
    {
        code: "AQ037",
        content:
            "Sometimes I do feel like I’m a failure. Like there’s no hope for me. But even so, I’m not gonna give up. Ever!",
        content_id:
            "Kadang aku merasa seperti gagal. Seolah tak ada harapan bagiku. Tapi tetap saja, aku tidak akan menyerah. Tidak pernah!",
        credit: "Izuku Midoriya, My Hero Academia",
    },
    {
        code: "AQ038",
        content:
            "If you wanna make people dream, you've gotta start by believing in that dream yourself!",
        content_id:
            "Jika kau ingin membuat orang bermimpi, mulailah dengan percaya pada mimpimu sendiri!",
        credit: "Nino Nakano, The Quintessential Quintuplets",
    },
    {
        code: "AQ039",
        content:
            "The difference between a novice and a master is that a master has failed more times than a novice has ever tried.",
        content_id:
            "Perbedaan antara pemula dan master adalah master telah gagal lebih banyak daripada jumlah percobaan seorang pemula.",
        credit: "Koro-sensei, Assassination Classroom",
    },
    {
        code: "AQ040",
        content:
            "It's not about whether it's possible or not, I'm doing it because I want to.",
        content_id:
            "Ini bukan tentang mungkin atau tidaknya, aku melakukannya karena aku mau.",
        credit: "Monkey D. Luffy, One Piece",
    },
    {
        code: "AQ041",
        content: "I'll leave tomorrow's problems to tomorrow's me.",
        content_id: "Masalah esok biar diurus diriku yang besok.",
        credit: "Saitama, One-Punch Man",
    },
    {
        code: "AQ042",
        content:
            "Thinking you’re no-good and worthless is the worst thing you can do.",
        content_id:
            "Menganggap dirimu tak berguna adalah hal terburuk yang bisa kau lakukan.",
        credit: "Nobita Nobi, Doraemon",
    },
    {
        code: "AQ043",
        content:
            "What is right? What is wrong? In the end, all we have are our own choices.",
        content_id:
            "Apa yang benar? Apa yang salah? Pada akhirnya, yang kita miliki hanyalah pilihan kita sendiri.",
        credit: "Eren Yeager, Attack on Titan",
    },
    {
        code: "AQ044",
        content:
            "If you can't find a reason to fight, then you shouldn't be fighting.",
        content_id:
            "Jika kau tak menemukan alasan untuk bertarung, maka kau tak seharusnya bertarung.",
        credit: "Akame, Akame ga Kill!",
    },
    {
        code: "AQ045",
        content:
            "Humans die. Animals die. Plants die. Even stars die. It's a cycle of life. There's nothing sad about it.",
        content_id:
            "Manusia mati. Hewan mati. Tumbuhan mati. Bahkan bintang pun mati. Itu siklus kehidupan. Tak ada yang perlu disedihkan.",
        credit: "Maka Albarn, Soul Eater",
    },
    {
        code: "AQ046",
        content:
            "Don’t live your life making excuses. The one making your choices is yourself.",
        content_id:
            "Jangan jalani hidup dengan alasan. Pembuat keputusanmu adalah dirimu sendiri.",
        credit: "Mugen, Samurai Champloo",
    },
    {
        code: "AQ047",
        content:
            "To abandon your duty is a disgrace. To die is merely to lose your life. That is all.",
        content_id:
            "Meninggalkan tugas adalah aib. Mati hanyalah kehilangan nyawa. Itu saja.",
        credit: "Erwin Smith, Attack on Titan",
    },
    {
        code: "AQ048",
        content:
            "You should enjoy the little detours to the fullest. Because that's where you'll find the things more important than what you want.",
        content_id:
            "Nikmatilah jalan memutar kecil sepenuhnya. Di sanalah kau menemukan hal-hal yang lebih penting daripada yang kau inginkan.",
        credit: "Ging Freecss, Hunter x Hunter",
    },
    {
        code: "AQ049",
        content: "The world is cruel, but also very beautiful.",
        content_id: "Dunia ini kejam, tetapi juga sangat indah.",
        credit: "Mikasa Ackerman, Attack on Titan",
    },
    {
        code: "AQ050",
        content:
            "Even if you're a hero, you're still human. You're allowed to make mistakes.",
        content_id:
            "Meski kau seorang pahlawan, kau tetap manusia. Kau boleh membuat kesalahan.",
        credit: "All Might, My Hero Academia",
    },
    {
        code: "KNY101",
        content: "Set your heart ablaze!",
        content_id: "Bakar semangatmu!",
        credit: "Kyojuro Rengoku, Demon Slayer: Kimetsu no Yaiba",
    },
    {
        code: "AOT102",
        content: "The only thing we're allowed to do is to believe we won't regret the choice we made.",
        content_id: "Satu-satunya yang boleh kita lakukan adalah percaya bahwa kita takkan menyesali pilihan yang kita buat.",
        credit: "Levi Ackerman, Attack on Titan",
    },
    {
        code: "ORE103",
        content: "Youth is a lie. It is nothing but evil.",
        content_id: "Masa muda adalah kebohongan. Tak lain hanyalah kejahatan.",
        credit: "Hachiman Hikigaya, Oregairu",
    },
    {
        code: "NGE104",
        content: "I mustn't run away.",
        content_id: "Aku tidak boleh lari.",
        credit: "Shinji Ikari, Neon Genesis Evangelion",
    },
    {
        code: "RK105",
        content: "I will not kill.",
        content_id: "Aku tidak akan membunuh.",
        credit: "Himura Kenshin, Rurouni Kenshin",
    },
    {
        code: "MUS106",
        content: "Not everything has a name. Not everything can be seen.",
        content_id: "Tak semua hal punya nama. Tak semua hal bisa terlihat.",
        credit: "Ginko, Mushishi",
    },
    {
        code: "LAIN107",
        content: "No matter where you go, everyone's connected.",
        content_id: "Ke mana pun kau pergi, semua orang saling terhubung.",
        credit: "Lain Iwakura, Serial Experiments Lain",
    },
    {
        code: "GITS108",
        content: "Overspecialize, and you breed in weakness.",
        content_id: "Terlalu terspesialisasi hanya akan melahirkan kelemahan.",
        credit: "Motoko Kusanagi, Ghost in the Shell",
    },
    {
        code: "OP109",
        content: "Nothing happened.",
        content_id: "Tidak terjadi apa-apa.",
        credit: "Roronoa Zoro, One Piece",
    },
    {
        code: "SM110",
        content: "In the name of the Moon, I'll punish you!",
        content_id: "Atas nama Bulan, aku akan menghukummu!",
        credit: "Usagi Tsukino, Sailor Moon",
    },
    {
        code: "HYO111",
        content: "If I don't have to do it, I won't. If I have to, I'll do it quickly.",
        content_id: "Jika aku tak perlu melakukannya, aku tak akan melakukannya. Jika harus, akan kulakukan dengan cepat.",
        credit: "Houtarou Oreki, Hyouka",
    },
    {
        code: "KIKI112",
        content: "We each need to find our own inspiration.",
        content_id: "Kita masing-masing harus menemukan inspirasi kita sendiri.",
        credit: "Kiki, Kiki's Delivery Service",
    },
    {
        code: "SG113",
        content: "El Psy Congroo.",
        content_id: "El Psy Congroo.",
        credit: "Rintarou Okabe, Steins;Gate",
    },
    {
        code: "VIO114",
        content: "I want to know what ‘I love you’ means.",
        content_id: "Aku ingin tahu apa arti ‘aku mencintaimu’.",
        credit: "Violet Evergarden, Violet Evergarden",
    },
    {
        code: "MP100115",
        content: "It's okay to run away. You can come back stronger.",
        content_id: "Tak apa untuk melarikan diri. Kau bisa kembali dengan lebih kuat.",
        credit: "Reigen Arataka, Mob Psycho 100",
    },
    {
        code: "MP100116",
        content: "You are you, and that is your power.",
        content_id: "Kau adalah dirimu sendiri, dan itulah kekuatanmu.",
        credit: "Shigeo “Mob” Kageyama, Mob Psycho 100",
    },
    {
        code: "S&W117",
        content: "Call me Holo, the Wise Wolf.",
        content_id: "Panggil aku Holo, Serigala Bijak.",
        credit: "Holo, Spice and Wolf",
    },
    {
        code: "KNB118",
        content: "I am a shadow.",
        content_id: "Aku adalah bayangan.",
        credit: "Tetsuya Kuroko, Kuroko's Basketball",
    },
    {
        code: "DS119",
        content: "Ten billion percent!",
        content_id: "Sepuluh miliar persen!",
        credit: "Senku Ishigami, Dr. Stone",
    },
    {
        code: "VIN120",
        content: "You have no enemies. No one does.",
        content_id: "Kau tak punya musuh. Tak seorang pun yang punya.",
        credit: "Thors, Vinland Saga",
    },
    {
        code: "MIX201",
        content: "Sometimes the only way to escape the cage is to let yourself out.",
        content_id: "Terkadang satu-satunya cara keluar dari kandang adalah melepaskan dirimu sendiri.",
        credit: "Armin Arlert, Attack on Titan",
    },
    {
        code: "MIX202",
        content: "Give your heart!",
        content_id: "Serahkan hatimu!",
        credit: "Erwin Smith, Attack on Titan",
    },
    {
        code: "MIX203",
        content: "The strong should live and the weak should die? Then I'll get stronger.",
        content_id: "Yang kuat harus hidup dan yang lemah harus mati? Kalau begitu aku akan menjadi kuat.",
        credit: "Thorfinn, Vinland Saga",
    },
    {
        code: "MIX204",
        content: "Man proposes, God disposes.",
        content_id: "Manusia berencana, Tuhan yang menentukan.",
        credit: "Askeladd, Vinland Saga",
    },
    {
        code: "MIX205",
        content: "Yare yare daze.",
        content_id: "Ya ampun, merepotkan.",
        credit: "Jotaro Kujo, JoJo's Bizarre Adventure",
    },
    {
        code: "MIX206",
        content: "A lesson learned the hard way is a lesson you never forget.",
        content_id: "Pelajaran yang dipelajari dengan susah payah adalah pelajaran yang takkan terlupa.",
        credit: "Jotaro Kujo, JoJo's Bizarre Adventure",
    },
    {
        code: "MIX207",
        content: "Even if no one believes in you, walk forward with your own legs.",
        content_id: "Meski tak ada yang percaya padamu, berjalanlah maju dengan kakimu sendiri.",
        credit: "Tanjiro Kamado, Demon Slayer",
    },
    {
        code: "MIX208",
        content: "A scoundrel's smile can save a life.",
        content_id: "Senyum seorang penipu pun bisa menyelamatkan nyawa.",
        credit: "Reigen Arataka, Mob Psycho 100",
    },
    {
        code: "MIX209",
        content: "People’s lives are not like novels. They’re not bound by logic.",
        content_id: "Hidup manusia tidak seperti novel. Ia tidak terikat logika.",
        credit: "Gintoki Sakata, Gintama",
    },
    {
        code: "MIX210",
        content: "The world is not beautiful, therefore it is—because we give it meaning.",
        content_id: "Dunia tidak indah, dan karenanya indah—karena kitalah yang memberinya makna.",
        credit: "Shinobu Oshino, Monogatari Series",
    },
    {
        code: "MIX211",
        content: "If you don’t take care of yourself, you can’t take care of others.",
        content_id: "Jika kamu tidak menjaga dirimu, kamu takkan bisa menjaga orang lain.",
        credit: "Kaguya Shinomiya, Kaguya-sama: Love Is War",
    },
    {
        code: "MIX212",
        content: "A fake smile is the easiest armor.",
        content_id: "Senyum palsu adalah pelindung termudah.",
        credit: "Ai Hayasaka, Kaguya-sama: Love Is War",
    },
    {
        code: "MIX213",
        content: "If you're gonna hit it, hit it until it breaks.",
        content_id: "Kalau kau mau menghancurkannya, hancurkan sampai benar-benar pecah.",
        credit: "Megumi Fushiguro, Jujutsu Kaisen",
    },
    {
        code: "MIX214",
        content: "A curse can only be met with greater resolve.",
        content_id: "Kutukan hanya bisa dihadapi dengan tekad yang lebih besar.",
        credit: "Yuji Itadori, Jujutsu Kaisen",
    },
    {
        code: "MIX215",
        content: "I'm not alone anymore.",
        content_id: "Aku tidak sendirian lagi.",
        credit: "Atsushi Nakajima, Bungou Stray Dogs",
    },
    {
        code: "MIX216",
        content: "The wind is rising! We must try to live.",
        content_id: "Angin berhembus kencang! Kita harus mencoba untuk hidup.",
        credit: "Jirō Horikoshi, The Wind Rises",
    },
    {
        code: "MIX217",
        content: "You can’t sit around envying other people’s worlds. You have to go out and change your own.",
        content_id: "Jangan hanya iri pada dunia orang lain. Ubahlah duniamu sendiri.",
        credit: "Chiaki Shinichi, Nodame Cantabile",
    },
    {
        code: "MIX218",
        content: "The only one who can decide your worth is you.",
        content_id: "Hanya dirimu yang bisa menentukan nilai dirimu.",
        credit: "Sakura Kinomoto, Cardcaptor Sakura",
    },
    {
        code: "MIX219",
        content: "Miracles happen to those who never give up.",
        content_id: "Keajaiban terjadi pada mereka yang tak pernah menyerah.",
        credit: "Tsubasa Ozora, Captain Tsubasa",
    },
    {
        code: "MIX220",
        content: "I am a genius of hard work.",
        content_id: "Aku adalah jenius karena kerja keras.",
        credit: "Rock Lee, Naruto",
    },
    {
        code: "MIX221",
        content: "The ball is alive.",
        content_id: "Bola itu hidup.",
        credit: "Shoyo Hinata, Haikyuu!!",
    },
    {
        code: "MIX222",
        content: "Even if we’re not tall, we can fly.",
        content_id: "Meski kami tidak tinggi, kami bisa terbang.",
        credit: "Tobio Kageyama, Haikyuu!!",
    },
    {
        code: "MIX223",
        content: "The moment you think you’re weak, you become weaker.",
        content_id: "Saat kau mengira dirimu lemah, kau jadi lebih lemah.",
        credit: "Aomine Daiki, Kuroko's Basketball",
    },
    {
        code: "MIX224",
        content: "We fight not to win, but to keep moving forward.",
        content_id: "Kita bertarung bukan untuk menang, tapi untuk terus maju.",
        credit: "Mikazuki Augus, Mobile Suit Gundam: Iron-Blooded Orphans",
    },
    {
        code: "MIX225",
        content: "I can’t stand a world where you can’t shout your feelings.",
        content_id: "Aku tak tahan dunia di mana kau tak bisa meneriakkan perasaanmu.",
        credit: "Nana Osaki, NANA",
    },
    {
        code: "MIX226",
        content: "Kindness can be a stronger weapon than any blade.",
        content_id: "Kebaikan bisa jadi senjata yang lebih kuat dari pedang manapun.",
        credit: "Kenshin Himura, Rurouni Kenshin",
    },
    {
        code: "MIX227",
        content: "In this world, the weak don’t get to choose how they die.",
        content_id: "Di dunia ini, yang lemah tak bisa memilih cara mereka mati.",
        credit: "Guts, Berserk",
    },
    {
        code: "MIX228",
        content: "Even if we can’t be fulfilled, we move forward.",
        content_id: "Meski tak bisa terpenuhi, kita tetap melangkah maju.",
        credit: "Casca, Berserk",
    },
    {
        code: "MIX229",
        content: "Bang.",
        content_id: "Dor.",
        credit: "Vash the Stampede, Trigun",
    },
    {
        code: "MIX230",
        content: "Whatever happens, happens.",
        content_id: "Apa pun yang terjadi, terjadilah.",
        credit: "Spike Spiegel, Cowboy Bebop",
    },
    {
        code: "MIX231",
        content: "Believe in the me that believes in the students.",
        content_id: "Percayalah pada diriku yang percaya pada murid-muridku.",
        credit: "Koro-sensei, Assassination Classroom",
    },
    {
        code: "MIX232",
        content: "Music isn’t a tool to win. It’s a way to say ‘I’m here.’",
        content_id: "Musik bukan alat untuk menang. Musik adalah cara berkata ‘aku ada di sini’.",
        credit: "Kaori Miyazono, Your Lie in April",
    },
    {
        code: "MIX233",
        content: "If you don’t face someone, you can’t understand them.",
        content_id: "Jika kau tak berhadapan dengan seseorang, kau takkan memahaminya.",
        credit: "Shoya Ishida, A Silent Voice",
    },
    {
        code: "MIX234",
        content: "You can’t rewind life. But you can play the next track.",
        content_id: "Hidup tak bisa di-rewind. Tapi kau bisa memutar lagu berikutnya.",
        credit: "Rintarō Okabe, Steins;Gate",
    },
    {
        code: "MIX235",
        content: "A detective who corners himself can’t corner the culprit.",
        content_id: "Detektif yang menyudutkan dirinya takkan bisa menyudutkan pelaku.",
        credit: "Shinichi Kudo, Detective Conan",
    },
    {
        code: "MIX236",
        content: "If you have time to worry, run.",
        content_id: "Jika kau punya waktu untuk khawatir, berlarilah.",
        credit: "Sora, No Game No Life",
    },
    {
        code: "MIX237",
        content: "There’s no such thing as a painless lesson—that’s just a delusion.",
        content_id: "Tak ada pelajaran tanpa rasa sakit—itu hanya delusi.",
        credit: "Riza Hawkeye, Fullmetal Alchemist: Brotherhood",
    },
    {
        code: "MIX238",
        content: "Protecting a person means giving them a place to belong.",
        content_id: "Melindungi seseorang berarti memberinya tempat untuk pulang.",
        credit: "Todoroki Shoto, My Hero Academia",
    },
    {
        code: "MIX239",
        content: "A hero is someone who keeps getting back up.",
        content_id: "Pahlawan adalah orang yang terus bangkit lagi dan lagi.",
        credit: "All Might, My Hero Academia",
    },
    {
        code: "MIX240",
        content: "Hope is like a path: it appears when you walk on it.",
        content_id: "Harapan seperti jalan: ia muncul saat kau melangkah di atasnya.",
        credit: "Natsume Takashi, Natsume’s Book of Friends",
    },
    {
        code: "MIX241",
        content: "Humans can change. That’s their strength.",
        content_id: "Manusia bisa berubah. Itulah kekuatan mereka.",
        credit: "Edogawa Ranpo, Bungou Stray Dogs",
    },
    {
        code: "MIX242",
        content: "Even if you’re scared, move one step forward.",
        content_id: "Meski kau takut, majulah satu langkah.",
        credit: "Shinjiro Aragaki, Persona 3 (Anime)",
    },
    {
        code: "MIX243",
        content: "Justice without power is meaningless; power without justice is violence.",
        content_id: "Keadilan tanpa kekuatan tak berarti; kekuatan tanpa keadilan adalah kekerasan.",
        credit: "Lelouch Lamperouge, Code Geass",
    },
    {
        code: "MIX244",
        content: "A kingdom of isolation is just a prison with velvet walls.",
        content_id: "Kerajaan isolasi hanyalah penjara dengan dinding beludru.",
        credit: "San, Princess Mononoke",
    },
    {
        code: "MIX245",
        content: "The sky doesn’t need a reason to be blue, and neither do you to be yourself.",
        content_id: "Langit tak butuh alasan untuk biru, begitu pula kau untuk menjadi dirimu sendiri.",
        credit: "Howl, Howl’s Moving Castle",
    },
    {
        code: "MIX246",
        content: "When you can’t see the light, become it.",
        content_id: "Saat kau tak bisa melihat cahaya, jadilah cahaya itu.",
        credit: "Shigeo “Mob” Kageyama, Mob Psycho 100",
    },
    {
        code: "MIX247",
        content: "A warrior’s weapon is his heart before his blade.",
        content_id: "Senjata seorang ksatria adalah hatinya sebelum pedangnya.",
        credit: "Saber, Fate/stay night",
    },
    {
        code: "MIX248",
        content: "If you want to grant wishes, you must have the power to do so.",
        content_id: "Jika kau ingin mengabulkan harapan, kau harus punya kekuatan untuk melakukannya.",
        credit: "Homura Akemi, Puella Magi Madoka Magica",
    },
    {
        code: "MIX249",
        content: "Adults are just children who forgot how to be honest.",
        content_id: "Orang dewasa hanyalah anak-anak yang lupa bagaimana jujur.",
        credit: "Aqua Hoshino, Oshi no Ko",
    },
    {
        code: "MIX250",
        content: "The journey matters, even if you forget the destination.",
        content_id: "Perjalanan itu penting, meski kau lupa tujuan akhirnya.",
        credit: "Frieren, Frieren: Beyond Journey’s End",
    },


];

export default animeMangaQuotes;