import ProfileForm from "../Components/Admin/ProfileForm";
import ProjectForm from "../Components/Admin/ProjectForm";

const Admin = () => {
    return (
        <div className="container mx-auto  ">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 py-20">
            <ProjectForm/>
            <ProfileForm/>
            </div>
        </div>
    );
};

export default Admin;