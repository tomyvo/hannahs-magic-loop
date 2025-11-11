import { Scene } from "@/types/game";

export const scenes: Record<string, Scene> = {
  start: {
    id: "start",
    locationId: "entrance",
    text: "Ein neuer Tag beginnt in der magischen Schule! Die schwebenden Laternen leuchten sanft und begrüßen dich, Hannah. Du spürst, dass heute etwas Besonderes passieren wird...",
    choices: [
      {
        text: "Zur Bibliothek gehen 📚",
        affinityChange: { curiosity: 5 },
        nextSceneId: "library1",
      },
      {
        text: "Den Garten besuchen 🌷",
        affinityChange: { kindness: 5 },
        nextSceneId: "garden1",
      },
      {
        text: "Aufs Dach steigen 🌅",
        affinityChange: { courage: 5 },
        nextSceneId: "roof1",
      },
    ],
  },
  library1: {
    id: "library1",
    locationId: "library",
    text: "Die Flüsternde Bibliothek empfängt dich mit sanftem Kerzenlicht. Ein altes Buch schwebt vor dir und öffnet sich von selbst. 'Wissen liegt nicht nur in Worten', flüstert es.",
    character: "katharina",
    choices: [
      {
        text: "Das Buch lesen",
        affinityChange: { curiosity: 8 },
        nextSceneId: "library_book",
      },
      {
        text: "Nach Katharina suchen",
        affinityChange: { kindness: 5 },
        nextSceneId: "library_katharina",
      },
      {
        text: "Die verborgene Ecke erkunden",
        affinityChange: { courage: 7 },
        nextSceneId: "library_secret",
      },
    ],
  },
  library_book: {
    id: "library_book",
    locationId: "library",
    text: "Das Buch zeigt dir wunderschöne Illustrationen von vergangenen Schülern der magischen Schule. Eine Seite leuchtet besonders hell - sie zeigt eine Geschichte über Freundschaft, die alle Hindernisse überwindet.",
    choices: [
      {
        text: "Die Geschichte weiterlesen",
        affinityChange: { curiosity: 5 },
        nextSceneId: "chapter_end_wisdom",
      },
      {
        text: "Das Buch zurücklegen und weitergehen",
        affinityChange: { courage: 3 },
        nextSceneId: "garden1",
      },
    ],
  },
  library_katharina: {
    id: "library_katharina",
    locationId: "library",
    text: "Du findest Katharina zwischen den Bücherregalen. Sie hält ein schimmerndes Buch in den Händen. 'Hannah! Ich habe etwas Magisches gefunden - einen Zauberspruch für Träume!'",
    character: "katharina",
    isSpecial: true,
    specialType: "friendship",
    choices: [
      {
        text: "Gemeinsam den Zauber ausprobieren",
        affinityChange: { kindness: 10, curiosity: 5 },
        nextSceneId: "friendship_katharina",
      },
      {
        text: "Fragen, was sie geträumt hat",
        affinityChange: { kindness: 7 },
        nextSceneId: "garden1",
      },
    ],
  },
  library_secret: {
    id: "library_secret",
    locationId: "library",
    text: "In der verborgenen Ecke entdeckst du einen leuchtenden Brief. Er trägt deinen Namen und glüht in sanftem Rosa. Das ist ein Brief von Tomy!",
    isSpecial: true,
    specialType: "letter",
    choices: [
      {
        text: "Den Brief öffnen 💌",
        affinityChange: { courage: 10 },
        nextSceneId: "letter_tomy",
      },
    ],
  },
  letter_tomy: {
    id: "letter_tomy",
    locationId: "library",
    text: "Der Brief entfaltet sich mit einem sanften Leuchten:\n\n'Liebe Hannah, du bist mutiger als du denkst. Deine Neugier macht die Welt magischer. Ich bin so stolz auf dich! 💖 - Tomy'",
    isSpecial: true,
    specialType: "letter",
    choices: [
      {
        text: "Den Brief ans Herz drücken",
        affinityChange: { kindness: 5, courage: 5 },
        nextSceneId: "roof1",
      },
    ],
  },
  friendship_katharina: {
    id: "friendship_katharina",
    locationId: "library",
    text: "Gemeinsam sprecht ihr den Zauberspruch. Plötzlich schwebt ihr beide in einer Wolke aus schimmernden Sternen! Katharina lächelt: 'Mit dir zusammen ist Magie noch schöner, Hannah!'",
    character: "katharina",
    isSpecial: true,
    specialType: "friendship",
    choices: [
      {
        text: "Ihr umarmt euch",
        affinityChange: { kindness: 10 },
        nextSceneId: "chapter_end_friendship",
      },
    ],
  },
  garden1: {
    id: "garden1",
    locationId: "garden",
    text: "Der Schwebende Garten ist voller Leben! Pastellfarbene Blumen tanzen im Wind, und du hörst sanftes Kichern. Ein kleiner Geist in Form eines Schmetterlings nähert sich dir.",
    choices: [
      {
        text: "Mit dem Geist sprechen 👻",
        affinityChange: { kindness: 8 },
        nextSceneId: "garden_ghost",
      },
      {
        text: "Eine Blume pflücken",
        affinityChange: { curiosity: 5 },
        nextSceneId: "garden_flower",
      },
      {
        text: "Ken rufen",
        affinityChange: { courage: 4 },
        nextSceneId: "garden_ken",
      },
    ],
  },
  garden_ghost: {
    id: "garden_ghost",
    locationId: "garden",
    text: "Der Schmetterlingsgeist flattert fröhlich um dich herum. 'Du hast ein reines Herz', sagt er mit einer sanften Stimme. 'Lass mich dir einen Wunsch erfüllen!'",
    choices: [
      {
        text: "Wünsche dir Freundschaft für immer",
        affinityChange: { kindness: 10 },
        nextSceneId: "chapter_end_kindness",
      },
      {
        text: "Wünsche dir mehr magische Abenteuer",
        affinityChange: { curiosity: 10 },
        nextSceneId: "mirror1",
      },
    ],
  },
  garden_flower: {
    id: "garden_flower",
    locationId: "garden",
    text: "Die Blume, die du pflückst, beginnt in deiner Hand zu leuchten! Sie verwandelt sich in ein kleines Licht, das dir den Weg weist.",
    choices: [
      {
        text: "Dem Licht folgen",
        affinityChange: { courage: 8, curiosity: 5 },
        nextSceneId: "mirror1",
      },
    ],
  },
  garden_ken: {
    id: "garden_ken",
    locationId: "garden",
    text: "Ken erscheint mit einem ruhigen Lächeln. 'Hannah, ich spüre, dass die Zeit heute besonders ist. Lass uns einen Moment festhalten.'",
    character: "ken",
    isSpecial: true,
    specialType: "friendship",
    choices: [
      {
        text: "Gemeinsam die Zeit anhalten",
        affinityChange: { courage: 10, curiosity: 5 },
        nextSceneId: "friendship_ken",
      },
    ],
  },
  friendship_ken: {
    id: "friendship_ken",
    locationId: "garden",
    text: "Ken nutzt seine Zeitmagie, und für einen Moment friert alles ein - die schwebenden Blumen, die Schmetterlinge, alles... außer ihr zwei. 'Diese Momente mit dir, Hannah, sind es wert, für immer bewahrt zu werden.'",
    character: "ken",
    isSpecial: true,
    specialType: "friendship",
    choices: [
      {
        text: "Danke Ken für diesen magischen Moment",
        affinityChange: { kindness: 10 },
        nextSceneId: "chapter_end_friendship",
      },
    ],
  },
  roof1: {
    id: "roof1",
    locationId: "roof",
    text: "Die Sonne beginnt unterzugehen, und das Wunschdach erstrahlt in goldenen und rosa Tönen. Ein freundlicher Geist schwebt zu dir herunter und lächelt sanft.",
    choices: [
      {
        text: "Einen Wunsch aussprechen ⭐",
        affinityChange: { courage: 10 },
        nextSceneId: "roof_wish",
      },
      {
        text: "Mit dem Geist plaudern",
        affinityChange: { kindness: 7 },
        nextSceneId: "roof_chat",
      },
      {
        text: "Den Sonnenuntergang genießen",
        affinityChange: { curiosity: 5 },
        nextSceneId: "chapter_end_peace",
      },
    ],
  },
  roof_wish: {
    id: "roof_wish",
    locationId: "roof",
    text: "Der Geist neigt seinen Kopf. 'Ein mutiger Wunsch verdient eine besondere Belohnung.' Er berührt deine Stirn, und plötzlich siehst du einen kurzen Blick in die Zukunft - voller Freundschaft, Lachen und Magie.",
    choices: [
      {
        text: "Bedanke dich beim Geist",
        affinityChange: { kindness: 8 },
        nextSceneId: "birthday_surprise",
      },
    ],
  },
  roof_chat: {
    id: "roof_chat",
    locationId: "roof",
    text: "Der Geist erzählt dir Geschichten von früher, als die Schule gerade gebaut wurde. Er lacht: 'Du erinnerst mich an die Gründerin der Schule - genauso freundlich und neugierig!'",
    choices: [
      {
        text: "Mehr Geschichten hören",
        affinityChange: { curiosity: 8 },
        nextSceneId: "chapter_end_wisdom",
      },
    ],
  },
  mirror1: {
    id: "mirror1",
    locationId: "mirror",
    text: "Die Spiegelhalle ist atemberaubend! Unzählige Spiegel reflektieren nicht nur dein Bild, sondern auch deine Gefühle. Ein Spiegelbild zwinkert dir zu - es ist kein gewöhnliches Spiegelbild!",
    choices: [
      {
        text: "Mit dem Spiegelbild sprechen",
        affinityChange: { curiosity: 10 },
        nextSceneId: "mirror_talk",
      },
      {
        text: "Tiefer in die Halle gehen",
        affinityChange: { courage: 8 },
        nextSceneId: "mirror_deep",
      },
    ],
  },
  mirror_talk: {
    id: "mirror_talk",
    locationId: "mirror",
    text: "Dein Spiegelbild spricht mit einer vertrauten Stimme: 'Du bist stärker als du glaubst, Hannah. Deine Freundlichkeit ist deine größte Kraft.' Es lächelt warm.",
    choices: [
      {
        text: "Dein Spiegelbild umarmen",
        affinityChange: { kindness: 10 },
        nextSceneId: "chapter_end_self",
      },
    ],
  },
  mirror_deep: {
    id: "mirror_deep",
    locationId: "mirror",
    text: "Tiefer in der Halle entdeckst du einen besonderen Spiegel, der nicht dein Gesicht zeigt, sondern deine schönsten Erinnerungen mit Katharina und Ken...",
    choices: [
      {
        text: "Die Erinnerungen anschauen",
        affinityChange: { kindness: 8, curiosity: 5 },
        nextSceneId: "chapter_end_friendship",
      },
    ],
  },
  birthday_surprise: {
    id: "birthday_surprise",
    locationId: "roof",
    text: "Plötzlich leuchtet der ganze Himmel in magischen Farben! Katharina und Ken tauchen auf, zusammen mit allen Geistern der Schule. Sie rufen im Chor: 'Alles Gute zum Geburtstag, Hannah! Du bist das Licht, das die Welt magisch macht!' ✨🎂",
    character: "katharina",
    isSpecial: true,
    specialType: "birthday",
    choices: [
      {
        text: "Von Freude überwältigt sein 💖",
        affinityChange: { kindness: 20, courage: 10, curiosity: 10 },
        nextSceneId: "ending",
      },
    ],
  },
  chapter_end_wisdom: {
    id: "chapter_end_wisdom",
    locationId: "library",
    text: "📖 Kapitelende: Die Weisheit der Bücher\n\n'Neugier öffnet jede Tür. Wissen ist Magie, die niemals vergeht.'\n\nDeine Neugier hat dich auf einen wunderbaren Weg geführt. Die magische Schule hat noch so viele Geheimnisse für dich!",
    choices: [
      {
        text: "Ein neues Abenteuer beginnen",
        affinityChange: {},
        nextSceneId: "start",
      },
      {
        text: "Zum Hauptmenü",
        affinityChange: {},
      },
    ],
  },
  chapter_end_friendship: {
    id: "chapter_end_friendship",
    locationId: "garden",
    text: "💕 Kapitelende: Die Kraft der Freundschaft\n\n'Freundschaft ist die stärkste Magie von allen. Mit wahren Freunden an deiner Seite kannst du alles erreichen.'\n\nKatharina und Ken sind immer für dich da. Gemeinsam seid ihr unbesiegbar!",
    choices: [
      {
        text: "Ein neues Abenteuer beginnen",
        affinityChange: {},
        nextSceneId: "start",
      },
      {
        text: "Zum Hauptmenü",
        affinityChange: {},
      },
    ],
  },
  chapter_end_kindness: {
    id: "chapter_end_kindness",
    locationId: "garden",
    text: "🌸 Kapitelende: Das Geschenk der Freundlichkeit\n\n'Freundlichkeit verwandelt die Welt. Ein gütiges Herz erleuchtet selbst die dunkelsten Ecken.'\n\nDeine Freundlichkeit hat die Herzen aller berührt. Du machst die magische Schule zu einem schöneren Ort!",
    choices: [
      {
        text: "Ein neues Abenteuer beginnen",
        affinityChange: {},
        nextSceneId: "start",
      },
      {
        text: "Zum Hauptmenü",
        affinityChange: {},
      },
    ],
  },
  chapter_end_peace: {
    id: "chapter_end_peace",
    locationId: "roof",
    text: "🌅 Kapitelende: Frieden im Moment\n\n'Manchmal ist das größte Abenteuer, innezuhalten und den Moment zu genießen.'\n\nDu hast gelernt, die Schönheit der Stille zu schätzen. Magie liegt nicht nur in Action, sondern auch in Ruhe.",
    choices: [
      {
        text: "Ein neues Abenteuer beginnen",
        affinityChange: {},
        nextSceneId: "start",
      },
      {
        text: "Zum Hauptmenü",
        affinityChange: {},
      },
    ],
  },
  chapter_end_self: {
    id: "chapter_end_self",
    locationId: "mirror",
    text: "🪞 Kapitelende: Die Kraft in dir\n\n'Die größte Entdeckung ist, dich selbst zu erkennen. Du bist genug, genau so wie du bist.'\n\nDu hast gelernt, an dich selbst zu glauben. Das ist die mächtigste Magie überhaupt!",
    choices: [
      {
        text: "Ein neues Abenteuer beginnen",
        affinityChange: {},
        nextSceneId: "start",
      },
      {
        text: "Zum Hauptmenü",
        affinityChange: {},
      },
    ],
  },
  ending: {
    id: "ending",
    locationId: "roof",
    text: "Die Sterne leuchten heller denn je, und du fühlst die Wärme deiner Freunde um dich herum. Die magische Schule hat dir so viel gelehrt - über Mut, Neugier, Freundlichkeit, und vor allem über die Magie wahrer Freundschaft.\n\nWährend du in den Sternenhimmel schaust, erscheint eine letzte Nachricht, geschrieben in Sternenstaub:\n\n'Erstellt nur für dich, Hannah, von deinem Bruder Tomy 💖'\n\nAlles Gute zum Geburtstag! Du bist einzigartig, wunderbar und voller Magie. Möge dein Leben immer von Freundschaft, Abenteuern und Liebe erfüllt sein. ✨",
    isSpecial: true,
    specialType: "birthday",
    choices: [
      {
        text: "Noch einmal spielen 🌸",
        affinityChange: {},
        nextSceneId: "start",
      },
      {
        text: "Zum Hauptmenü",
        affinityChange: {},
      },
    ],
  },
};
