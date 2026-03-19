function SudokuCell({ value, isReadOnly, isSelected, isError, onClick, onChange }) {
  let cls = 'cell-input';
  if (isSelected) cls += ' selected';
  if (isError) cls += ' incorrect';

  return (
    <div className="sudoku-cell" onClick={onClick}>
      <input
        type="text"
        className={cls}
        value={value || ''}
        disabled={isReadOnly}
        readOnly={true}
      />
    </div>
  );
}

export default SudokuCell;
