import React, { useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import styles from './page.module.css';
import download from '../../../public/assets/Download.svg';
import Image from 'next/image';
import axios from 'axios';

const CertificateCard = (id) => {
  const data = [
    {
      title: 'Certificate',
      content:
        'Certificate of completion of the course “ Basic Understanding of Financial Literacy “.',
    },
  ];
  const params = useParams();
  const router = useRouter();

  const handleDownload = async () => {
    try {
      const response = await axios({
        method: 'get',
        url: `http://86.107.44.136:8000/certificate/generate_pdf/`,
        params: {
          user_id: 1,
          course_id: id.course_id,
        },
        responseType: 'blob', // Set responseType to 'blob' to handle binary data
      });

      // Create a blob from the response data
      const blob = new Blob([response.data], { type: 'application/pdf' });

      // Create a temporary URL for the blob
      const url = window.URL.createObjectURL(blob);

      // Create a link element
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'certificate.pdf'); // Set the filename for the downloaded file

      // Append the link to the document body and trigger the download
      document.body.appendChild(link);
      link.click();

      // Clean up: remove the link and revoke the URL
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error downloading PDF:', error);
    }
  };
  if (data === null) {
    <div>Loading...</div>;
  } else {
    return (
      <ul style={{ padding: '10px', margin: '0' }}>
        {data.map((item) => (
          <li className={styles.card} key={item.id}>
            <div
              style={{ color: '#FE602F', fontSize: '32px', fontWeight: '1000', padding: '30px 0' }}>
              {item.title}
            </div>
            <div style={{ color: '#1F1C14', opacity: '0.7', padding: '20px 0' }}>
              {item.content}
            </div>
            <div>{item.description}</div>
            <div
              style={{
                borderTop: '1px solid #D9D9D9',
                display: 'flex',
                justifyContent: 'flex-end',
              }}>
              <button
                style={{
                  backgroundColor: '#A2BF00',
                  border: 'none',
                  color: '#fff',
                  fontSize: '18px',
                  fontWeight: '600',
                  borderRadius: '15px',
                  padding: '12px 42px',
                  margin: '30px 10px',
                  cursor: 'pointer',
                }}>
                see
              </button>
              <button
                style={{
                  backgroundColor: '#FE8863',
                  border: 'none',
                  color: '#fff',
                  fontSize: '18px',
                  fontWeight: '600',
                  borderRadius: '15px',
                  padding: '12px',
                  width: '48px',
                  height: '48px',
                  margin: '30px 0 ',
                  cursor: 'pointer',
                }}
                onClick={handleDownload}>
                <Image src={download} alt="Download button image" />
              </button>
            </div>
          </li>
        ))}
      </ul>
    );
  }
};
export default CertificateCard;
