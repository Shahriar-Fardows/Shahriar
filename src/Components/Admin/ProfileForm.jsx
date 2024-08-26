import { useState } from 'react';
import Swal from 'sweetalert2';

const ProfileForm = () => {
  const [formData, setFormData] = useState({
    img: null,
    website: '',
    linkedin: '',
    github: '',
    description: '',
    title: '',
    name: '',
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
      img: e.target.files[0],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.img) {
      Swal.fire('Error', 'Please upload an image.', 'error');
      return;
    }

    // Upload to ImgBB
    const formDataImg = new FormData();
    formDataImg.append('image', formData.img);

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
          img: imgData.data.url,
        };

        const dbResponse = await fetch('shahriar-server-production.up.railway.app/addUser', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newFormData),
        });

        if (dbResponse.ok) {
          Swal.fire('Success', 'Profile information has been saved!', 'success');
        } else {
          throw new Error('Failed to save profile information.');
        }
      } else {
        throw new Error('Image upload failed.');
      }
    } catch (error) {
      Swal.fire('Error', error.message, 'error');
    }
  };

  return (
    <div className="w-full mx-auto bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-center mb-6">Profile Information</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Your Name"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Your Title"
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
            placeholder="A brief description"
            rows="4"
            required
          ></textarea>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Website</label>
          <input
            type="url"
            name="website"
            value={formData.website}
            onChange={handleChange}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="https://yourwebsite.com"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">LinkedIn</label>
          <input
            type="url"
            name="linkedin"
            value={formData.linkedin}
            onChange={handleChange}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="https://linkedin.com/in/yourprofile"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">GitHub</label>
          <input
            type="url"
            name="github"
            value={formData.github}
            onChange={handleChange}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="https://github.com/yourusername"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Profile Image</label>
          <input
            type="file"
            name="img"
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

export default ProfileForm;
