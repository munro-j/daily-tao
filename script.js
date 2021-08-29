const taoisms = [
    "Free from desire, you realise the mystery.\nCaught in desire, you realise only the manifestations.\n\nYet mystery and manifestations\narise from the same source.\nThe source is called darkness.",
    "When people see some things as beautiful,\nother things become ugly.\nWhen people see some things as good, other things become bad.\n\nBeing and non-being create each other.\nDifficult and easy support each other.\nLong and short define each other.\nHigh and low depend on each other.\nBefore and after follow each other.\n\nTherefore the Master\nacts without doing anything\nand teaches without saying anything.\nThings arise and she lets them come;\nthings disappear and she lets them go.\nShe has but doesn't possess,\nacts but doesn't expect.\nWhen her work is done, she forgets it.\nThat is why it lasts forever.",
    "If you overesteem great men,\npeople become powerless.\nIf you overvalue possessions,\npeople begin to steal.\n\nThe Master leads\nby emptying people's minds\nand filling their cores,\nby weakening their ambition\nand toughening their resolve.\nHe helps people lose everything\nthey know, everything they desire,\nand creates confusion\nin those who think that they know.\n\nPractice not doing,\nand everything will fall into place.",
    "The Tao doesn't take sides;\nit gives birth to both good and evil.\nThe Master doesn't take sides;\nshe welcomes both saints and sinners.",
    "In dwelling, live close to the ground.\nIn thinking, keep to the simple.\nIn conflict, be fair and generous.\nIngoverning, don't try to control.\nIn work, do what you enjoy.\nIn family life, be completely present.\n\nWhen you are content to be simply yourself\nand don't compare or compete,\neverybody will respect you.",
    "We shape clay into a pot,\nbut it is the emptiness inside\nthat holds whatever we want.\n\nWe hammer wood for a house,\nbut it is the inner space\nthat makes it livable.\n\nWe work with being,\nbut non-being is what we use.",
    "What does it mean that success is as dangerous as failure?\nWhether you go up the ladder or down it,\nyour position is shaky.\nWhen you stand with your two feet on the ground,\nyou will always keep your balance.",
    "Do you have the patience to wait\ntill your mud settles and the water is clear?\nCan you remain unmoving\ntill the right action arises by itself?\n\nThe Master doesn't seek fulfilment.\nNot seeking, not expecting,\nshe is present, and can welcome all things.",
    "If you don't realise the source,\nyou stumble in confusion and sorrow.\nWhen you realise where you come from,\nyou naturally become tolerant,\ndisinterested, amused,\nkind-hearted as a grandmother,\ndignified as a king.\nImmersed in the wonder of the Tao,\nyou can deal with whatever life brings you,\nand when death comes, you are ready.",
    "If you don't trust the people,\nyou make them untrustworthy.\n\nThrow away morality and justice,\nand people will do the right thing.\nThrow away industry and profit,\nand there won't be any thieves.",
    'When the Master governs, the people\nare hardly aware that he exists.\nNext best is a leader who is loved.\nNext, one who is feared.\nThe worst is one who is despised.\n\nThe Master doesn\'t talk, he acts.\nWhen his work is done,\nthe people say, "Amazing:\nwe did it, all by ourselves!"',
    "If you want to become whole,\nlet yourself be partial.\nIf you want to become straight,\nlet yourself be crooked.\nIf you want to become full,\nlet yourself be empty.\nIf you want to be reborn,\nlet yourself die.\nIf you want to be given everything,\ngive everything up.",
    "The Master, by residing in the Tao,\nsets an example for all beings.\nBecause he has nothing to prove,\npeople can trust his words.\nBecause he doesn't know who he is,\npeople recognise themselves in him.\nBecause he has no goal in mind,\neverything he does succeeds.",
    "Express yourself completely,\nthen keep quiet.\nBe like the forces of nature:\nwhen it blows, there is only wind;\nwhen it rains, there is only rain;\nwhen the clouds pass, the sun shines through.\n\nOpen yourself to the Tao,\nthen trust your natural responses;\nand everything will fall into place.",
    "He who stands on tiptoe\ndoesn't stand firm.\nHe who rushes ahead\ndoesn't go far.\nHe who tries to shine\ndims his own light.\nHe who defines himself\ncan't know who he really is.\nHe who has power over others\ncan't empower himself.\nHe who clings to his work\nwill create nothing that endures.",
    "The heavy is the root of the light.\nThe unmoved is the source of all movement.\n\nThus the Master travels all day\nwithout leaving home.\n\nIf you let yourself be blown to and fro,\nyou lose touch with your root.\nIf you let restlessness move you,\nyou lose touch with who you are.",
    "A good traveller has no fixed plans\nand is not intent upon arriving.\nA good artist lets his intuition\nlead him wherever it wants.\nA good scientist has freed himself of concepts\nand keeps his mind open to what is.\n\nThus the Master is available to all people\nand doesn't reject anyone.\nHe is ready to use all situations\nand doesn't waste anything.\n\nWhat is a good man but a bad man's teacher?\nWhat is a bad man but a good man's job?\nIf you don't understand this, you will get lost,\nhowever intelligent you are.",
    "There is a time for being ahead,\na time for being behind;\na time for being in motion,\na time for being at rest;\na time for being vigorous,\na time for being exhausted;\na time for being safe,\na time for being in danger.\n\nThe Master sees things as they are,\nwithout trying to control them.\nShe lets them go their own way,\nand resides at the centre of the circle.",
    "The Master does his job\nand then stops.\nHe understands that the universe\nis forever out of control,\nand that trying to dominate events\ngoes against the current of the Tao.\nBecause he believes in himself,\nhe doesn't try to convince others.\nBecause he is content with himself,\nhe doesn't need others' approval.\nBecause he accepts himself, the whole world accepts him.",
    "The Tao can't be perceived.\nSmaller than an electron,\nit contains uncountable galaxies.\n\nWhen you have names and forms,\nknow that they are provisional.\nWhen you have institutions,\nknow where their functions should end.\nKnowing when to stop,\nyou can avoid any danger.\n\nAll things end in the Tao,\nas rivers flow into the sea.",
    "Knowing others is intelligence;\nknowing yourself is true wisdom.\nMastering others is strength;\nmastering yourself is true power.\n\nIf you realise that you have enough,\nyou are truly rich.",
    "She who is centred in the Tao\ncan go where she wishes, without danger.\nShe perceives the universal harmony,\neven amid great pain,\nbecause she has found peace in her heart.",
    "The soft overcomes the hard.\nThe slow overcomes the fast.\nLet your workings remain a mystery.\nJust show people the results.",
    "The Tao never does anything,\nyet through it all things are done.\n\nThe Master doesn't try to be powerful;\nthus he is truly powerful.\nThe ordinary man keeps reaching for power;\nthus he never has enough\n\nWhen there is no desire,\nall things are at peace.",
    "When the Tao is lost, there is goodness.\nWhen goodness is lost, there is morality.\nWhen morality is lost, there is ritual.\nRitual is the husk of true faith,\nthe beginning of chaos.\n\nTherefore the Master concerns himself\nwith the depths and not the surface,\nwith the fruit and not the flower.\nHe has no will of his own.\nHe dwells in reality and lets all illusions go.",
    "In harmony with the Tao,\nthe sky is clear and spacious,\nthe earth is solid and full,\nall creatures flourish together,\ncontent with the way they are,\nendlessly repeating themselves,\nendlessly renewed.\n\nWhen man interferes with Tao,\nthe sky becomes filthy,\nthe earth becomes depleted,\nthe equilibrium crumbles,\ncreatures become extinct.\n\nThe Master views the parts with compassion,\nbecause he understands the whole.",
    "When a superior man hears of the Tao,\nhe immediately begins to embody it.\nWhen an average man hears of the Tao,\nhe half believes it, half doubts it.\nWhen a foolish man hears of the Tao,\nhe laughs out loud.\n\nThus it is said:\nThe path into the light seems dark,\nthe path forward seems to go back,\nthe direct path seems long,\ntrue power seems weak,\ntrue purity seems tarnished,\ntrue steadfastness seems changeable,\ntrue clarity seems obscure,\nthe greatest art seems unsophisticated,\nthe greatest love seems indifferent,\nthe greatest wisdom seems childish.",
    "Teaching without words,\nperforming without actions:\nthat is the Master's way.",
    "Fame or integrity: which is more important?\nMoney or happiness: which is more valuable?\nSuccess or failure: which is more destructive?\n\nIf you look to others for fulfilment,\nyou will never truly be fulfilled.\nIf your happines depends on money,\nyou will never be happy with yourself.\n\nBe content with what you have;\nrejoice in the way things are.\nWhen you realise there is nothing lacking,\nthe whole world belongs to you.",
    "True perfection seems imperfect,\nyet it is perfectly itself.\nTrue fullness seems empty,\nyet it is fully present.\n\nThe Master allows things to happen.\nShe shapes events as they come.\nShe steps out of the way\nand lets the Tao speak for itself.",
    "There is no greater illusion than fear,\nno greater wrong than preparing to defend yourself,\nno greater misfortune than having an enemy.\n\nWhoever can see through all fear\nwill always be safe.",
    "The more you know,\nthe less you understand.",
    "In pursuit of knowledge,\nevery day something is added.\nIn the practice of the Tao,\nevery day something is dropped.\nLess and less do you need to force things,\nuntil finally you arrive at non-action.\nWhen nothing is done,\nnothing is left undone.",
    "True mastery can be gained\nby letting things go their own way.\nIt can't be gained by interfering.",
    "The Master has no mind of her own.\nShe works with the mind of the people.\n\nShe is good to people who are good.\nShe is also good to people who aren't good.\nThis is true goodness.\n\nShe trusts people who are trustworthy.\nShe also trusts people who aren't trustworthy.\nThis is true trust.",
    "The Master gives himself up\nto whatever the moment brings.\nHe knows that he is going to die,\nand he has nothing left to hold on to:\nno illusions in his mind,\nno resistances in his body.\nHe doesn't think about his actions;\nthey flow from the core of his being.",
    "Every being in the universe\nis an expression of the Tao.\nIt springs into existance,\nunconscious, perfect, free,\ntakes on a physical body,\nlets circumstances complete it.\nThat is why every being spontaneously honours the Tao.",
    "If you close your mind in judgements\nand traffic with desires,\nyour heart will be troubled.\nIf you keep your mind from judging\nand aren't led by the senses,\nyour heart will find peace.",
    "The great Way is easy,\nyet people prefer the side paths.\n\nWhen rich speculators prosper\nwhile farmers lose their land;\nwhen government officials spend money\non weapons instead of cures;\nwhen the upper class is extravagant and irresponsible\nwhile the poor have nowhere to turn -\nall this is robbery and chaos.\nIt is not in keeping with the Tao.",
    "Let the Tao be present in your life\nand you will become genuine.\nLet it be present in your family\nand your family will flourish.\nLet it be present in your country\nand your country will be an example\nto all countries in the world.",
    "Those who know don't talk.\nThose who talk don't know.\n\nClose your mouth,\nblock off your senses,\nblunt your sharpness,\nuntie your knots,\nsoften your glare,\nsettle your dust.\n\nBe like the Tao.",
    "The more prohibitions you have,\nthe less virtuous people will be.\nThe more weapons you have,\nthe less secure people will be.\nThe more subsidies you have,\nthe less self-reliant people will be.\n\nTherefore the Master says:\nI let go of the law,\nand people become honest.\nI let go of economics,\nand people become prosperous.\nI let go of religion,\nand people become serene.\nI let go of all desire for the common good,\nand the good becomes common as grass.",
    "The mark of a moderate man\nis freedom from his own ideas.\nTolerant like the sky,\nall-pervading like sunlight,\nfirm like a mountain,\nsupple like a tree in the wind,\nhe has no destination in view\nand makes use of anything\nlife happens to bring his way.",
    "Centre you country in the Tao\nand evil will have no power.\nNot that it isn't there,\nbut you'll be able to step out of its way.\n\nGive evil nothing to oppose\nand it will disappear by itself.",
    "A great nation is like a great man:\nWhen he makes a mistake, he realises it.\nHaving realised it, he admits it.\nHaving admitted it, he corrects it.\nHe considers those who point out his faults\nas his most benevolent teachers.\nHe thinks of his enemy\nas the shadow that he himself casts.",
    "Act without doing:\nwork without effort.\nThink of the small as large\nand the few as many.\nConfront the difficult\nwhile it is still easy;\naccomplish the great task\nby a series of small acts.",
    "The Master never reaches for the great;\nthus she achieves greatness.\nWhen she runs into a difficulty,\nshe stops and gives herself to it.\nShe doesn't cling to her own comfort;\nthus problems are no problem for her.",
    "Rushing into action, you fail.\nTrying to grasp things, you lose them.\nForcing a project to completion,\nyou ruin what was almost ripe.\n\nTherefore the Master takes action\nby letting things take their course.\nHe remains as calm\nat the end as at the beginning.",
    "When they think that they know the answers,\npeople are difficult to guide.\nWhen they know that they don't know,\npeople can find their own way.",
    "The Master is above the people,\nand no one feels oppressed.\nShe goes ahead of the people,\nand no one feels manipulated.\nThe whole world is grateful to her.\nBecause she competes with no on,\nno one can compete with her.",
    "Some say that my teaching is nonsense.\nOthers call it lofty but impractical.\nBut to those who have looked inside themselves,\nthis nonsense makes perfect sense.\nAnd to those who put it into practice,\nthis loftiness has roots that go deep.",
    "The best athlete\nwants his opponent at his best.\nThe best general\nenters the mind of his enemy.\nThe best businessman\nserves the communal good.\nThe best leader\nfollows the will of the people.\n\nAll of them embody\nthe virtue of non-competition.\nNot that they don't love to compete,\nbut they do it in the spirit of play.",
    "There is no greater misfortune\nthan underestimating your enemy.\nUnderestimating your enemy\nmeans thinking that he is evil.\nThus you destroy your three treasures\nand become an enemy yourself.",
    "My teachings are easy to understand\nand easy to put into practice.\nYet your intellect will never grasp them,\nand if you try to practice them, you'll fail.",
    "Not-knowing is true knowledge.\nPresuming to know is a disease.\nFirst realise that you are sick;\nthen you can move toward health.\n\nThe Master is her own physician.",
    "When they lose their sense of awe,\npeople turn to religion.\nWhen they no longer trust themselves,\nthey begin to depend on authority.",
    "The Tao is always at ease.\nIt overcomes without competing,\nanswers without speaking a word,\narrives without being summoned,\naccomplishes without a plan.",
    "If you realise that all things change,\nthere is nothing you will try to hold on to.\nIf you aren't afraid of dying,\nthere is nothing you can't achieve.",
    "When the government is too intrusive,\npeople lose their spirit.\n\nAct for the people's benefit.\nTrust them; leave them alone.",
    "Men are born soft and supple;\ndead, they are stiff and hard.\nPlants are born tender and pliant;\ndead, they are brittle and dry.\n\nThus whoever is stiff and inflexible\nis a disciple of death.\nWhoever is soft and yielding\nis a disciple of life.\n\nThe hard and stiff will be broken.\nThe soft and supple will prevail.",
    "The Master can keep giving\nbecause there is no end to her wealth.\nShe acts without expectation,\nsucceeds without taking credit,\nand doesn't think that she is better\nthan anyone else.",
    "Failure is an opportunity.\n\nTherefore the Master\nfulfils her own obligations\nand corrects her own mistakes.\nShe does what she needs to do\nand demands nothing of others.",
    "True words aren't eloquent;\neloquent words aren't true.\nTrue words seem paradoxical\nWise men don't need to prove their point;\nmen who need to prove their point aren't wise.\n\nThe Master has no possessions.\nThe more he does for others,\nthe happier he is.\nThe more he gives to others,\nthe wealthier he is.",
];

