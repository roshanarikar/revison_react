import  googleLogo from "./images/google.png"
import "./GoogleBtn.css"

export const GoogleBtn = () => {
  return (
    <div>
      <button className="googleBtn">
        <div><img className="googlelogo" src={googleLogo} alt="" /></div>
        <div className="googleBtnText"><p>CONTINUE WITH GOOGLE</p></div>
      </button>
    </div>
  );
};
