import Link from 'next/link'

export default function Logo() {
  return (
	<Link href="/" className="block" aria-label="Cruip">
	<div className="flex items-center">
	  <img src="/logo.svg" alt="France.Experience Logo" className="w-16 h-16" />
	  <div className='flex flex-nowrap row'>
	 		<h1 className='font-extrabold text-xl ml-4' style={{ color: '#3E3085', paddingTop: '1px' }}>Franc</h1>
			<h1 className='font-extrabold text-3xl' style={{ color: '#701578' }}>E</h1>
			<h1 className='font-extrabold text-xl' style={{ color: '#701578', paddingTop: '13px'  }}>xpérience</h1>
	  </div>
	</div>
 </Link>
  )
}
