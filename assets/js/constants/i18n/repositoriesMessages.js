const repositoriesPageMessages = {
    'languages': {
        'en': {
            'repositories-title1': 'UNCode | Repositories',
            'repositories-header1': 'Repositories',
            'repositories-description1': 'The UNCode repositories are listed below.',
            'repositories-github': 'Go to GitHub',
            'repository1-description1': 'This is the main repository of UNCode',
            'repository1-description2': 'UNCode is an online platform, developed on ' +
                                        '<a href="https://github.com/UCL-INGI/INGInious" target="_blank">INGIniois (v0.5)</a>, ' +
                                        'to practice programming exercises and automatically grade ' +
                                        'code made by the students to help them in their learning processes.',
            'repository1-description3': 'UNCode is currently used by the Universidad Nacional de Colombia, ' +
                                        'Bogotá campus, to evaluate the written code by the students in multiple programming ' +
                                        'languages such as C, C ++, Java and Python 3; also, the UNCode judge can be used in hardware ' +
                                        'description languages such as VHDL and Verilog, or in Jupyter Notebooks tasks. ' +
                                        'For that reason, UNCode has been used in different courses in the university: ' +
                                        'Basic computer programming, Data structures, Machine learning, Programming languages, ' +
                                        'Quantum programming, among other courses and areas.',
            'repository1-description4': 'UNCode has a Backend that handles the interaction with Docker and ' +
                                        'the grader; a Frontend where the students can upload their code in a simple and ' +
                                        'pleasant interface. Also, the Frontend includes an administrator interface to allow ' +
                                        'instructors and tutors to check the student\'s progress and modify the tasks in a simple way.',
            'repository1-description5': 'Both backend and frontend are independent of each other. The backend, ' +
                                        'in particular, has been created to be used as if it was a library.',
            'repository1-description6': 'Another interesting feature of UNCode is that it can be used as an external grader for ' +
                                        'Learning Management Systems (LMS), such as Moodle or OpenEDX.',
            'repository2-description1': 'This repository contains the necessary scripts to do the automatic deployment' +
                                        'of UNCode with all its features',
            'repository3-description1': 'This repository has the containers used for the execution and evaluation of the submissions. ' +
                                        'you can find these containers on <a href="https://hub.docker.com/u/unjudge" target="_blank">Docker Hub.</a>',
            'repository3-description2': 'Only some of these containers are used on UNCode, the remaining containers are developed by ' +
                                        '<a href="https://github.com/UCL-INGI/INGInious-containers" target="_blank">INGInious</a>, which are not used on UNCode.' +
                                        'Only the containers developed by us are explained here.',
            'repository4-description1': 'Python tutor is a tool that helps the students to pass one of ' +
                                        'the most important barriers on the programming learning processes: to understand what ' +
                                        'is happening in their code. This tool allows the student to visualize step by step, ' +
                                        'the code behavior in the different languages such as Python, Java, ' +
                                        'C or C++ in web browsers.',
            'repository4-description2': 'Some modifications to the original code were made in this repository, ' +
                                        'with the purpose of making this component a Docker service in order to be embedded in ' +
                                        'the UNCode interface, and then allow users to visualize code on Python 3, Java, C and C++. ',
            'repository4-description3': 'The Python Tutor project was created by <a href="https://pg.ucsd.edu/" target="_blank">Philip Guo</a>' +
                                        'in January 2010. You can see the <a href="https://github.com/JuezUN/OnlinePythonTutor/blob/master/history.txt"' +
                                        'target="_blank">project history.</a>',
            'repository5-description1': 'This repository contains the code that is in charge of offering the "linting" ' +
                                        'service on UNCode, through a container (found in ' +
                                        '<a href="https://hub.docker.com/u/unjudge" target="_blank">Docker Hub</a>) ' +
                                        'and the code is located in the ' +
                                        '<a href="https://hub.docker.com/r/unjudge/linter-web-service" target="_blank">unjudge/linter-web-service</a> repository. ' +
                                        'This service helps students by showing them the possible programming errors or ' +
                                        'bad practices they may have while coding.',
            'repository6-description1': 'Cola-bears is a Python package that contains all the ' +
                                        '"bears" (or plugins) officially supported by coala. There are more than 78 ' +
                                        '"bears" that cover 54 languages. Coala allows the creation of standards and ' +
                                        'rules to be followed in the code development, which allows to do a "linting" ' +
                                        'process (detect and marking programming errors), and some fixes to the code ' +
                                        'acording to the source code with these parameters. There is a <a href="https://github.com/coala/bear-docs/" target="_blank"> general list </a> ' +
                                        'that contains information about each "bear", such as the supported languages, ' +
                                        'and the fixes that can be made to the code.',
            'repository7-description1': 'In this repository you can find different tests like load testing to apply on UNCode.',
            'repository7-description2': 'From these tests we have<em>load testing</em>. ' +
                                        'This test is a visualization and a measuring of the server behavior when many users ' +
                                        'are trying to use UNCode at the same time. This can include log in, go to the task page ' +
                                        'and submitting. This test is done with <b>JMeter</b>, testing different workflows such ' +
                                        'as the performance or notebooks submissions,',
            'repository8-description1': 'This repository contains the backend of C / C++ for ' +
                                        '<a href="https://github.com/JuezUN/OnlinePythonTutor" target="_blank">Online Python ' +
                                        'Tutor</a>. We have made a <em>fork</em> to this repository to add some necessary ' +
                                        'modifications for our purposes, and provide the "Python tutor" service properly.',
            'repository8-description2': 'The container is stored on Docker Hub: ' +
                                        '<a href="https://hub.docker.com/r/unjudge/opt-cpp-backend" target="_blank">unjudge/opt-cpp-backend</a>, ' +
                                        'which at the same time is used by a Linux service called <em>Cokapi</em>. ',
            'repository-button': 'Repository'
        },
        'es': {
            'repositories-title1': 'UNCode | Repositorios',
            'repositories-header1': 'Repositorios',
            'repositories-description1': 'A continuación se describen los repositorios utilizados',
            'repositories-github': 'Ir a GitHub',
            'repository1-description1': 'Es el repositorio principal de UNCode.',
            'repository1-description2': 'UNCode es una plataforma online, desarrollada sobre ' +
                                        '<a href="https://github.com/UCL-INGI/INGInious" target="_blank">INGIniois (v0.5)</a>, ' +
                                        'para practicar programación y realizar evaluación automática de código escrito por estudiantes, de ' +
                                        'forma que apoye su proceso de aprendizaje.',
            'repository1-description3': 'Actualmente la plataforma es usada en la Universidad Nacional de Colombia, sede Bogotá, ' +
                                        'para evaluar código escrito en varios lenguajes de programación como C, C++, Java y ' +
                                        'Python 3; además el juez puede ser usado en lenguajes descriptivos como VHDL y Verilog, ' +
                                        'o en ejercicios planteados en Notebooks de Jupyter. Es por esta razón que UNCode ha sido ' +
                                        'implementada en varios cursos de la universidad tales como: programación básica de ' +
                                        'computadores, estructura de datos, Machine Learning, Inteligencia artificial, ' +
                                        'programación cuántica, lenguajes de programación, entre otros.',
            'repository1-description4': 'UNCode está constituido por un backend que maneja la interacción con Docker y el ' +
                                        'evaluador, y un frontend donde los estudiantes pueden subir sus códigos en una simple ' +
                                        'pero agradable interfaz. El frontend además incluye una interfaz de administrador que ' +
                                        'permite a los profesores y tutores revisar el progreso de sus estudiantes y modificar ' +
                                        'los ejercicios de forma sencilla. ',
            'repository1-description5': 'Ambas partes que constituyen UNCode, backend y frontend, son independientes entre sí. ' +
                                        'Particularmente el backend ha sido creado para poder ser usado como si fuera una ' +
                                        'librería.',
            'repository1-description6': 'Otra característica interesante de la plataforma es que puede ser implementado como un ' +
                                        'evaluador externo para LMS (Learning Managment Systems), como Moodle u OpenEDX.',
            'repository2-description1': 'Este repositorio contiene los scripts necesarios para efectuar el despliegue automático ' +
                                        'de UNCode junto a todas sus características.',
            'repository3-description1': 'Este repositorio contiene los contenedores utilizados para la  ejecución y evaluación de ' +
                                        'código de UNCode disponibles en <a href="https://hub.docker.com/u/unjudge" target="_blank">Docker Hub.</a>',
            'repository3-description2': 'No todos los contenedores son usados en UNCode, ya que parte de estos se destina para ' +
                                        '<a href="https://github.com/UCL-INGI/INGInious-containers" target="_blank">INGInious-containers</a>. ' +
                                        'Solo están explicados los contenedores desarrollados por nosotros.',
            'repository4-description1': 'Python Tutor es una herramienta que ayuda a superar una de las mayores barreras en el ' +
                                        'proceso de aprendizaje de la programación: comprender lo que está sucediendo en cada ' +
                                        'línea del código fuente. La herramienta permite visualizar paso a paso el comportamiento ' +
                                        'de código escrito en Python, Java, C o C++ en navegadores web.',
            'repository4-description2': 'En el repositorio se hicieron algunas modificaciones al código original con el propósito ' +
                                        'de que este componente fuera un servicio de Docker para poder ser embebido en la ' +
                                        'interfaz de UNCode, y así permitir a los usuarios visualizar código escrito en Python 3, ' +
                                        'C/C++ y Java. ',
            'repository4-description3': 'El proyecto de Python tutor fue creado por <a href="https://pg.ucsd.edu/" target="_blank">Philip Guo</a>' +
                                        'en enero del 2010. Aquí puedes ver la <a href="https://github.com/JuezUN/OnlinePythonTutor/blob/master/history.txt" ' +
                                        'target="_blank">historia del proyecto.</a>',
            'repository5-description1': 'Este repositorio contiene el código encargado de ofrecer el servicio de “linting” en ' +
                                        'UNCode, mediante un contenedor que está en <a href="https://hub.docker.com/u/unjudge" target="_blank">Docker Hub</a> ' +
                                        'en el repositorio <a href="https://hub.docker.com/r/unjudge/linter-web-service" target="_blank">unjudge/linter-web-service</a>. ' +
                                        'Este servicio ayuda a los estudiantes señalando los errores de programación o de malas prácticas.',
            'repository6-description1': 'Cola-bears es un paquete de Python que contiene todos los “bears” (o plugins) soportados ' +
                                        'oficialmente por coala. Se cuenta con más de 78 “bears” que cubren 54 lenguajes. Coala ' +
                                        'permite la creación de reglas y estándares a ser seguidos en el desarrollo de código ' +
                                        'fuente, de manera que puede hacer un proceso de “linting” (detección y marcado de ' +
                                        'errores de programación) y arreglos en el código basándose en esos parámetros. Aquí hay ' +
                                        'una <a href="https://github.com/coala/bear-docs/" target="_blank"> lista general </a>que ' +
                                        'contiene información sobre cada “bear”, tales como los lenguajes que ' +
                                        'soporta y las correcciones que puede aplicar al código.',
            'repository7-description1': 'En este repositorio se pueden encontrar diferentes pruebas para aplicar a UNCode.',
            'repository7-description2': 'Dentro de las pruebas tenemos <em>load testing</em>. Esta prueba consiste en ' +
                                        'ver y medir el comportamiento del servidor cuando muchos usuarios están tratando de usar ' +
                                        'la aplicación al mismo tiempo. Esto puede incluir iniciar sesión, ir a la pagina de ' +
                                        'tareas y realizar un envío. Esta prueba está hecha con <b>JMeter</b>, probando varios ' +
                                        'flujos de trabajo como el desempeño o el envío de Notebooks.',
            'repository8-description1': 'Este repositorio contiene el backend de C/C++ para ' +
                                        '<a href="https://github.com/JuezUN/OnlinePythonTutor" target="_blank">Online Python Tutor</a>. Hemos ' +
                                        'realizado un <em>fork</em> a este repositorio para añadir algunas modificaciones necesarias para ' +
                                        'nuestros propósitos, y así proporcionar correctamente el servicio de “Python tutor”.',
            'repository8-description2': 'El código del repositorio fue desarrollado usando <em>Docker stored</em> en Docker Hub: ' +
                                        '<a href="https://hub.docker.com/r/unjudge/opt-cpp-backend" target="_blank">unjudge/opt-cpp-backend</a>, ' +
                                        'que al mismo tiempo es usado por un servicio de Linux llamado <em>Cokapi</em>. ',
            'repository-button': 'Repositorio'
        }
    }
}
