import './App.css'
import UnisexBody from './UnisexBody'

function App() {
    
    const highlightColors = {
        abs: "#15FFFF",
        forearms: "#7A96FC",
        knees: "#FD9494",
        rhomboids: "#5CFC3B",
        achilles: "#FB26D6",
        glutes: "#362EFA",
        lats: "#303030",
        rotator_cuffs: "#000000",
        biceps: "#34FC44",
        hamstrings: "#2EFC97",
        lower_back: "#FFE786",
        shins: "#9F9F9F",
        calfs: "#F9106C",
        hands: "#003DFA",
        neck: "#0099FB",
        thighs: "#AC2EFB",
        hips: "#FC7E32",
        obliques: "#FFD52F",
        traps: "#87FEFE",
        deltoids: "#808080",
        inner_thighs: "#FFB081",
        pecs: "#FE0000",
        triceps: "#BCFC3A",
    }

  return (
    <>
        <UnisexBody highlightColors={highlightColors} highlights={Object.keys(highlightColors)}/>
    </>
  )
}

export default App