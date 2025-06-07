import { WorkoutsContext } from "../context/WorkoutsContext"
import { useContext } from "react"

export const useWorkoutsContext = () => {
    const context = useContext(WorkoutsContext)     //this will return value of WorkoutsContext that we pass into the WorkoutsContextProvider

    if (!context) {     //if the context is used outside the component tree, in our case App, then context value = null
        throw Error('useWorkoutsContext must be used inside an WorkoutsContextProvider')
    }

    return context
}

// export default useWorkoutsContext