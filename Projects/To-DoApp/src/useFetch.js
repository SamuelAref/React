import { useEffect, useState } from "react";

const useFetch = (url) => {

    const [isRendering, setIsRendering] = useState(true);
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);

    useEffect(() => {

        const abortCont = new AbortController();

        fetch(url, { signal: abortCont.signal })

            .then(res => {

                if (!res.ok) {

                    throw Error('could not resolve data from resource');
                }

                else {

                    return res.json();
                }
            })

            .then(data => {

                setData(data);
                setError(null);
                setIsRendering(false);
            })

            .catch((err) => {

                if (err.name === 'AbortError') {

                    console.log('fetch aborted');
                }

                else {

                    setError(err.message);
                    setIsRendering(false);

                }


            })

        return () => abortCont.abort();
    }, [url]);


    return { data, isRendering, error }
}

export default useFetch;