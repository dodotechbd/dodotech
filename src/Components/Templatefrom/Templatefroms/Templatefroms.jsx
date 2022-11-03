import React from 'react';
import Templatefrom from '../Templatefrom/Templatefrom';
import tem1 from '../../../images/Templatefrom/tem1.png'
import tem2 from '../../../images/Templatefrom/tem2.png'
import tem3 from '../../../images/Templatefrom/tem3.png'

const Templatefroms = () => {
    return (
        <div >
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-24  w-11/12 mx-auto mt-20 mb-20'>
                <div className=''>
                    <h2 className='italic font-bold text-blue-900 text-6xl '>Why Buy Template
                        From Us? </h2>
                </div>
                <div className='' >
                    <p className='text-xl text-slate-400'>Every template is built with such efforts
                        that they are ready to meet all of our
                        clients’ expectations.</p>
                </div>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5 w-11/12 mx-auto mt-10 '>
                <Templatefrom Title ="A Complete Product forYour Business" bgClass="bg-violet-700"  img={tem1} description ="We build Templates that are rich in content and have a good user interface to deliver a premium user experience for your customers."></Templatefrom>
                <Templatefrom Title ="SEO & SMM Friendly" bgClass ="bg-cyan-500" img={tem2} description ="Our Template is SEO and SMM-friendly that aligns with your digital marketing strategies to bring more organic traffic to your website."></Templatefrom>
                <Templatefrom Title ="Well Organized Codes" bgClass ="bg-orange-400" img={tem3} description ="The coding structure of our items is organized so other developers can easily recognize the pattern and make updates as needed."></Templatefrom>


            </div>


        </div>

    );
};

export default Templatefroms;