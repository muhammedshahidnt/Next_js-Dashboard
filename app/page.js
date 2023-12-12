import Image from 'next/image'

export default function Home() {
  return (
    <main className='text-center'>
      <h1 className="text-5xl font-bold w-96 ">Your Heading</h1>
      <br className='max-md:hidden' />
      <span className='font-semibold  text-orange-600'>AI- Powered</span>
      <p className='text-center'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
    </main>
  )
}
