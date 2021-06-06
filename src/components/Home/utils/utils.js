export const handleStep = (steps, setSteps) => {

    if(steps.step === 4) {
        return setSteps({   
            step: 0,
        })
    } 

    return setSteps({
        step: steps.step + 1,
    })
}

export const handleReturn = (stepTo, setSteps) => {
    return setSteps({
        step: stepTo
    })
}

export const handleComplete = (selected, setNextButton) => {

    if(
        selected.color !== "" &&  
        selected.size !== "" &&
        selected.ubicacion !== ""
        ) {
            setNextButton(true)
        }

}