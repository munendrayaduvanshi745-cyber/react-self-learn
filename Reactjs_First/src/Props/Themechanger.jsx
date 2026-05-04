import React, { useState } from "react";

function Home(){
    const[isDark, setIsDark] = useState(false);

    const toggleTheme = () => {
        if (isDark === true) {
            setIsDark(false);
        } else {
            setIsDark(true);
        }
    }
    let themeClass = isDark ?'dark':'light';
    let themeText = isDark ?'dark mode':'light mode';

    return(<>
       <div className={themeClass}>
        <h1>{themeText}</h1>
        <button className="btn btn-danger" onClick={toggleTheme}>Change Theme</button>
       </div>
    </>)
}

export default Home;