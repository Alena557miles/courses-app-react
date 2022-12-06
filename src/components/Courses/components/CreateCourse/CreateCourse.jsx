import { Button } from '../../../../common/Button/Button';
import { Input } from '../../../../common/Input/Input';

export function CreateCourse() {
	return (
		<div className='border border-black-400 p-7'>
			<div className='flex flex-row gap-x-2 justify-between w-8/12'>
				<Input label={'Title'} text={'Enter title'} />
				<Button value={'Add new course'} onClick={() => console.log('ADd')} />
			</div>
			<label htmlFor='description'>Description</label>
			<textarea
				name='description'
				id='description'
				cols='30'
				rows='5'
				className='border border-yellow-300 w-full'
			></textarea>
			<div className='flex flex-row justify-between border border-black-400 w-full'>
				<div className='flex flex-col justify-between'>
					<h2>Add author</h2>
					<form action='#'>
						<Input label={'Author name'} text={'Enter author name'} />
						<Button
							value={'Create author'}
							onClick={() => console.log('Create author')}
						/>
					</form>
					<div>
						<h2>Duration</h2>
						<Input label={'Duration'} text={'Enter duration in minutes...'} />
						<p>
							Duration: <span className='bold'>00:00</span> hours
						</p>
					</div>
				</div>
				<div>
					<h2>Authors</h2>
					<ul>
						<li className='flex flex-row justify-between align-center'>
							<p className='block'>Author Name</p>
							<Button
								value={'Add author'}
								onClick={() => console.log('Author')}
							/>
						</li>
						<li className='flex flex-row justify-between align-center'>
							<p className='block'>Author Name</p>
							<Button
								value={'Add author'}
								onClick={() => console.log('Author')}
							/>
						</li>
						<li className='flex flex-row justify-between align-center'>
							<p className='block'>Author Name</p>
							<Button
								value={'Add author'}
								onClick={() => console.log('Author')}
							/>
						</li>
						<li className='flex flex-row justify-between align-center'>
							<p className='block'>Author Name</p>
							<Button
								value={'Add author'}
								onClick={() => console.log('Author')}
							/>
						</li>
					</ul>
					<h2>Course authors</h2>
					<span>Author list is empty</span>
				</div>
			</div>
		</div>
	);
}
