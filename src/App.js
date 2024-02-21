import Nav from "./components/nav-bar";
import Slider from "./components/slider";
import Body from "./components/body";
import Footer from "./components/footer";

const list = [
  {
    link: "https://www.youtube.com/embed/l1vnsqbnAkk?si=GKsImclaB6Sd75Di&amp;controls=0",
    label: "Imagine the Posibilities",
    hashtag: "",
    type: "purpose",
  },
  {
    link: "https://www.youtube.com/embed/FZ8Sgkq74XA?si=umVOY2AzdSPCQ6px&amp;controls=0",
    label: "Barbie",
    hashtag: "#MoreRoleModels",
    type: "purpose",
  },
  {
    link: "https://www.youtube.com/embed/A2oXWOyG9r8?si=OyFpyq1Z-ctIUlL9&amp;controls=0",
    label: "The Dream Gap Project",
    hashtag: "",
    type: "purpose",
  },
  {
    link: "https://i.ibb.co/5nBjzs4/barbie-media-vlogger-350x200px.png",
    label: "Barbie Vlogger",
    hashtag: "",
    platform: "YOUTUBE",
    description:
      "Barbie Vlogger is an ongoing web-exclusive series where Barbie chats directly with her audiences about everything that is going on in her life. In her vlogs. Barbie takes on fun YouTube challenges, shares DIY activities and speaks openly about topics on her mind, like feeling blue sometimes or realizing that girls are in the habit of apologizing too much.",
    watch_on: "Youtube",
    extra: "",
    type: "content",
  },
  {
    link: "https://i.ibb.co/0K1mMxq/barbie-media-tiny-shoulders-350x200px.png",
    label: "Tiny Shoulders: Rethinking Barbie",
    hashtag: "",
    platform: "DOCUMENTARY",
    description:
      "Explore the journey of Barbie over past six decades in this new Hulu documentary. You will get an insider's look at how Mattel evolved the doll, in step with the modern feminist movement.",
    watch_on: "Hulu",
    extra:
      "Written and directed by Andrea Nevins. Produced by Cristan Crocker.",
    type: "content",
  },
  {
    link: "https://i.ibb.co/7nS9GFh/barbiedreamhouse.png",
    label: "Barbie Dreamhouse Adventures",
    hashtag: "",
    platform: "ANIMATED SERIES",
    description:
      "Peek into the everyday life of Barbie in this hilarious and heartwarming new series. From fun road trips to suster shenanigans, Barbie discovers anything is possible with a little help and a whole lot of laughter",
    watch_on: "Netflix",
    extra: "",
    type: "content",
  },
  {
    link: "https://i.ibb.co/nQn285G/3bbi-hjy02.jpg",
    label: "Barbie",
    hashtag: "",
    platform: "BARBIE SERIES",
    description:
      "Barbie is a fashion doll created by American businesswoman Ruth Handler, manufactured by American toy and entertainment company Mattel and introduced on March 9, 1959. The toy was based on the German Bild Lilli doll which Handler had purchased while in Europe.",
    watch_on: "Netflix",
    extra: "",
    type: "collections",
  },

  {
    link: "https://i.ibb.co/3yTqr4w/barbie-2778-3465392-1.webp",
    label: "Ken",
    hashtag: "",
    platform: "BARBIE SERIES",
    description:
      "Kenneth Sean 'Ken' Carson Jr. is a fashion doll introduced by American toy company Mattel in 1961 as the counterpart of Barbie, who had been introduced two years earlier.",
    watch_on: "Netflix",
    extra: "",
    type: "collections",
  },
  {
    link: "https://i.ibb.co/kqFfwtr/81q7aom9-Hp-L-AC-SL1024.jpg",
    label: "Mariposa",
    hashtag: "",
    platform: "BARBIE SERIES",
    description:
      "A butterfly fairy missions to save her poisoned queen and reinstate the shield that protects their kingdom from predators.",
    watch_on: "Netflix",
    extra: "",
    type: "collections",
  },
];

const titles = [
  {
    title: "OUR PURPOSE",
    subtitle: "To inspire the limitless potential in every girl",
    count: "first",
  },
  {
    title: "content",
    subtitle: "",
    count: "second",
  },
  {
    title: "collections",
    subtitle: "",
    count: "third",
  },
];

export default function App() {
  return (
    <>
      <div class="container">
        <Nav />
        <Slider />
        <Body titles={titles} list={list} />
        <Footer />
      </div>
    </>
  );
}
