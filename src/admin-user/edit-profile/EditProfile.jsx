import React, { useState } from 'react';
import './EditProfile.css';
import myPics from '../../assets/oyin.jpg'
import CameraIcon from '@mui/icons-material/CameraAlt';

const EditProfile = () => {
    // State to hold form data (initialize with current user data)
    const [formData, setFormData] = useState({
        firstName: 'Oyindamola',
        lastName: 'Sofiat',
        email: 'oyindamolaashabi24@gmail.com',
        phone: '09044575020',
        address: '5 React Street, Lagos Island, Lagos Nigeria',
        bio: 'I am Frontend developer passionate about responsive design and clean code.',
    });

    // State to hold the profile image URL
    const [profileImage, setProfileImage] = useState(myPics);

    const handleChange = (oyin) => {
        const { name, value } = oyin.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleImageChange = (oyin) => {
        // Logic to handle image file upload and set preview URL
        if (oyin.target.files && oyin.target.files[0]) {
            setProfileImage(URL.createObjectURL(oyin.target.files[0]));

        }
    };

    const handleSubmit = (oyin) => {
        oyin.preventDefault();
        console.log("Profile Updated:", formData);
        // Dispatch action to save data to backend
    };

    return (
        <div className="edit-profile-page">
            <h1 className="edit-profile-title">Edit Profile</h1>

            <form onSubmit={handleSubmit} className="profile-form">

                {/* firstly working on my picture section--- */}
                <div className="my-pics-section">
                    <div className="my-pics-wrapper">
                        {/* Use profileImage state for the image source */}
                        <img
                            src={profileImage || myPics} // Fallback to a my image
                            alt="my pics"
                            className="profile-my-pics"
                        />

                        {/* Camera Icon/Edit Button */}
                        <label htmlFor="my-pics-upload" className="my-pics-edit-button">
                            <CameraIcon fontSize="small" />
                            <input
                                id="my-pics-upload"
                                type="file"
                                accept="image/*"
                                onChange={handleImageChange}
                                style={{ display: 'none' }}
                            />
                        </label>
                    </div>
                    <p className="profile-name-display">{formData.firstName} {formData.lastName}</p>
                </div>

                {/* --- 2. Details Grid --- */}
                <div className="form-details-grid">

                    <div className="form-group">
                        <label htmlFor="firstName">First Name</label>
                        <input
                            id="firstName"
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="lastName">Last Name</label>
                        <input
                            id="lastName"
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email Address</label>
                        <input
                            id="email"
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="phone">Phone Number</label>
                        <input
                            id="phone"
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                        />
                    </div>
                </div>

                {/* --- 3. Full-Width Fields --- */}
                <div className="form-group full-width">
                    <label htmlFor="address">Address</label>
                    <input
                        id="address"
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group full-width">
                    <label htmlFor="bio">My Bio</label>
                    <textarea
                        id="bio"
                        name="bio"
                        rows="4"
                        value={formData.bio}
                        onChange={handleChange}
                    />
                </div>

                {/* --- 4. Action Buttons --- */}
                <div className="form-actions-row full-width">
                    <button type="button" className="btn btn-cancel" onClick={() => console.log('Cancel clicked')}>
                        Cancel
                    </button>
                    <button type="submit" className="btn btn-save">
                        Save Changes
                    </button>
                </div>
            </form>
        </div>
    );
}

export default EditProfile;