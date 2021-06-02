import './SylabusCourseTab.css';

function SylabusCoursePage({courseName, subjects}) {

    return (
        <div className="p-sylabus">
            <div className="header">
                <div className="title">קורס</div>
                <div className="data">{courseName}</div>
            </div>
            
            <div className="list">
                <ul>
                    {subjects.map(subject => <li>{subject.subject}</li>)}
                </ul>
            </div>
        </div>
    );
}

export default SylabusCoursePage;