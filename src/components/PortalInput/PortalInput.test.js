import ReactDOM from 'react-dom';
import PortalInput from './PortalInput'

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<PortalInput title="מספר טלפון"
                    placeholder="00000000000"
                    value="05266666"
                    onHandleChange={(value) => console.log(value)}/> , div );
});

it('renders without  title', () => {
    const div = document.createElement('div');
    ReactDOM.render(<PortalInput 
                    placeholder="00000000000"
                    value="05266666"
                    onHandleChange={(value) => console.log(value)}/> , div );
});

