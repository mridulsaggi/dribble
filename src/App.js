
import './index.css';
import dot from "./dots.png"
import user from "./user.png"
import bd from "./bd.jpg"
import chart from "./chart.png"
import toggle from "./toggle.png"
import tmp from "./tmp.png"
import add from "./add.png"
import scl from "./scl.png"
function App() {
  return (
    <>
      <div className="main">
        <div className="left">
          <div className="topp">
            <img className="pdd" src={add} alt="" />
            <img className="pdd" src={scl} alt="" />
            <img className="pdd" src={toggle} alt="" />

          </div>
          <span className='jj'>
            <img className="tmpp" src={tmp} alt="" />
            <img className="bdd" src={bd} alt="" />
          </span>
        </div>
        <div className="right">

          <div className="top">
            <div className="first"><span className="lt">Welcome back Isabella!!</span>
              <span>Check out todays weather condition</span>
            </div>
            <div className="rt">
              <span>
                <img className="pd" src={dot} alt="" />
                <img src={user} alt="" />
              </span>

            </div>
          </div>
          <div className="card1">
            <span className="tx">upcoming hours</span>
            <img className="chart" src={chart} alt="" />
          </div>
          <div className="txc">
            More details of todays weather
          </div>
          <div className="card">
            <div className="cd"><p>humidity</p>
            <p>82% bad</p></div>
            <div className="cd"><p>wind</p><p>8km/hr</p></div>
            <div className="cd"><p>precipitation</p><p>1.4cm</p></div>
          </div>
          <div className="card">
            <div className="cd"><p>uv index</p><p>4 medium</p></div>
            <div className="cd"><p>feels like</p><p>30</p></div>
            <div className="cd"><p>chance of rain</p><p>42%</p></div>
          </div>
        </div>

      </div>
    </>
  );
}

export default App;
