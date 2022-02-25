import React, { useEffect, useState } from 'react';
import '../../components/layout/PageTitle.css';

export default function UseEffect() {
    const [num, setNum] = useState(1);
    const [fat, setFat] = useState(1);
    const [parimpar, setParimpar] = useState('');

    const fatorial = (n) => {
        if (n < 0) return -1;
        if (Number(n) === 0) return 1;

        return fatorial(n - 1) * n;
    }

    const parImpar = (val) => {
        if(val%2 === 0) return 'Par';
        if(val%2 !== 0) return 'Impar';
    }

    useEffect(() => {
        setFat(fatorial(num));
    }, [num]);

    useEffect(()=>{
        setParimpar(parImpar(num));
    }, [num]);

    return (
        <>
            <div className='PageTitle'>
                <div className='font'>
                    <span className='text'>Fatorial: </span><span>{fat}</span>
                </div>
                <div>
                    <input type="number" value={num} onChange={e => setNum(e.target.value)} />
                </div>
                <div>
                    <span>O valor do fatorial é {parimpar}</span>
                </div>
            </div>
        </>
    )
}
