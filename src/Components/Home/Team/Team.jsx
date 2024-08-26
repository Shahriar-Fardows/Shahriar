import { useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";
import { CgWebsite } from "react-icons/cg";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Team = () => {

    const [team, setTeam] = useState([]);

    useEffect(() => {
        fetch('shahriar-server-production.up.railway.app/users')
            .then(res => res.json())
            .then(data => {
                setTeam(data);
            });
    }, []);

    return (
        <div className=" boxBg h-fit bg-gradient-to-r from-zinc-50 to-zinc-100 dark:from-stone-900 dark:to-neutral-900 ">
            <div className="container mx-auto py-10 lg:py-60  px-5">
                <Fade  >
                    <div className="flex justify-between items-center ">
                        <h2 className="text-5xl lg:text-7xl text-hello-10 font-mono font-bold  ">Team Members</h2>
                        <button className="inline-flex h-10 items-center justify-center gap-2 whitespace-nowrap rounded bg-hello-10 px-5 text-sm font-medium tracking-wide text-white shadow-md shadow-hello-10 transition duration-300 hover:bg-lemon-20 hover:shadow-sm hover:shadow-hello-10 focus:bg-hello-10 focus:shadow-sm  focus-visible:outline-none disabled:cursor-not-allowed disabled:border-lemon-20 disabled:bg-lemon-20 disabled:shadow-none">
                            <span className='font-play'>Show All</span>
                        </button>
                    </div>
                </Fade>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-10 ">
                    {
                        team.slice(0,3).map(member => (
                            <Fade direction='up'  key={member._id}>
                                <div className="bg-white h-full lg:w-[21vw]  dark:bg-neutral-800 rounded-md shadow-md p-2">
                                    <div className="border h-full p-5">
                                        <div className=" flex justify-between">
                                            <img className=" h-[15rem] object-cover rounded-md " src={member.img} alt="" />
                                            <div className="flex gap-2 absolute top-0 right-0 lg:right-20   border rounded-tr-lg rounded-bl-lg px-4  ">
                                                <h2 className="text-base leading-10	 text-lemon-20 font-play font-bold">{member.title}</h2>
                                               
                                            </div>
                                        </div>
                                        <h2 className="text-base leading-10	 text-lemon-20 font-play font-bold">{member.name}</h2>
                                        <p className="text-lg text-neutral-600 font-mono dark:text-neutral-300 py-3">{member.description}</p>
                                        <div className="flex gap-5 py-5">
                                            <Link to={member.website} target="_blank" >
                                                <CgWebsite className="text-2xl text-lemon-20" />
                                            </Link>
                                            <Link to={member.linkedin}  target="_blank">
                                                <FaLinkedin className="text-2xl text-lemon-20" />
                                            </Link>
                                            <Link to={member.github} target="_blank" >
                                                <FaGithub className="text-2xl text-lemon-20" />
                                            </Link>
                                            
                                        </div>
                                    </div>
                                </div>
                            </Fade>
                        ))
                    }
                </div>

            </div>
        </div >
    );
};

export default Team;