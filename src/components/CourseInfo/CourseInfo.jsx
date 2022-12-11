import React from 'react';

export function CourseInfo(props) {
	return (
		<div className='flex flex-col p-9 border border-cyan-400 mt-7 gap-y-7 h-5/6'>
			<a href=''> Back to courses</a>
			<h1 className='text-bold text-3xl text-center'>props.title</h1>
			<div className='flex flex-row justify-between gap-x-16'>
				<div className='w-3/5'>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
						aspernatur, nostrum itaque adipisci consequatur nobis dolores
						commodi repudiandae accusantium nisi non laborum? Quae debitis hic
						necessitatibus. Possimus quae soluta quo officiis, sed quasi harum
						atque voluptatum alias similique ab cum. Lorem ipsum dolor sit amet
						consectetur adipisicing elit. Quasi dolorum placeat, exercitationem
						illo harum eligendi non pariatur necessitatibus, voluptatum expedita
						eum officia esse ipsum quam repellendus! Voluptatibus mollitia
						itaque sit nisi dignissimos impedit, soluta iusto dicta rerum
						voluptate nemo dolores. Lorem ipsum dolor sit amet consectetur
						adipisicing elit. Consectetur voluptas dolore vel voluptatem neque
						quas cumque deleniti culpa pariatur impedit mollitia, sint
						consequatur. Eaque illum reprehenderit eligendi error fuga debitis
						ex aut culpa laudantium magni! Ipsa, corrupti alias incidunt ea
						quaerat doloribus corporis ducimus, repellat quas animi eaque autem
						quibusdam? Nostrum placeat at quam possimus sapiente optio ex, amet
						accusamus modi. Voluptate odio similique facilis fuga voluptatum
						nemo doloremque placeat mollitia sit! Facilis nemo non nisi
						temporibus deleniti error nam ratione, nostrum possimus cum
						assumenda eligendi corrupti. Ea consectetur quasi tempora sapiente
						quod dignissimos tenetur ullam, eius labore mollitia et dolorem!
						Nihil aut quos cum maxime eos. Commodi suscipit iure ducimus ullam
						enim voluptatum rem. Quis dignissimos provident eligendi
						praesentium.
					</p>
				</div>
				<div className='w-2/5 flex flex-col gap-3'>
					<p className='font-bold'>
						ID: <span className='font-normal'>props.Id</span>{' '}
					</p>
					<p className='font-bold'>
						Duration: <span className='font-normal'>props.Id</span>{' '}
					</p>
					<p className='font-bold'>
						Created: <span className='font-normal'>props.Id</span>{' '}
					</p>
					<p className='font-bold'>
						Authors: <span className='font-normal'>props.Id</span>{' '}
					</p>
				</div>
			</div>
		</div>
	);
}
