'use client';

import { useRouter } from 'next/navigation';
import { useSession, signIn } from 'next-auth/react';
import { ArrowRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import GradientBackground from '@/components/GradientBackground';

const LandingPage = () => {
  const router = useRouter();
  const { data: session } = useSession();

  const handleGetStartedClick = () => {
    if (session) {
      router.push('/dashboard');
    } else {
      signIn('google');
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-black text-white overflow-hidden">
      <GradientBackground />
      <Navbar />

      <main className="relative z-10 flex flex-col items-center text-center p-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-4">
          Ask and skip to the answers.
        </h1>
        <p className="text-gray-300 mb-8 max-w-2xl">
          Instantly get insights from any YouTube video. Just paste a link and start your conversation.
        </p>

        <button
          onClick={handleGetStartedClick}
          className="group flex items-center gap-3 bg-white/10 backdrop-blur-sm font-semibold py-3 px-6 rounded-lg border border-white/20 hover:bg-white/20 transition-all"
        >
          <span>Get Started</span>
          <ArrowRight className="group-hover:translate-x-1 transition-transform" size={24} />
        </button>
      </main>
    </div>
  );
};

export default LandingPage;
