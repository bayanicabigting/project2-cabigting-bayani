function playSound(src) {
    const audio = new Audio(src);
    audio.volume = 0.7;
    audio.play();
}

const gameState = {
    currentNode: "intro",
    started: false,

    flags: {
        metDazai: false,
        metAtsushi: false
    }
};


const story = {
    intro: {
        text: `My name is Oda Sakunosuke.`,
        bg: `Assets/BG/odatable.png`,
        choices: [{ text: "Next", next: "intro2" }]
    },

    intro2: {
        text: `I enjoy classical literature, and I wish to be a writer. My past holds several regrets and sins, but I have learned from them to become a better person. At least, that's what I tell myself.`,
        choices: [{ text: "Next", next: "intro3" }]
    },

    intro3: {
        text: `Oh, I guess I should also mention the kids.`,
        choices: [{ text: "Next", next: "intro4" }]
    },

    intro4: {
        text: `I have a bad habit of adopting orphans.
            I try to give them a better life off the streets so they don’t have to suffer through what I did.`,
        choices: [{ text: "Next", next: "intro5" }]
    },

    intro5: {
        text: `I’m a detective at a peculiar detective agency. That means I’ve seen many, many things. But… This time…`,
        bg: `Assets/BG/ada.png`,
        choices: [{ text: "Next", next: "intro6" }]
    },

    intro6: {
        text: `...I’ve found myself in a new kind of situation.`,
        bg: `Assets/BG/black.png`,
        choices: [{ text: "Next", next: "meetAku" }]
    },

    meetAku: {
        speaker: "Oda",
        text: `That kid over there… Is he… eating grass…?`,
        bg: `Assets/BG/riverbank.png`,
        sprites: [
            { src: `Assets/Sprites/aku_homeless.png`, pos: `left` }
        ],
        choices: [{ text: "Next", next: "meetAku_Attacks" }]
    },

    meetAku_Attacks: {
        sound: `Assets/Sounds/punch.mp3`,
        text: `The kid suddenly attacked me, but I quickly blocked the hit just in time.`,
        sprites: [
            { src: `Assets/Sprites/aku_homeless_zoom.png`, pos: `center`}
        ],
        choices: [{ text: "Next", next: "meetAku_Attacks_Dialogue1" }]
    },

    meetAku_Attacks_Dialogue1: {
        speaker: "Oda",
        text: `Huh. That’s quite a way to greet people.`,
        sprites: [
            { src: `Assets/Sprites/aku_homeless_zoom.png`, pos: `center` }
        ],
        choices: [{ text: "Next", next: "meetAku_Attacks_Dialogue2" }]
    },

    meetAku_Attacks_Dialogue2: {
        speaker: "???",
        text: `Blocking my attack so easily… Who are you? Get away from me.`,
        sprites: [
            { src: `Assets/Sprites/aku_homeless_zoom.png`, pos: `center` }
        ],
        choices: [{ text: "Next", next: "meetAku_Attacks_Dialogue3" }]
    },

    meetAku_Attacks_Dialogue3: {
        speaker: "Oda",
        text: `Calm down. I was just worried, seeing you on all fours eating weeds.`,
        sprites: [
            { src: `Assets/Sprites/aku_homeless_zoom.png`, pos: `center` }
        ],
        choices: [{ text: "Next", next: "meetAku_Attacks_Choice" }]
    },

    meetAku_Attacks_Choice: {
        text: `He seems wary of me. Maybe I should talk a little bit to calm him down.`,
        sprites: [
            { src: `Assets/Sprites/aku_homeless_zoom.png`, pos: `center` }
        ],
        choices: [
            { text: "Do you have any family around?", next: "meetAkuResponse1" },
            { text: "Are you hungry?", next: "meetAkuResponse2" },
            { text: "What's your name?", next: "meetAkuResponseTrue" }
        ]
    },

    meetAkuResponse1: {
        speaker: "???",
        text: `...`,
        sprites: [
            { src: `Assets/Sprites/aku_homeless_zoom.png`, pos: `center` }
        ],
        choices: [{ text: "Back", next: "meetAku_Attacks_Choice" }]
    },

    meetAkuResponse2: {
        speaker: "???",
        text: `...`,
        sprites: [
            { src: `Assets/Sprites/aku_homeless_zoom.png`, pos: `center` }
        ],
        choices: [{ text: "Next", next: "meetAkuResponse2Cont" }]
    },

    meetAkuResponse2Cont: {
        text: `I can hear his stomach growling.`,
        sprites: [
            { src: `Assets/Sprites/aku_homeless_zoom.png`, pos: `center` }
        ],
        choices: [{ text: "Back", next: "meetAku_Attacks_Choice" }]
    },

    meetAkuResponseTrue: {
        speaker: "Akutagawa",
        text: `...Akutagawa Ryuunosuke.`,
        sprites: [
            { src: `Assets/Sprites/aku_homeless_zoom.png`, pos: `center` }
        ],
        choices: [{ text: "Next", next: "meetAkuResponseTrueCont" }]
    },

    meetAkuResponseTrueCont: {
        text: `He's winding up to attack again...`,
        sprites: [
            { src: `Assets/Sprites/aku_homeless_zoom.png`, pos: `center` }
        ],
        choices: [{ text: "Next", next: "punch" }]
    },

    punch: {
        bg: `Assets/BG/black.png`,
        text: ` `,
        sound: `Assets/Sounds/punch.mp3`,
        choices: [{ text: "Next", next: "punchCont" }]
    },

    punchCont: {
        speaker: "Akutagawa",
        text: `Wha-?!`,
        choices: [{ text: "Next", next: "odaCarry1" }]
    },

    odaCarry1: {
        text: `I quickly dodged his attack and scooped him up over my shoulder.`,
        bg: `Assets/BG/riverbank.png`,
        sprites: [
            { src: `Assets/Sprites/aku_homeless_zoom.png`, pos: `center` }
        ],
        choices: [{ text: "Next", next: "odaCarry2" }]
    },

    odaCarry2: {
        speaker: "Akutagawa",
        text: `Let me go!! What are you doing?!`,
        sprites: [
            { src: `Assets/Sprites/aku_homeless_zoom.png`, pos: `center` }
        ],
        choices: [{ text: "Next", next: "odaCarry3" }]
    },

    odaCarry3: {
        speaker: "Oda",
        text: `I don’t like abandoning people when they’re hungry.`,
        sprites: [
            { src: `Assets/Sprites/aku_homeless_zoom.png`, pos: `center` }
        ],
        choices: [{ text: "Next", next: "odaCarry4" }]
    },

    odaCarry4: {
        speaker: "Akutagawa",
        text: `I don’t need your pity! Who do you think you are?!`,
        sprites: [
            { src: `Assets/Sprites/aku_homeless_zoom.png`, pos: `center` }
        ],
        choices: [{ text: "Next", next: "odaCarry5" }]
    },

    odaCarry5: {
        speaker: "Oda",
        text: `My name is Oda. Oda Sakunosuke. I’m a member of the Armed Detective Agency.`,
        sprites: [
            { src: `Assets/Sprites/aku_homeless_zoom.png`, pos: `center` }
        ],
        choices: [{ text: "Next", next: "odaCarry6" }]
    },

    odaCarry6: {
        speaker: "Akutagawa",
        text: `Armed... Detective Agency...?`,
        sprites: [
            { src: `Assets/Sprites/aku_homeless_zoom.png`, pos: `center` }
        ],
        choices: [{ text: "Next", next: "ada" }]
    },

    ada: {
        text: `And so I took the kid back with me to the Agency’s headquarters.`,
        bg: `Assets/BG/ada.png`,
        choices: [{ text: "Next", next: "ada2" }]
    },

    ada2: {
        text: `I managed to convince everyone to let him stay at a vacant room in the dorms, and as a gift, they bought him some new clothes to replace his old rags. He seemed intent on keeping the coat, however…`,
        bg: `Assets/BG/adaOffice.png`,
        choices: [{ text: "Next", next: "ada3" }]
    },

    ada3: {
        text: `Tomorrow is his entrance exam for the agency. They will assess his readiness to act and protect the common people at the risk of his own life.`,
        choices: [{ text: "Next", next: "train" }]
    },

    train: {
        text: `Akutagawa has asked me to train him.`,
        bg: `Assets/BG/black.png`,
        choices: [{ text: "Next", next: "trainCont" }]
    },

    trainCont: {
        text: `I guess he’s impressed with my dodging skills, though that’s all thanks to my ability called “Flawless.” It lets me see three seconds into the future.`,
        bg: `Assets/BG/park.png`,
        choices: [{ text: "Next", next: "trainPunch" }]
    },

    trainPunch: {
        sound: `Assets/Sounds/punch.mp3`,
        text: `Akutagawa lunges at me.`,
        sprites: [
            { src: `Assets/Sprites/aku_rashomon_zoom.png`, pos: `center` }
        ],
        choices: [{ text: "Next", next: "trainBlock" }]
    },

    trainBlock: {
        sound: `Assets/Sounds/block.mp3`,
        text: `I blocked his attack with a flick of my metal spoon.`,
        sprites: [
            { src: `Assets/Sprites/aku_rashomon.png`, pos: `center` }
        ],
        choices: [{ text: "Next", next: "train_Dialogue" }]
    },

    train_Dialogue: {
        speaker: "Akutagawa",
        text: `Amazing… You’re able to block all my attacks with such ease. I’m grateful to be able to train with you, Oda-san.`,
        sprites: [
            { src: `Assets/Sprites/aku_normal_zoom.png`, pos: `center` }
        ],
        choices: [{ text: "Next", next: "train_Dialogue2" }]
    },

    train_Dialogue2: {
        speaker: "Oda",
        text: `And I’m grateful to be able to give you a better life, Akutagawa. If you don’t mind me asking, how long have you been living on the streets?`,
        sprites: [
            { src: `Assets/Sprites/aku_normal_zoom.png`, pos: `center` }
        ],
        choices: [{ text: "Next", next: "akuBackstory" }]
    },

    akuBackstory: {
        text: `He seems to be in deep thought, grasping at something he is reluctant to recall.`,
        sprites: [
            { src: `Assets/Sprites/aku_normal_zoom.png`, pos: `center` }
        ],
        choices: [{ text: "Next", next: "akuBackstory2" }]
    },

    akuBackstory2: {
        speaker: "Akutagawa",
        text: `...For as long as I can remember, I’ve been a rat thrown to the depths of poverty. I don’t know where I came from, and I may as well never had parents. My only family were the other street orphans that joined together with me in an effort to survive, and my little sister...`,
        sprites: [
            { src: `Assets/Sprites/aku_normal_zoom.png`, pos: `center` }
        ],
        choices: [
            { text: "Other orphans?", next: "backstoryResponse1" },
            { text: "Little sister?", next: "backstoryResponseTrue" }
        ]
    },

    backstoryResponse1: {
        speaker: "Oda",
        text: `Other orphans? Why weren’t they with you when I found you?`,
        sprites: [
            { src: `Assets/Sprites/aku_normal_zoom.png`, pos: `center` }
        ],
        choices: [{ text: "Next", next: "backstoryResponse1Cont" }]
    },

    backstoryResponse1Cont: {
        speaker: "Akutagawa",
        text: `...They’re long gone now, unfortunately. Innocent souls all slaughtered by thugs looking to traffic precious jewels. But I got my revenge.`,
        sprites: [
            { src: `Assets/Sprites/aku_normal_zoom.png`, pos: `center` }
        ],
        choices: [{ text: "Next", next: "backstoryResponse1Cont2" }]
    },

    backstoryResponse1Cont2: {
        speaker: "Oda",
        text: `Revenge...`,
        sprites: [
            { src: `Assets/Sprites/aku_normal_zoom.png`, pos: `center` }
        ],
        choices: [{ text: "Next", next: "backstoryResponse1Cont3" }]
    },

    backstoryResponse1Cont3: {
        text: `I best not pry further. I sense a neverending rage from those words.`,
        sprites: [
            { src: `Assets/Sprites/aku_normal_zoom.png`, pos: `center` }
        ],
        choices: [{ text: "Back", next: "akuBackstory2" }]
    },

    backstoryResponseTrue: {
        speaker: "Oda",
        text: `Ah, you have a little sister?`,
        sprites: [
            { src: `Assets/Sprites/aku_normal_zoom.png`, pos: `center` }
        ],
        choices: [{ text: "Next", next: "backstoryResponseTrue2" }]
    },

    backstoryResponseTrue2: {
        speaker: "Akutagawa",
        text: `Yes. Her name is Gin. She’s very quick-witted, and clever. Where I lack the capability to think before I act, she always brings rationality and wisdom.`,
        sprites: [
            { src: `Assets/Sprites/aku_normal_zoom.png`, pos: `center` }
        ],
        choices: [{ text: "Next", next: "backstoryResponseTrue3" }]
    },

    backstoryResponseTrue3: {
        speaker: "Oda",
        text: `...Is she alright?`,
        sprites: [
            { src: `Assets/Sprites/aku_normal_zoom.png`, pos: `center` }
        ],
        choices: [{ text: "Next", next: "backstoryResponseTrue4" }]
    },

    backstoryResponseTrue4: {
        text: `Akutagawa is deep in thought once again.`,
        sprites: [
            { src: `Assets/Sprites/aku_normal_zoom.png`, pos: `center` }
        ],
        choices: [{ text: "Next", next: "backstoryResponseTrue5" }]
    },

    backstoryResponseTrue5: {
        speaker: "Akutagawa",
        text: `Frankly, I don’t know. The last time I saw her was four years ago, when I left her to get revenge on the thugs. That was when I ran into this strange man in the black who saw what I had done and decided to take my sister away.`,
        sprites: [
            { src: `Assets/Sprites/aku_normal_zoom.png`, pos: `center` }
        ],
        choices: [{ text: "Next", next: "akuGoal" }]
    },

    akuGoal: {
        speaker: "Akutagawa",
        text: `That’s why I must find that man in black and kill him. I have to rescue my sister no matter what.`,
        sprites: [
            { src: `Assets/Sprites/aku_rashomon_zoom.png`, pos: `center` }
        ],
        choices: [{ text: "Next", next: "akuGoal2" }]
    },

    akuGoal2: {
        speaker: "Oda",
        text: `I see...`,
        sprites: [
            { src: `Assets/Sprites/aku_rashomon_zoom.png`, pos: `center` }
        ],
        choices: [{ text: "Next", next: "daysLater" }]
    },

    daysLater: {
        bg: `Assets/BG/black.png`,
        text: `DAYS LATER...`,
        choices: [{ text: "Next", next: "akuStormHq" }]
    },

    akuStormHq: {
        text: `Akutagawa got intel from the Port Mafia themselves about the disappearance of his sister, Gin, in the form of a letter. The leader of the Port Mafia claims that he has Gin, and that she will be executed in a matter of days.`,  
        choices: [{ text: "Next", next: "akuStormHq2" },]
    },

    akuStormHq2: {
        text: `Of course, Akutagawa chose to storm the Port Mafia’s headquarters by himself. He is a hardheaded type, it seems. I’ve been alerted to the existence of an informant-- the treasurer of the Port Mafia in charge of monetary security-- who may have information that we can use to threaten the Mafia in exchange for Akutagawa and Gin’s safety. Whether it will be trustworthy information is a gamble, but it seems to be our only chance...`,
        choices: [
            { text: "Meet informant", next: "meetDazai" },
            { text: "Ignore", next: "shouldifollow" }
        ]
    },

    meetDazai: {
        bg: `Assets/BG/barlupin.png`,
        text: `This must be the place... The Bar Lupin...`,
        choices: [{ text: "Enter", next: "insideBar" }]
    },

    insideBar: {
        bg: `Assets/BG/insidebar.png`,
        text: `...The only person in here is that mysterious-looking man.`,
        sprites: [
            { src: `Assets/Sprites/dazai_black.png`, pos: `center` }
        ],
        choices: [{ text: "Next", next: "insideBar2" }]
    },

    insideBar2: {
        speaker: "Oda",
        text: `...Who are you?`,
        sprites: [
            { src: `Assets/Sprites/dazai_black.png`, pos: `center` }
        ],
        choices: [{ text: "Next", next: "dazaiIntro" }]
    },

    dazaiIntro: {
        speaker: "???",
        text: `Hello, Odasaku. It’s been a while. Is it too early for you to have a drink?`,
        sprites: [
            { src: `Assets/Sprites/dazai_normal.png`, pos: `center` }
        ],
        choices: [{ text: "Next", next: "dazaiIntro2" }]
    },

    dazaiIntro2: {
        speaker: "Oda",
        text: `It’s been a while, you say? Have we met before?`,
        sprites: [
            { src: `Assets/Sprites/dazai_normal.png`, pos: `center` }
        ],
        choices: [{ text: "Next", next: "dazaiIntro3" }]
    },

    dazaiIntro3: {
        speaker: "???",
        text: `Nope. It’s our first meeting. And my first time at this establishment. And also my first time meeting you here, Odasaku.`,
        sprites: [
            { src: `Assets/Sprites/dazai_normal.png`, pos: `center` }
        ],
        choices: [{ text: "Next", next: "odasaku" }]
    },

    odasaku: {
        speaker: "Oda",
        text: `Odasaku? Are you referring to me?`,
        sprites: [
            { src: `Assets/Sprites/dazai_normal.png`, pos: `center` }
        ],
        choices: [{ text: "Next", next: "odasaku2" }]
    },

    odasaku2: {
        speaker: "???",
        text: `Yep. You’ve never been called by that name before?`,
        sprites: [
            { src: `Assets/Sprites/dazai_normal.png`, pos: `center` }
        ],
        choices: [{ text: "Next", next: "odasaku3" }]
    },

    odasaku3: {
        speaker: "Oda",
        text: `No, not really.`,
        sprites: [
            { src: `Assets/Sprites/dazai_normal.png`, pos: `center` }
        ],
        choices: [{ text: "Next", next: "odasaku4" }]
    },

    odasaku4: {
        text: `This man seemed to have something on his mind as I sat down one chair away from him. He got up and made me a drink, gently placing the glass in front of me.`,
        sprites: [
            { src: `Assets/Sprites/dazai_normal.png`, pos: `center` }
        ],
        choices: [{ text: "Next", next: "dazai" }]
    },

    dazai: {
        speaker: "Dazai",
        text: `Well, I'm Dazai.`,
        sprites: [
            { src: `Assets/Sprites/dazai_normal.png`, pos: `center` }
        ],
        choices: [{ text: "Next", next: "dazai2" }]
    },

    dazai2: {
        speaker: "Dazai",
        text: `Odasaku. I have a funny story, you wanna listen?`,
        sprites: [
            { src: `Assets/Sprites/dazai_normal.png`, pos: `center` }
        ],
        choices: [
            { text: "Listen", next: "dazai_loop_start" },
            { text: "Interrupt", next: "dazai3" }
        ]
    },

    dazai_loop_start: {
        text: `He proceeded to tell me a long-winded tale, talking to me as if we were childhood best friends. He held his glass up for a toast, but I refused him. I refused to even take a sip from my drink. After all, I haven’t determined if this man was to be trusted or not.`,
        sprites: [
            { src: `Assets/Sprites/dazai_normal.png`, pos: `center` }
        ],
        choices: [{ text: "Next", next: "dazai_loop" }]
    },

    dazai_loop: {
        text: `The story continues, and he takes a sip from his drink...`,
        sprites: [
            { src: `Assets/Sprites/dazai_normal.png`, pos: `center` }
        ],
        choices: [
            { text: "Continue to listen", next: "dazai_loop" },
            { text: "Interrupt", next: "dazai3" }
        ]
    },

    dazai3: {
        speaker: "Oda",
        text: `I’m sorry to interrupt, but I’m not here just to chat. My subordinate is in quite a predicament at the Mafia headquarters right now, and if he makes it out alive, there’s no guaranteeing he won’t be constantly targeted by the Mafia. So I’m here to strike a deal with you.`,
        sprites: [
            { src: `Assets/Sprites/dazai_normal.png`, pos: `center` }
        ],
        choices: [{ text: "Next", next: "dazai4" }]
    },

    dazai4: {
        speaker: "Dazai",
        text: `I promise you this. After tomorrow, we won’t target or lay a single hand on Akutagawa. Absolute peace, without exceptions. Well, that was the plan from the start anyway. As long as he makes it out of the building alive, of course.`,
        sprites: [
            { src: `Assets/Sprites/dazai_normal.png`, pos: `center` }
        ],
        choices: [{ text: "Next", next: "dazai5" }]
    },

    dazai5: {
        text: `Something about this man...`,
        sprites: [
            { src: `Assets/Sprites/dazai_normal.png`, pos: `center` }
        ],
        choices: [{ text: "Next", next: "realize" }]
    },

    realize: {
        speaker: "Oda",
        text: `Why did you call Akutagawa to the Port Mafia headquarters, Dazai?`,
        sprites: [
            { src: `Assets/Sprites/dazai_normal.png`, pos: `center` }
        ],
        choices: [{ text: "Next", next: "realize2" }]
    },

    realize2: {
        speaker: "Dazai",
        text: `So you've realized...`,
        sprites: [
            { src: `Assets/Sprites/dazai_sad.png`, pos: `center` }
        ],
        choices: [{ text: "Next", next: "realize3" }]
    },

    realize3: {
        speaker: "Oda",
        text: `Lucky guess. Though not without basis. I haven’t even mentioned who my subordinate was, yet you knew Akutagawa’s name.
        You also knew beforehand that he would raid the Mafia headquarters. There’s only one person who could’ve predicted that-- the one who sent the letter to the Detective Agency...`,
        sprites: [
            { src: `Assets/Sprites/dazai_sad.png`, pos: `center` }
        ],
        choices: [{ text: "Next", next: "boss" }]
    },

    boss: {
        speaker: "Oda",
        text: `...The Port Mafia's boss.`,
        sound: `Assets/Sounds/gun.mp3`,
		sprites: [
            { src: `Assets/Sprites/dazai_shocked.png`, pos: `center` },
            { src: `Assets/Sprites/gun.png`, pos: `right` }
        ],
        choices: [{ text: "Next", next: "boss2" }]
    },

    boss2: {
        speaker: "Dazai",
        text: `Could you… put away the gun?`,
        sprites: [
            { src: `Assets/Sprites/dazai_shocked.png`, pos: `center` },
            { src: `Assets/Sprites/gun.png`, pos: `right` }
        ],
        choices: [{ text: "Next", next: "boss3" }]
    },

    boss3: {
        speaker: "Oda",
        text: `Sorry, that’s not possible. Not when the boss of the Port Mafia is my opponent. This meeting could be a trap for all I know. This is the end of these negotiations. Looks like I have to find another way to save Akutagawa...`,
        sprites: [
            { src: `Assets/Sprites/dazai_shocked.png`, pos: `center` },
            { src: `Assets/Sprites/gun.png`, pos: `right` }
        ],
        choices: [{ text: "Next", next: "boss4" }]
    },

    boss4: {
        speaker: "Dazai",
        text: `Setting up a trap for you... That never even crossed my mind.
        Odasaku, you asked why I called Akutagawa to the Mafia headquarters, right?`,
        sprites: [
            { src: `Assets/Sprites/dazai_sad.png`, pos: `center` },
            { src: `Assets/Sprites/gun.png`, pos: `right` }
        ],
        choices: [{ text: "Next", next: "saveTheWorld" }]
    },

    saveTheWorld: {
        speaker: "Dazai",
        text: `It was in order to protect this world. This world is only one of many, and, in another-- in the original world, you and I were friends.`,
        sprites: [
            { src: `Assets/Sprites/dazai_sad.png`, pos: `center` },
            { src: `Assets/Sprites/gun.png`, pos: `right` }
        ],
        choices: [{ text: "Next", next: "barLeave" }]
    },

    barLeave: {
        speaker: "Dazai",
        text: `It looks like you’re ready to leave. I guess this is goodbye, then. Farewell, Odasaku.`,
        sprites: [
            { src: `Assets/Sprites/dazai_normal.png`, pos: `center` },
            { src: `Assets/Sprites/gun.png`, pos: `right` }
        ],
        choices: [{ text: "Next", next: "barLeave2" }]
    },

    barLeave2: {
        bg: `Assets/BG/barlupin.png`,
        text: `I left without saying a word, wary of any traps. I didn’t trust him, but something in his eyes told me that his words were genuine.`,
        choices: [{ text: "Next", next: "shouldifollow" }]
    },

    shouldifollow: {
        bg: `Assets/BG/adaOffice.png`,
        text: `Well, I guess I have to make a choice here. `,
        conditionalText: [
            {flag: "metDazai",
            text: `Should I trust what Dazai said and believe that Akutagawa will make it out alive? Or should I go into Port Mafia headquarters myself?`,
            elseText: `Should I trust in Akutagawa's capabilities? Or should I go into Port Mafia headquarters myself?`}
        ],
        choices: [
            { text: "Don't follow", next: "goodEnding1" },
            { text: "Follow Akutagawa", next: "portmafiaHq" }
        ]
    },

    goodEnding1: {
        bg: `Assets/BG/black.png`,
        conditionalText: [
            {flag: "metDazai",
            text: `I placed my trust in Akutagawa and believed that the Port Mafia won’t hurt him after he makes it out of the building. `,
            elseText: `I placed my trust in Akutagawa. `}
        ],
        text: `It seems that my intuition was correct, as Akutagawa managed to escape the building after a lengthy fight with the Mafia’s White Reaper, a deadly assassin.`,
        choices: [{ text: "Next", next: "goodEnding1Cont" }]
    },

    goodEnding1Cont: {
        text: `He reports that the Mafia boss Dazai committed suicide as they engaged in battle on the rooftop, but he was unable to bring his sister back with him.`,
        choices: [{ text: "Next", next: "goodEnding1Cont2" }]
    },

    goodEnding1Cont2: {
        text: `Akutagawa hasn’t given up hope, however. He continues to work with us at the Armed Detective Agency, training his ability and skills so that one day he might find his sister again.`,
        choices: [{ text: "Next", next: "GoodEndingFinal" }]
    },

    goodEndingFinal: {
        bg: `Assets/BG/black.png`,
        text: `GOOD ENDING`,
        sound: `Assets/Sounds/yay.mp3`,
        choices: [{ text: "Next", next: "END" }]
    },

    portmafiaHq: {
        bg: `Assets/BG/insidepm.png`,
        text: `I decided to follow Akutagawa to the Port Mafia building to ensure his safety.
	    He seems to already have wrecked havoc, judging by the rubble and dead mafia members scattered about.`,
        choices: [{ text: "Next", next: "portmafiaHq2" }]
    },

    portmafiaHq2: {
        speaker: "???",
        text: `I have to find him… I have to… I have to...`,
        sprites: [
            { src: `Assets/Sprites/atsushi_black.png`, pos: `center` }
        ],
        choices: [{ text: "Next", next: "portmafiaHq3" }]
    },

    portmafiaHq3: {
        text: `Someone's approaching.`,
        sprites: [
            { src: `Assets/Sprites/atsushi_black.png`, pos: `center` }
        ],
        choices: [
            { text: "Run past undetected", next: "run" },
            { text: "Stand your ground", next: "encounterAtsushi" }
        ]
    },

    run: {
        text: `Staying here and fighting is risky… I have no idea what abilities he might have. Time to get out of here.`,
        choices: [{ text: "Next", next: "run2" }]
    },

    run2: {
        bg: `Assets/BG/stairwell.png`,
        text: `I ran swiftly towards an empty stairwell, running as fast as I could to the rooftop. Akutagawa should be there, according to the Agency’s information.`,
        sound: `Assets/Sounds/run.mp3`,
        choices: [{ text: "Next", next: "ohshit" }]
    },

    ohshit: {
        bg: `Assets/BG/rooftop.png`,
        sound: `Assets/Sounds/run.mp4`,
        conditionalText: [
            {flag: "metDazai",
            text: `It’s the man from the bar...! Dazai...!`,
            elseText: `...Who's this mysterious man?`}
        ],
        sprites: [{ src: `Assets/Sprites/dazai_normal.png`, pos: `center` }],
        choices: [{ text: "Next", next: "ohshit2" }]
    },

    ohshit2: {
        speaker: "Akutagawa",
        text: `Oda-san!!`,
        sprites: [
            { src: `Assets/Sprites/dazai_normal.png`, pos: `center` },
            { src: `Assets/Sprites/aku_rashomon.png`, pos: `left` }
        ],
        choices: [{ text: "Next", next: "ohshit3" }]
    },

    ohshit3: {
        conditionalSpeaker: {
            flag: "metDazai",
            trueName: "Dazai",
            falseName: "???"
        },
        text: `Oh no, what are you doing here, Odasaku? You weren’t supposed to follow him...`,
        sprites: [
            { src: `Assets/Sprites/dazai_sad.png`, pos: `center` },
            { src: `Assets/Sprites/aku_rashomon.png`, pos: `left` },
            { src: `Assets/Sprites/atsushi_angry.png`, pos: `right` }
        ],
        choices: [{ text: "Next", next: "ohshit4" }]
    },

    ohshit4: {
        conditionalSpeaker: {
            flag: "metDazai",
            trueName: "Dazai",
            falseName: "???"
        },
        text: `Oh well. It’s unfortunate that you’ll have to see me do this. Akutagawa, Atsushi... I trust that you’ll keep this world safe from now on.`,
        sprites: [
            { src: `Assets/Sprites/dazai_normal.png`, pos: `center` },
            { src: `Assets/Sprites/aku_rashomon.png`, pos: `left` },
            { src: `Assets/Sprites/atsushi_angry.png`, pos: `right` }
        ],
        choices: [{ text: "Next", next: "ohshit5" }]
    },

    ohshit5: {
        conditionalSpeaker: {
        flag: "metDazai",
        trueName: "Dazai",
        falseName: "???"
        },
        text: `Goodbye, everyone.`,
        sprites: [
            { src: `Assets/Sprites/dazai_normal.png`, pos: `center` },
            { src: `Assets/Sprites/aku_rashomon.png`, pos: `left` },
            { src: `Assets/Sprites/atsushi_angry.png`, pos: `right` }
        ],
        choices: [{ text: "Next", next: "ohshit6" }]
    },

    ohshit6: {
        conditionalText: [
            {flag: "metDazai",
            text: `Dazai leaned backwards and fell from the rooftop.`,
            elseText: `The mysterious man leaned backwards and fell from the rooftop.`}
        ],
        sprites: [
            { src: `Assets/Sprites/aku_rashomon.png`, pos: `left` },
            { src: `Assets/Sprites/atsushi_angry.png`, pos: `right` }
        ],
        choices: [{ text: "Next", next: "atsushiReaction" }]
    },

    atsushiReaction: {
        conditionalSpeaker: {
            flag: "metAtsushi",
            trueName: "Atsushi",
            falseName: "???"
        },
        text: `“D-Dazai...! Why?!”`,
        sprites: [
            { src: `Assets/Sprites/aku_rashomon_zoom.png`, pos: `left` },
            { src: `Assets/Sprites/atsushi_angry_zoom.png`, pos: `right` }
        ],
        choices: [{ text: "Next", next: "akuReaction" }]
    },

    akuReaction: {
        text: `Akutagawa turned to look at me.`,
        sprites: [
            { src: `Assets/Sprites/aku_rashomon_zoom.png`, pos: `center` }
        ],
        choices: [{ text: "Next", next: "akuReaction2" }]
    },

    akuReaction2: {
        speaker: "Akutagawa",
        text: `Well, my efforts here were in vain. Let’s return to the agency and move past this.`,
        sprites: [
            { src: `Assets/Sprites/aku_rashomon_zoom.png`, pos: `center` }
        ],
        choices: [{ text: "Next", next: "akuReaction3" }]
    },

    akuReaction3: {
        speaker: "Oda",
        text: `...Alright.`,
        sprites: [
            { src: `Assets/Sprites/aku_rashomon_zoom.png`, pos: `center` }
        ],
        choices: [{ text: "Return to Agency", next: "goodEnding2" }]
    },

    goodEnding2: {
        bg: `Assets/BG/ada.png`,
        text: `Despite the chaotic encounter with the Mafia boss, Akutagawa was unable to bring his sister back with him. Akutagawa hasn’t given up hope, however. He continues to work with us at the Armed Detective Agency, training his ability and skills so that one day he might find his sister again.`,
        choices: [{ text: "Next", next: "goodEndingFinal" }]
    },
  
    encounterAtsushi: {
        text: `Whoever it is, their life isn’t as important as saving Akutagawa right now. I’ll stand my ground.`,
        sprites: [
            { src: `Assets/Sprites/atsushi_black.png`, pos: `center` }
        ],
        choices: [{ text: "Next", next: "atsushi" }]
    },

    atsushi: {
        speaker: "???",
        text: `Who's there?!`,
        sprites: [
            { src: `Assets/Sprites/atsushi_normal.png`, pos: `center` }
        ],
        choices: [{ text: "Next", next: "atsushi2" }]
    },

    atsushi2: {
        text: `It’s… just a kid? He looks like he’s only 16 or so... It must be the elusive White Reaper of the Port Mafia, Atsushi Nakajima. I have to be cautious.`,
        sprites: [
            { src: `Assets/Sprites/atsushi_normal.png`, pos: `center` }
        ],
        choices: [
            { text: "Run past him", next: "run" },
            { text: "Fight him", next: "badEnding" }
        ]
    },

    badEnding: {
        text: `I feel bad attacking a kid, but I can’t trust him alive. I have to kill him.`,
        sprites: [
            { src: `Assets/Sprites/atsushi_normal.png`, pos: `center` }
        ],
        choices: [{ text: "Next", next: "badEnding2" }]
    },

    badEnding2: {
        text: `I draw my gun and jump up from where I’m hiding, shooting the boy in the left shoulder.`,
        sprites: [
            { src: `Assets/Sprites/atsushi_normal.png`, pos: `center` },
            { src: `Assets/Sprites/gun.png`, pos: `right` }
        ],
        choices: [{ text: "Next", next: "badEnding3" }]
    },

    badEnding3: {
        speaker: "Atsushi",
        text: `Ack! What the-`,
        sprites: [
            { src: `Assets/Sprites/atsushi_angry.png`, pos: `center` },
            { src: `Assets/Sprites/gun.png`, pos: `right` }
        ],
        choices: [{ text: "Next", next: "badEnding4" }]
    },

    badEnding4: {
        text: `I shoot him a couple more times. However, he seems to not be taking any damage.`,
        sprites: [
            { src: `Assets/Sprites/atsushi_angry.png`, pos: `center` },
            { src: `Assets/Sprites/gun.png`, pos: `right` }
        ],
        choices: [{ text: "Next", next: "badEnding5" }]
    },

    badEnding5: {
        speaker: "Atsushi",
        text: `There you are.`,
        sprites: [
            { src: `Assets/Sprites/atsushi_speaking_zoom.png`, pos: `center` },
            { src: `Assets/Sprites/gun.png`, pos: `right` }
        ],
        choices: [{ text: "Next", next: "badEnding6" }]
    },

    badEnding6: {
        speaker: "Atsushi",
        text: `That hurt, you know. I can’t have you distracting me from finding him, so...`,
        sprites: [
            { src: `Assets/Sprites/atsushi_speaking_zoom.png`, pos: `center` },
            { src: `Assets/Sprites/gun.png`, pos: `right` }
        ],
        choices: [{ text: "Next", next: "badEnding7" }]
    },

    badEnding7: {
        bg: `Assets/BG/black.png`,
        speaker: "Atsushi",
        text: `Goodbye.`,
        sprites: [
            { src: `Assets/Sprites/atsushi_normal_zoom.png`, pos: `center` },
            { src: `Assets/Sprites/gun.png`, pos: `right` }
        ],
        choices: [{ text: "Next", next: "badEnding8" }]
    },

    badEnding8: {
        bg: `Assets/BG/red.png`,
        text: `The boy transforms his arm into white tiger claws. His claws rip into my skin as my consciousness slowly fades away...`,
        sound: `Assets/Sounds/die.mp3`,
        choices: [{ text: "Next", next: "badEndingFinal" }]
    },

    badEndingFinal: {
        bg: `Assets/BG/black.png`,
        text: `BAD ENDING`,
        sound: `Assets/Sounds/sadtrombone.mp3`,
        choices: [{ text: "Return to Start", next: "END" }]
    },

};

