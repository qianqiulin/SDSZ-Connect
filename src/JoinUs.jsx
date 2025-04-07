import { useState } from 'react';
import './JoinUs.css';
const JoinUs = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [website, setWebsite] = useState('');
    const [qrCodeUrl, setQrCodeUrl] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Thank you for joining us! A QR code has been generated for you");

        // Generate QR code URL based on the provided data
        const qrCodeData = `${website}`;
        const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(qrCodeData)};size=100x100`;
        setQrCodeUrl(qrCodeUrl);
    };

    return (
        <div className='JoinUs'>
            <h2>Join Us</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <label htmlFor="website">Website:</label>
                <input
                    type="text"
                    id="website"
                    value={website}
                    onChange={(e) => setWebsite(e.target.value)}
                />

                <button type="submit">Join</button>
            </form>

            {qrCodeUrl && (
                <div className="qr-code">
                    <img src={qrCodeUrl} alt="QR Code" />
                </div>
            )}
        </div>
    );
};

export default JoinUs;