const albums = [
    { title: "Midnight Marauders", artist: "A Tribe Called Quest" },
    { title: "Ultra Mono", artist: "IDLES" },
    { title: "Brutalism", artist: "IDLES" },
    { title: "So The Flies Don't Come", artist: "Milo, Kenny Segal" },
    { title: "Sad Night Dynamite", artist: "Sad Night Dynamite" },
    { title: "Black Pumas", artist: "Black Pumas" },
    { title: "Shiroi", artist: "Mansur Brown" },
    { title: "Collapsed in Sunbeams", artist: "Arlo Parks" },
    { title: "Fetch The Bolt Cutters", artist: "Fiona Apple" },
    { title: "The Powers That B", artist: "Death Grips" },
    { title: "Bottomless Pit", artist: "Death Grips" },
    { title: "Pray For Haiti", artist: "Mach-Hommy" },
    { title: "Cosmogramma", artist: "Flying Lotus" },
    { title: "Run The Jewels 2", artist: "Run The Jewels" },
    { title: "4eva Is A Mighty Long Time", artist: "Big K.R.I.T." },
    { title: "Veteran", artist: "JPEGMAFIA" },
    { title: "Lonerism", artist: "Tame Impala" },
    { title: "Pinata", artist: "Freddie Gibbs" },
    { title: "Donuts", artist: "J Dilla" },
    { title: "Hunky Dory", artist: "David Bowie" },
    { title: "Harry Styles", artist: "Harry Styles" },
    { title: "Fine Line", artist: "Harry Styles" },
    { title: "Toast", artist: "Pond" },
    { title: "Lemonade", artist: "Beyonce" },
    { title: "What's Going On", artist: "Marvin Gaye" },
    { title: "Trouble Man", artist: "Marvin Gaye" },
    { title: "Midnight Love", artist: "Marvin Gaye" },
    { title: "Under Twenty Five", artist: "ENNY" },
    { title: "Revolver", artist: "The Beatles" },
    { title: "DROGAS WAVE", artist: "Lupe Fiasco" },
    { title: "Avantdale Bowling Club", artist: "Avantdale Bowling Club" },
    { title: "LIL BIG MAN", artist: "Maxo" },
    { title: "Punisher", artist: "Phoebe Bridgers" },
    { title: "Big Femme Energy Volume 1", artist: "Femme It Forward" },
    { title: "Bo Jackson", artist: "Boldy James, The Alchemist" },
    { title: "Guns", artist: "Quelle Chris" },
    { title: "Innocent Country", artist: "Chris Keys, Quelle Chris" },
    { title: "Shrines", artist: "Armand Hammer" },
    {
        title: "The Rise and Fall of Ziggy Stardust and the Spiders from Mars",
        artist: "David Bowie",
    },
    { title: "Knee-Deep in the North Sea", artist: "Portico Quartet" },
    { title: "What Kinda Music", artist: "Tom Misch, Yussef Dayes" },
    { title: "6 Feet Beneath the Moon", artist: "King Krule" },
    { title: "The OOZ", artist: "King Krule" },
    { title: "The Life Of Pablo", artist: "Kanye West" },
    { title: "My Beautiful Dark Twisted Fantasy", artist: "Kanye West" },
    { title: "Acid Rap", artist: "Chance The Rapper" },
    { title: "Back To Black", artist: "Amy Winehouse" },
    { title: "Not Your Muse", artist: "Celeste" },
    { title: "Stankonia", artist: "Outkast" },
    { title: "Aquemini", artist: "Outkast" },
];

