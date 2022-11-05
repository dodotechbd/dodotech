import React, { useEffect, useState } from 'react';
import Template from './Template';

const Templates = () => {


    const [projects, setProjects] = useState([]);

    useEffect(() => {

        fetch('template.json')
            .then(res => res.json())
            .then(data => setProjects(data))

    }, [])



    return (
        <div>
            <div className='grid lg:grid-cols-2 sm:grid-cols-1 gap-10 my-10'>
                <div className='text-center'>
                    <h1 className='text-4xl font-bold'>Our Template Are Just</h1>
                    <h1 className='text-3xl'>Ready to Use</h1>
                </div>
                <div className='text-center'>
                    <p className='text-4xl'>You will love all of the features in our template.</p>
                    <p className='text-3xl'>100% guaranteed satisfaction.</p>
                </div>
            </div>

            <div className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-10 lg:p-5'>
                {
                    projects.map(project => <Template key={project.id} project={project}></Template>)
                }
            </div>





        </div>

    );
};

export default Templates;