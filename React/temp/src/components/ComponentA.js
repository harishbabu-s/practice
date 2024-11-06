import React, { useEffect, useState } from 'react'


const ComponentA = () => {
    const [stateA, setStateA] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setStateA((prev) => {
                return (prev + 1)
            })
        }, 1000)

        return () => {
            clearInterval(interval);
        }
    }, []);

    const arrayH = [{
        name: "harsih"
    },
    {
        name: "qwerty"
    }
    ];


    const ComponentB = ({ prop }) => {
        console.log(prop)
        return (
            <div>
                {prop}
            </div>
        )

    }
    const ComponentC = React.memo(() => {
        console.log("component c rendered")
        return (
            <h2>Copmponent C</h2>
        )
    })


    return (
        <div>
            <ComponentB prop={stateA} />
            <ComponentC />
            {arrayH.map((item, index) => {
                return (
                    <h6 key={index}> {item.name}</h6>
                )
            })}
        </div>
    )
}

export default ComponentA
