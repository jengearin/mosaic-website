import UploadForm from '../../../components/UploadForm';
import StoryList from '../../../components/StoryList';

export default function Location4() {
    return (
        <>
         
         <main className="p-2">
            <h1 className="text-2xl font-bold">Location 4</h1>
            <p className="text-xl mt-2">What does this place mean to you? Share your story below.</p>
            <UploadForm location="location4" />
            <StoryList location="location4" />
         </main>
        </>
    );
}