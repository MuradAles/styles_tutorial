import { useState } from 'react';
import "./Carousel.css"
function Carousel({ dataContainer }) {
    const [index, setIndex] = useState(0);
    const length = dataContainer.length;
    const handlePrevious = () => {
        const newIndex = index - 1;
        setIndex(newIndex < 0 ? length - 1 : newIndex)
    }
    const handleNext = () => {
        const newIndex = index + 1;
        setIndex(newIndex >= length ? 0 : newIndex)
    }
    return (
        <>
            <div className="Carousel">
                <div className="Div_Carousel">
                    {dataContainer[index]}
                </div>
                <button className="B_Next" onClick={handleNext}><div class="Arrow_Left"></div></button>
                <button className="B_Previous" onClick={handlePrevious}><div class="Arrow_Right"></div></button>
            </div>
        </>
    )
}
export default Carousel