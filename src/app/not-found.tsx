import Link from 'next/link';

export default function NotFoundPage() {
  return (
    <>
      <main className='relative isolate min-h-full'>
        <img
          // src='https://images.unsplash.com/photo-1682441488161-3b4226161691?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          src='https://images.unsplash.com/photo-1536152470836-b943b246224c?q=80&w=2676&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          alt=''
          className='absolute inset-0 -z-10 h-full w-full object-cover object-top'
        />
        <div className='mx-auto max-w-7xl px-6 py-32 text-center sm:py-40 lg:px-8'>
          <p className='text-base font-semibold leading-8 text-white'>404</p>
          <h1 className='mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl'>
            Page not found
          </h1>
          <p className='mt-4 text-base text-white/70 sm:mt-6'>
            Sorry, we couldn't find the page you're looking for.
          </p>
          <div className='mt-10 flex justify-center'>
            <Link
              href='/'
              className='text-sm font-semibold leading-7 text-white'
            >
              <span aria-hidden='true'>&larr;</span> Back to home
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
