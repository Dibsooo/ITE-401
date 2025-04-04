<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Simple Form Example with React.js</title>
</head>
<body>
    <script src="https://unpkg.com/react@17.0.2/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@17.0.2/umd/react-dom.development.js"></script>
    <script src="https://unpkg.com/react@17.0.2/umd/react.production.min.js"></script>
    <script src="https://unpkg.com/react-dom@17.0.2/umd/react-dom.production.min.js"></script>
    <script src="https://unpkg.com/@babel/standalone@7.15.3/babel.min.js"></script>

    <div id="form-example"></div>

    <script type="text/babel">
        const { useState } = React;

        const Form = () => {
            const [idno, setIdno] = useState("");
            const [name, setName] = useState("");
            const [course, setCourse] = useState("");
            const [displayInfo, setDisplayInfo] = useState(false);

            const handleIdnoChange = (event) => {
                setIdno(event.target.value);
            };
            const handleNameChange = (event) => {
                setName(event.target.value);
            };
            const handleCourseChange = (event) => {
                setCourse(event.target.value);
            };
            const handleSubmit = (event) => {
                event.preventDefault();
                setDisplayInfo(true);
            };

            return (
                <div>
                    <h2 style={{ color: 'pink' }}>Platform of Technology</h2>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="idno">Enter ID Number: </label>
                        <input type="text" id="idno" value={idno} onChange={handleIdnoChange} />
                        
                        <label htmlFor="name">Enter Name: </label>
                        <input type="text" id="name" value={name} onChange={handleNameChange} />

                        <label htmlFor="course">Enter Course: </label>
                        <input type="text" id="course" value={course} onChange={handleCourseChange} />

                        <button type="submit" style={{ 
                            backgroundColor: "pink", 
                            color: "white", 
                            padding: "10px 20px", 
                            borderRadius: "5px", 
                            border: "none", 
                            marginTop: "10px" 
                        }}>
                            Display Info
                        </button>
                    </form>

                    {displayInfo && (
                        <div style={{ marginTop: "10px" }}>
                            <p>ID Number: {idno}</p>
                            <p>Name: {name}</p>
                            <p>Course: {course}</p>
                        </div>
                    )}
                </div>
            );
        };

        ReactDOM.render(<Form />, document.getElementById("form-example"));
    </script>
</body>
</html>