const bg = document.getElementById("bg");
const spriteLayer = document.getElementById("sprite-layer");
const nameTag = document.getElementById("name-tag");
const textDiv = document.getElementById("text");
const choicesDiv = document.getElementById("choices");


function getNode() {
    return story[gameState.currentNode];
}

function setNode(nextNode) {

    if (nextNode === "meetDazai") {
    gameState.flags.metDazai = true;
    }

    if (nextNode === "atsushi") {
    gameState.flags.metAtsushi = true;
    }

  gameState.currentNode = nextNode;
}

function createChoice(choice) {
    const btn = document.createElement("button");
    btn.className = "choice-btn";
    btn.textContent = choice.text;

    btn.onclick = () => {
        if (isTyping) {
            clearTimeout(typingTimeout);
            textDiv.innerHTML = fullText;
            isTyping = false;
            return;
        }
        
        if (choice.next === "END") {
        endGame();
        return;
        }

        setNode(choice.next);
        render();
    };

    choicesDiv.appendChild(btn);
}

let currentSprites = [];

function renderSprites(sprites = []) {
    const sameSprites =
        JSON.stringify(currentSprites) === JSON.stringify(sprites);

    if (sameSprites) return;

    spriteLayer.innerHTML = "";

    sprites.forEach((s, index) => {
        const img = document.createElement("img");

        img.src = s.src;
        img.classList.add("sprite");

        if (s.pos === "left")
            img.classList.add("sprite-left");

        else if (s.pos === "center")
            img.classList.add("sprite-center");

        else if (s.pos === "right")
            img.classList.add("sprite-right");

        spriteLayer.appendChild(img);

        setTimeout(() => {
            img.classList.add("show");
        }, 50 * index);

    });

    currentSprites = JSON.parse(JSON.stringify(sprites));
}

