import './PortalButtonSet.css';

// This is a generic component which gets 4 props, 2 of them are optionals
//
// labels - array, buttons' caption
// activeButton - number, optional prop which button is active, the default is first one
// changeActiveBtn - function, handles the button click, sends the index of the clicked button
// border - string, optional prop that show component's border. Three options: top, bottom, none


function PortalButtonSet({labels, activeButton = 0, changeActiveBtn, border = ""}) {

    const topBorder = {
        "borderTop": "1px solid lightgray"
    };

    const bottomBorder = {
        "borderBottom": "1px solid lightgray"
    };

    return (
        <div className="c-button-set" style={border === "top" ? topBorder : border === "bottom" ? bottomBorder : {}}>
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