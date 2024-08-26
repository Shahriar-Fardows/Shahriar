import { useEffect, useState } from "react";
import { Bounce, Fade } from "react-awesome-reveal";
import { FaEye } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Part_1 = () => {

    const [projects, setProjects] = useState([]);

    useEffect(() => {

        fetch('shahriar-server-production.up.railway.app/projects')
            .then(res => res.json())
            .then(data => {
                setProjects(data);
            });
    }, []);


    return (
        <div className=" boxBg h-fit bg-gradient-to-r from-zinc-50 to-zinc-100 dark:from-stone-900 dark:to-neutral-900 ">
        <div className="container mx-auto py-10  px-5">
            <Fade  >
                <div className="flex justify-between items-center ">
                    <h2 className="text-5xl lg:text-7xl text-hello-10 font-mono font-bold  ">My Projects</h2>
                   
                </div>
            </Fade>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-10 ">
                {
                    projects.map(project => (
                        <Bounce  key={project._id}>
                            <Link to={project.liveLink} target='_blank'>
                            <div className="relative   bg-white  h-auto  dark:bg-neutral-800 rounded-md shadow-md p-5">
                                <div className=" flex justify-between">
                                    <img className=" h-[50px]  object-cover rounded-md" src={project.logo} alt="" />
                                    <div className="flex gap-2 absolute top-0 right-0  border rounded-tr-lg rounded-bl-lg px-4  glass ">
                                        <h2 className="text-base leading-10	 text-lemon-20 font-play font-bold">{project.projectType}</h2>
                                        <h3 className="text-base leading-10	  text-lemon-20 font-play font-bold">{project.workingType}</h3>
                                    </div>
                                </div>
                                <h2 className="text-base leading-10	 text-lemon-20 font-play font-bold">{project.projectName}</h2>
                                <p className="text-lg text-neutral-600 font-mono dark:text-neutral-300 py-3">{project.description}</p>

                                <FaEye className="text-2xl text-lemon-20" />
                            </div>
                            </Link>
                        </Bounce>
            ))
                }
        </div>

    </div>
    </div >
    );
};

export default Part_1;