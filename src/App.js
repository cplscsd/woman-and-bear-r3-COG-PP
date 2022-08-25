import React, { Component } from "react";
import "./App.css";
import image01 from "./images/page01wf.png";
import image02 from "./images/page02wf.png";
import image03 from "./images/page03wf.png";
import image04 from "./images/page04wf.png";
import image05 from "./images/page05wf.png";
import image06 from "./images/page06wf.png";
import image07 from "./images/page07wf.png";
import image08 from "./images/page08wf.png";
import image09 from "./images/page09wf.png";
import image10 from "./images/page10wf.png";
import image11 from "./images/page11wf.png";
import avatar from "./images/Avatar.png";
import salmon from "./images/salmon.jpg";
import steak from "./images/steak.jpg";
import chocolate from "./images/chocolate.jpg";
import flowers from "./images/flowers.jpg";
import intro from "./audio/intro.mp3";

var slideIndex = 1;
export class App extends Component {
  constructor(props) {
    super();
    this.firstQ = React.createRef();
  }

  componentDidUpdate() {
    this.showSlides(slideIndex);
  }

  showSlides(n) {
    if (document.getElementById("book")) {
      var i;
      var slides = Array.from(document.getElementsByClassName("slide"));
      if (n > slides.length) {
        slideIndex = 1;
      }
      if (n < 1) {
        slideIndex = slides.length;
      }
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      slides[slideIndex - 1].style.display = "flex";
    }
  }

  plusSlides(n) {
    if (document.getElementById("pageNum")) {
      this.showSlides((slideIndex += n));
      document.getElementById("pageNum").innerHTML = String(slideIndex - 1);
      if (slideIndex == 1) {
        document.getElementById("pageNum").innerHTML = "";
      }
      if (n > 0) {
        document.getElementById("n").style.display = "none";
      } else {
        document.getElementById("n").style.display = "block";
      }
      if (slideIndex >= 3) {
        document.getElementById("p").style.display = "block";
      } else {
        document.getElementById("p").style.display = "none";
      }
    }
  }

  toggle(id) {
    if (document.getElementById(id)) {
      var text = document.getElementById(id).style.display;
      if (text == "flex") {
        document.getElementById(id).style.display = "none";
      } else {
        document.getElementById(id).style.display = "flex";
      }
    }
  }

  toggleBlock(id) {
    if (document.getElementById(id)) {
      var text = document.getElementById(id).style.display;
      if (text == "flex") {
        document.getElementById(id).style.display = "none";
      } else {
        document.getElementById(id).style.display = "block";
      }
    }
  }

  show(id) {
    if (document.getElementById(id)) {
      document.getElementById(id).style.display = "block";
    }
  }

  toggleSound(id) {
    var sound = document.getElementById(id);
    if (sound.paused || sound.duration == 0) {
      sound.play();
    } else {
      sound.pause();
    }
  }

  hide(id) {
    if (document.getElementById(id)) {
      document.getElementById(id).style.display = "none";
    }
  }

  showNext() {
    if (document.getElementById("n")) {
      document.getElementById("n").style.display = "block";
    }
  }

  playQuestion() {
    if (
      document.getElementById("story-retel") &&
      document.getElementById("pause") &&
      document.getElementById("play")
    ) {
      var question = document.getElementById("story-retel");
      console.log(question.duration);
      document.getElementById("pause").style.display = "block";
      document.getElementById("play").style.display = "none";
      question.play();
    }
  }

  updateTime() {
    var question = document.getElementById("story-retel");
    document.getElementById("audio-time").innerHTML = question.currentTime;
  }

  pauseQuestion() {
    if (
      document.getElementById("story-retel") &&
      document.getElementById("pause") &&
      document.getElementById("play")
    ) {
      var question = document.getElementById("story-retel");
      console.log(question.currentTime);
      document.getElementById("pause").style.display = "none";
      document.getElementById("play").style.display = "block";
      question.pause();
    }
  }

