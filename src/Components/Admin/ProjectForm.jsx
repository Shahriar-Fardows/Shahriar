import  { useState } from 'react';
import Swal from 'sweetalert2';

const ProjectForm = () => {
  const [formData, setFormData] = useState({
    liveLink: '',
    workingType: '',
    projectName: '',
    projectType: '',
    description: '',
    logo: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      logo: e.target.files[0],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.logo) {
      Swal.fire('Error', 'Please upload a logo.', 'error');
      return;
    }

    // Upload to ImgBB
    const formDataImg = new FormData();
    formDataImg.append('image', formData.logo);

    try {
      const imgResponse = await fetch('https://api.imgbb.com/1/upload?expiration=600&key=b9d801dc23f129666ab26bcec55288e1', {
        method: 'POST',
        body: formDataImg,
      });

      const imgData = await imgResponse.json();

      if (imgData.success) {
        // Save to Database
        const newFormData = {
          ...formData,
          logo: imgData.data.url,
        };

        const dbResponse = await fetch('https://shahriar-server.vercel.app/addProject', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newFormData),
        });

        if (dbResponse.ok) {
          Swal.fire('Success', 'Project information has been saved!', 'success');
        } else {
          throw new Error('Failed to save project information.');
        }
      } else {
        throw new Error('Logo upload failed.');
      }
    } catch (error) {
      Swal.fire('Error', error.message, 'error');
    }
  };

  return (
    <div className="w-full mx-auto bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-center mb-6">Project Information</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">Live Link</label>
          <input
            type="url"
            name="liveLink"
            value={formData.liveLink}
            onChange={handleChange}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="https://yourproject.com"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Working Type</label>
          <input
            type="text"
            name="workingType"
            value={formData.workingType}
            onChange={handleChange}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="e.g., Full-time, Part-time"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Project Name</label>
          <input
            type="text"
            name="projectName"
            value={formData.projectName}
            onChange={handleChange}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Project Name"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Project Type</label>
          <input
            type="text"
            name="projectType"
            value={formData.projectType}
            onChange={handleChange}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="e.g., Web, Mobile"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Project Description"
            rows="4"
            required
          ></textarea>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Logo</label>
          <input
            type="file"
            name="logo"
            onChange={handleFileChange}
            className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
            required
          />
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="px-4 py-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProjectForm;
