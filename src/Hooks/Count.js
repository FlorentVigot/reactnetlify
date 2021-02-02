import React, { useState } from 'react';
function useStateExemple() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>Vous avez cliquez {count} fois</p>
            <button onClick={() => setCount(0)}>
                Réintialise
            </button>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>
                Ajouter +
            </button>
            <button onClick={() => setCount(prevCount => prevCount - 1)}>
                Enlever -
            </button>

        </div>
    )
}

export default useStateExemple