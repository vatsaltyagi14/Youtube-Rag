import { Suspense } from 'react';
import ChatInterface from '@/components/ChatInterface';
import { Loader2 } from 'lucide-react';


const LoadingFallback = () => {
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <Loader2 className="h-8 w-8 animate-spin text-gray-400" />
    </div>
  );
};

const DashboardPage = () => {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <ChatInterface />
    </Suspense>
  );
};

export default DashboardPage;
