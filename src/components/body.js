import React from 'react';
import '..//App.css';


class Body extends React.Component {
  render(titleOne, titleTwo) {
    return (
      <div class="body">
        <h3>{this.props.titleOne}</h3>
        <h2>To inspire the limitless potential in every girl</h2>
        <div className="flex mt-20">
            <div className="col-4">
                <div class="center">
                <iframe width="80%" height="300" src="https://www.youtube.com/embed/l1vnsqbnAkk?si=GKsImclaB6Sd75Di&amp;controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
                <div>
                    <h4>Imagine the Posibilities</h4>
                </div>
            </div>
            <div className="col-4">
                <div class="center">
                <iframe width="80%" height="300" src="https://www.youtube.com/embed/FZ8Sgkq74XA?si=umVOY2AzdSPCQ6px&amp;controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
                <div>
                    <h4>Barbie #MoreRoleModels</h4>
                </div>
            </div>
            <div className="col-4">
                <div class="center">
                <iframe width="80%" height="300" src="https://www.youtube.com/embed/A2oXWOyG9r8?si=OyFpyq1Z-ctIUlL9&amp;controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>                </div>
                <div>
                    <h4>The Dream Gap Project</h4>
                </div>
            </div>
        </div>
        <hr/>
        <p class="content">{this.props.titleTwo}</p>
        <div className="flex mt-20">
            <div className="col-4 center-div">
                <img src="http://www.barbiemedia.com/admin/uploads/barbie-media_vlogger_350x200px.png" alt="" />
                <p class="platform">YOUTUBE</p>
                <p class="title">Barbie Vlogger</p>
                <p class="description">Barbie Vlogger is an ongoing web-exclusive series where Barbie chats directly with her audiences about everything that is going on in her life. In her vlogs. Barbie takes on fun YouTube challenges, shares DIY activities and speaks openly about topics on her mind, like feeling blue sometimes or realizing that girls are in the habit of apologizing too much.</p>
                <p class="arrow">Watch on Youtube →</p>
            </div>
            <div className="col-4 center-div">
                <img src="http://www.barbiemedia.com/admin/uploads/barbie-media_tiny-shoulders_350x200px.png" alt="" />
                <p class="platform">DOCUMENTARY</p>
                <p class="title">Tiny Shoulders: Rethinking Barbie</p>
                <p class="description">Explore the journey of Barbie over past six decades in this new Hulu documentary. You will get an insider's look at how Mattel evolved the doll, in step with the modern feminist movement.</p>
                <p class="extra">Written and directed by Andrea Nevins.
Produced by Cristan Crocker.</p>
                <p class="arrow">Watch on Hulu →</p>
            </div>
            <div className="col-4 center-div">
                <img src="http://www.barbiemedia.com/admin/uploads/barbie-media_dreamhouse-adventures_350x200px.png" alt="" />
                <p class="platform">ANIMATED SERIES</p>
                <p class="title">Barbie Dreamhouse Adventures</p>
                <p class="description">Peek into the everyday life of Barbie in this hilarious and heartwarming new series. From fun road trips to suster shenanigans, Barbie discovers anything is possible with a little help and a whole lot of <laughter className=""></laughter></p>
                <p class="arrow">Watch on Netflix →</p>
            </div>
        </div>
        <div className="back-to-top">
            <div>
                <span>↑</span>
                <p>BACK TO TOP</p>
            </div>
        </div>
      </div>
    );
  }
}

export default Body;