import React, { useState, useEffect } from 'react';

function Example() {
    const [count, SetCount] = useState(0);

    // Similaire à ComponentDidMount et componentDidUpdate

    useEffect(() => {
        document.title = 'vous avez cliqué ${count} fois';

    });

    return (
        <div>
            <p>Vous avez cliquez {count} fois</p>
            <button onClick={() => SetCount(count + 1)}>
                Cliquez ici
            </button>
        </div>
    );
}

export default Example