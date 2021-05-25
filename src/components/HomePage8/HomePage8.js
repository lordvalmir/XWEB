import "./HomePage8.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faLaptop } from "@fortawesome/free-solid-svg-icons";

function HomePage8() {
  return (
    <div className="bg7">
      <div className="becomeIns">
        <div className="becomeInsLeft">
          <div className="becomeInsLeftPaperBehind"></div>
          <div className="becomeInsLeftPaperFront"></div>
        </div>
        <div className="becomeInsRight">
          <div className="becomeInsRightTag">... Build A Career ...</div>
          <div className="becomeInsRightTitle">Become an Instructor</div>
          <div className="becomeInsRightText">
            Sed ut perspiciati unde omnis iste natus error sit voluptatem
            accusanc tium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae abillo inventore veritatis et quasi architecto beatae vitae
            dicta sun
          </div>
          <div className="becomeInsRightBoxs">
            <div className="becomeInsRightBoxRight">
              <FontAwesomeIcon icon={faLaptop} />
              <div className="becomeInsRightBoxTitle">Digitalization</div>
              <div className="becomeInsRightBoxText">
                Sed ut perspia unde omnis aste natus error sit volu
              </div>
            </div>
            <div></div>
            <div className="becomeInsRightBox">
              <FontAwesomeIcon icon={faBook} />
              <div className="becomeInsRightBoxTitle">Book Friendly</div>
              <div className="becomeInsRightBoxText">
                Sed ut perspia unde omnis aste natus error sit volu
              </div>
            </div>
          </div>
          <div className="becomeInsRightButtons">
            <div className="becomeInsRightButtonJoin">
              <div className="becomeInsButtonText">
                join with us
                <svg
                  width="46"
                  height="11"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0.388 46 10.223"
                  fill="#fff"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="46"
                    height="11"
                    viewBox="2 1.683 45 10.001"
                  >
                    <path
                      paint-order="stroke fill markers"
                      fill-rule="evenodd"
                      d="M2 5.687h35v2H2v-2zm35-4.004l10 5-10 5v-10z"
                    />
                  </svg>
                </svg>
              </div>
            </div>
            <div className="becomeInsRightButtonBecome">
              <div className="becomeInsButtonText">Become a Partner</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage8;
