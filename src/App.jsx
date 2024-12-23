import {useEffect, useState} from "react";
import axios from "axios";

const App = ()=>{

    const [isLoading, setIsLoading] = useState(false)
    const [getData, setGetData] = useState({})
    const [errorMessage, setErrorMessage] = useState('failed to load')

    useEffect(() => {

        // Make a request for a user with a given ID
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(function (response) {
                // handle success
                console.log(response);
                setGetData(response.data)
                setIsLoading(!isLoading)
            })
            .catch(function () {
                // handle error
                setErrorMessage(errorMessage)
                console.log("failed to load");
            })
            .finally(function () {
                // always executed
            });

    }, [setIsLoading, setErrorMessage]);

    return(
        <>
            {setIsLoading ? <h1>is loading</h1> :  {errorMessage} }

            {getData.data  ?
                <div>
                    <h1>{getData.data.title}</h1>
                    <div>{getData.data.body}</div>
                </div>
                : {errorMessage}
            }

        </>
    )
}

export default App