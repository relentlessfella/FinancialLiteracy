import CardList from '../CardList/CardList';
import axios from 'axios';
import { useParams } from 'next/navigation';
import download from '../../../public/assets/Download.svg';
import Image from 'next/image';
import { useIsMobile } from '@/configs/axios/isMobile';

const CertificateCard = (id) => {
  const handleDownload = async () => {
    try {
      const response = await axios({
        method: 'get',
        url: `http://localhost:8000/certificate/generate_pdf/`,
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

  const fetchCertificateData = async () => {
    //   try {
    //     const response = await axios.get(`http://localhost:8000/courses/quiz/get_quizzes/`);
    //   } catch (error) {
    //     throw error;
    //   }
    //   return response.data;
  };
  const isMobile = useIsMobile();
  const data = {
    title: 'Certificate',
    content:
      'Lorem ipsum dolor sit amet consectetur. Elementum nisl duis tortor sed. Lorem ipsum dolor sit amet consect. Elementum nisl duis tortor sed. Lorem ipsum dolor sit amet consectetur. Elementum nisl duis tortor sed. Lorem ipsum dolor sit amet consectetur. Elementum nisl duis tortor sed.  ',
  };
  const certificateStyles = {
    title: { color: '#FE602F', fontSize: '32px', fontWeight: '1000', padding: '30px 0' },
    content: { color: '#1F1C14', opacity: '0.7', padding: '20px 0' },
    description: {},
    footer: {
      borderTop: '1px solid #D9D9D9',
      display: 'flex',
      justifyContent: `${isMobile ? 'center' : 'flex-end'}`,
    },
    button: {
      backgroundColor: '#A2BF00',
      border: 'none',
      color: '#fff',
      fontSize: '18px',
      fontWeight: '600',
      borderRadius: '15px',
      padding: '12px 32px',
      margin: '30px 0 ',
    },
    downloadButton: {
      backgroundColor: '#FE8863',
      border: 'none',
      color: '#fff',
      fontSize: '18px',
      fontWeight: '600',
      borderRadius: '15px',
      padding: '12px 38px',
      margin: '30px 5px',
      cursor: 'pointer',
    },
    buttonImage: { download },
    buttonText: 'See',
    handleDownload: { handleDownload },
  };
  return (
    <CardList
      fetchData={fetchCertificateData}
      cardStyle={certificateStyles}
      constantData={data}
      //   buttonLink={(id) => `/lesson/${id}`}
    />
  );
};

export default CertificateCard;
