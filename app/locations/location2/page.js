import UploadForm from '../../../components/UploadForm';
import StoryList from '../../../components/StoryList';

export default function Location2() {
    return (
        <>
         
         <main className="p-8">
            <h1 className="text-2xl font-bold">Location 2</h1>
            <p className="mt-2">What does this place mean to you? Share your story below.</p>
            <UploadForm location="location2" />
            <StoryList />
         </main>
        </>
    );
}