function renderNode(node) {
    if (node.sound) {
        playSound(node.sound);
    }

    let speakerName = null;

    if (node.speaker) {
        speakerName = node.speaker;
    }

    if (node.conditionalSpeaker) {
        const cond = node.conditionalSpeaker;

    if (gameState.flags[cond.flag]) {
        speakerName = cond.trueName;
    } else {
        speakerName = cond.falseName;
    }
    }

    if (speakerName) {
        nameTag.style.display = "block";
        nameTag.textContent = speakerName;

        nameTag.style.color =
        speakerColors[speakerName] || "white";

    } else {
        nameTag.style.display = "none";
    }

    function setBackground(imageUrl) {
        if (!imageUrl) return;

        bg.style.opacity = 0;

        setTimeout(() => {
        bg.style.backgroundImage = `url(${imageUrl})`;
        bg.style.opacity = 1;
        }, 300);
    }

    if (node.bg) {
        setBackground(node.bg);
    }

    renderSprites(node.sprites || []);

    let textToShow = node.text || "";

    if (node.conditionalText) {
        node.conditionalText.forEach(cond => {
            if (gameState.flags[cond.flag]) {
                textToShow += cond.text;
            } else if (cond.elseText) {
                textToShow += cond.elseText;
            }
        });
    }

    typeText(textToShow);
}

