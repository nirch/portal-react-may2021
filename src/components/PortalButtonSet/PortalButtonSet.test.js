import ReactDOM from 'react-dom';
import PortalButtonSet from './PortalButtonSet';


it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<PortalButtonSet labels={["Active", "Non-Active"]} activeButton={0} changeActiveBtn={() => {}}/>, div);
});


it('renders multiple buttons', () => {
    const div = document.createElement('div');
    ReactDOM.render(<PortalButtonSet labels={["Active", "Non-Active", "Multiple"]} changeActiveBtn={0} onClick={() => {}}/>, div);
});


it('renders without sending active prop', () => {
    const div = document.createElement('div');
    ReactDOM.render(<PortalButtonSet labels={["Active", "Non-Active"]} changeActiveBtn={() => {}}/>, div);
});


it('renders without sending active prop', () => {
    const div = document.createElement('div');
    ReactDOM.render(<PortalButtonSet labels={["Active", "Non-Active"]} changeActiveBtn={() => {}}/>, div);
});


it('renders with non-default active prop', () => {
    const div = document.createElement('div');
    ReactDOM.render(<PortalButtonSet labels={["Active", "Non-Active"]} activeButton={1} changeActiveBtn={() => {}}/> , div);
});


it('renders without crashing when labels is an empty array', () => {
    const div = document.createElement('div');
    ReactDOM.render(<PortalButtonSet labels={[]} activeButton={1} changeActiveBtn={() => {}}/>, div);
});


it('renders without crashing when sending active prop out of bound', () => {
    const div = document.createElement('div');
    ReactDOM.render(<PortalButtonSet labels={["Active", "Non-Active"]} activeButton={3} changeActiveBtn={() => {}}/>, div);
});


it('renders with top border', () => {
    const div = document.createElement('div');
    ReactDOM.render(<PortalButtonSet labels={["Active", "Non-Active"]} changeActiveBtn={() => {}} border="top"/>, div);
});


it('renders with bottom border', () => {
    const div = document.createElement('div');
    ReactDOM.render(<PortalButtonSet labels={["Active", "Non-Active"]} changeActiveBtn={() => {}} border="bottom"/>, div);
});
