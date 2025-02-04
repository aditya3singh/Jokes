import {useState,useEffect } from "react";

export default function NewJoke() {
    const URL = "https://official-joke-api.appspot.com/random_joke";
    let [joke, setJoke] = useState({});
    const getNewJoke = async () => {
        let respose = await fetch(URL);
        let jsonRespose = await respose.json();
        setJoke({ setup: jsonRespose.setup, punchline: jsonRespose.punchline });
    };
    
    useEffect(() => {
        
        async function getFirstJoke() {
            
            let respose = await fetch(URL);
            let jsonRespose = await respose.json();
            console.log(jsonRespose);
            
            setJoke({ setup: jsonRespose.setup, punchline: jsonRespose.punchline });
        }
        getFirstJoke();
    }, []);

    return (
        <div>
            <h1>Jokes New Here</h1>
            <h2 >{joke.setup}</h2>
            <h2 >{joke.punchline}</h2>
            <button onClick={getNewJoke}> Click Here for the jokes</button>
        </div>
    )

}
