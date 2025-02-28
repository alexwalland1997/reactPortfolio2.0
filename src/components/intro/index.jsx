import { RiLinkedinFill, RiGithubFill } from "@remixicon/react";

export default function Intro() {
  return (
    <div id="background">
      <div id="terminal">
        <p>C:/Users/alexanderwalland/</p>
        <p>> npm create vite@latest portfolio --template</p>
        <p>> cd portfolio</p>
        <p> > git init</p>
        <p>> git add .</p>
        <p>> git commit -m "created react portfolio"</p>
        <p>> git push</p>
        <p className="active">> </p>
        </div>
        <div id="intro">
          <img src="https://media.licdn.com/dms/image/v2/D4D03AQF-E4OanYQbIA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1725388912839?e=1740009600&v=beta&t=_0f_a5Eecc9a6dpCGKJjp8Ag2ca2zdUWWAh1r1KPEIk"></img>
          <h1>Alexander Walland</h1>  
          <h2>Front-end Programmer</h2>
          <h2>HTML | CSS | Javascript</h2>
          <a href="https://github.com/alexwalland1997" target="_blank">
            <RiGithubFill size={30} className="profile" />
          </a>
          <a href="https://www.linkedin.com/in/alexander-walland-5020b4246/" target="_blank">
            <RiLinkedinFill size={30} className="profile"/>
          </a>
        </div>
        
    </div>
  );
}
