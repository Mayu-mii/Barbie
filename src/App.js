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
    link: "http://www.barbiemedia.com/admin/uploads/barbie-media_vlogger_350x200px.png",
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
    link: "http://www.barbiemedia.com/admin/uploads/barbie-media_tiny-shoulders_350x200px.png",
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
    link: "http://www.barbiemedia.com/admin/uploads/barbie-media_dreamhouse-adventures_350x200px.png",
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
    link: "http://www.barbiemedia.com/admin/uploads/barbie-media_dreamhouse-adventures_350x200px.png",
    label: "Barbie Dreamhouse Adventures",
    hashtag: "",
    platform: "ANIMATED SERIES",
    description:
      "Peek into the everyday life of Barbie in this hilarious and heartwarming new series. From fun road trips to suster shenanigans, Barbie discovers anything is possible with a little help and a whole lot of laughter",
    watch_on: "Netflix",
    extra: "",
    type: "content",
  },
];

const titles = [
  {
    title: "OUR PURPOSE",
    subtitle: "To inspire the limitless potential in every girl",
    count: "first",
  },
  {
    title: "CONTENT",
    subtitle: "",
    count: "second",
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
