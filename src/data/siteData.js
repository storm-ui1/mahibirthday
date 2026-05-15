const asset = (name) => `${import.meta.env.BASE_URL}assets/${name}`;

export const memories = [
  {
    image: asset("memory-2.svg"),
    date: "12 March",
    caption: "that random good morning text i still think about",
    rotate: -4,
  },
  {
    image: asset("memory-1.svg"),
    date: "26 April",
    caption: "the sky that day looked like it knew us",
    rotate: 3,
  },
  {
    image: asset("memory-3.svg"),
    date: "18 May",
    caption: "your voice, every other sound got softer",
    rotate: -2,
  },
  {
    image: asset("memory-4.svg"),
    date: "24 June",
    caption: "this story, you looked so pretty",
    rotate: 4,
  },
];

export const loveNotes = [
  "your laugh",
  "the way you care about little things",
  "how you understand more than you say",
  "your randomness",
  "the way you light up a room",
  "you, on your peaceful days",
  "your kind heart",
  "and so much more... like a lot a lot",
];

export const playlist = [
  { title: "golden hour", artist: "JVKE", duration: "3:29" },
  { title: "until i found you", artist: "Stephen Sanchez", duration: "2:58" },
  { title: "love like this", artist: "Ben Rector", duration: "3:07" },
  { title: "she's art", artist: "Mitchiell Malkary", duration: "3:31" },
  { title: "you and i", artist: "Ingrid Michaelson", duration: "2:44" },
];

export const letterText = `to you,

i do not even know where to start.
you have become such an important part of my life,
in the most unexpected and beautiful way.

thank you for being you.
for your laughter, your kindness,
your weirdness, your everything.

you deserve the world,
but until i can give you that,
i made you this little world of mine.

happy birthday, my person.`;

export const albumArt = asset("album-heart.svg");
