import { useState, useEffect } from 'react';

const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {

        const abortCont = new AbortController();

        setTimeout(() => { // we wrapped it in set timeout just to show the loading message longer enji we don't do that in real life applications 

            fetch(url, { signal: abortCont.signal }) //like a promise
                .then(res => {

                    if (!res.ok) { // if the response wans't okay, .ok is a property

                        throw Error('Could not fetch data for resource');
                    }

                    return res.json();
                })

                .then((data) => { // doesn't matter if this data and the above data variable is the same name

                    setIsPending(false);
                    setData(data);
                    setError(null);

                })

                .catch(err => { // runs by default if the server can't connect 
                    // can also use this to display a message if an error  is thrown from above the res

                    if (err.name === 'AbortError') {

                        console.log('fetch aborted');
                    }

                    else {

                        setError(err.message);
                        setIsPending(false);

                    }


                })


        }, 1000)

        return () => abortCont.abort();


    }, [url]);

    return { data, isPending, error }
}

export default useFetch;