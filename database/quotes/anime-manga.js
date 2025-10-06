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
        content_id:
            "Aku tidak pernah menarik kata-kataku! Itu adalah jalan ninjaku!",
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
        content_id:
            "Kekuatan muncul sebagai jawaban atas kebutuhan, bukan keinginan.",
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
        content_id:
            "Kita tidak mati demi teman-teman kita, kita hidup untuk mereka.",
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
        content: "We fear because we value life. We should enjoy it while we can.",
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
    {
        code: "OP-Q001",
        content:
            "Power isn't determined by your size, but the size of your heart and dreams.",
        content_id:
            "Kekuatan tidak ditentukan oleh ukuran tubuhmu, tetapi oleh besarnya hatimu dan impianmu.",
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
        content_id:
            "Permintaan maaf adalah janji untuk berbuat berbeda di lain waktu.",
        credit: "Killua Zoldyck, Hunter x Hunter",
    },
    {
        code: "OP-Q009",
        content:
            "I don't want to conquer anything. I just think the guy with the most freedom in this whole ocean is the Pirate King!",
        content_id:
            "Aku tidak ingin menaklukkan apapun. Aku hanya berpikir orang yang paling bebas di lautan ini adalah Raja Bajak Laut!",
        credit: "Monkey D. Luffy, One Piece",
    },
    {
        code: "NT-Q010",
        content: "A person grows up when he's able to overcome hardships.",
        content_id: "Seseorang tumbuh dewasa ketika dia mampu mengatasi kesulitan.",
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
            "Terkadang cara terbaik untuk membuat orang mendengarkan adalah dengan meninju wajah mereka.",
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
        content: "In this world, wherever there is light — there are also shadows.",
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
        content_id:
            "Jika kamu tidak mengambil risiko, kamu tidak bisa menciptakan masa depan.",
        credit: "Monkey D. Luffy, One Piece",
    },
    {
        code: "DBZ-Q022",
        content: "Push through the pain. Giving up hurts more.",
        content_id: "Teruskan melewati rasa sakit. Menyerah lebih menyakitkan.",
        credit: "Vegeta, Dragon Ball Z",
    },
    {
        code: "OPM-Q023",
        content: "Human strength lies in the ability to change yourself.",
        content_id:
            "Kekuatan manusia terletak pada kemampuan untuk mengubah diri sendiri.",
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
        content_id: "Seseorang tumbuh dewasa ketika dia mampu mengatasi kesulitan.",
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
        content: "When you give up, your dreams and everything else—they're gone.",
        content_id: "Saat kamu menyerah, impian dan segalanya—semuanya lenyap.",
        credit: "Naruto Uzumaki, Naruto Shippuden",
    },

    // from gemini

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
            "Apapun yang hilang darimu, kau akan menemukannya lagi. Tapi apa yang kau buang, tidak akan pernah kembali.",
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
            "Bukan wajah yang membuat seseorang menjadi monster, tapi pilihan yang mereka buat dalam hidup mereka.",
        credit: "Naruto Uzumaki, Naruto",
    },
    {
        code: "AQ010",
        content:
            "A lesson without pain is meaningless. That's because no one can gain without sacrificing something.",
        content_id:
            "Pelajaran tanpa rasa sakit itu tidak ada artinya. Itu karena tidak ada yang bisa diperoleh tanpa mengorbankan sesuatu.",
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
            "Jika kau tidak menyukai takdirmu, jangan menerimanya. Sebaliknya, milikilah keberanian untuk mengubahnya sesuai keinginanmu.",
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
        content_id: "Terkadang, hal-hal yang paling penting ada tepat di depanmu.",
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
        content: "If you just submit yourself to fate, then that's the end of it.",
        content_id: "Jika kau hanya pasrah pada takdir, maka itulah akhirnya.",
        credit: "Keiichi Maebara, Higurashi: When They Cry",
    },
    {
        code: "AQ020",
        content:
            "Even if I die, you keep living, okay? Live to see the end of this world, and to see why it was born. Live to see why a weak girl like me ended up here.",
        content_id:
            "Bahkan jika aku mati, kau tetaplah hidup, oke? Hiduplah untuk melihat akhir dunia ini, dan untuk melihat mengapa dunia ini lahir. Hiduplah untuk melihat mengapa gadis lemah sepertiku berakhir di sini.",
        credit: "Sachi, Sword Art Online",
    },
    {
        code: "AQ021",
        content:
            "It is at the moment of death that humanity has realized the value of life.",
        content_id: "Pada saat kematianlah umat manusia menyadari nilai kehidupan.",
        credit: "Gilgamesh, Fate/Zero",
    },
    {
        code: "AQ022",
        content:
            "The weak are destined to lie beneath the boots of the strong. If that angers you, overcome your deficits.",
        content_id:
            "Yang lemah ditakdirkan untuk berada di bawah sepatu bot yang kuat. Jika itu membuatmu marah, atasi kekuranganmu.",
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
            "Jangan terlalu cepat membuang hidupmu. Tidak peduli seberapa memalukan atau memalukannya, kau harus terus berjuang mencari jalan keluar sampai akhir.",
        credit: "Clare, Claymore",
    },
    {
        code: "AQ025",
        content:
            "A life that lives without doing anything is the same as a slow death.",
        content_id:
            "Hidup yang dijalani tanpa melakukan apa pun sama dengan kematian yang lambat.",
        credit: "Lelouch Lamperouge, Code Geass",
    },
    {
        code: "AQ026",
        content:
            "If you keep on hiding your true feelings, who is going to be happy? If you are sad, you should say it out loud!",
        content_id:
            "Jika kau terus menyembunyikan perasaanmu yang sebenarnya, siapa yang akan bahagia? Jika kau sedih, kau harus mengatakannya dengan lantang!",
        credit: "Haruhi Fujioka, Ouran High School Host Club",
    },
    {
        code: "AQ027",
        content:
            "No matter how deep the night, it always turns to day, eventually.",
        content_id:
            "Tidak peduli seberapa larut malam, pada akhirnya akan selalu menjadi siang.",
        credit: "Brook, One Piece",
    },
    {
        code: "AQ028",
        content:
            "The moment you think of giving up, think of the reason why you held on so long.",
        content_id:
            "Saat kau berpikir untuk menyerah, pikirkan alasan mengapa kau bertahan begitu lama.",
        credit: "Natsu Dragneel, Fairy Tail",
    },
    {
        code: "AQ029",
        content:
            "If you have time to think of a beautiful end, then live beautifully until the end.",
        content_id:
            "Jika kau punya waktu untuk memikirkan akhir yang indah, maka hiduplah dengan indah sampai akhir.",
        credit: "Gintoki Sakata, Gintama",
    },
    {
        code: "AQ030",
        content: "Revenge just breeds more revenge.",
        content_id: "Balas dendam hanya melahirkan lebih banyak balas dendam.",
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
            "Aku bukan pahlawan karena aku ingin menjadi pahlawan. Aku adalah pahlawan karena aku harus menjadi pahlawan.",
        credit: "Saitama, One-Punch Man",
    },
    {
        code: "AQ033",
        content: "How can you move forward if you keep regretting the past?",
        content_id: "Bagaimana kau bisa maju jika kau terus menyesali masa lalu?",
        credit: "Edward Elric, Fullmetal Alchemist",
    },
    {
        code: "AQ034",
        content:
            "You can't always hold on to the things that are important. By letting them go we gain something else.",
        content_id:
            "Kau tidak bisa selalu berpegang pada hal-hal yang penting. Dengan melepaskannya kita mendapatkan sesuatu yang lain.",
        credit: "Eikichi Onizuka, Great Teacher Onizuka",
    },
    {
        code: "AQ035",
        content:
            "People’s lives don’t end when they die. It ends when they lose faith.",
        content_id:
            "Hidup manusia tidak berakhir ketika mereka mati. Hidup berakhir ketika mereka kehilangan kepercayaan.",
        credit: "Itachi Uchiha, Naruto",
    },
    {
        code: "AQ036",
        content: "Even the strongest of opponents always has a weakness.",
        content_id: "Bahkan lawan terkuat sekalipun selalu memiliki kelemahan.",
        credit: "L Lawliet, Death Note",
    },
    {
        code: "AQ037",
        content:
            "Sometimes I do feel like I’m a failure. Like there’s no hope for me. But even so, I’m not gonna give up. Ever!",
        content_id:
            "Terkadang aku merasa seperti orang gagal. Seperti tidak ada harapan bagiku. Tapi meski begitu, aku tidak akan menyerah. Tidak akan pernah!",
        credit: "Izuku Midoriya, My Hero Academia",
    },
    {
        code: "AQ038",
        content:
            "If you wanna make people dream, you've gotta start by believing in that dream yourself!",
        content_id:
            "Jika kau ingin membuat orang bermimpi, kau harus mulai dengan percaya pada mimpi itu sendiri!",
        credit: "Nino Nakano, The Quintessential Quintuplets",
    },
    {
        code: "AQ039",
        content:
            "The difference between a novice and a master is that a master has failed more times than a novice has ever tried.",
        content_id:
            "Perbedaan antara seorang pemula dan seorang master adalah bahwa seorang master telah gagal lebih banyak daripada yang pernah dicoba oleh seorang pemula.",
        credit: "Koro-sensei, Assassination Classroom",
    },
    {
        code: "AQ040",
        content:
            "It's not about whether it's possible or not, I'm doing it because I want to.",
        content_id:
            "Ini bukan tentang apakah itu mungkin atau tidak, aku melakukannya karena aku mau.",
        credit: "Monkey D. Luffy, One Piece",
    },
    {
        code: "AQ041",
        content: "I'll leave tomorrow's problems to tomorrow's me.",
        content_id:
            "Aku akan menyerahkan masalah hari esok pada diriku di hari esok.",
        credit: "Saitama, One-Punch Man",
    },
    {
        code: "AQ042",
        content:
            "Thinking you’re no-good and worthless is the worst thing you can do.",
        content_id:
            "Berpikir bahwa kau tidak berguna dan tidak berharga adalah hal terburuk yang bisa kau lakukan.",
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
            "Jika kau tidak dapat menemukan alasan untuk bertarung, maka kau tidak seharusnya bertarung.",
        credit: "Akame, Akame ga Kill!",
    },
    {
        code: "AQ045",
        content:
            "Humans die. Animals die. Plants die. Even stars die. It's a cycle of life. There's nothing sad about it.",
        content_id:
            "Manusia mati. Hewan mati. Tumbuhan mati. Bahkan bintang pun mati. Ini adalah siklus kehidupan. Tidak ada yang menyedihkan tentang itu.",
        credit: "Maka Albarn, Soul Eater",
    },
    {
        code: "AQ046",
        content:
            "Don’t live your life making excuses. The one making your choices is yourself.",
        content_id:
            "Jangan menjalani hidupmu dengan membuat alasan. Yang membuat pilihanmu adalah dirimu sendiri.",
        credit: "Mugen, Samurai Champloo",
    },
    {
        code: "AQ047",
        content:
            "To abandon your duty is a disgrace. To die is merely to lose your life. That is all.",
        content_id:
            "Meninggalkan tugasmu adalah aib. Mati hanyalah kehilangan nyawamu. Itu saja.",
        credit: "Erwin Smith, Attack on Titan",
    },
    {
        code: "AQ048",
        content:
            "You should enjoy the little detours to the fullest. Because that's where you'll find the things more important than what you want.",
        content_id:
            "Kau harus menikmati jalan memutar kecil sepenuhnya. Karena di situlah kau akan menemukan hal-hal yang lebih penting daripada yang kau inginkan.",
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
            "Meskipun kau seorang pahlawan, kau tetap manusia. Kau boleh membuat kesalahan.",
        credit: "All Might, My Hero Academia",
    },
];


export default animeMangaQuotes;