const speakerColors = {
    "Oda": "#c880b7",
    "Dazai": "#0fa3b1",
    "Akutagawa": "#e3170a",
    "Atsushi": "#eaeaea"
}

let typingTimeout = null;
let isTyping = false;
let fullText = "";

function typeText(text, callback) {
    textDiv.innerHTML = "";

    fullText = text;

    if (typingTimeout) {
        clearTimeout(typingTimeout);
    }

    let i = 0;
    isTyping = true;

    function type() {
        if (i < text.length) {
            textDiv.innerHTML += text[i];
            i++;
            typingTimeout = setTimeout(type, 18);
        } else {
            isTyping = false;
            if (callback) callback();
        }
    }

    type();
}

function renderChoices(node) {
    choicesDiv.innerHTML = "";
    node.choices.forEach(createChoice);
}

function render() {
    const node = getNode();

    let fullText = node.text || "";

    if (node.conditionalText) {
        node.conditionalText.forEach(cond => {
            if (gameState.flags[cond.flag]) {
                fullText += cond.text;
            } else if (cond.elseText) {
                fullText += cond.elseText;
            }
        });
    }

    renderNode(node);

    setTimeout(() => {
        renderChoices(node);
    }, fullText.length * 18 + 250);
}

function startGame() {
    gameState.started = true;
    gameState.currentNode = "intro";

    textDiv.innerHTML = "";
    choicesDiv.innerHTML = "";

    render();
}

