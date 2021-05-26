export const handleStep = (steps, setSteps) => {

    if(steps.step === 5) {
        return setSteps({   
            step: 0,
            lastStep: 0,
        })
    } 

    return setSteps({
        step: steps.step + 1,
        lastStep: steps.step,
    })
} 