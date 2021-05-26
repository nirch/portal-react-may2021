import './PortalButtonSet.css';

// This is a generic component which gets 4 props, 2 of them are optionals
//
// labels - array, buttons' caption
// activeButton - number, optional prop which button is active, the default is first one
// changeActiveBtn - function, handles the button click, sends the index of the clicked button
// border - string, optional prop that show component's border. Three options: top, bottom, none


function PortalButtonSet({labels, activeButton = 0, changeActiveBtn, border = ""}) {

    const classes = ["c-button-set"];

    if (border === "top") {
        classes.push("border-top");
    } else if (border === "bottom") {
        classes.push("border-bottom");
    }


    return (
        <div className={classes.join(" ")}>
            {
                labels.length !== 0 ?
                    labels.map(
                        (label, index) => 
                            <button key={index}
                                    className={(index === activeButton) ? "active" : "inactive"}
                                    onClick={() => {changeActiveBtn(index)}}>
                                {label}
                            </button>
                    ) : ''
            }
        </div>
    );
}

export default PortalButtonSet;