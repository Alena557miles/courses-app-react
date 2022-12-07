import { Button } from '../../../../common/Button/Button';
import { Input } from '../../../../common/Input/Input';

export function SearchBar() {
	return (
		<div className='flex flex-row gap-x-2 justify-between align-center w-8/12'>
			<Input placeholdetText={'Enter course name ... '} type={'text'} />
			<Button value={'Search'} onClick={() => console.log('course')} />
		</div>
	);
}
