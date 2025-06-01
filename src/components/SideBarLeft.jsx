import React from "react";
import './Sidebar.css'; // Assuming you have a CSS file for styling
const SideBarLeft = () => {
    return (
    <div className="sidebar sidebar-left">

        <div className="sidebar-icons">
            <div className="icon">
                <a href="" target="'blank" rel="">
                 <img src="https://uploads-ssl.webflow.com/6013fff62154adaa4600f932/601aafabd334e34cd4dbb8ba_side-menu__game-2.png" 
                 alt="usericon"  
                 className="iconimage"/>
                </a>
            </div>
           <div className="icon">
            <a href="" target="'blank" rel="">
                 <img src="https://uploads-ssl.webflow.com/6013fff62154adaa4600f932/601aafac57edde91d49b301f_side-menu__game-1.png" 
                 alt="usericon"  
                 className="iconimage"/>
                </a>
           </div>
           <div className="icon">
            <a href="" target="'blank" rel="">
                 <img src="https://uploads-ssl.webflow.com/6013fff62154adaa4600f932/601aafab108eb6365513203b_side-menu__game.png" 
                 alt="usericon"  
                 className="iconimage"/>
                </a>
           </div>
           
           <div className="icon">
            <a href="" target="'blank" rel="">
                 <img src="https://uploads-ssl.webflow.com/6013fff62154adaa4600f932/601aafab2823bb5957cc1ffd_side-menu__game-3.png" 
                 alt="usericon"  
                 className="iconimage"/>
                </a>
           </div>

           <div className="icon">
            <a href="" target="'blank" rel="">
                 <img src="https://uploads-ssl.webflow.com/6013fff62154adaa4600f932/601aafaa108eb614c813203a_side-menu__career.png"
                 alt="usericon"  
                 className="iconimage"/>
                </a>
           </div>

            <div className="icon">
            <a href="" target="'blank" rel="">
                 <img src="https://uploads-ssl.webflow.com/6013fff62154adaa4600f932/601aafab332f0ade9870b435_side-menu__news.svg"
                 alt="usericon"  
                 className="iconimage"/>
                </a>
           </div>

            <div className="icon">
            <a href="" target="'blank" rel="">
                 <img src="https://uploads-ssl.webflow.com/6013fff62154adaa4600f932/601aafab68a3c97a6a478b8d_side-menu__watch.svg"
                 alt="usericon"  
                 className="iconimage"/>
                </a>
            </div>
        </div>

        <div className="bottom-icons">
             <button>
                 <img src="https://uploads-ssl.webflow.com/6013fff62154adaa4600f932/601aafabd71ff7186d1c97d5_side-menu__help.svg" alt="exit" />

             </button>

             <button>
                 <img src="https://uploads-ssl.webflow.com/6013fff62154adaa4600f932/601aafabc5fc83c1e7f50842_side-menu__quit.svg" alt="help" />
             </button>
        </div>

    </div>
    );
};

export default SideBarLeft;