function endGame() {
    textDiv.innerHTML = "";
    choicesDiv.innerHTML = "";

    const end = document.createElement("div");
    end.style.fontWeight = "bold";
    end.textContent = "You finished the game!";
    end.style.textAlign = "center"

    textDiv.appendChild(end);

    const returnBtn = document.createElement("button");
    returnBtn.textContent = "Return to Start";
    returnBtn.className = "choice-btn";

    returnBtn.onclick = resetGame;

    choicesDiv.appendChild(returnBtn);
}

function resetGame() {
    const startScreen = document.getElementById("start-screen");
    const vnBox = document.getElementById("vn-box");

    gameState.currentNode = "intro";
    gameState.started = false;

    gameState.flags = {
     metDazai: false,
     metAtsushi: false
    };

    currentSprites = [];

    textDiv.innerHTML = "";
    choicesDiv.innerHTML = "";
    spriteLayer.innerHTML = "";

    bg.style.backgroundImage = "";
    bg.style.opacity = 1;

    vnBox.style.display = "none";
    startScreen.style.display = "flex";
}

document.addEventListener("DOMContentLoaded", () => {
    const startBtn = document.getElementById("start-btn");
    const startScreen = document.getElementById("start-screen");
    const vnBox = document.getElementById("vn-box");
    const choicesDiv = document.getElementById("choices");

    startBtn.addEventListener("click", () => {
        startScreen.style.display = "none";
        vnBox.style.display = "block";
        choicesDiv.style.display = "block";
        textDiv.innerHTML = "";
        choicesDiv.innerHTML = "";
        spriteLayer.innerHTML = "";

        startGame();
    });
});
