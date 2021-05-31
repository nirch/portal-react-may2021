import React from 'react';
import './TeachersTab.css';
import SearchPager from '../../components/SearchPager/PortalSearchPage';
import PortalTableView from '../../components/PortalTable/PortalTable';

function TeachersTab(props) {
    return (
        <div className="c-teachers-tab">
            <SearchPager placeholder={"חיפוש מדריך"}/>
            <PortalTableView headers={[{"key":"fds", "header": "fds"}]} data={[{"key":"fds", "header": "fds"}]}/>
        </div>
    );
}

export default TeachersTab;