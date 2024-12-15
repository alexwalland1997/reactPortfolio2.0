import { RiMoonFill, RiLightbulbFill } from "@remixicon/react";
import { useEffect, useState } from "react";

export default function Navbar() {
  let cTheme = localStorage.getItem("theme");
  const [theme, setTheme] = useState(cTheme);
  const [selected, setSelect]= useState(null);
  theme == null ? setTheme("light") : null;

  function changeTheme() {
    theme == "light" ? setTheme("dark") : setTheme("light");
  }

  useEffect (() => {
    if (theme == "dark") {
      document.body.classList.add('dark-theme');
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove('dark-theme');
      localStorage.setItem("theme", "light");
    }
  });
  //deciding which option is chosen so cant be clicked
  function sID(id) {
    setSelect(id);
  }

  return (
    <nav>
      <img src="src\images\logo.png" />
      <div id="navigation">
        {selected == "0" ? <a className="selected">About</a>:<a href="#about" onClick={()=>sID(0)}>About</a>}
        {selected == "1" ? <a className="selected">Projects</a> :<a href="#projects" onClick={()=>sID(1)}>Projects</a>}
        {selected == "2" ? <a className="selected">Contact Me</a>:<a href="#contactMe"onClick={()=>sID(2)}>Contact Me</a>}
        {theme == "light" ? (
          <RiLightbulbFill onClick={() => changeTheme()} className="icon" />
        ) : (
          <RiMoonFill onClick={() => changeTheme()} className="icon" />
        )}
      </div>
    </nav>
  );
}
