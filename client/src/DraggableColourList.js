import React from 'react';
import DraggableColourBox from './DraggableColourBox';
import { SortableContainer } from 'react-sortable-hoc';

const DraggableColourList = SortableContainer(({ colors, removeColor }) => {
	return (
		<div style={{ height: '100%' }}>
			{colors.map((color, i) => (
				<DraggableColourBox
					index={i}
					key={color.name}
					color={color.color}
					name={color.name}
					handleClick={() => removeColor(color.name)}
				/>
			))}
		</div>
	);
});
export default DraggableColourList;
