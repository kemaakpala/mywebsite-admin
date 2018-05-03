const defaultData = [
    {
        "_id": {
            "$oid": "5947f8b400cd3d0011f5f048"
        },
        "title": "HTML5",
        "image": "html5.png",
        "description": "HTML5 (HyperText Markup Language 5) is used to layout content on the web. It imp" +
                "roves the semantic meaning of web pages using tags. Click the button below to le" +
                "arn more.",
        "link": "https://www.w3schools.com/html/html5_intro.asp",
        "isActive": true,
        "date": {
            "$date": "2017-06-19T16:15:48.038Z"
        },
        "__v": 0
    }, {
        "_id": {
            "$oid": "5947f8b400cd3d0011f5f049"
        },
        "title": "CSS3",
        "image": "css3.png",
        "description": "CSS3 (Cascading Style Sheets 3) is used to style web pages. It includes features" +
                " such as rounded corners, shadows, gradients, animations etc. Click the button b" +
                "elow to learn more.",
        "link": "https://developer.mozilla.org/en/docs/Web/CSS/CSS3",
        "isActive": true,
        "date": {
            "$date": "2017-06-19T16:15:48.038Z"
        },
        "__v": 0
    }, {
        "_id": {
            "$oid": "5947f8b400cd3d0011f5f04a"
        },
        "title": "SASS",
        "image": "Sass-Logo.png",
        "description": "SASS (Syntactically Awesome Style Sheets)  is a css preprocessor that allows you" +
                " to use features that don’t exist in CSS. Click the button below to learn more.",
        "link": "http://sass-lang.com/guide",
        "isActive": true,
        "date": {
            "$date": "2017-06-19T16:15:48.038Z"
        },
        "__v": 0
    }, {
        "_id": {
            "$oid": "5947f8b400cd3d0011f5f04b"
        },
        "title": "JAVASCRIPT",
        "image": "javascript.png",
        "description": "JavaScript is a client side scripting language that is used to add dynamic behav" +
                "ior to web applications and site around the web. Click the button below to learn" +
                " more.",
        "link": "http://google.com",
        "isActive": true,
        "date": {
            "$date": "2017-06-19T16:15:48.038Z"
        },
        "__v": 0
    }, {
        "_id": {
            "$oid": "594bfd44b6ac050011801d8a"
        },
        "title": "jQuery",
        "image": "jQuery-Logo.png",
        "description": "jQuery is a javascript library that is used to easily add dynamic functionality " +
                "to web applications, functions include but not limited to hide, show, animate. C" +
                "lick the button below to learn more.",
        "link": "http://google.com",
        "isActive": true,
        "date": {
            "$date": "2017-06-22T17:24:20.283Z"
        },
        "__v": 0
    }, {
        "_id": {
            "$oid": "594bfd59b6ac050011801d8b"
        },
        "title": "ColdFusion",
        "image": "coldFusionLogo.png",
        "description": "Coldfusion is a server-side language that is used to develop / provide server-si" +
                "de functionality to websites/ web application. It has a tag syntax that closely " +
                "resembles HTML. Click the button below to learn more.",
        "link": "http://www.learncfinaweek.com/week1/What_is_ColdFusion_/",
        "isActive": true,
        "date": {
            "$date": "2017-06-22T17:24:41.602Z"
        },
        "__v": 0
    }, {
        "_id": {
            "$oid": "594bfd72b6ac050011801d8c"
        },
        "title": "MsSQL Server",
        "image": "microsoftSQLServer.png",
        "description": "This is a Relational Database Management System developed by Microsoft that is t" +
                "o develop enterprise systems. Click the button below to learn more.",
        "link": "https://www.microsoft.com/en-us/sql-server/sql-server-2016",
        "isActive": true,
        "date": {
            "$date": "2017-06-22T17:25:06.332Z"
        },
        "__v": 0
    }, {
        "_id": {
            "$oid": "594bfd8cb6ac050011801d8d"
        },
        "title": "MySQL",
        "image": "logo-mysql.png",
        "description": "MySQL is an open-source Relational Database Management System that is used to de" +
                "velop small and enterprise systems. Click the button below to learn more.",
        "link": "https://www.tutorialspoint.com/mysql/",
        "isActive": true,
        "date": {
            "$date": "2017-06-22T17:25:32.323Z"
        },
        "__v": 0
    }, {
        "_id": {
            "$oid": "594bfda1b6ac050011801d8e"
        },
        "title": "MongoDB",
        "image": "mongoDBLogo.png",
        "description": "MongoDb is an open source cross-platform document database system that allows yo" +
                "u to easily scale  and stores data in a flexible JSON-like document. Click the b" +
                "utton below to learn more.",
        "link": "https://www.mongodb.com/what-is-mongodb",
        "isActive": true,
        "date": {
            "$date": "2017-06-22T17:25:53.607Z"
        },
        "__v": 0
    }, {
        "_id": {
            "$oid": "594bfdb2b6ac050011801d8f"
        },
        "title": "Express",
        "image": "express.png",
        "description": "Express is a minimal and flexible Node.js web application framework that provide" +
                "s a robust set of features for web and mobile applications. Click the button bel" +
                "ow to learn more.",
        "link": "http://expressjs.com/",
        "isActive": true,
        "date": {
            "$date": "2017-06-22T17:26:10.708Z"
        },
        "__v": 0
    }, {
        "_id": {
            "$oid": "594bfdd4b6ac050011801d90"
        },
        "title": "Angular JS",
        "image": "AngularJS-Shield.png",
        "description": "AngularJS lets you extend HTML vocabulary for your application.The resulting env" +
                "ironment is extraordinarily expressive, readable, and quick to develop. Click th" +
                "e button below to learn more.",
        "link": "https://angularjs.org/",
        "isActive": true,
        "date": {
            "$date": "2017-06-22T17:26:44.958Z"
        },
        "__v": 0
    }, {
        "_id": {
            "$oid": "594bfdf2b6ac050011801d91"
        },
        "title": "Node.JS",
        "image": "nodejs.png",
        "description": "Node.js is a JavaScript runtime built on Chrome’s V8 Javascript engine. It uses " +
                "an event-driven, non-blocking I/O model that makes it lightweight and efficient." +
                " Click the button below to learn more.",
        "link": "https://nodejs.org/en/",
        "isActive": true,
        "date": {
            "$date": "2017-06-22T17:27:14.275Z"
        },
        "__v": 0
    }
]

export default defaultData