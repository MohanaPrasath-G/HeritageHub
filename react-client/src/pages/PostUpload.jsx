import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './PostUpload.css';
import Header from '../component/Header';
import Footer from '../component/Footer';
import axios from 'axios';

function PostUpload() {
    const [title, setTitle] = useState('');
    const [shortDescription, setShortDescription] = useState('');
    const [detailedDescription, setDetailedDescription] = useState('');
    const [image, setImage] = useState(null);
    const navigate = useNavigate();



    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:90/posts', { title: `${title}`, shortDescription: `${shortDescription}`, description: `${detailedDescription}`, postImage: `${image}` });
            alert(response.data);
            navigate('/home');
            // Handle successful signup (e.g., redirect to login)
        } catch (error) {
            alert(error.response.data);
        }
    };

    return (
        <div>
            <Header />
            <section className="upload-banner d-flex align-items-center justify-content-center text-center">
                <div className="textBx">
                    <h2>Upload Your Post</h2>
                    <h3>Share your heritage and culture experiences</h3>
                </div>
            </section>
            <section className="upload-section py-5">
                <div className="container">
                    <div className="heading">
                        <h2>Post Upload</h2>
                    </div>
                    <form onSubmit={handleSubmit} className="upload-form">
                        <div className="form-group">
                            <label htmlFor="title">Title</label>
                            <input
                                type="text"
                                id="title"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="shortDescription">Short Description</label>
                            <textarea
                                id="shortDescription"
                                value={shortDescription}
                                onChange={(e) => setShortDescription(e.target.value)}
                                required
                            ></textarea>
                        </div>
                        <div className="form-group">
                            <label htmlFor="detailedDescription">Detailed Description</label>
                            <textarea
                                id="detailedDescription"
                                value={detailedDescription}
                                onChange={(e) => setDetailedDescription(e.target.value)}
                                required
                            ></textarea>
                        </div>
                        <div className="form-group">
                            <label htmlFor="image">Upload Image</label>
                            <input
                                type="file"
                                id="image"
                                accept="image/*"
                                onChange={(e) => setImage(e.target.files[0])}
                                required
                            />
                        </div>
                        <button type="submit" className="btn btn-upload">Post</button>
                    </form>
                </div>
            </section>
            <Footer />
        </div>
    );
}

export default PostUpload;
