'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import pastQuestionsData from '../../../../../../data/pastQuestions.json'; // Adjust the path as necessary

const PastQuestionsPage = () => {
  const pathname = usePathname();
  const pathSegments = pathname.split('/');
  // Ensure the index for departmentId is correctly adjusted if path structure changed
  const departmentId = pathSegments[pathSegments.length - 2]; // Assuming 'past-questions' is the last segment

  const pastQuestions = departmentId ? pastQuestionsData.filter(pq => pq.departmentId === departmentId) : [];

  console.log("Pathname:", pathname);
  console.log("Department ID:", departmentId);
  console.log("Filtered Past Questions:", pastQuestions);

  if (!pastQuestions.length) {
    return <div>No past questions found for this department.</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-center mb-6">Past Questions</h1>
      <ul>
        {pastQuestions.map((pq) => (
          <li key={pq.id} className="mb-4 p-4 bg-white shadow rounded-lg">
            <h2 className="text-lg font-semibold">{pq.title}</h2>
            <p>{pq.description}</p>
            <Link legacyBehavior href={`/files/${pq.file}`}>
              <a className="mt-2 inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Download
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PastQuestionsPage;
