import ReactDOM from 'react-dom';
import PortalButtonSet from './PortalButtonSet';


it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<PortalButtonSet labels={["Active", "Non-Active"]} activeButton={0} onClick={() => console.log(e)}/>, div);
});


it('renders multiple buttons', () => {
    const div = document.createElement('div');
    ReactDOM.render(<PortalButtonSet labels={["Active", "Non-Active", "Multiple"]} activeButton={0} onClick={() => console.log(e)}/>, div);
});


it('renders without sending active prop', () => {
    const div = document.createElement('div');
    ReactDOM.render(<PortalButtonSet labels={["Active", "Non-Active"]} onClick={() => console.log(e)}/>, div);
});


it('renders without sending active prop', () => {
    const div = document.createElement('div');
    ReactDOM.render(<PortalButtonSet labels={["Active", "Non-Active"]} onClick={() => console.log(e)}/>, div);
});


it('renders with non-default active prop', () => {
    const div = document.createElement('div');
    ReactDOM.render(<PortalButtonSet labels={["Active", "Non-Active"]} activeButton={1} onClick={() => console.log(e)}/> , div);
});


it('renders without crashing when labels is an empty array', () => {
    const div = document.createElement('div');
    ReactDOM.render(<PortalButtonSet labels={[]} activeButton={1} onClick={() => console.log(e)}/>, div);
});


it('renders without crashing when sending active prop out of bound', () => {
    const div = document.createElement('div');
    ReactDOM.render(<PortalButtonSet labels={["Active", "Non-Active"]} activeButton={3} onClick={() => console.log(e)}/>, div);
});