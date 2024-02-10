import { Poppins } from 'next/font/google';
import { cn } from '@/lib/utils';

import { Button } from '@/components/ui/button'
import { LoginButton } from '@/components/auth/login-button';

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"]
})

export default function Home() {
  return (
    <main className='h-full flex flex-col items-center justify-center bg-slate-500'>
      <div className='text-center space-y-6'>
        <h1 className={cn('text-5xl font-semibold text-white drop-shadow-md', font.className)}>🗝️Auth</h1>
        <p className='text-white'>A simple Next Auth Project to learn new stuff</p>
        <div>
          <LoginButton>
            <Button variant='secondary' size="lg">Register</Button>
          </LoginButton>
        </div>
      </div>
    </main>
  );
}