  selectOption(id, num) {
    var options = ["a", "b", "c"];
    for (var i = 0; i < options.length; i++) {
      var optionId = num + options[i];
      document.getElementById(optionId).style.fontWeight = "normal";
    }
    document.getElementById(id).style.fontWeight = "bold";
  }

  record() {
    if (document.getElementById("recordButton")) {
      if (document.getElementById("recordButton").innerHTML == "ENREGISTRER") {
        document.getElementById("recordButton").innerHTML = "PAUSE";
      } else {
        document.getElementById("recordButton").innerHTML = "ENREGISTRER";
      }
    }
  }

  render() {
    return (
      <div id="book">
        {/* Slideshow container */}
        <div className="phoneText">Not available on this device</div>

        <div className="slideshow-container">
          <div className="title">The Woman and Her Bear </div>
          <div className="slide-container">
            <div className="arrow-container">
              <div className="next" id="p" onClick={() => this.plusSlides(-1)}>
                &#10094;
              </div>
            </div>

            {/* Slides */}
            {/* Intro Slide */}
            <div className="slide fade" style={{ display: "flex" }}>
              <div className="image-container">
                <img className="image" src={image01} alt="Intro page image" />
                <div className="avatar-container">
                  <div className="flex-row">
                    <img
                      className="avatar"
                      src={avatar}
                      alt="Owl avatar"
                      onClick={() => {
                        this.show("intro");
                        this.hide("click1");
                        this.showNext();
                      }}
                    />
                    <i id="click1" class="fa fa-arrow-left">
                      &larr;Click Here
                    </i>
                  </div>
                </div>
                <div id="intro" className="speech sb1">
                  Today you will read "The Woman and her Bear" for the third
                  time. Afterwards we will ask you to retell the story. It is
                  easier to remember a story if you know that most stories have
                  a similar structure as shown here in this chart. A story
                  begins with the exposition - this is the part that introduces
                  the characters and the setting and gets the story started.
                  Then the plot gets going with rising actions - these are the
                  events that lead up to the climax. The rising actions usually
                  involve at least one problem that must be solved. The climax
                  is the point of major tension in the story. After the climax
                  there are falling actions. These are plot events that lead
                  toward the resolution of the problem or the conflict. Finally
                  there is the resolution of the problem. Today when you read
                  the story for the last time you can think about where the
                  events in the story fit into this story arc.
                </div>
                <audio id="intro-sound">
                  <source src={intro} type="audio/mpeg" />
                </audio>
              </div>
            </div>
            {/* Slide 1 */}
            <div className="slide fade">
              <div className="image-container">
                <img className="image" src={image01} alt="First page image" />
                <div className="avatar-container">
                  <div className="flex-row">
                    <img className="avatar" src={avatar} alt="Owl avatar" />
                  </div>
                  <p>
                    Long ago in the far north, there lived a village of people
                    known as a the Inuit. They lived on the shores of the icy
                    Arctic. They depended upon the bounty of the salmon and seal
                    and the creatures of the snow to feed themselves. All the
                    young men were hunters and fishers.
                    <span
                      className="doneButton"
                      id="done1"
                      onClick={() => {
                        this.toggle("s1");
                        this.hide("done1");
                        this.showNext();
                      }}
                    >
                      Done ✓
                    </span>
                  </p>
                </div>
              </div>
            </div>
            {/* Slide 2 */}
            <div className="slide fade">
              <div className="image-container">
                <img className="image" src={image02} alt="Second page image" />
                <div className="avatar-container">
                  <div className="flex-row">
                    <img className="avatar" src={avatar} alt="Owl avatar" />
                  </div>
                  <p>
                    One old woman lived alone. She had no husband and no sons to
                    hunt or fish for her. Her neighbors shared their food with
                    her but she was lonely. She longed for a family of her own.
                    She often walked along the shore, looking far out to sea,
                    praying that the gods might send her a son.
                    <span
                      className="doneButton"
                      id="done2"
                      onClick={() => {
                        this.toggle("s2");
                        this.hide("done2");
                        this.showNext();
                      }}
                    >
                      Done ✓
                    </span>
                  </p>
                </div>
              </div>
            </div>
            {/* Slide 3 */}
            <div className="slide fade">
              <div className="image-container">
                <img className="image" src={image03} alt="Third page image" />
                <div className="avatar-container">
                  <div className="flex-row">
                    <img className="avatar" src={avatar} alt="Owl avatar" />
                  </div>
                  <p>
                    One cold winter day, the woman was walking by the sea when
                    she spotted a tiny white polar bear sitting all alone on the
                    thick ice. His mother was nowhere in sight. "Someone must
                    have killed her," she said softly, and she walked onto the
                    ice, picked up the cub and looked into his eyes. "You will
                    be my son," she said. She called him Kunik.
                    <span
                      className="doneButton"
                      id="done3"
                      onClick={() => {
                        this.toggle("s3");
                        this.hide("done3");
                        this.showNext();
                      }}
                    >
                      Done ✓
                    </span>
                  </p>
                </div>
              </div>
            </div>
            {/* Slide 4 */}
            <div className="slide fade">
              <div className="image-container">
                <img className="image" src={image04} alt="Fourth page image" />
                <div className="avatar-container">
                  <div className="flex-row">
                    <img className="avatar" src={avatar} alt="Owl avatar" />
                  </div>
                  <p>
                    The old woman took her cub back to her home. From that day
                    on, she shared all her food with Kunik, and a strong bond
                    grew between the two.
                    <span
                      className="doneButton"
                      id="done4"
                      onClick={() => {
                        this.toggle("s4");
                        this.hide("done4");
                        this.showNext();
                      }}
                    >
                      Done ✓
                    </span>
                  </p>
                </div>
              </div>
            </div>
            {/* Slide 5 */}
            <div className="slide fade">
              <div className="image-container">
                <img className="image" src={image05} alt="Fifth page image" />
                <div className="avatar-container">
                  <img className="avatar" src={avatar} alt="Owl avatar" />
                  <p>
                    The village children loved Kunik, too. Now the woman was
                    never lonely, for her son, the bear, and all the village
                    children kept her company all day. She would stand by her
                    igloo and smile as Kunik and the children rolled in the snow
                    and slid on the ice. Kunik was gentle with the children as
                    if they were his brothers and sisters.
                    <span
                      className="doneButton"
                      id="done5"
                      onClick={() => {
                        this.toggle("s5");
                        this.hide("done5");
                        this.showNext();
                      }}
                    >
                      Done ✓
                    </span>
                  </p>
                </div>
              </div>
            </div>
            {/* Slide 6 */}
            <div className="slide fade">
              <div className="image-container">
                <img className="image" src={image06} alt="Sixth page image" />
                <div className="avatar-container">
                  <img className="avatar" src={avatar} alt="Owl avatar" />
                  <p>
                    Kuink grew taller and smarter. The children taught him to
                    fish. By springtime he was fishing on his own, and every
                    afternoon he came home carrying fresh salmon for his mother.
                    The old woman was now the happiest of all the villagers. She
                    was so proud of the her little bear that whenever he
                    returned home, she would say proudly to anyone nearby, "He's
                    the finest fisher in all the village."
                    <span
                      className="doneButton"
                      id="done6"
                      onClick={() => {
                        this.toggle("s6");
                        this.hide("done6");
                        this.showNext();
                      }}
                    >
                      Done ✓
                    </span>
                  </p>
                </div>
              </div>
            </div>
            {/* Slide 7 */}
            <div className="slide fade">
              <div className="image-container">
                <img className="image" src={image07} alt="Seventh page image" />
                <div className="avatar-container">
                  <img className="avatar" src={avatar} alt="Owl avatar" />
                  <p>
                    Before long the men began to began to feel envious. "What
                    will we do?" they asked each other. "That bear brings home
                    the fattest seals and the biggest salmon. "He must be
                    stopped," another man said, "He has grown far too big. He is
                    a danger to our families." The men decided to kill the bear.
                    Although they knew how much the old woman loved the bear,
                    their envy made them mean.
                    <span
                      className="doneButton"
                      id="done7"
                      onClick={() => {
                        this.toggle("s7");
                        this.hide("done7");
                        this.showNext();
                      }}
                    >
                      Done ✓
                    </span>
                  </p>
                </div>
              </div>
            </div>
            {/* Slide 8 */}
            <div className="slide fade">
              <div className="image-container">
                <img className="image" src={image08} alt="Eight page image" />
                <div className="avatar-container">
                  <img className="avatar" src={avatar} alt="Owl avatar" />
                  <p>
                    A little boy overheard the men talking. He ran to the old
                    woman's home to tell her of the terrible plan. When she
                    heard the news, she threw her arms around the bear and wept.
                    "No," she said, "they must not kill my child." At once she
                    set off to visit every igloo in the village. She begged each
                    man not to kill her beautiful bear. "He is a danger to our
                    children," they said. "We cannot let him live."
                    <span
                      className="doneButton"
                      id="done8"
                      onClick={() => {
                        this.toggle("s8");
                        this.hide("done8");
                        this.showNext();
                      }}
                    >
                      Done ✓
                    </span>
                  </p>
                </div>
              </div>
            </div>
            {/* Slide 9 */}
            <div className="slide fade">
              <div className="image-container">
                <img className="image" src={image09} alt="Ninth page image" />
                <div className="avatar-container">
                  <img className="avatar" src={avatar} alt="Owl avatar" />
                  <p>
                    The old woman ran home and said to Kunik, "Your life is in
                    danger. Run away, but don't go so far that I cannot find
                    you." He had tears in his eyes but he obeyed his mother's
                    wishes.
                    <span
                      className="doneButton"
                      id="done9"
                      onClick={() => {
                        this.toggle("s9");
                        this.hide("done9");
                        this.showNext();
                      }}
                    >
                      Done ✓
                    </span>
                  </p>
                </div>
              </div>
            </div>
            {/* Slide 10 */}
            <div className="slide fade">
              <div className="image-container">
                <img className="image" src={image10} alt="Tenth page image" />
                <div className="avatar-container">
                  <img className="avatar" src={avatar} alt="Owl avatar" />
                  <p>
                    For many days the old woman and the children grieved their
                    loss. And then one morning the old woman went out looking
                    for Kunik. After many hours of walking and calling his name,
                    she saw her bear running towards her. They embraced but
                    Kunik could see that his mother was hungry so he ran to get
                    her fresh meat. The old woman cut up the fresh seal. She
                    gave her son the best slices of blubber and carried the rest
                    home. Every day after that the old woman met her son. The
                    bear brought his mother fresh meat or fish.
                    <span
                      className="doneButton"
                      id="done10"
                      onClick={() => {
                        this.toggle("s10");
                        this.hide("done10");
                        this.showNext();
                      }}
                    >
                      Done ✓
                    </span>
                  </p>
                </div>
              </div>
            </div>

            {/* Slide 11 */}
            <div className="slide fade">
              <div className="image-container">
                <img className="image" src={image11} alt="Tenth page image" />
                <div className="avatar-container">
                  <img
                    className="avatar"
                    src={avatar}
                    alt="Owl avatar"
                    onClick={() => {
                      this.showNext();
                      this.toggle("s11");
                    }}
                  />
                  <p>
                    After awhile the villagers grew to understand the love
                    between the woman and the bear was strong and true. From
                    that point on, they told with pride and respect the tale of
                    the unbroken love between the old woman and her son.
                  </p>
                </div>
              </div>
            </div>

            <div className="arrow-container">
              <div className="next" id="n" onClick={() => this.plusSlides(1)}>
                &#10095;
              </div>
            </div>
          </div>

          <div className="pageNum-container">
            <p id="pageNum"></p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
