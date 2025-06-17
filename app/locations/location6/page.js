import Navbar from '../../../components/Navbar';
import UploadForm from '../../../components/UploadForm';
import StoryList from '../../../components/StoryList';

export default function Location6() {
    return (
        <>
         
         <main className="p-8">
            <h1 className="text-2xl font-bold">Location 6</h1>
            <p className="mt-2">What does this place mean to you? Share your story below.</p>
            <UploadForm location="location6" />
            <StoryList />
         </main>
        </>
    );
}