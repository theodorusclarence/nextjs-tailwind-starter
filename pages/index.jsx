import Seo from '@/components/Seo';
import CustomLink from '@/components/CustomLink';

export default function Home() {
  return (
    <>
      <Seo />

      <main>
        <section className='bg-dark'>
          <div className='flex flex-col items-center justify-center min-h-screen text-white layout'>
            <h1>
              <CustomLink href='https://github.com/theodorusclarence/nextjs-tailwind-starter'>
                NextJS Tailwind Starter
              </CustomLink>
            </h1>
            <p className='mb-4'></p>
            <a
              target='_blank'
              rel='noopener noreferrer'
              href='https://vercel.com/new/git/external?repository-url=https%3A%2F%2Fgithub.com%2Ftheodorusclarence%2Fnextjs-tailwind-starter'
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src='https://vercel.com/button' alt='Deploy with Vercel' />
            </a>
            <div className='mt-8 text-dark'>
              <p className='text-[#ffe347]'>JIT is on</p>
            </div>
            <footer className='absolute text-gray-500 bottom-2'>
              © {new Date().getFullYear()} By{' '}
              <CustomLink href='https://theodorusclarence.com?ref=nextstarter'>
                Theodorus Clarence
              </CustomLink>
            </footer>
          </div>
        </section>
      </main>
    </>
  );
}
