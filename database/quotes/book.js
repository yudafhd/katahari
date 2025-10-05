const bookQuotes = [
    {
        code: "tkam",
        content:
            "You never really understand a person until you consider things from his point of view... Until you climb into his skin and walk around in it.",
        "content_id":
            "Kamu tidak benar-benar memahami seseorang sampai kamu melihat dari sudut pandangnya... Sampai kamu masuk ke dalam kulitnya dan berjalan di dalamnya.",
        credit: "To Kill a Mockingbird, pages 39",
    },
    {
        code: "alch",
        content:
            "When you want something, all the universe conspires in helping you to achieve it.",
        "content_id":
            "Ketika kamu menginginkan sesuatu, seluruh alam semesta akan berkonspirasi untuk membantumu mewujudkannya.",
        credit: "The Alchemist, pages 22",
    },
    {
        code: "hob",
        content: "There is some good in this world, and it's worth fighting for.",
        "content_id":
            "Masih ada kebaikan di dunia ini, dan itu layak diperjuangkan.",
        credit: "The Hobbit, pages 310",
    },
    {
        code: "hp1",
        content: "It does not do to dwell on dreams and forget to live.",
        "content_id": "Tidak baik terus larut dalam mimpi dan lupa untuk hidup.",
        credit: "Harry Potter and the Sorcerer's Stone, pages 214",
    },
    {
        code: "1984",
        content:
            "Perhaps one did not want to be loved so much as to be understood.",
        "content_id":
            "Mungkin seseorang tidak terlalu ingin dicintai, melainkan lebih ingin dipahami.",
        credit: "1984, pages 136",
    },
    {
        code: "tfios",
        content: "You gave me a forever within the numbered days.",
        "content_id": "Kau memberiku keabadian di dalam hari-hari yang terbatas.",
        credit: "The Fault in Our Stars, pages 260",
    },
    {
        code: "ana",
        content:
            "I don't want to be at the mercy of my emotions. I want to use them, to enjoy them, and to dominate them.",
        "content_id":
            "Aku tidak ingin diperbudak oleh emosiku. Aku ingin menggunakannya, menikmatinya, dan menguasainya.",
        credit: "The Picture of Dorian Gray, pages 75",
    },
    {
        code: "jane",
        content:
            "I am no bird; and no net ensnares me: I am a free human being with an independent will.",
        "content_id":
            "Aku bukan burung; dan tidak ada jaring yang menjebakku: aku adalah manusia bebas dengan kehendak independen.",
        credit: "Jane Eyre, pages 293",
    },
    {
        code: "gats",
        content:
            "So we beat on, boats against the current, borne back ceaselessly into the past.",
        "content_id":
            "Jadi kita terus maju, seperti perahu melawan arus, terus terlempar kembali ke masa lalu.",
        credit: "The Great Gatsby, pages 180",
    },
    {
        code: "brave",
        content: "You must be the change you wish to see in the world.",
        "content_id":
            "Kamu harus menjadi perubahan yang ingin kamu lihat di dunia.",
        credit: "The Story of My Experiments with Truth, page 33",
    },
    {
        code: "pride",
        content:
            "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
        "content_id":
            "Ini adalah kebenaran yang diterima secara universal, bahwa seorang pria yang memiliki kekayaan besar, pasti membutuhkan seorang istri.",
        credit: "Pride and Prejudice, page 1",
    },
    {
        code: "lesmis",
        content: "To love another person is to see the face of God.",
        "content_id": "Mencintai orang lain adalah melihat wajah Tuhan.",
        credit: "Les Misérables, page 482",
    },
    {
        code: "huxley",
        content:
            "Words can be like X-rays if you use them properly—they'll go through anything. You read and you're pierced.",
        "content_id":
            "Kata-kata bisa seperti sinar-X jika kamu menggunakannya dengan benar—mereka akan menembus apapun.",
        credit: "Brave New World, page 86",
    },
    {
        code: "siddhartha",
        content: "I have learned that to be with those I like is enough.",
        "content_id":
            "Aku telah belajar bahwa bersama orang yang aku sukai sudah cukup.",
        credit: "Siddhartha, page 142",
    },
    {
        code: "alch1",
        content:
            "When you want something, all the universe conspires in helping you to achieve it.",
        "content_id":
            "Ketika kamu menginginkan sesuatu, seluruh alam semesta akan berkonspirasi untuk membantumu mewujudkannya.",
        credit: "The Alchemist, page 22",
    },
    {
        code: "alch2",
        content:
            "It's the possibility of having a dream come true that makes life interesting.",
        "content_id":
            "Kemungkinan untuk mewujudkan impianlah yang membuat hidup menarik.",
        credit: "The Alchemist, page 11",
    },
    {
        code: "alch3",
        content:
            "People learn, at least when they are young, to accept their own fate.",
        "content_id":
            "Orang-orang belajar, setidaknya ketika mereka masih muda, untuk menerima takdir mereka sendiri.",
        credit: "The Alchemist, page 49",
    },
    {
        code: "alch4",
        content: "To realize one's destiny is a person's only obligation.",
        "content_id":
            "Menyadari takdir seseorang adalah satu-satunya kewajiban seorang manusia.",
        credit: "The Alchemist, page 34",
    },
    {
        code: "alch5",
        content:
            "Remember that wherever your heart is, there you will find your treasure.",
        "content_id":
            "Ingatlah bahwa di mana pun hatimu berada, di situlah kamu akan menemukan harta karunmu.",
        credit: "The Alchemist, page 61",
    },
    {
        code: "alch6",
        content:
            "The secret of happiness is to see all the marvels of the world, and never to forget the drops of oil on the spoon.",
        "content_id":
            "Rahasia kebahagiaan adalah melihat semua keajaiban dunia, dan tidak pernah lupa akan tetesan minyak di sendok.",
        credit: "The Alchemist, page 56",
    },
    {
        code: "alch7",
        content:
            "Courage is the quality most essential to understanding the Language of the World.",
        "content_id":
            "Keberanian adalah kualitas yang paling penting untuk memahami Bahasa Dunia.",
        credit: "The Alchemist, page 107",
    },
    {
        code: "alch8",
        content:
            "When we strive to become better than we are, everything around us becomes better too.",
        "content_id":
            "Ketika kita berusaha untuk menjadi lebih baik dari sebelumnya, segala sesuatu di sekitar kita juga menjadi lebih baik.",
        credit: "The Alchemist, page 132",
    },
    {
        code: "alch9",
        content:
            "Everyone seems to have a clear idea of how other people should lead their lives, but none about his or her own.",
        "content_id":
            "Setiap orang sepertinya memiliki gagasan yang jelas tentang bagaimana orang lain seharusnya menjalani hidup mereka, tetapi tidak ada yang memiliki gagasan tentang hidup mereka sendiri.",
        credit: "The Alchemist, page 65",
    },
    {
        code: "alch10",
        content:
            "The simple things are also the most extraordinary things, and only the wise can see them.",
        "content_id":
            "Hal-hal sederhana juga merupakan hal-hal yang paling luar biasa, dan hanya orang bijak yang bisa melihatnya.",
        credit: "The Alchemist, page 86",
    },
    {
        code: "alch11",
        content:
            "You must understand that love never keeps a man from pursuing his destiny. If he abandons that pursuit, it's because it wasn't true love.",
        "content_id":
            "Kamu harus memahami bahwa cinta tidak pernah menghalangi seseorang untuk mengejar takdirnya. Jika dia meninggalkan pencariannya, itu karena cinta itu bukan cinta yang sejati.",
        credit: "The Alchemist, page 123",
    },
    {
        code: "alch12",
        content:
            "Don't give in to your fears. If you do, you won't be able to talk to your heart.",
        "content_id":
            "Jangan menyerah pada ketakutanmu. Jika kamu melakukannya, kamu tidak akan bisa berbicara dengan hatimu.",
        credit: "The Alchemist, page 118",
    },
    {
        code: "alch13",
        content:
            "There is only one thing that makes a dream impossible to achieve: the fear of failure.",
        "content_id":
            "Hanya ada satu hal yang membuat sebuah impian tidak mungkin tercapai: rasa takut akan kegagalan.",
        credit: "The Alchemist, page 145",
    },
    {
        code: "alch14",
        content: "The world is changed by your example, not by your opinion.",
        "content_id":
            "Dunia ini berubah melalui teladanmu, bukan melalui pendapatmu.",
        credit: "The Alchemist, page 134",
    },
    {
        code: "alch15",
        content:
            "People learn, at least when they are young, to accept their own fate.",
        "content_id":
            "Orang-orang belajar, setidaknya ketika mereka masih muda, untuk menerima takdir mereka sendiri.",
        credit: "The Alchemist, page 49",
    },
    {
        code: "alch17",
        content:
            "Everything that happens once can never happen again. But everything that happens twice will surely happen a third time.",
        "content_id":
            "Segala sesuatu yang terjadi sekali tidak akan pernah terulang lagi. Tetapi segala sesuatu yang terjadi dua kali pasti akan terjadi untuk ketiga kalinya.",
        credit: "The Alchemist, page 55",
    },
    {
        code: "alch18",
        content: "The fear of suffering is worse than the suffering itself.",
        "content_id":
            "Ketakutan akan penderitaan lebih buruk daripada penderitaan itu sendiri.",
        credit: "The Alchemist, page 99",
    },
    {
        code: "alch19",
        content:
            "No matter what he does, every person on Earth plays a central role in the history of the world. And normally he doesn't know it.",
        "content_id":
            "Tidak peduli apa yang dia lakukan, setiap orang di Bumi memainkan peran penting dalam sejarah dunia. Dan biasanya dia tidak mengetahuinya.",
        credit: "The Alchemist, page 135",
    },
    {
        code: "alch20",
        content:
            "The most important part of the treasure you seek is the journey itself.",
        "content_id":
            "Bagian terpenting dari harta yang kamu cari adalah perjalanan itu sendiri.",
        credit: "The Alchemist, page 68",
    },
    {
        code: "sidd1",
        content:
            "Wisdom cannot be imparted. Wisdom that a wise man attempts to impart always sounds like foolishness to someone else.",
        "content_id":
            "Kebijaksanaan tidak bisa diajarkan. Kebijaksanaan yang coba disampaikan oleh orang bijak akan selalu terdengar seperti kebodohan bagi orang lain.",
        credit: "Siddhartha, page 89",
    },
    {
        code: "sidd3",
        content:
            "I have had to experience despair, I have had to sink to the greatest mental depths, to thoughts of suicide, in order to experience grace.",
        "content_id":
            "Aku harus mengalami keputusasaan, aku harus tenggelam ke dalam kedalaman mental yang paling dalam, hingga berpikir tentang bunuh diri, untuk bisa mengalami anugerah.",
        credit: "Siddhartha, page 75",
    },
    {
        code: "sidd5",
        content: "You seek too much, and as a result you cannot find.",
        "content_id":
            "Kamu terlalu banyak mencari, dan akibatnya kamu tidak bisa menemukan.",
        credit: "Siddhartha, page 61",
    },
    {
        code: "sidd6",
        content:
            "The world was beautiful when looked at in this way—without any seeking, so simple, so childlike.",
        "content_id":
            "Dunia tampak indah ketika dilihat dengan cara ini—tanpa pencarian, begitu sederhana, begitu seperti anak-anak.",
        credit: "Siddhartha, page 108",
    },
    {
        code: "sidd7",
        content:
            "Love can be begged, bought, or received as a gift, but it cannot be stolen.",
        "content_id":
            "Cinta bisa dimohon, dibeli, atau diterima sebagai hadiah, tetapi tidak bisa dicuri.",
        credit: "Siddhartha, page 51",
    },
    {
        code: "sidd8",
        content:
            "We are not going in circles, we are going upwards. The path is a spiral; we have already climbed many steps.",
        "content_id":
            "Kita tidak berjalan dalam lingkaran, kita sedang naik. Jalannya berbentuk spiral; kita sudah menaiki banyak anak tangga.",
        credit: "Siddhartha, page 95",
    },
    {
        code: "sidd9",
        content:
            "One must find the source within one's own Self, one must possess it.",
        "content_id":
            "Seseorang harus menemukan sumbernya dalam dirinya sendiri, ia harus memilikinya.",
        credit: "Siddhartha, page 46",
    },
    {
        code: "sidd10",
        content:
            "I have always believed, and I still believe, that whatever good or bad fortune may come our way we can always give it meaning and transform it into something of value.",
        "content_id":
            "Aku selalu percaya, dan masih percaya, bahwa apapun keberuntungan atau kemalangan yang datang kepada kita, kita selalu bisa memberinya makna dan mengubahnya menjadi sesuatu yang bernilai.",
        credit: "Siddhartha, page 112",
    },
    {
        code: "zhuang1",
        content:
            "Flow with whatever may happen, and let your mind be free: Stay centered by accepting whatever you are doing. This is the ultimate.",
        "content_id":
            "Mengalirlah dengan apapun yang terjadi, dan biarkan pikiranmu bebas: Tetaplah terpusat dengan menerima apapun yang kamu lakukan. Inilah yang tertinggi.",
        credit: "Zhuangzi, page 23",
    },
    {
        code: "zhuang2",
        content:
            "Once upon a time, I dreamt I was a butterfly... Now I do not know whether I was then a man dreaming I was a butterfly, or whether I am now a butterfly, dreaming I am a man.",
        "content_id":
            "Suatu ketika, aku bermimpi menjadi kupu-kupu... Sekarang aku tidak tahu apakah dulu aku adalah manusia yang bermimpi menjadi kupu-kupu, atau sekarang aku adalah kupu-kupu yang bermimpi menjadi manusia.",
        credit: "Zhuangzi, page 45",
    },
    {
        code: "suntzu1",
        content: "The supreme art of war is to subdue the enemy without fighting.",
        "content_id":
            "Seni perang tertinggi adalah menundukkan musuh tanpa bertempur.",
        credit: "The Art of War, page 39",
    },
    {
        code: "suntzu2",
        content:
            "If you know the enemy and know yourself, you need not fear the result of a hundred battles.",
        "content_id":
            "Jika kamu mengenal musuh dan mengenal dirimu sendiri, kamu tidak perlu takut terhadap hasil dari seratus pertempuran.",
        credit: "The Art of War, page 18",
    },
    {
        code: "marcus1",
        content:
            "You have power over your mind - not outside events. Realize this, and you will find strength.",
        "content_id":
            "Kamu memiliki kekuatan atas pikiranmu - bukan atas peristiwa di luar dirimu. Sadarilah ini, dan kamu akan menemukan kekuatan.",
        credit: "Meditations, page 12",
    },
    {
        code: "marcus2",
        content:
            "The happiness of your life depends upon the quality of your thoughts.",
        "content_id": "Kebahagiaan hidupmu tergantung pada kualitas pikiranmu.",
        credit: "Meditations, page 35",
    },
    {
        code: "gibran1",
        content:
            "Your children are not your children. They are the sons and daughters of Life's longing for itself.",
        "content_id":
            "Anak-anakmu bukanlah anak-anakmu. Mereka adalah putra dan putri dari Kerinduan Kehidupan akan dirinya sendiri.",
        credit: "The Prophet, page 17",
    },
    {
        code: "gibran2",
        content:
            "Let there be spaces in your togetherness, and let the winds of the heavens dance between you.",
        "content_id":
            "Biarkan ada ruang dalam kebersamaanmu, dan biarkan angin surga menari di antara kalian.",
        credit: "The Prophet, page 19",
    },
    {
        code: "siddh1",
        content:
            "Wisdom cannot be imparted. Wisdom that a wise man attempts to impart always sounds like foolishness to someone else.",
        "content_id":
            "Kebijaksanaan tidak bisa diajarkan. Kebijaksanaan yang coba disampaikan oleh orang bijak akan selalu terdengar seperti kebodohan bagi orang lain.",
        credit: "Siddhartha, page 89",
    },
    {
        code: "siddh2",
        content: "I can think, I can wait, I can fast.",
        "content_id": "Aku bisa berpikir, aku bisa menunggu, aku bisa berpuasa.",
        credit: "Siddhartha, page 38",
    },
    {
        code: "zhuang1",
        content: "Happiness is the absence of the striving for happiness.",
        "content_id":
            "Kebahagiaan adalah ketiadaan dari upaya untuk mengejar kebahagiaan.",
        credit: "Zhuangzi, page 56",
    },
    {
        code: "zhuang2",
        content: "A path is made by walking on it.",
        "content_id": "Sebuah jalan tercipta karena kita berjalan di atasnya.",
        credit: "Zhuangzi, page 71",
    },
    {
        code: "suntzu1",
        content:
            "To win one hundred victories in one hundred battles is not the acme of skill. To subdue the enemy without fighting is the acme of skill.",
        "content_id":
            "Memenangkan seratus pertempuran bukanlah puncak keahlian. Menaklukkan musuh tanpa bertempur adalah puncak keahlian.",
        credit: "The Art of War, page 42",
    },
    {
        code: "suntzu2",
        content: "In the midst of chaos, there is also opportunity.",
        "content_id": "Di tengah kekacauan, selalu ada peluang.",
        credit: "The Art of War, page 57",
    },
    {
        code: "marcus1",
        content:
            "Accept the things to which fate binds you and love the people with whom fate brings you together, but do so with all your heart.",
        "content_id":
            "Terimalah segala hal yang ditakdirkan untukmu dan cintailah orang-orang yang takdir pertemukan denganmu, lakukanlah dengan sepenuh hati.",
        credit: "Meditations, page 67",
    },
    {
        code: "marcus2",
        content:
            "Look well into thyself; there is a source of strength which will always spring up if thou wilt always look.",
        "content_id":
            "Lihatlah ke dalam dirimu; di sana ada sumber kekuatan yang akan selalu muncul jika engkau terus mencarinya.",
        credit: "Meditations, page 81",
    },
    {
        code: "gibran1",
        content:
            "Your pain is the breaking of the shell that encloses your understanding.",
        "content_id":
            "Rasa sakitmu adalah pecahnya cangkang yang membungkus pemahamanmu.",
        credit: "The Prophet, page 48",
    },
    {
        code: "gibran2",
        content: "Work is love made visible.",
        "content_id": "Pekerjaan adalah cinta yang menjadi tampak.",
        credit: "The Prophet, page 29",
    },
    {
        code: "zen1",
        content:
            "When the mind is nowhere it is everywhere. When it clings to nothing it clings to everything.",
        "content_id":
            "Saat pikiran berada di mana-mana, ia juga tidak berada di mana-mana. Saat tidak melekat pada apapun, ia bersatu dengan segalanya.",
        credit: "The Book of Serenity, page 104",
    },
    {
        code: "zen2",
        content: "No snowflake ever falls in the wrong place.",
        "content_id": "Tak ada kepingan salju yang jatuh di tempat yang salah.",
        credit: "The Book of Serenity, page 87",
    },

];

export default bookQuotes;