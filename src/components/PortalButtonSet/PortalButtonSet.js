import './PortalButtonSet.css';

// This is a generic component which gets 4 props, 2 of them are optionals
//
// labels - array, buttons' caption
// activeButton - number, optional prop which button is active, the default is first one
// changeActiveBtn - function, handles the button click, sends the index of the clicked button
// borderBox - string, optional prop that show component's border. Three options: top, bottom, none


function PortalButtonSet({labels, activeButton = 0, changeActiveBtn}) {

    return (
        <div className="c-button-set">
            {
                labels.length !== 0 ?
                    labels.map(
                        (label, index) => 
                            <button id={index}
                                    key={index}
                                    className={(index === activeButton) ? "active" : "inactive"}
                                    onClick={(e) => {changeActiveBtn(e.target.id)}}>
                                {label}
                            </button>
                    ) : ''
            }
        </div>
    );
}

export default PortalButtonSet;