const mentors = [
    "Rick Rubin",
    "Sam Esmail",
    "George Monbiot",
    "Peter Joseph",
    "Seth Rogan",
    "Mac Miller",
    "Earl Sweatshirt",
    "Kendrick Lamar",
    "Noname",
    "Little Simz",
    "Alex Honnald",
    "Tommy Caldwell",
    "Rutger Bregman",
    "Yanis Varoufakis",
    "Rupert Sheldrake",
    "Nassim Haramein",
    "Michael Pollan",
    "Ram Dass",
    "Terence McKenna",
    "Russell Brand",
    "Eckhart Tolle",
    "Gabor Mate",
    "Jordan Peterson",
    "Robert Sapolsky",
    "Akala",
    "Carl Jung",
    "Sam Harris",
    "Thomas Brag",
    "Stephen Fry",
    "Wim Hof",
    "Bo Burnham",
    "Marc Rebillet",
    "Elizabeth Gilbert",
    "Naomi Klein",
    "Brian Cox",
    "Killer Mike",
    "Viggo Mortensen",
    "David Attenborough",
    "Tim Ferriss",
    "Susan Cain",
    "Leo Babauta",
    "Mark Ronson",
    "Jiddu Krishnamurti",
    "Jacque Fresco",
    "Robin Cahart-Harris",
    "Alexander Beiner",
    "Tristan Harris",
    "Nathaniel Drew",
    "Adam Gazzaley",
    "Ruby Wax",
    "Robert Macfarlane",
    "Kurt Cobain",
    "Dave Grohl",
];

const randomMessage = (arr) => {
    return arr[Math.floor(Math.random() * arr.length)];
};

const generateMessage = () => {
    const randomTaoism = randomMessage(taoisms);
    const randomAlbum = randomMessage(albums);
    const randomMentor = randomMessage(mentors);

    document.getElementById("ap").innerHTML = "Album of the day:";
    document.getElementById("album").innerHTML = randomAlbum.title;
    document.getElementById("artist").innerHTML = `by ${randomAlbum.artist}`;

    document.getElementById("mp").innerHTML = "Mentor for today:";
    document.getElementById("mentor").innerHTML = randomMentor;

    document.getElementById("tp").innerHTML = "Daily dose of ancient wisdom:";
    document.getElementById("tao").innerHTML = randomTaoism;
};

document.getElementById("btn").addEventListener("click", function () {
    generateMessage();
    document.getElementById("btn").innerHTML = "Generate Another Daily Tao";
});

/* 
    Album covers
    Mentor resources
    Quote generator
    Mindfulness generator
    Tao Te Ching images
    Header background image
    Give users an option to add their own albums, mentors
*/
